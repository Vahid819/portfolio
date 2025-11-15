"use client";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

function Navbar() {
  const [isClient, setIsClient] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      {/* ✅ Background blur overlay behind the navbar */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-md z-40 transition-opacity duration-300"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}

      {/* Navbar (sits above the overlay) */}
      <header
        id="navbar"
        className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] h-16 z-50 
                   border border-white/20 bg-white/10 backdrop-blur-md 
                   rounded-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] 
                   flex items-center justify-between px-6 overflow-visible"
      >
        {/* Left section: logo / avatar */}
        <div className="flex items-center space-x-3 md:w-0 w-full justify-around">
          <Avatar className="w-12 h-12">
            <AvatarImage src="/vahid.jpeg" alt="Profile" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          {/* Mobile toggle button (hamburger / close icon) */}
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-white/10 transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex space-x-8 text-xl">
            {[
              { href: "/", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#skills", label: "Skills" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <NavigationMenuItem
                key={link.href}
                className="group px-3 py-1 rounded-md transition-all duration-300 hover:bg-white/10 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
              >
                <Link href={link.href}>{link.label}</Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/signin"
            className="px-4 py-2 text-lg rounded-lg transition-all duration-300 hover:text-white hover:bg-white/10 hover:scale-105 active:scale-95"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 text-lg rounded-lg border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-[0_0_20px_0_rgba(255,255,255,0.3)] active:scale-95"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Dropdown (above overlay) */}
        {mobileOpen && (
          <nav
            className="md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-4 
                       w-[90%] rounded-xl bg-white/10 border border-white/20 
                       shadow-lg p-4 flex flex-col space-y-2 backdrop-blur-lg z-50"
          >
            {[
              { href: "/", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#skills", label: "Skills" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 text-lg rounded-md hover:bg-white/20 transition-all"
              >
                {link.label}
              </Link>
            ))}

            <div className="flex items-center justify-between pt-2 border-t border-white/10 mt-2">
              <Link
                href="/signin"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 text-lg hover:bg-white/10 rounded-md"
              >
                Login
              </Link>
              <Link
                href="/signup"
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 text-lg border border-white/20 rounded-md hover:bg-white/20"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}

export default Navbar;
