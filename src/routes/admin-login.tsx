import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/admin-login")({
  component: Index,
});

function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        setError(authError.message || "Login failed");
        setLoading(false);
        return;
      }

      const session = data?.session;
      const userId = session?.user?.id;
      if (!userId) {
        setError("No session returned");
        setLoading(false);
        return;
      }
      const { data: setting } = await supabase
        .from("app_settings")
        .select("admin_email")
        .eq("id", 1)
        .single();

      if (!setting?.admin_email) {
        await supabase
          .from("app_settings")
          .update({
            admin_email: session.user.email,
          })
          .eq("id", 1);
      } else if (setting.admin_email !== session.user.email) {
        await supabase.auth.signOut();
        setError("Only the original admin account can login.");
        setLoading(false);
        return;
      }

      // redirect to dashboard
      window.location.href = '/portal-84kx9-admin-panel';
    } catch (err: any) {
      setError(err.message || "Login error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-8">
        <h1 className="text-2xl font-semibold mb-4">Admin Login</h1>

        <p className="text-sm text-gray-600 mb-6">Admin access only. Signups are disabled.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full px-3 py-2 border rounded-md bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full px-3 py-2 border rounded-md bg-gray-50"
            />
          </div>

          {error && <div className="text-sm text-red-600">{error}</div>}

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="px-4 py-2 bg-[#483226] text-white rounded-full disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </div>
          <div className="flex items-center justify-between text-sm mt-2">
            <a href="/admin-forgot-password" className="text-[#483226]">
              Forgot Password?
            </a>
            <a href="/admin-signup" className="text-[#483226]">
              Create Admin
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
