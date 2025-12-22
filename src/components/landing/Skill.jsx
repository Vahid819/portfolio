"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Frontendlogo,Backendlogo, Fullstacklogo, AIlogo } from "@/../public/image.js";
import { motion } from "framer-motion";

const Skill = [
  {
    name: "Frontend Development",
    details: ["HTML", "CSS", "JavaScript", "React"],
    image: Frontendlogo,
  },
  {
    name: "Backend Development",
    details: ["Node.js", "Express", "MongoDB", "SQL"],
    image: Backendlogo, 
  },
  {
    name: "Fullstack Development",
    details: ["MERN Stack", "MEAN Stack", "Django", "Flask"],
    image: Fullstacklogo
  },
  {
    name: "AI Features",
    details: [
      "Chatbots",
      "Image Recognition",
      "Natural Language Processing",
      "Recommendation Systems",
    ],
    image: AIlogo
  },
];

// Motion Variants
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.18,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function Skills() {
  return (
    <div
      id="skill"
      className="md:flex flex-wrap justify-evenly w-full items-center bg-linear-to-b from-gray-900 via-black to-gray-900 py-20"
    >
      {Skill.map((skill, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{
            scale: 1.07,
            rotate: 1,
            transition: { type: "spring", stiffness: 200 },
          }}
          className="md:w-[20%] md:h-[40vh] h-[30vh] m-4"
        >
          <Card
            className="
    relative w-full h-full cursor-pointer overflow-hidden
    bg-white/5 backdrop-blur-xl 
    border border-white/20 
    rounded-xl 
    shadow-[0_8px_32px_0_rgba(31,38,135,0.25)]
  "
          >
            {/* Soft Glass Shine */}
            <div className="absolute inset-0 bg-linear-to-br from-white/10 via-white/5 to-transparent opacity-40 pointer-events-none"></div>

            {/* If image exists, keep it subtle behind the blur */}
            {skill.image && (
              <motion.div
                className="absolute inset-0 opacity-20"
                whileHover={{ scale: 1.05, opacity: 0.3 }}
                transition={{ duration: 0.5 }}
                style={{
                  backgroundImage: `url(${skill.image.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            )}

            {/* Content */}
            <div className="relative z-10 p-4">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-sans font-semibold text-white tracking-wide drop-shadow">
                  {skill.name}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <ol className="list-disc list-inside">
                  {skill.details?.map((detail, idx) => (
                    <motion.li
                      key={idx}
                      whileHover={{
                        scale: 1.08,
                        backgroundColor: "rgba(255,255,255,0.15)",
                      }}
                      transition={{ duration: 0.3 }}
                      className="inline-block text-sm tracking-widest text-sky-300 bg-white/10 px-3 py-1 rounded mb-2 mr-2 backdrop-blur-sm"
                    >
                      {detail}
                    </motion.li>
                  ))}
                </ol>
              </CardContent>
            </div>
          </Card>


        </motion.div>
      ))}
    </div>
  );
}

export default Skills;
