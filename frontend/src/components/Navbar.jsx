import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  HiMenu,
  HiX,
  HiHome,
  HiPhone,
  HiUserCircle,
  HiCalendar,
} from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  // ✅ Close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // ✅ Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const links = [
    { name: "Home", path: "/", icon: <HiHome className="mr-2" /> },
    { name: "Contact", path: "/contact", icon: <HiPhone className="mr-2" /> },
    { name: "Admin", path: "/admin", icon: <HiUserCircle className="mr-2" /> },
  ];

  return (
    <nav className="backdrop-blur-md bg-[#FDECEF]/70 text-[#7C2D12] px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">
      
      {/* 🌸 LOGO */}
      <Link
        to="/"
        className="text-3xl font-extrabold text-[#EC4899] flex items-center gap-2"
      >
        🌸 Beauty Cabin
      </Link>

      {/* 🖥 DESKTOP MENU */}
      <div className="hidden md:flex space-x-8 items-center">
        {links.map((link) => (
          <motion.div key={link.name} whileHover={{ scale: 1.1 }}>
            <Link
              to={link.path}
              className="text-lg font-medium hover:text-[#EC4899] transition flex items-center"
            >
              {link.icon}
              {link.name}
            </Link>
          </motion.div>
        ))}

        <Link
          to="/book"
          className="bg-gradient-to-r from-pink-500 to-pink-400 text-white px-4 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition flex items-center gap-2"
        >
          <HiCalendar /> Book Now
        </Link>
      </div>

      {/* 📱 MOBILE TOGGLE */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden z-50"
        aria-label="Toggle Menu"
      >
        {open ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>

      {/* 📱 MOBILE MENU + OVERLAY */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu */}
            <motion.div
              ref={menuRef}
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-[#FDECEF]/95 backdrop-blur-md flex flex-col items-center space-y-5 py-6 shadow-xl z-50 md:hidden"
            >
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-lg font-medium text-[#7C2D12] hover:text-[#EC4899] transition flex items-center"
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}

              <Link
                to="/book"
                className="bg-gradient-to-r from-pink-500 to-pink-400 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition flex items-center gap-2"
              >
                <HiCalendar /> Book Now
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
