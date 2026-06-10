import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { s as supabase } from "./supabase-CzlEHgCy.js";
import "@supabase/supabase-js";
function ProtectedAdminRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [authed, setAuthed] = useState(false);
  useEffect(() => {
    let mounted = true;
    const check = async () => {
      const { data } = await supabase.auth.getSession();
      const session = data.session;
      if (!mounted) return;
      if (!session) {
        try {
          if (typeof supabase.auth.getSessionFromUrl === "function") {
            await supabase.auth.getSessionFromUrl();
          }
        } catch (e) {
        }
      }
      const { data: session2 } = await supabase.auth.getSession();
      const userId = session2.session?.user?.id;
      if (!userId) {
        setAuthed(false);
        setLoading(false);
        window.location.href = "/admin-login";
        return;
      }
      const { data: profile, error } = await supabase.from("profiles").select("role, full_name, email").eq("id", userId).single();
      if (error || !profile || profile.role !== "admin") {
        setAuthed(false);
        setLoading(false);
        await supabase.auth.signOut();
        window.location.href = "/admin-login";
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
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "text-gray-500", children: "Checking authentication…" }) });
  }
  if (!authed) return null;
  return /* @__PURE__ */ jsx(Fragment, { children });
}
function DashboardTable({
  submissions,
  loading,
  onDelete
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "p-4 border-b", children: /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium", children: "Submissions" }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ jsxs("table", { className: "min-w-full text-left", children: [
      /* @__PURE__ */ jsx("thead", { className: "bg-gray-100", children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { className: "px-4 py-3 text-sm", children: "Name" }),
        /* @__PURE__ */ jsx("th", { className: "px-4 py-3 text-sm", children: "Email" }),
        /* @__PURE__ */ jsx("th", { className: "px-4 py-3 text-sm", children: "Message" }),
        /* @__PURE__ */ jsx("th", { className: "px-4 py-3 text-sm", children: "Submitted Date" }),
        /* @__PURE__ */ jsx("th", { className: "px-4 py-3 text-sm", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: loading ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: 5, className: "px-4 py-6 text-center text-gray-500", children: "Loading…" }) }) : submissions.length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: 5, className: "px-4 py-6 text-center text-gray-500", children: "No submissions yet" }) }) : submissions.map((s) => /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
        /* @__PURE__ */ jsx("td", { className: "px-4 py-3 align-top", children: s.name }),
        /* @__PURE__ */ jsx("td", { className: "px-4 py-3 align-top", children: s.email }),
        /* @__PURE__ */ jsx("td", { className: "px-4 py-3 align-top max-w-xl break-words", children: s.message }),
        /* @__PURE__ */ jsx("td", { className: "px-4 py-3 align-top", children: new Date(s.created_at).toLocaleString() }),
        /* @__PURE__ */ jsx("td", { className: "px-4 py-3 align-top", children: /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => onDelete(s.id),
            className: "px-3 py-1 bg-red-600 text-white rounded-md",
            children: "Delete"
          }
        ) })
      ] }, s.id)) })
    ] }) })
  ] });
}
function Index() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const fetchSubmissions = async () => {
    setLoading(true);
    setError("");
    const {
      data,
      error: error2
    } = await supabase.from("submissions").select("*").order("created_at", {
      ascending: false
    });
    if (error2) {
      setError(error2.message);
      setSubmissions([]);
    } else {
      setSubmissions(data || []);
    }
    setLoading(false);
  };
  const handleDelete = async (id) => {
    const confirmed = window.confirm("Delete this submission?");
    if (!confirmed) return;
    const {
      error: error2
    } = await supabase.from("submissions").delete().eq("id", id);
    if (error2) {
      alert(error2.message || "Delete failed");
    } else {
      setSubmissions((s) => s.filter((r) => r.id !== id));
    }
  };
  const [admin, setAdmin] = useState(null);
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/admin-login";
  };
  useEffect(() => {
    const loadAdmin = async () => {
      const {
        data
      } = await supabase.auth.getSession();
      const userId = data.session?.user?.id;
      if (!userId) return;
      const {
        data: profile
      } = await supabase.from("profiles").select("full_name,email").eq("id", userId).single();
      setAdmin(profile ?? null);
    };
    loadAdmin();
  }, []);
  return /* @__PURE__ */ jsx(ProtectedAdminRoute, { children: /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gray-50 p-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1200px] mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold", children: "Admin Dashboard" }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: admin?.full_name ?? admin?.email ?? "" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("button", { onClick: fetchSubmissions, className: "px-3 py-2 bg-white border rounded-md", children: "Refresh" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("button", { className: "px-3 py-2 bg-white border rounded-md", children: "Profile" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg p-2", children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm", children: admin?.full_name }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: admin?.email }),
            /* @__PURE__ */ jsx("button", { onClick: handleLogout, className: "mt-3 w-full px-3 py-2 bg-red-600 text-white rounded-md", children: "Logout" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-2 bg-white rounded-lg p-6 shadow", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-sm text-gray-500", children: "Total Forms Submitted" }),
        /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold mt-2", children: submissions.length })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg p-6 shadow", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-sm text-gray-500", children: "Latest" }),
        /* @__PURE__ */ jsx("div", { className: "mt-2 text-lg", children: submissions[0]?.name ?? "—" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-white rounded-lg shadow overflow-auto", children: /* @__PURE__ */ jsx(DashboardTable, { submissions, loading, onDelete: handleDelete }) })
  ] }) }) });
}
export {
  Index as component
};
