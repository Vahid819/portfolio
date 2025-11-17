'use client'
import React from "react";
import Navbar from "@/components/Navbar";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import About from "@/components/landing/About.jsx";
import Skills from "@/components/landing/Skill";

function page() {
  return (
  <div className="relative bg-linear-to-b from-black via-gray-900 to-black text-white">
      <Navbar/>
      {/* <Hero /> */}
      <main className="pt-16 flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[72vh]">
            {/* Left column - text and CTAs */}
            <section className="space-y-6">
              <span className="inline-block text-sm tracking-widest text-sky-400 bg-sky-900/10 px-3 py-1 rounded">VAHID MOMIN</span>

              <div className="space-y-1">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                  HAY! I'M <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-indigo-500">VAHID</span>
                </h1>
                <h2 className="text-4xl font-extrabold text-sky-400">I'M A DESIGNER</h2>
              </div>

              <p className="text-gray-300 max-w-xl">
                Yet bed any for travelling assistance indulgence mt-4unpleasant. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
              </p>

              <div className="flex items-center gap-4 mt-4">
                <button className="px-6 py-3 bg-sky-500 hover:bg-sky-600 rounded-full font-semibold transition">Get in touch →</button>

                <div className="flex gap-3">
                  <a
                    href="#"
                    aria-label="facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-lg transition overflow-hidden"
                  >
                    {/* glass background + backdrop blur */}
                    <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-md pointer-events-none" />
                    {/* subtle sheen */}
                    <div className="absolute -top-2 -left-3 w-6 h-3 rounded-full bg-white/20 opacity-40 transform rotate-12 blur-sm pointer-events-none" />
                    <FaFacebookF className="relative z-10" />
                  </a>

                  <a
                    href="#"
                    aria-label="instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-lg transition overflow-hidden"
                  >
                    <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-md pointer-events-none" />
                    <div className="absolute -top-2 -left-3 w-6 h-3 rounded-full bg-white/20 opacity-40 transform rotate-12 blur-sm pointer-events-none" />
                    <FaInstagram className="relative z-10" />
                  </a>

                  <a
                    href="#"
                    aria-label="linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-lg transition overflow-hidden"
                  >
                    <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-md pointer-events-none" />
                    <div className="absolute -top-2 -left-3 w-6 h-3 rounded-full bg-white/20 opacity-40 transform rotate-12 blur-sm pointer-events-none" />
                    <FaLinkedinIn className="relative z-10" />
                  </a>
                </div>
              </div>
            </section>

            {/* Right column - decorative profile / artwork */}
            <section className="flex items-center justify-center">
              <div className="relative w-80 h-80 md:w-120 md:h-120">
                {/* concentric rings (SVG) */}
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

                {/* colorful blurred blobs behind the portrait */}
                <div className="absolute -left-10 -top-8 w-44 h-44 rounded-full bg-linear-to-br from-pink-500/60 to-indigo-500/30 blur-3xl mix-blend-screen opacity-90 z-0" />
                <div className="absolute -right-12 -bottom-8 w-56 h-56 rounded-full bg-linear-to-br from-sky-400/50 to-emerald-400/30 blur-3xl mix-blend-screen opacity-90 z-0" />
                <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-80 h-80 rounded-full bg-white/5 blur-2xl z-0" />

                {/* center rounded profile-like card (foreground) */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-64 h-64 md:w-104 md:h-104 rounded-full overflow-hidden bg-linear-to-tr from-gray-700 via-gray-900 to-black border-4 border-white/5 shadow-lg flex items-center justify-center relative ring-4 ring-sky-500/10">
                    {/* portrait from public/ with hover scale and smooth transition */}
                    <img src="/vahid.jpeg" alt="Vahid" className="w-full h-full object-cover transform transition-transform duration-500 ease-out hover:scale-105" />
                    {/* subtle vignette overlay to soften edges */}
                    <div className="absolute inset-0 rounded-full bg-linear-to-t from-black/30 to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* About section */}
      <About id="about"/>

      {/* Skill section */}
      <Skills id="skill"/>

    </div>
  );
}

export default page;
