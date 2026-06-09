import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

type Props = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  const [loading, setLoading] = useState(true);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    let mounted = true;

    const check = async () => {
      const { data } = await supabase.auth.getSession();
      if (!mounted) return;
      if (data.session) {
        setAuthed(true);
      } else {
        setAuthed(false);
        window.location.href = '/admin-login';
      }
      setLoading(false);
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
