"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact({
  bgImage = "https://source.unsplash.com/2000x1200/?studio,workspace",
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
    subscribe: false,
  });
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // demo pause - replace with API call
      await new Promise((r) => setTimeout(r, 700));
      setStatus("success");
      setForm({ name: "", email: "", service: "", message: "", subscribe: false });
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus(null), 3000);
    }
  };

  // heading stagger animation
  const title = "Contact me";
  const letters = title.split("");

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.03 } } };
  const letter = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } };

  // gradient used for heading
  const headingGradient =
    "linear-gradient(90deg,#ff9a9e 0%, #fad0c4 25%, #a18cd1 50%, #fbc2eb 75%, #89f7fe 100%)";

  return (
    <section id="contact" className="relative w-full min-h-[80vh] flex items-center" aria-labelledby="contact-heading">
      {/* background image */}
      <motion.div
        className="absolute inset-0 bg-center bg-cover filter brightness-60"
        style={{ backgroundImage: `url('${bgImage}')` }}
        initial={{ scale: 1.03, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 0.95 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        aria-hidden="true"
      />
      {/* dark overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/30 to-black/85" />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: heading + info */}
        <div className="text-white flex flex-col justify-center">
          {/* wrapper animates the moving gradient, inner h2 handles letter stagger */}
          <motion.div
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 8, ease: "linear" }}
            style={{
              background: headingGradient,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              backgroundSize: "200% 100%",
              display: "inline-block",
            }}
          >
            <motion.h2
              id="contact-heading"
              className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <span className="inline-block">
                {letters.map((ch, i) => (
                  <motion.span key={i} variants={letter} className="inline-block">
                    {ch === " " ? "\u00A0" : ch}
                  </motion.span>
                ))}
              </span>
            </motion.h2>
          </motion.div>

          <motion.p initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 }}>
            I build simple, fast and beautiful web experiences. Send a short brief and I'll reply within 24–48 hours.
          </motion.p>

          <div className="mt-6 text-slate-300 space-y-3">
            <div>
              <div className="text-xs uppercase text-slate-400">Email</div>
              <div className="font-medium">vahidmomin.dev@gmail.com</div>
            </div>
            <div>
              <div className="text-xs uppercase text-slate-400">Phone</div>
              <div className="font-medium">(+91) 8261040814</div>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 shadow-xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label className="sr-only" htmlFor="name">Full name</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full name"
              required
              className="bg-white/5 text-white placeholder:text-slate-400 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-400 transition-shadow duration-150"
            />
            <label className="sr-only" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="bg-white/5 text-white placeholder:text-slate-400 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-400 transition-shadow duration-150"
            />
          </div>

          <div className="mt-3">
            <label className="sr-only" htmlFor="service">Service</label>
            <select
              id="service"
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full bg-white/5 text-white px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-400 transition"
            >
              <option className="bg-black" value="">Select service</option>
              <option className="bg-black">Website</option>
              <option className="bg-black">UI/UX</option>
              <option className="bg-black">Consulting</option>
              <option className="bg-black">Other</option>
            </select>
          </div>

          <div className="mt-3">
            <label className="sr-only" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              placeholder="Project details or message"
              className="w-full bg-white/5 text-white placeholder:text-slate-400 px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>

          <div className="mt-3 flex items-center gap-3">
            <label className="inline-flex items-center gap-2 text-sm text-slate-300">
              <input
                type="checkbox"
                name="subscribe"
                checked={form.subscribe}
                onChange={handleChange}
                className="w-4 h-4 rounded border-white/20 bg-white/5"
              />
              <span>Subscribe</span>
            </label>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 bg-linear-to-r from-indigo-400 to-cyan-400 text-black px-5 py-2 rounded-full text-sm font-semibold shadow"
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </motion.button>

            <div className="text-sm text-slate-300">
              {status === "success" && <span className="text-emerald-300">Message sent — thanks!</span>}
              {status === "error" && <span className="text-rose-400">Error — try again.</span>}
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}