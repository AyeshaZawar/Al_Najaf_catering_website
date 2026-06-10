import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { s as supabase } from "./supabase-CzlEHgCy.js";
import "@supabase/supabase-js";
function Index() {
  useEffect(() => {
    const checkAdmin = async () => {
      const {
        data
      } = await supabase.from("app_settings").select("admin_email").eq("id", 1).single();
      if (data?.admin_email) {
        window.location.href = "/admin-login";
      }
    };
    checkAdmin();
  }, []);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!fullName.trim()) return setError("Full name is required");
    if (!email.trim()) return setError("Email is required");
    if (password.length < 8) return setError("Password must be at least 8 characters");
    if (password !== confirm) return setError("Passwords do not match");
    setLoading(true);
    try {
      const {
        data,
        error: signUpError
      } = await supabase.auth.signUp({
        email,
        password
      });
      if (signUpError) {
        setError(signUpError.message || "Sign up failed");
        setLoading(false);
        return;
      }
      const userId = data?.user?.id;
      if (userId) {
        await supabase.from("app_settings").update({
          admin_email: email
        }).eq("id", 1);
        const {
          error: profileErr
        } = await supabase.from("profiles").upsert({
          id: userId,
          full_name: fullName,
          email,
          role: "admin"
        }, {
          onConflict: "id"
        });
        if (profileErr) {
          setError(profileErr.message || "Failed to create profile");
          setLoading(false);
          return;
        }
      }
      setSuccess("Registration successful. Please check your email to confirm your account.");
      setTimeout(() => {
        window.location.href = "/admin-login";
      }, 1500);
    } catch (err) {
      setError(err.message || "Sign up error");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 p-6", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md bg-white rounded-lg shadow p-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold mb-4", children: "Admin Sign Up" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Full Name" }),
        /* @__PURE__ */ jsx("input", { type: "text", value: fullName, onChange: (e) => setFullName(e.target.value), required: true, className: "mt-1 w-full px-3 py-2 border rounded-md bg-gray-50" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Email" }),
        /* @__PURE__ */ jsx("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true, className: "mt-1 w-full px-3 py-2 border rounded-md bg-gray-50" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Password" }),
        /* @__PURE__ */ jsx("input", { type: "password", value: password, onChange: (e) => setPassword(e.target.value), required: true, className: "mt-1 w-full px-3 py-2 border rounded-md bg-gray-50" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Confirm Password" }),
        /* @__PURE__ */ jsx("input", { type: "password", value: confirm, onChange: (e) => setConfirm(e.target.value), required: true, className: "mt-1 w-full px-3 py-2 border rounded-md bg-gray-50" })
      ] }),
      error && /* @__PURE__ */ jsx("div", { className: "text-sm text-red-600", children: error }),
      success && /* @__PURE__ */ jsx("div", { className: "text-sm text-green-600", children: success }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsx("button", { type: "submit", className: "px-4 py-2 bg-[#483226] text-white rounded-full disabled:opacity-60", disabled: loading, children: loading ? "Creating..." : "Create Admin" }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 text-center", children: /* @__PURE__ */ jsx("button", { type: "button", onClick: () => window.location.href = "/admin-login", className: "text-sm text-blue-600 hover:underline", children: "Already have an account? Login" }) })
    ] })
  ] }) });
}
export {
  Index as component
};
