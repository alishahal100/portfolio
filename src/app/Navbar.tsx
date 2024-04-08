"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/component/ui/navbar-menu";
import { cn } from "@/utils/cn";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2 " />
     
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 max-h-20 inset-x-0 max-w-3xl mx-auto z-50 bg-black", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Web Development</HoveredLink>
            <HoveredLink href="/">Interface Design</HoveredLink>
            <HoveredLink href="/">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/">Branding</HoveredLink>
          </div>
        </MenuItem>
        <a href="#about">

        <MenuItem  item="About">
         
        </MenuItem>
        </a>
        <a href="#contact">

        <MenuItem item="Contact">
          
        </MenuItem>
        </a>
      </Menu>
    </div>
  );
}
