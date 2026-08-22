"use client";

import { motion } from "framer-motion";

export function PulseLine({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none ${className}`}
      viewBox="0 0 800 60"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line x1="0" y1="30" x2="800" y2="30" stroke="var(--line)" strokeWidth="1.5" />
      <motion.path
        d="M0 30 H250 L272 30 L288 6 L306 54 L322 30 L340 30 L354 16 L366 30 H800"
        fill="none"
        stroke="var(--orange)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 1.6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1.6,
        }}
      />
    </svg>
  );
}
