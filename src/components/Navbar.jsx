"use client";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

function Navbar() {
  // Ensure animations and dynamic elements are client-side only
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true after the component is mounted on the client
  }, []);

  if (!isClient) {
    return null; // Avoid rendering before hydration
  }

  return (
    <div
      id="navbar"
      className="w-[90%] fixed h-16 top-6 left-1/2 transform -translate-x-1/2 rounded-xl z-50 border border-white/20 bg-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-md backdrop-filter flex items-center px-6 justify-around before:absolute before:inset-0 before:rounded-xl before:animate-smoke before:bg-linear-to-r before:from-purple-500/10 before:via-pink-500/10 before:to-purple-500/10 before:-z-10 overflow-hidden"
    >
      <Avatar className="w-12 h-12">
        <AvatarImage src="/vahid.jpeg" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <NavigationMenu className="w-auto">
        <NavigationMenuList className="space-x-8">
          <NavigationMenuItem className="group w-30 text-xl text-center rounded-md px-3 py-1 transition-all duration-500 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] relative overflow-hidden before:absolute before:inset-0 before:rounded-md before:animate-menuSmoke before:bg-linear-to-r before:from-blue-500/10 before:via-purple-500/10 before:to-pink-500/10 before:-z-10">
            <Link href="/">Home</Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="group w-30 text-xl text-center rounded-md px-3 py-1 transition-all duration-500 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] relative overflow-hidden before:absolute before:inset-0 before:rounded-md before:animate-menuSmoke before:bg-linear-to-r before:from-blue-500/10 before:via-purple-500/10 before:to-pink-500/10 before:-z-10">
            <Link href="/about">About</Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="group w-30 text-xl text-center rounded-md px-3 py-1 transition-all duration-500 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] relative overflow-hidden before:absolute before:inset-0 before:rounded-md before:animate-menuSmoke before:bg-linear-to-r before:from-blue-500/10 before:via-purple-500/10 before:to-pink-500/10 before:-z-10">
            <Link href="/projects">Skills</Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="group w-30 text-xl text-center rounded-md px-3 py-1 transition-all duration-500 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] relative overflow-hidden before:absolute before:inset-0 before:rounded-md before:animate-menuSmoke before:bg-linear-to-r before:from-blue-500/10 before:via-purple-500/10 before:to-pink-500/10 before:-z-10">
            <Link href="/projects">Projects</Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="group w-30 text-xl text-center rounded-md px-3 py-1 transition-all duration-500 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] relative overflow-hidden before:absolute before:inset-0 before:rounded-md before:animate-menuSmoke before:bg-linear-to-r before:from-blue-500/10 before:via-purple-500/10 before:to-pink-500/10 before:-z-10">
            <Link href="/contact">Contact</Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center space-x-4">
        <Link
          href="/signin"
          className="px-4 py-2 text-xl rounded-lg relative overflow-hidden transition-all duration-300 hover:text-white hover:bg-white/10 hover:scale-105 active:scale-95"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="px-4 py-2 text-xl rounded-lg border border-white/20 relative overflow-hidden transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-[0_0_20px_0_rgba(255,255,255,0.3)] active:scale-95"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
