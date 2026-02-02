import { motion } from "framer-motion";

export default function Card({ appointment, onConfirm, onDelete }) {
  return (
    <motion.div
      className="bg-white shadow-2xl rounded-3xl p-6 flex flex-col justify-between"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <h2 className="text-xl font-bold">{appointment.name}</h2>
        <p>📞 {appointment.phone}</p>
        <p>✂️ {appointment.service}</p>
        <p>📅 {appointment.date}</p>
        <p>⏰ {appointment.time}</p>
        <p className={`mt-2 font-semibold ${appointment.status === "Confirmed" ? "text-green-600" : "text-orange-500"}`}>
          {appointment.status}
        </p>
      </div>

      <div className="flex gap-2 mt-4">
        {appointment.status !== "Confirmed" && (
          <button onClick={() => onConfirm(appointment._id)} className="flex-1 bg-green-600 text-white py-2 rounded-lg shadow">Confirm</button>
        )}
        <button onClick={() => onDelete(appointment._id)} className="flex-1 bg-red-600 text-white py-2 rounded-lg shadow">Delete</button>
      </div>
    </motion.div>
  );
}
