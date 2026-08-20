"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#log", label: "Log" },
  { href: "#stack", label: "Stack" },
  { href: "#papers", label: "Papers" },
  { href: "#connect", label: "Connect" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((n) => document.querySelector(n.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={`mx-auto max-w-6xl px-6 transition-all duration-300 ${scrolled ? "pt-3" : "pt-6"}`}>
        <div
          className="flex items-center justify-between rounded-full border px-5 py-3 font-mono text-xs uppercase tracking-widest transition-all duration-300"
          style={{
            borderColor: scrolled ? "var(--line-strong)" : "transparent",
            background: scrolled ? "color-mix(in srgb, var(--bg) 74%, transparent)" : "transparent",
            backdropFilter: scrolled ? "blur(14px)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
            boxShadow: scrolled ? "0 8px 30px rgba(0,0,0,0.18)" : "none",
          }}
        >
          <a href="#top" className="text-[var(--ink)]">
            AM — 01
          </a>

          <nav className="hidden gap-6 md:flex">
            {navLinks.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="relative pb-1 transition"
                style={{ color: active === n.href ? "var(--ink)" : "var(--ink-dim)" }}
              >
                {n.label}
                {active === n.href && (
                  <motion.span
                    layoutId="nav-active-underline"
                    className="absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full"
                    style={{ background: "var(--coral)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--line-strong)] md:hidden"
          >
            {open ? <X size={14} /> : <Menu size={14} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 overflow-hidden rounded-2xl border md:hidden"
              style={{
                borderColor: "var(--line-strong)",
                background: "color-mix(in srgb, var(--bg-raised) 92%, transparent)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
              }}
            >
              <div className="flex flex-col divide-y divide-[var(--line)] font-mono text-sm uppercase tracking-widest">
                {navLinks.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="px-5 py-3.5"
                    style={{ color: active === n.href ? "var(--ink)" : "var(--ink-dim)" }}
                  >
                    {n.label}
                  </a>
                ))}
                <div className="flex items-center justify-between px-5 py-3.5">
                  <span className="text-[var(--ink-faint)]">Theme</span>
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
