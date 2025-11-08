import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

function Navbar() {
  return (
    <div className="w-[90%] h-16 absolute top-6 left-1/2 transform -translate-x-1/2 rounded-xl border border-white/20 bg-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-md backdrop-filter flex items-center px-6 justify-around">
      <Avatar className="w-10 h-10">
        <AvatarImage src="/vahid.jpeg" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <NavigationMenu>
        <NavigationMenuList className="space-x-8">
          <NavigationMenuItem className="w-20 text-center rounded-md px-3 py-1 transition-all duration-300 
            hover:bg-linear-to-r from-pink-500/20 to-purple-500/20 hover:scale-110 
            hover:shadow-lg hover:rotate-1">
            <Link href="/">Home</Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem className="w-20 text-center rounded-md px-3 py-1 transition-all duration-300
            hover:bg-linear-to-r from-blue-500/20 to-cyan-500/20 
            hover:-translate-y-1 hover:shadow-lg">
            <Link href="/about">About</Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem className="w-20 text-center rounded-md px-3 py-1 transition-all duration-300
            hover:bg-linear-to-r from-green-500/20 to-emerald-500/20
            hover:scale-105 hover:shadow-lg hover:-rotate-1">
            <Link href="/skills">Skills</Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem className="w-20 text-center rounded-md px-3 py-1 transition-all duration-300
            hover:bg-linear-to-r from-orange-500/20 to-yellow-500/20
            hover:scale-110 hover:shadow-lg hover:skew-x-2">
            <Link href="/projects">Projects</Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem className="w-20 text-center rounded-md px-3 py-1 transition-all duration-300
            hover:bg-linear-to-r from-violet-500/20 to-indigo-500/20
            hover:scale-105 hover:shadow-lg hover:translate-x-1">
            <Link href="/contact">Contact</Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center space-x-4">
        <Link
          href="/signin"
          className="px-4 py-2 rounded-lg relative overflow-hidden transition-all duration-300 
          hover:text-white hover:bg-white/10 hover:scale-105 active:scale-95"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="px-4 py-2 rounded-lg border border-white/20 relative overflow-hidden 
          transition-all duration-300 hover:bg-white/20 hover:scale-105 
          hover:shadow-[0_0_20px_0_rgba(255,255,255,0.3)] active:scale-95"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Navbar;