// Updated React page with animation, transitions, and scroll effects
'use client'
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import About from "@/components/pages/About.jsx";
import Skills from "@/components/pages/Skill";
import Project from "@/components/pages/Project";
import Contact from "@/components/pages/Contact";
import Comingsoon from "@/components/pages/Comingsoon";
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Page() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative bg-linear-to-b from-black via-gray-900 to-black text-white">
      <Navbar />

      <main className="pt-16 flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[72vh]">

            {/* Left column */}
            <motion.section
              className="space-y-6"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-sm tracking-widest text-sky-400 bg-sky-900/10 px-3 py-1 rounded">VAHID MOMIN</span>

              <div className="space-y-1">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                  HAY! I'M <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-indigo-500">VAHID</span>
                </h1>
                <h2 className="text-4xl font-extrabold text-sky-400">I'M A DESIGNER</h2>
              </div>

              <p className="text-gray-300 max-w-xl">
                Yet bed any for travelling assistance indulgence unpleasant. Not thoughts all exercise blessing.
              </p>

              <div className="flex items-center gap-4 mt-4">
                <motion.button
                  className="px-6 py-3 bg-sky-500 hover:bg-sky-600 rounded-full font-semibold transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in touch → hi
                </motion.button>

                <div className="flex gap-3">
                  {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15 }}
                      className="relative w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-lg transition overflow-hidden"
                    >
                      <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-md" />
                      <div className="absolute -top-2 -left-3 w-6 h-3 rounded-full bg-white/20 opacity-40 rotate-12 blur-sm" />
                      <Icon className="relative z-10" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Right column image */}
            <motion.section
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
            >
              <div className="relative w-80 h-80 md:w-120 md:h-120" data-aos="zoom-in">
                <svg viewBox="0 0 300 300" className="w-full h-full relative z-10">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="1">
                      <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.9" />
                    </linearGradient>
                  </defs>
                  <circle cx="150" cy="150" r="120" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="2" />
                  <g stroke="rgba(255,255,255,0.02)" strokeWidth="1">
                    <circle cx="150" cy="150" r="140" fill="none" />
                    <circle cx="150" cy="150" r="110" fill="none" />
                    <circle cx="150" cy="150" r="80" fill="none" />
                  </g>
                </svg>

                <div className="absolute -left-10 -top-8 w-44 h-44 rounded-full bg-linear-to-br from-pink-500/60 to-indigo-500/30 blur-3xl opacity-90 z-0" />
                <div className="absolute -right-12 -bottom-8 w-56 h-56 rounded-full bg-linear-to-br from-sky-400/50 to-emerald-400/30 blur-3xl opacity-90 z-0" />
                <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-80 h-80 rounded-full bg-white/5 blur-2xl z-0" />

                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <motion.div
                    className="w-64 h-64 md:w-104 md:h-104 rounded-full overflow-hidden bg-linear-to-tr from-gray-700 via-gray-900 to-black border-4 border-white/5 shadow-lg ring-4 ring-sky-500/10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img src="/vahid.jpeg" alt="Vahid" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 rounded-full bg-linear-to-t from-black/30 to-transparent" />
                  </motion.div>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </main>

      <div data-aos="fade-up"><About id="about" /></div>
      <div data-aos="fade-up"><Skills id="skill" /></div>
      {/* <div data-aos="fade-up"><Project id="projects" /></div> */}
      <div data-aos="fade-up"><Comingsoon id="projects" /></div>
      <div data-aos="fade-up"><Contact id="contact" /></div>
    </div>
  );
}

export default Page;