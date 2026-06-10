import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { s as supabase } from "./supabase-CzlEHgCy.js";
import "@supabase/supabase-js";
function Index() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    const tryRecover = async () => {
      try {
        if (typeof supabase.auth.getSessionFromUrl === "function") {
          await supabase.auth.getSessionFromUrl({
            storeSession: true
          });
        }
      } catch (e) {
      }
    };
    tryRecover();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    if (password.length < 8) return setError("Password must be at least 8 characters");
    if (password !== confirm) return setError("Passwords do not match");
    setLoading(true);
    try {
      const {
        data
      } = await supabase.auth.getSession();
      const session = data.session;
      if (!session) {
        setError("No active session. Follow the reset link from your email.");
        setLoading(false);
        return;
      }
      const {
        error: error2
      } = await supabase.auth.updateUser({
        password
      });
      if (error2) {
        setError(error2.message || "Failed to update password");
      } else {
        setMessage("Password updated successfully. Redirecting to login...");
        setTimeout(() => window.location.href = "/admin-login", 1200);
      }
    } catch (err) {
      setError(err.message || "Error");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 p-6", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-md bg-white rounded-lg shadow p-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold mb-4", children: "Reset Password" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700", children: "New Password" }),
        /* @__PURE__ */ jsx("input", { type: "password", value: password, onChange: (e) => setPassword(e.target.value), required: true, className: "mt-1 w-full px-3 py-2 border rounded-md bg-gray-50" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-gray-700", children: "Confirm Password" }),
        /* @__PURE__ */ jsx("input", { type: "password", value: confirm, onChange: (e) => setConfirm(e.target.value), required: true, className: "mt-1 w-full px-3 py-2 border rounded-md bg-gray-50" })
      ] }),
      error && /* @__PURE__ */ jsx("div", { className: "text-sm text-red-600", children: error }),
      message && /* @__PURE__ */ jsx("div", { className: "text-sm text-green-600", children: message }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsx("button", { type: "submit", className: "px-4 py-2 bg-[#483226] text-white rounded-full disabled:opacity-60", disabled: loading, children: loading ? "Updating..." : "Update Password" }) })
    ] })
  ] }) });
}
export {
  Index as component
};
