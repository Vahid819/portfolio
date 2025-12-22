"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="w-full bg-linear-to-b from-black via-gray-900 to-black text-white py-24"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* ---------------- LEFT SIDE (IMAGE) ---------------- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <motion.div
              className="relative w-64 h-64 md:w-96 md:h-96 rounded-2xl overflow-visible"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Decorative blurred glow */}
              <motion.div
                className="absolute -inset-6 rounded-2xl bg-linear-to-br from-pink-500/30 to-indigo-500/20 blur-3xl opacity-80"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.8 }}
                transition={{ duration: 1.2 }}
              />

              {/* Image container */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-full h-full rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-4 flex items-center justify-center">
                  <Image
                    src="/vahid.jpeg"
                    alt="Vahid Momin"
                    fill
                    className="object-contain rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ---------------- RIGHT SIDE (TEXT) ---------------- */}
          <motion.div
            className="prose prose-invert max-w-none"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2,
            }}
          >
            <h2 className="text-4xl font-extrabold">About Me</h2>

            <motion.p
              className="text-gray-300 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              I'm Vahid — a fullstack designer who loves building beautiful and
              usable interfaces. I combine design thinking with practical
              engineering to deliver polished products. My work focuses on clean
              UI, strong UX, and performance.
            </motion.p>

            <motion.h3
              className="mt-6 text-2xl font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              What I Do
            </motion.h3>

            <motion.ul
              className="mt-3 list-disc list-inside text-gray-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { delay: 0.6, staggerChildren: 0.15 },
                },
              }}
            >
              {[
                "Design interactive user interfaces and prototypes",
                "Build fullstack apps with React / Next.js",
                "Implement responsive, accessible UI systems",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="hover:text-sky-400 transition-colors duration-300 cursor-default"
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="mt-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.a
                href="#"
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 25px rgba(56,189,248,0.5)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-block px-6 py-3 bg-sky-500 hover:bg-sky-600 rounded-full font-semibold"
              >
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
