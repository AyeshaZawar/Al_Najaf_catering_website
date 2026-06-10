import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { s as supabase } from "./supabase-CzlEHgCy.js";
import "@supabase/supabase-js";
function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const {
        data,
        error: authError
      } = await supabase.auth.signInWithPassword({
        email,
        password
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
      const {
        data: profile,
        error: profileErr
      } = await supabase.from("profiles").select("role").eq("id", userId).single();
      if (profileErr || !profile || profile.role !== "admin") {
        await supabase.auth.signOut();
        setError("You are not authorized to access the admin dashboard.");
        setLoading(false);
        return;
      }
      window.location.href = "/admin-dashboard";
    } catch (err) {
      setError(err.message || "Login error");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 p-6", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md bg-white rounded-lg shadow p-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold mb-4", children: "Admin Login" }),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-6", children: "Admin access only. Signups are disabled." }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Email" }),
        /* @__PURE__ */ jsx("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true, className: "mt-1 w-full px-3 py-2 border rounded-md bg-gray-50" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Password" }),
        /* @__PURE__ */ jsx("input", { type: "password", value: password, onChange: (e) => setPassword(e.target.value), required: true, className: "mt-1 w-full px-3 py-2 border rounded-md bg-gray-50" })
      ] }),
      error && /* @__PURE__ */ jsx("div", { className: "text-sm text-red-600", children: error }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsx("button", { type: "submit", className: "px-4 py-2 bg-[#483226] text-white rounded-full disabled:opacity-60", disabled: loading, children: loading ? "Signing in..." : "Sign In" }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm mt-2", children: [
        /* @__PURE__ */ jsx("a", { href: "/admin-forgot-password", className: "text-[#483226]", children: "Forgot Password?" }),
        /* @__PURE__ */ jsx("a", { href: "/admin-signup", className: "text-[#483226]", children: "Create Admin" })
      ] })
    ] })
  ] }) });
}
export {
  Index as component
};
