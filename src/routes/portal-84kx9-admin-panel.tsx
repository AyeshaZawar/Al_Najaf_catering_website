import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import ProtectedAdminRoute from "@/components/admin/ProtectedAdminRoute";
import DashboardTable from "@/components/admin/DashboardTable";

export const Route = createFileRoute("/portal-84kx9-admin-panel")({
  component: Index,
});

type Submission = {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
  event_type?: string;
  company_name?: string;
  phone?: string;
  guests?: number;
};

function Index() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchSubmissions = async () => {
    setLoading(true);
    setError("");

    const { data, error } = await supabase
      .from("submissions")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setError(error.message);
      setSubmissions([]);
    } else {
      setSubmissions(data || []);
    }

    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm("Delete this submission?");
    if (!confirmed) return;

    const { error } = await supabase.from("submissions").delete().eq("id", id);

    if (error) {
      alert(error.message || "Delete failed");
    } else {
      setSubmissions((s) => s.filter((r) => r.id !== id));
    }
  };


  const [admin, setAdmin] = useState<{ full_name?: string; email?: string } | null>(null);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/admin-login";
  };

  useEffect(() => {
    const loadAdmin = async () => {
      const { data } = await supabase.auth.getSession();
      const userId = data.session?.user?.id;
      if (!userId) return;
      const { data: profile } = await supabase
        .from("profiles")
        .select("full_name,email")
        .eq("id", userId)
        .single();
      setAdmin(profile ?? null);
    };

    loadAdmin();
  }, []);

  return (
    <ProtectedAdminRoute>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
              <div className="text-sm text-gray-600">{admin?.full_name ?? admin?.email ?? ""}</div>
            </div>

            <div className="flex items-center gap-3">
              <button onClick={fetchSubmissions} className="px-3 py-2 bg-white border rounded-md">
                Refresh
              </button>

              <div className="relative">
                <button className="px-3 py-2 bg-white border rounded-md">Profile</button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg p-2">
                  <div className="text-sm">{admin?.full_name}</div>
                  <div className="text-xs text-gray-500">{admin?.email}</div>
                  <button
                    onClick={handleLogout}
                    className="mt-3 w-full px-3 py-2 bg-red-600 text-white rounded-md"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="col-span-2 bg-white rounded-lg p-6 shadow">
              <h2 className="text-sm text-gray-500">Total Forms Submitted</h2>
              <div className="text-3xl font-bold mt-2">{submissions.length}</div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <h2 className="text-sm text-gray-500">Latest</h2>
              <div className="mt-2 text-lg">{submissions[0]?.name ?? "—"}</div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-auto">
            <DashboardTable submissions={submissions} loading={loading} onDelete={handleDelete} />
          </div>
        </div>
      </div>
    </ProtectedAdminRoute>
  );
}
