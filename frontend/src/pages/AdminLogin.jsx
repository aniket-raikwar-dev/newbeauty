import { useState } from "react";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { FiEye, FiEyeOff } from "react-icons/fi";
import api from "../api/axios"; // This is our JWT-enabled axios instance

export default function AdminLogin({ onSuccess }) {
  const [email, setEmail] = useState(""); // add email input
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Email and Password required ❗");
      return;
    }

    try {
      setLoading(true);
      // Call backend login API
      const res = await api.post("/auth/login", { email, password });

      // ✅ Backend returns token
      const token = res.data.token;
      localStorage.setItem("token", token); // save JWT
      localStorage.setItem("adminAuth", "true");

      toast.success("Welcome Admin 🌸", { duration: 2000 });
      onSuccess(); // update Admin.jsx state
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || "Login failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-pink-200">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-sm text-center"
      >
        <h2 className="text-3xl font-bold text-pink-700 mb-6">
          Admin Login 🔐
        </h2>

        {/* EMAIL FIELD */}
        <input
          type="email"
          placeholder="Enter admin email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
        />

        {/* PASSWORD FIELD */}
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            className="w-full p-3 border rounded-xl pr-12 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />

          {/* 👁 Show/Hide Password */}
          <button
            type="button"
            onClick={() => setShowPassword((p) => !p)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-pink-500"
          >
            <AnimatePresence mode="wait">
              {showPassword ? (
                <motion.span
                  key="hide"
                  initial={{ scale: 0.6, opacity: 0, rotate: -90 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 0.6, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiEyeOff size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="show"
                  initial={{ scale: 0.6, opacity: 0, rotate: -90 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 0.6, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiEye size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* LOGIN BUTTON */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleLogin}
          disabled={loading}
          className={`w-full mt-6 py-3 text-white rounded-xl font-semibold ${
            loading ? "bg-pink-300" : "bg-pink-500 hover:bg-pink-600"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </motion.button>
      </motion.div>
    </div>
  );
}
