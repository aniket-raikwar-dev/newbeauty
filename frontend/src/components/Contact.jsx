import { motion } from "framer-motion";
import {
  HiPhone,
  HiMail,
  HiLocationMarker,
  HiChatAlt2,
} from "react-icons/hi";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    emailjs
      .sendForm(
        "service_ld2flob",        // ✅ Service ID
        "template_xv0omqg",       // ✅ Template ID
        formRef.current,
        "SNFX2E6rRHGRdAYe3"       // ✅ Public Key
      )
      .then(
        () => {
          setSuccess("🌸 Message sent successfully!");
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error(error);
          setSuccess("❌ Failed to send message. Try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#FDECEF] via-[#FFF1F5] to-[#FDECEF] px-6 md:px-20 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT – INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-[cursive] text-[#9D174D]">
            Contact Us
          </h1>

          <p className="text-[#7C2D12] text-lg">
            We’d love to pamper you 🌸  
            Reach out for appointments or enquiries.
          </p>

          <div className="w-24 h-[2px] bg-gradient-to-r from-pink-400 to-pink-200" />

          <div className="space-y-4 text-[#7C2D12]">
            <p className="flex items-center gap-3 text-lg">
              <HiPhone className="text-pink-500 text-xl" />
              +60 122884520
            </p>

            <p className="flex items-center gap-3 text-lg">
              <HiMail className="text-pink-500 text-xl" />
              khrbeautycabin@gmail.com
            </p>

            <p className="flex items-center gap-3 text-lg">
              <HiLocationMarker className="text-pink-500 text-xl" />
              Malaysia's
            </p>
          </div>

          <a
            href="https://wa.me/917093816001"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-pink-400 text-white font-semibold shadow-lg"
          >
            <HiChatAlt2 className="text-xl" />
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* RIGHT – FORM */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-8 space-y-5 border border-pink-100"
        >
          <h2 className="text-3xl font-bold text-center text-[#7C2D12]">
            Send a Message
          </h2>

          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full border border-pink-200 p-3 rounded-xl focus:ring-2 focus:ring-pink-400"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            required
            className="w-full border border-pink-200 p-3 rounded-xl focus:ring-2 focus:ring-pink-400"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full border border-pink-200 p-3 rounded-xl focus:ring-2 focus:ring-pink-400 resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-[#EC4899] to-[#F472B6] text-white font-semibold rounded-xl shadow-lg"
          >
            {loading ? "Sending..." : "Send Message 🌸"}
          </button>

          {success && (
            <p className="text-center text-sm text-green-600">{success}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
