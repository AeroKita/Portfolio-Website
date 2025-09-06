"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#home", id: "nav.home", defaultLabel: "Home" },
  { href: "#about", id: "nav.about", defaultLabel: "About" },
  { href: "#blog", id: "nav.blog", defaultLabel: "Blog" },
  { href: "#contact", id: "nav.contact", defaultLabel: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#ffd700]/20 bg-[#0a202c]/90 backdrop-blur supports-[backdrop-filter]:bg-[#0a202c]/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="font-semibold tracking-tight text-[#e2e8f0]">
          <span className="text-2xl sm:text-3xl">
            Aero Kita
          </span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-3">
          {navItems.map((item) => (
            <Button key={item.href} asChild variant="ghost" className="text-[#e2e8f0] hover:bg-[#ffd700]/10 hover:text-[#ffd700] text-base sm:text-lg">
              <Link href={item.href}>{item.defaultLabel}</Link>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

