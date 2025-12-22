"use client"

import { useEffect, useRef } from "react";

export default function ScrollEffects() {
  const rafRef = useRef(null);
  const ticking = useRef(false);

  useEffect(() => {
    // Reveal on scroll using IntersectionObserver
    const revealEls = Array.from(document.querySelectorAll("[data-reveal]"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            // if you want one-time reveal, unobserve
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach((el) => io.observe(el));

    // Simple parallax for elements with data-parallax and data-speed
    const parallaxEls = Array.from(document.querySelectorAll("[data-parallax]"));

    function onScroll() {
      if (!ticking.current) {
        rafRef.current = requestAnimationFrame(() => {
          const scrolled = window.scrollY || window.pageYOffset;
          parallaxEls.forEach((el) => {
            const speed = parseFloat(el.getAttribute("data-speed") || "0.2");
            // translateY in opposite direction for depth effect
            const offset = (scrolled - (el.dataset._base || 0)) * speed;
            el.style.transform = `translateY(${offset}px)`;
          });
          ticking.current = false;
        });
        ticking.current = true;
      }
    }

    // store initial base position for each parallax element
    parallaxEls.forEach((el) => {
      el.dataset._base = el.getBoundingClientRect().top + window.scrollY;
      // enable will-change for smoother transforms
      el.style.willChange = "transform";
    });

    window.addEventListener("scroll", onScroll, { passive: true });

    // initial trigger
    onScroll();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return null;
}
