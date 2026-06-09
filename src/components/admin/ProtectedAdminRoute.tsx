import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

type Props = {
  children: React.ReactNode;
};

export default function ProtectedAdminRoute({ children }: Props) {
  const [loading, setLoading] = useState(true);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    let mounted = true;

    const check = async () => {
      const { data } = await supabase.auth.getSession();
      const session = data.session;
      if (!mounted) return;

      if (!session) {
        // Try to recover session from URL (for reset flows)
        try {
          // supabase-js exposes getSessionFromUrl in some versions; call safely
          // @ts-ignore
          if (typeof supabase.auth.getSessionFromUrl === 'function') {
            // this may set the session automatically
            // @ts-ignore
            await supabase.auth.getSessionFromUrl();
          }
        } catch (e) {
          // ignore
        }
      }

      const { data: session2 } = await supabase.auth.getSession();
      const userId = session2.session?.user?.id;
      if (!userId) {
        setAuthed(false);
        setLoading(false);
        window.location.href = '/admin-login';
        return;
      }

      const { data: profile, error } = await supabase
        .from('profiles')
        .select('role, full_name, email')
        .eq('id', userId)
        .single();

      if (error || !profile || profile.role !== 'admin') {
        setAuthed(false);
        setLoading(false);
        await supabase.auth.signOut();
        window.location.href = '/admin-login';
        return;
      }

      if (mounted) {
        setAuthed(true);
        setLoading(false);
      }
    };

    check();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) setAuthed(true);
      else setAuthed(false);
    });

    return () => {
      mounted = false;
      listener?.subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Checking authentication…</div>
      </div>
    );
  }

  if (!authed) return null;

  return <>{children}</>;
}
