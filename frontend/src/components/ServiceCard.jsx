// src/components/ServiceCard.jsx
import { motion } from "framer-motion";
import { HiOutlineSparkles } from "react-icons/hi"; // Generic icon, can change per service

export default function ServiceCard({ title, icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4 cursor-pointer border border-pink-100 hover:shadow-2xl transition-all"
    >
      <div className="text-3xl text-pink-400">{icon || <HiOutlineSparkles />}</div>
      <h3 className="text-lg md:text-xl font-semibold text-[#7C2D12]">{title}</h3>
    </motion.div>
  );
}
