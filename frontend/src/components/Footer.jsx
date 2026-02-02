import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="mt- bg-gradient-to-br from-[#FDECEF] via-[#FFF1F5] to-[#FDECEF] border-t border-pink-200">
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">

        {/* 🌸 Brand */}
        <div>
          <h2 className="text-3xl font-[cursive] text-[#9D174D]">
            Beauty Cabin
          </h2>
          <p className="mt-4 text-sm text-[#7C2D12] leading-relaxed">
            Premium beauty & grooming services designed to make you feel
            confident, elegant, and beautiful.
          </p>
        </div>

        {/* 📞 Contact */}
        <div>
          <h3 className="font-semibold text-[#9D174D] mb-4">
            Contact Us
          </h3>
          <div className="space-y-3 text-[#7C2D12] text-sm">
            <p className="flex items-center gap-2">
              <HiPhone className="text-pink-400" />
              +60122884520
            </p>
            <p className="flex items-center gap-2">
              <HiMail className="text-pink-400" />
              khrbeautycabin@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <HiLocationMarker className="text-pink-400" />
              Malaysia
            </p>
          </div>
        </div>

        {/* 🔗 Quick Links */}
        <div>
          <h3 className="font-semibold text-[#9D174D] mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm text-[#7C2D12]">
            <li className="hover:text-pink-500 cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-pink-500 cursor-pointer transition">
              Services
            </li>
            <li className="hover:text-pink-500 cursor-pointer transition">
              Book Appointment
            </li>
            <li className="hover:text-pink-500 cursor-pointer transition">
              Admin
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-4 text-xs text-[#7C2D12] border-t border-pink-200">
        © {new Date().getFullYear()} Beauty Cabin. Crafted with 🌸 & care.
      </div>
    </footer>
  );
}
