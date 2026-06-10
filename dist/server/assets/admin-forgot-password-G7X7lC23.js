import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { s as supabase } from "./supabase-CzlEHgCy.js";
import "@supabase/supabase-js";
function Index() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);
    try {
      const redirectTo = `${window.location.origin}/admin-reset-password`;
      const {
        error: error2
      } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo
      });
      if (error2) {
        setError(error2.message || "Failed to send reset email");
      } else {
        setMessage("Password reset email sent. Check your inbox.");
      }
    } catch (err) {
      setError(err.message || "Error");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 p-6", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md bg-white rounded-lg shadow p-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold mb-4", children: "Forgot Password" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Email" }),
        /* @__PURE__ */ jsx("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true, className: "mt-1 w-full px-3 py-2 border rounded-md bg-gray-50" })
      ] }),
      error && /* @__PURE__ */ jsx("div", { className: "text-sm text-red-600", children: error }),
      message && /* @__PURE__ */ jsx("div", { className: "text-sm text-green-600", children: message }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsx("button", { type: "submit", className: "px-4 py-2 bg-[#483226] text-white rounded-full disabled:opacity-60", disabled: loading, children: loading ? "Sending..." : "Send Reset Email" }) })
    ] })
  ] }) });
}
export {
  Index as component
};
