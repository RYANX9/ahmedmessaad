"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme") as Theme | null;
    setTheme(current === "light" ? "light" : "dark");
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-[var(--line-strong)] text-[var(--ink-dim)] transition hover:border-[var(--ink)] hover:text-[var(--ink)] ${className}`}
    >
      {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
    </button>
  );
}
