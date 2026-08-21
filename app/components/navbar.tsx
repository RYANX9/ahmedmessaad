"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#research", label: "Research" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="mobile-drawer"
        style={open ? { transform: "translateY(0)" } : undefined}
      >
        <div className="drawer-header">
          <a href="#top" className="brand">
            ahmed <span>+</span> messaad
          </a>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            style={{ background: "none", border: "none", color: "#000", fontWeight: "bold", fontSize: "1.5rem", cursor: "pointer" }}
          >
            <X size={22} />
          </button>
        </div>
        <ul className="drawer-links">
          {navLinks.map((n) => (
            <li key={n.href}>
              <a href={n.href} onClick={() => setOpen(false)}>
                {n.label} <span>→</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-container">
        <nav className="navbar">
          <a href="#top" className="brand">
            ahmed <span>+</span> messaad
          </a>
          <ul className="nav-links">
            {navLinks.map((n) => (
              <li key={n.href}>
                <a href={n.href}>{n.label}</a>
              </li>
            ))}
          </ul>
          <div className="nav-right">
            <a href={`mailto:${profile.email}`} className="badge-yellow">
              Available →
            </a>
            <button type="button" className="menu-btn" onClick={() => setOpen(true)} aria-label="Open menu">
              <Menu size={22} color="#000" />
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
