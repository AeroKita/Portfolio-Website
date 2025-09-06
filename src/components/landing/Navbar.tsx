"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { EditableText } from "@/lib/edit-mode";

const navItems = [
  { href: "#home", id: "nav.home", defaultLabel: "Home" },
  { href: "#about", id: "nav.about", defaultLabel: "About" },
  { href: "#blog", id: "nav.blog", defaultLabel: "Blog" },
  { href: "#contact", id: "nav.contact", defaultLabel: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-neutral-800/60 dark:bg-neutral-950/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">
          <span className="text-lg">
            <EditableText id="brand.name" as="span">Aero Kita</EditableText>
          </span>
        </Link>
        <nav className="flex items-center gap-2 sm:gap-3">
          {navItems.map((item) => (
            <Button key={item.href} asChild variant="ghost" className="text-neutral-800 hover:bg-amber-100 hover:text-amber-900 dark:text-neutral-100 dark:hover:bg-amber-900/20 dark:hover:text-amber-200">
              <Link href={item.href}>
                <EditableText id={item.id} as="span">{item.defaultLabel}</EditableText>
              </Link>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

