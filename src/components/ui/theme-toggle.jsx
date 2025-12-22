"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark" || stored === "light") {
        setMode(stored);
      } else {
        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        setMode(prefersDark ? "dark" : "light");
      }
    } catch {
      setMode("light");
    }
  }, []);

  useEffect(() => {
    try {
      if (mode === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", mode);
    } catch {}
  }, [mode]);

  return (
    <Button
      size="sm"
      variant="outline"
      onClick={() => setMode((m) => (m === "dark" ? "light" : "dark"))}
      aria-label="Toggle theme"
      className="flex items-center gap-2"
    >
      {mode === "dark" ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.79 1.8-1.79zM1 13h3v-2H1v2zm10 8h2v-3h-2v3zm7.04-17.66l-1.79 1.79 1.8 1.79 1.79-1.79-1.8-1.79zM17.24 19.16l1.8 1.79 1.79-1.79-1.79-1.79-1.8 1.79zM20 11v2h3v-2h-3zM4.93 19.07L3.17 20.83l1.79 1.79 1.76-1.76-1.79-1.79zM12 6a6 6 0 100 12 6 6 0 000-12z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-700 dark:text-slate-100" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.752 15.002A9 9 0 1112.998 2.248 7 7 0 0021.752 15z" />
        </svg>
      )}
      <span className="text-xs hidden sm:inline">{mode === "dark" ? "Dark" : "Light"}</span>
    </Button>
  );
}
