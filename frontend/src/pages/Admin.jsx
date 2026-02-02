import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AdminLogin from "./AdminLogin";
import api from "../api/axios";

export default function Admin() {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("token"));
  const [appointments, setAppointments] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔄 Fetch appointments
  const fetchAppointments = async () => {
    setLoading(true);
    try {
      const res = await api.get("/appointments");
      setAppointments(res.data);
    } catch (err) {
      toast.error("Failed to load appointments ❌");

      // 🔐 Auto logout on invalid token
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
        setIsAuth(false);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuth) fetchAppointments();
  }, [isAuth]);

  // 🔒 Show login if not authenticated
  if (!isAuth) {
    return <AdminLogin onSuccess={() => setIsAuth(true)} />;
  }

  // ✅ Confirm booking
  const confirmBooking = async (id) => {
    try {
      await api.patch(`/appointments/${id}/confirm`);
      toast.success("Appointment confirmed ✅");
      fetchAppointments();
    } catch {
      toast.error("Failed to confirm ❌");
    }
  };

  // ❌ Delete booking
  const deleteBooking = async (id) => {
    if (!window.confirm("Delete this appointment?")) return;
    try {
      await api.delete(`/appointments/${id}`);
      toast.success("Appointment deleted 🗑️");
      fetchAppointments();
    } catch {
      toast.error("Delete failed ❌");
    }
  };

  // 🔍 Filter
  const filtered = appointments.filter(
    (a) =>
      a.name?.toLowerCase().includes(search.toLowerCase()) ||
      a.phone?.includes(search)
  );

  return (
    <div className="min-h-screen bg-pink-50 p-6 relative">
      {/* 🚪 LOGOUT BUTTON */}
     



{/* 🔐 ADMIN AUTH CARD */}
<div className="max-w-md mx-auto mb-8">
  <div className="bg-white rounded-3xl shadow-xl p-6 border border-pink-100 flex items-center justify-between">
    <div>
      <p className="text-sm text-gray-500">Logged in as</p>
      <h3 className="text-lg font-semibold text-pink-700">
        Admin
      </h3>
    </div>

    <button
      onClick={() => {
        localStorage.removeItem("token");
        setIsAuth(false);
        toast.success("Logged out 👋");
      }}
      className="bg-red-500 text-white px-5 py-2 rounded-2xl font-semibold shadow-md hover:bg-red-600 transition"
    >
      Logout
    </button>
  </div>
</div>







      <h1 className="text-4xl font-bold text-center text-pink-700">
        Beauty Cabin – Admin 🌸
      </h1>

      <input
        placeholder="Search name / phone"
        className="block mx-auto mt-6 p-3 border rounded-xl w-full max-w-md"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <p className="text-center mt-10">Loading appointments...</p>
      ) : filtered.length === 0 ? (
        <p className="text-center mt-10">No appointments found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {filtered.map((a) => (
            <div key={a._id} className="bg-white p-5 rounded-3xl shadow">
              <h2 className="font-bold">{a.name}</h2>
              <p>📞 {a.phone}</p>
              <p>✂️ {a.service}</p>
              <p>📅 {a.date}</p>
              <p>⏰ {a.time}</p>

              <div className="flex gap-2 mt-4">
                {a.status !== "Confirmed" && (
                  <button
                    onClick={() => confirmBooking(a._id)}
                    className="flex-1 bg-green-500 text-white py-2 rounded-xl"
                  >
                    Confirm
                  </button>
                )}

                <button
                  onClick={() => deleteBooking(a._id)}
                  className="flex-1 bg-pink-500 text-white py-2 rounded-xl"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
