"use client";

import { useLayoutEffect, useSyncExternalStore } from "react";
import { Icon } from "./Icons";

type Theme = "dark" | "light";

const STORAGE_KEY = "portfolio-theme";
const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) callback();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isDark = theme === "dark";

  // Dev Strict Mode remounts can clear the attribute set by the inline script.
  useLayoutEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") {
      document.documentElement.dataset.theme = saved;
    }
  }, []);

  function toggle() {
    const next: Theme = isDark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable in private browsing — theme still applies.
    }
    listeners.forEach((listener) => listener());
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={!isDark}
      title={isDark ? "Light mode" : "Dark mode"}
      className="theme-chip clip-corner-sm group flex h-9 items-center gap-2 px-2.5 text-muted transition-colors hover:text-neon-cyan"
    >
      <Icon
        name={isDark ? "moon" : "sun"}
        className="h-4 w-4 transition-transform group-hover:rotate-12"
      />
      <span className="hidden font-mono text-[10px] tracking-[0.14em] xl:inline">
        {isDark ? "DARK" : "LIGHT"}
      </span>
    </button>
  );
}
