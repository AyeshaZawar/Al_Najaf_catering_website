import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/admin-signup")({
  component: AdminSignup,
});

function AdminSignup() {
  const [adminExists, setAdminExists] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // 🔍 Check if admin already exists
  useEffect(() => {
    const checkAdmin = async () => {
      const { data, error } = await supabase
        .from("app_settings")
        .select("admin_email")
        .eq("id", 1)
        .single();

      if (error) return;

      if (data?.admin_email) {
        setAdminExists(true);
        setError("Admin already exists. Signup is disabled.");
      }
    };

    checkAdmin();
  }, []);

  // 🚀 Handle Signup
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // ❌ Block if admin already exists
    if (adminExists) {
      setError("Signup disabled. Admin already exists.");
      return;
    }

    // ❌ Validations
    if (!fullName.trim()) return setError("Full name is required");
    if (!email.trim()) return setError("Email is required");
    if (password.length < 8)
      return setError("Password must be at least 8 characters");
    if (password !== confirm)
      return setError("Passwords do not match");

    setLoading(true);

    try {
      // 👤 Create auth user
      const { data, error: signUpError } =
        await supabase.auth.signUp({ email, password });

      if (signUpError || !data?.user) {
        setError(signUpError?.message || "Sign up failed");
        setLoading(false);
        return;
      }

      const userId = data.user.id;

      // 🧠 Set admin in app_settings (LOCK)
      const { error: settingsError } = await supabase
        .from("app_settings")
        .update({ admin_email: email })
        .eq("id", 1);

      if (settingsError) {
        setError(settingsError.message);
        setLoading(false);
        return;
      }

      // 👤 Create profile with admin role
      const { error: profileError } = await supabase
        .from("profiles")
        .upsert(
          {
            id: userId,
            full_name: fullName,
            email,
            role: "admin",
          },
          { onConflict: "id" }
        );

      if (profileError) {
        setError(profileError.message);
        setLoading(false);
        return;
      }

      setSuccess("Admin created successfully!");

      // 🔁 Redirect
      setTimeout(() => {
        window.location.href = "/admin-login";
      }, 1500);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-8">
        <h1 className="text-2xl font-semibold mb-4">Admin Signup</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />

          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />

          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />

          <input
            placeholder="Confirm Password"
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />

          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}

          {success && (
            <p className="text-sm text-green-600">{success}</p>
          )}

          <button
            type="submit"
            disabled={loading || adminExists}
            className="w-full py-2 bg-[#483226] text-white rounded-md disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Admin"}
          </button>

          <button
            type="button"
            onClick={() => (window.location.href = "/admin-login")}
            className="w-full text-sm text-blue-600 mt-2"
          >
            Already have account? Login
          </button>
        </form>
      </div>
    </div>
  );
}