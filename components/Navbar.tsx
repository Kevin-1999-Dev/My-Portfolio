"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/profile";
import { Icon } from "./Icons";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="theme-header sticky top-0 z-40">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex items-center gap-3"
          aria-label="KZH DEV — home"
        >
          <span className="clip-corner-sm grid h-9 w-9 place-items-center border border-neon-cyan/50 bg-neon-cyan/10 font-display text-sm font-bold text-neon-cyan shadow-[0_0_18px_rgba(0,240,255,0.18)]">
            KZ
          </span>
          <span className="font-display text-base tracking-[0.16em] text-ink sm:text-lg">
            KZH<span className="text-neon-magenta">{"//"}</span>DEV
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link px-4 py-2 font-mono text-sm tracking-[0.14em] transition-colors ${
                  active ? "text-neon-cyan" : "text-muted hover:text-ink"
                }`}
              >
                <span className="mr-1 text-[10px] text-neon-magenta/60">
                  {link.code}
                </span>
                {link.label}
                {active && (
                  <span className="absolute -bottom-px left-4 right-4 h-px bg-neon-cyan shadow-[0_0_8px_#00f0ff]" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-neon-lime">
            <span className="status-dot" />
            SYSTEM ONLINE
          </div>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center border border-neon-cyan/30 text-neon-cyan md:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile navigation" className="theme-header px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 border-b border-divider py-3 font-mono text-sm tracking-[0.14em] last:border-0 ${
                  active ? "text-neon-cyan" : "text-muted"
                }`}
              >
                <span className="text-[10px] text-neon-magenta/60">{link.code}</span>
                {link.label}
                <Icon name="chevronRight" className="ml-auto h-4 w-4" />
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
