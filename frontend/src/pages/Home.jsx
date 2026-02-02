import { motion } from "framer-motion";

export default function Home() {
  const services = [
    "Hair & Scalp Treatment",
    "Hair Oil Massage",
    "Hair Wash & Blow",
    "Hair Setting",
    "Rebonding",
    "Perming",
    "Hair Colouring",
    "Facial Treatments",
    "Bridal Make Up",
    "Pedicure & Manicure",
    "Waxing",
    "Henna Arts",
    "Saree Draping",
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#FDECEF] via-[#FFF1F5] to-[#FDECEF] px-6 md:px-20 py-16">
      <div className="grid md:grid-cols-2 gap-14 items-center">

       {/* 🌸 LEFT INTERACTIVE BEAUTY CARD */}
<motion.div
  initial={{ opacity: 0, x: -40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9 }}
  className="hidden md:flex justify-center"
>
  <motion.div
    whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 120 }}
    className="relative w-[360px] h-[520px] rounded-[3.5rem]
    bg-gradient-to-br from-pink-200/60 to-pink-300/40
    backdrop-blur-xl border border-pink-300/40
    shadow-[0_25px_70px_rgba(236,72,153,0.35)]
    overflow-hidden"
  >
    {/* 🌸 Inner Glass */}
    <div className="absolute inset-4 rounded-[3rem]
      bg-gradient-to-br from-white/60 to-pink-100/60" />

    {/* 🌷 Glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#FBCFE8,_transparent_65%)]" />

    {/* 💖 Center Brand */}
    <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center">
      <p className="font-['Playfair_Display'] text-4xl text-[#9D174D]">
        Beauty Cabin
      </p>
      <p className="mt-2 text-sm tracking-widest text-[#7C2D12]">
        Love Your Look
      </p>
    </div>

    {/* ✨ Floating Service Pills */}
    {[
      "Facial",
      "Hair Spa",
      "Bridal",
      "Make Up",
      "Waxing",
      "Henna",
    ].map((item, i) => (
      <motion.div
        key={item}
        initial={{ y: 0 }}
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 4 + i,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute px-4 py-1.5 text-xs rounded-full
        bg-white/70 backdrop-blur-md text-[#9D174D]
        shadow-md border border-pink-200"
        style={{
          top: `${15 + i * 12}%`,
          left: i % 2 === 0 ? "8%" : "62%",
        }}
      >
        ✦ {item}
      </motion.div>
    ))}
  </motion.div>
</motion.div>


        {/* ✨ RIGHT CONTENT */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-[cursive] text-[#9D174D]"
          >
            Beauty Cabin
          </motion.h1>

          <p className="mt-3 text-lg text-[#7C2D12] tracking-wide">
            At Your Service
          </p>

          <div className="w-24 h-[2px] bg-gradient-to-r from-pink-400 to-pink-200 my-6 mx-auto md:mx-0" />

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-[#7C2D12] text-sm md:text-base">
            {services.map((service) => (
              <li key={service} className="flex items-center gap-2">
                <span className="text-pink-400">✦</span>
                {service}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
