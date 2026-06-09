import React from 'react';

type Submission = {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
};

export default function DashboardTable({
  submissions,
  loading,
  onDelete,
}: {
  submissions: Submission[];
  loading: boolean;
  onDelete: (id: string) => void;
}) {
  return (
    <div>
      <div className="p-4 border-b">
        <h3 className="text-lg font-medium">Submissions</h3>
      </div>

      <div className="w-full overflow-auto">
        <table className="min-w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-sm">Name</th>
              <th className="px-4 py-3 text-sm">Email</th>
              <th className="px-4 py-3 text-sm">Message</th>
              <th className="px-4 py-3 text-sm">Submitted Date</th>
              <th className="px-4 py-3 text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-gray-500">
                  Loading…
                </td>
              </tr>
            ) : submissions.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-gray-500">
                  No submissions yet
                </td>
              </tr>
            ) : (
              submissions.map((s) => (
                <tr key={s.id} className="border-b">
                  <td className="px-4 py-3 align-top">{s.name}</td>
                  <td className="px-4 py-3 align-top">{s.email}</td>
                  <td className="px-4 py-3 align-top max-w-xl break-words">{s.message}</td>
                  <td className="px-4 py-3 align-top">{new Date(s.created_at).toLocaleString()}</td>
                  <td className="px-4 py-3 align-top">
                    <button
                      onClick={() => onDelete(s.id)}
                      className="px-3 py-1 bg-red-600 text-white rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
