// ...existing code...
"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Buddha Temple, Thailand",
    subtitle: "Scenic hero-card",
    image: "https://source.unsplash.com/1200x900/?temple,thailand",
    bg: "https://source.unsplash.com/2000x1200/?temple,thailand",
    description:
      "A stylized travel UI concept showcasing temple photography and immersive hero layout. Includes gallery, details and booking CTA.",
    tags: ["React", "Tailwind", "Swiper"],
    live: "https://example.com/buddha",
    repo: "https://github.com/yourname/buddha-template",
  },
  {
    title: "Broken Beach, Bali",
    subtitle: "Coastal landscape",
    image: "https://source.unsplash.com/1200x900/?bali,beach",
    bg: "https://source.unsplash.com/2000x1200/?bali,beach",
    description:
      "Coastal gallery card with vibrant colors and coverflow carousel for featured destinations.",
    tags: ["UI", "Animations", "Framer Motion"],
    live: "https://example.com/broken-beach",
    repo: "https://github.com/yourname/broken-beach",
  },
  {
    title: "Kerala Backwaters",
    subtitle: "Lush nature",
    image: "https://source.unsplash.com/1200x900/?kerala,india",
    bg: "https://source.unsplash.com/2000x1200/?kerala,india",
    description:
      "Relaxing backwaters concept — focus on large typography, parallax background and swipeable card previews.",
    tags: ["Design", "Parallax", "Responsive"],
    live: "https://example.com/kerala",
    repo: "https://github.com/yourname/kerala",
  },
  {
    title: "Tropical Island",
    subtitle: "Island getaway",
    image: "https://source.unsplash.com/1200x900/?island,tropical",
    bg: "https://source.unsplash.com/2000x1200/?island,tropical",
    description:
      "Bright hero interface for a resort concept with autoplaying coverflow and interactive details panel.",
    tags: ["Prototype", "Accessibility"],
    live: "https://example.com/island",
    repo: "https://github.com/yourname/island",
  },
];

// motion variants
const textVariant = {
  initial: { opacity: 0, x: -18 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.45 } },
  exit: { opacity: 0, x: 18, transition: { duration: 0.35 } },
};

export default function Project() {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex] ?? projects[0];

  return (
    <section className="relative w-full min-h-[70vh] bg-black/80 overflow-hidden">
      {/* dynamic background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className="absolute inset-0 bg-center bg-cover filter brightness-75"
          style={{ backgroundImage: `url('${active.bg}')` }}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.9 }}
          aria-hidden="true"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/40 to-black/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-start gap-12">
        {/* Left: title + description (updates with slide) */}
        <div className="lg:w-1/2 text-white">
          <AnimatePresence mode="wait" initial={false}>
            <motion.h2
              key={`title-${activeIndex}`}
              variants={textVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow mb-4"
            >
              {active.title}
            </motion.h2>
          </AnimatePresence>

          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={`desc-${activeIndex}`}
              variants={textVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-slate-200 max-w-xl mb-6"
            >
              {active.subtitle} — {active.description}
            </motion.p>
          </AnimatePresence>

          <div className="flex items-center gap-3 mb-6">
            {active.tags.map((t) => (
              <span
                key={t}
                className="inline-block text-xs font-medium text-sky-300 bg-white/6 px-3 py-1 rounded-full backdrop-blur-sm"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href={active.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-full text-sm shadow"
            >
              View Live
            </a>
            <a
              href={active.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-4 py-2 rounded-full text-sm hover:bg-white/5"
            >
              Source
            </a>
          </div>
        </div>

        {/* Right: coverflow carousel */}
        <div className="lg:w-1/2">
          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            slidesPerView={1.6}
            coverflowEffect={{ rotate: 0, stretch: -30, depth: 140, modifier: 1, slideShadows: false }}
            autoplay={{ delay: 3200, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{ 640: { slidesPerView: 1.2 }, 1024: { slidesPerView: 1.6 } }}
            onSwiper={(s) => setSwiper(s)}
            onSlideChange={(s) => setActiveIndex(s.realIndex ?? s.activeIndex)}
          >
            {projects.map((p, i) => (
              <SwiperSlide key={i} className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.03, y: -6 }}
                  className="w-72 md:w-80 rounded-xl overflow-hidden shadow-2xl bg-black/40 border border-white/10 cursor-pointer"
                  onClick={() => {
                    // navigate to live demo when clicking slide
                    window.open(p.live, "_blank");
                  }}
                >
                  <div
                    className="h-48 md:h-56 bg-center bg-cover"
                    style={{ backgroundImage: `url(${p.image})` }}
                    role="img"
                    aria-label={p.title}
                  />
                  <div className="p-4 bg-linear-to-t from-black/70 to-transparent text-white">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="text-sm text-slate-300 mt-1">{p.subtitle}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* small pagination / hint row */}
          <div className="mt-6 flex items-center gap-3 text-sm text-slate-300">
            <span className="opacity-80">Featured:</span>
            {projects.map((p, i) => (
              <button
                key={i}
                onClick={() => {
                  swiper?.slideToLoop(i);
                }}
                className={`w-2 h-2 rounded-full ${i === activeIndex ? "bg-white" : "bg-white/30"} transition`}
                aria-label={`Go to ${p.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
// ...existing code...