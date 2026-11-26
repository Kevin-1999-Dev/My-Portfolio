"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/lib/profile";
import { Icon } from "./Icons";
import ThemeToggle from "./ThemeToggle";
import { useTab } from "./TabContext";

export default function Navbar() {
  const { active, setActive } = useTab();
  const [open, setOpen] = useState(false);

  function select(tab: (typeof NAV_LINKS)[number]["key"]) {
    setActive(tab);
    setOpen(false);
  }

  return (
    <header className="theme-header sticky top-0 z-40">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        <button
          type="button"
          onClick={() => select("home")}
          className="group flex items-center gap-3"
          aria-label="KZH DEV — home"
        >
          <span className="clip-corner-sm grid h-9 w-9 place-items-center border border-neon-cyan/50 bg-neon-cyan/10 font-display text-sm font-bold text-neon-cyan shadow-[0_0_18px_rgba(0,240,255,0.18)]">
            KZ
          </span>
          <span className="font-display text-base tracking-[0.16em] text-ink sm:text-lg">
            KZH<span className="text-neon-magenta">{"//"}</span>DEV
          </span>
        </button>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.key;
            return (
              <button
                key={link.key}
                type="button"
                onClick={() => select(link.key)}
                aria-current={isActive ? "page" : undefined}
                className={`nav-link px-4 py-2 font-mono text-sm tracking-[0.14em] transition-colors ${
                  isActive ? "text-neon-cyan" : "text-muted hover:text-ink"
                }`}
              >
                <span className="mr-1 text-[10px] text-neon-magenta/60">
                  {link.code}
                </span>
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-px left-4 right-4 h-px bg-neon-cyan shadow-[0_0_8px_#00f0ff]" />
                )}
              </button>
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
            const isActive = active === link.key;
            return (
              <button
                key={link.key}
                type="button"
                onClick={() => select(link.key)}
                aria-current={isActive ? "page" : undefined}
                className={`flex w-full items-center gap-3 border-b border-divider py-3 text-left font-mono text-sm tracking-[0.14em] last:border-0 ${
                  isActive ? "text-neon-cyan" : "text-muted"
                }`}
              >
                <span className="text-[10px] text-neon-magenta/60">{link.code}</span>
                {link.label}
                <Icon name="chevronRight" className="ml-auto h-4 w-4" />
              </button>
            );
          })}
        </nav>
      )}
    </header>
  );
}
