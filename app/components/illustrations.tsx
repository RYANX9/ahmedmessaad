"use client";

// Signature chrome for the "stitched swatch" theme: two material textures —
// a contour field for the research track and a dimension grid for the
// systems track — held together by a hand-drawn running stitch. The weave
// pattern is the payoff, used once, where the two textures interleave into
// a single fabric.
//
// The components below this line extend the same language toward a more
// premium finish: glass sheens, ambient glow, film grain, and a running
// stitch traced along a glass ring. Nothing here is a generic glassmorphism
// card — every effect ties back to the sage/clay/coral/mint/stitch palette
// and the hand-drawn line weight already established above.

import { useId } from "react";
import { motion } from "framer-motion";

export function ContourField({
  className = "",
  color = "var(--sage)",
  opacity = 0.4,
}: {
  className?: string;
  color?: string;
  opacity?: number;
}) {
  const rows = [30, 75, 120, 165, 210, 255];
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 320 280"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <g stroke={color} strokeWidth="0.7" fill="none" opacity={opacity}>
        {rows.map((y, i) => (
          <path
            key={y}
            d={`M-20 ${y} Q60 ${y - (i % 2 === 0 ? 28 : 14)} 140 ${y + (i % 2 === 0 ? 10 : -6)} T340 ${y - 10}`}
          />
        ))}
      </g>
    </svg>
  );
}

export function DimensionGrid({
  className = "",
  color = "var(--clay)",
  opacity = 0.35,
}: {
  className?: string;
  color?: string;
  opacity?: number;
}) {
  const lines = [0, 40, 80, 120, 160, 200, 240, 280, 320];
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 320 280"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <g stroke={color} strokeWidth="0.5" opacity={opacity}>
        {lines.map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="280" />
        ))}
        {[0, 40, 80, 120, 160, 200, 240, 280].map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="320" y2={y} />
        ))}
      </g>
      <g stroke={color} strokeWidth="1" opacity={Math.min(opacity + 0.2, 1)}>
        <line x1="12" y1="12" x2="12" y2="24" />
        <line x1="12" y1="12" x2="24" y2="12" />
      </g>
    </svg>
  );
}

export function StitchSeam({
  className = "",
  orientation = "vertical",
}: {
  className?: string;
  orientation?: "vertical" | "horizontal";
}) {
  const vertical = orientation === "vertical";
  const path = vertical
    ? "M100 -10 Q84 40 106 80 Q124 118 92 158 Q70 198 106 236 Q122 262 100 290"
    : "M-10 100 Q40 84 80 106 Q118 124 158 92 Q198 70 236 106 Q262 122 290 100";

  const ticks = vertical
    ? [
        [86, 8, 116, 4],
        [92, 52, 122, 48],
        [80, 96, 110, 92],
        [66, 140, 96, 136],
        [78, 184, 108, 180],
        [92, 228, 122, 224],
      ]
    : [
        [8, 86, 4, 116],
        [52, 92, 48, 122],
        [96, 80, 92, 110],
        [140, 66, 136, 96],
        [184, 78, 180, 108],
        [228, 92, 224, 122],
      ];

  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 200 280"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        className="stitch-path"
        d={path}
        stroke="var(--stitch)"
        strokeWidth="1.5"
        fill="none"
        pathLength={1}
        opacity="0.8"
      />
      <g className="stitch-ticks" stroke="var(--stitch)" strokeWidth="1" opacity="0.6">
        {ticks.map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
        ))}
      </g>
    </svg>
  );
}

export function WeavePattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 320 200"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <g stroke="var(--sage)" strokeWidth="0.6" opacity="0.3">
        {Array.from({ length: 14 }).map((_, i) => (
          <line key={`s${i}`} x1={i * 28 - 60} y1="0" x2={i * 28 - 60 + 200} y2="200" />
        ))}
      </g>
      <g stroke="var(--clay)" strokeWidth="0.6" opacity="0.3">
        {Array.from({ length: 14 }).map((_, i) => (
          <line key={`c${i}`} x1={i * 28 - 60 + 200} y1="0" x2={i * 28 - 60} y2="200" />
        ))}
      </g>
    </svg>
  );
}

export function StitchCorners({
  className = "",
  color = "var(--stitch)",
}: {
  className?: string;
  color?: string;
}) {
  const mark = (x: number, y: number, flipX = false, flipY = false) => {
    const dx = flipX ? -1 : 1;
    const dy = flipY ? -1 : 1;
    return (
      <g key={`${x}-${y}`} stroke={color} strokeWidth="1.3" opacity="0.55">
        <line x1={x} y1={y} x2={x + 9 * dx} y2={y + 3 * dy} />
        <line x1={x} y1={y} x2={x + 3 * dx} y2={y + 9 * dy} />
      </g>
    );
  };
  return (
    <svg className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      {mark(6, 6)}
      {mark(94, 6, true)}
      {mark(6, 94, false, true)}
      {mark(94, 94, true, true)}
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Premium layer
// ---------------------------------------------------------------------------

// Ambient glass glow: two soft gradient blobs plus a pair of interlocked
// rings, one traced with a running stitch. This is the site's answer to a
// glossy hero orb — same idea, rendered as line art in the house palette
// instead of a rendered glass material.
export function AmbientOrb({
  className = "",
  primary = "var(--coral)",
  secondary = "var(--mint)",
}: {
  className?: string;
  primary?: string;
  secondary?: string;
}) {
  const id = useId();
  return (
    <svg
      className={`pointer-events-none absolute ${className}`}
      viewBox="0 0 400 400"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`orb-a-${id}`} cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor={primary} stopOpacity="0.5" />
          <stop offset="100%" stopColor={primary} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`orb-b-${id}`} cx="65%" cy="70%" r="70%">
          <stop offset="0%" stopColor={secondary} stopOpacity="0.45" />
          <stop offset="100%" stopColor={secondary} stopOpacity="0" />
        </radialGradient>
        <filter id={`orb-blur-${id}`}>
          <feGaussianBlur stdDeviation="20" />
        </filter>
      </defs>

      <g filter={`url(#orb-blur-${id})`}>
        <circle cx="160" cy="160" r="130" fill={`url(#orb-a-${id})`} />
        <circle cx="240" cy="240" r="130" fill={`url(#orb-b-${id})`} />
      </g>

      <g fill="none" strokeWidth="1.4" opacity="0.5">
        <circle cx="165" cy="165" r="92" stroke={primary} />
        <circle cx="235" cy="235" r="92" stroke={secondary} />
      </g>

      <circle
        cx="165"
        cy="165"
        r="92"
        fill="none"
        stroke="var(--stitch)"
        strokeWidth="1"
        strokeDasharray="4 5"
        opacity="0.65"
      />
    </svg>
  );
}

// A diagonal specular highlight, the way light catches a pane of glass.
// Layer this over a bordered panel — it reads as a coat of glass without
// needing an actual blurred background behind it.
export function GlassSheen({
  className = "",
  strength = 0.22,
}: {
  className?: string;
  strength?: number;
}) {
  const id = useId();
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`sheen-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="40%" stopColor="white" stopOpacity="0" />
          <stop offset="50%" stopColor="white" stopOpacity={strength} />
          <stop offset="60%" stopColor="white" stopOpacity="0" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill={`url(#sheen-${id})`} style={{ mixBlendMode: "overlay" }} />
    </svg>
  );
}

// A frosted-glass wrapper: translucent panel, inner top-edge highlight, and
// a sheen pass. Border radius is inherited from whatever className sets on
// the wrapping element so it drops into existing card shapes cleanly.
export function GlassPanel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[inherit] backdrop-blur-md ${className}`}
      style={{
        background: "color-mix(in srgb, var(--bg-raised) 55%, transparent)",
        boxShadow: "inset 0 1px 0 0 color-mix(in srgb, var(--ink) 14%, transparent)",
      }}
    >
      <GlassSheen />
      {children}
    </div>
  );
}

// Subtle film grain, the kind of thing that separates "flat CSS gradient"
// from "printed material." Meant to sit at very low opacity across a large
// area — a hero section, or the whole page.
export function GrainOverlay({
  className = "",
  opacity = 0.05,
}: {
  className?: string;
  opacity?: number;
}) {
  const id = useId();
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    >
      <filter id={`grain-${id}`}>
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" result="noise" />
        <feColorMatrix in="noise" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.6 0" />
      </filter>
      <rect width="100%" height="100%" filter={`url(#grain-${id})`} opacity={opacity} />
    </svg>
  );
}

// A slow light sweep across a card — the premium "catches the eye once,
// then gets out of the way" motion. Repeats on a long delay so it reads as
// an ambient detail, not a loading spinner.
export function ScanPulse({
  className = "",
  color = "var(--coral)",
}: {
  className?: string;
  color?: string;
}) {
  const id = useId();
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full overflow-hidden ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`scan-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={color} stopOpacity="0" />
          <stop offset="50%" stopColor={color} stopOpacity="0.45" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.rect
        y="0"
        width="16%"
        height="100%"
        fill={`url(#scan-${id})`}
        initial={{ x: "-20%" }}
        animate={{ x: "110%" }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 3.5, ease: "easeInOut" }}
      />
    </svg>
  );
}

// A running-stitch horizontal rule — replaces a plain 1px divider line with
// one that matches the hand-stitched seams used elsewhere on the page.
export function ThreadDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none w-full ${className}`}
      viewBox="0 0 400 10"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line x1="0" y1="5" x2="400" y2="5" stroke="var(--stitch)" strokeWidth="1" strokeDasharray="7 5" opacity="0.55" />
      <g stroke="var(--stitch)" strokeWidth="1" opacity="0.4">
        <line x1="0" y1="1" x2="0" y2="9" />
        <line x1="400" y1="1" x2="400" y2="9" />
      </g>
    </svg>
  );
}

// A tiny grommet/rivet mark — a fastener detail for card corners, an
// alternative to StitchCorners with a rounder, more "hardware" read.
export function RivetPin({
  className = "",
  color = "var(--stitch)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg className={`pointer-events-none ${className}`} viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="6.5" fill="none" stroke={color} strokeWidth="1" opacity="0.6" />
      <circle cx="10" cy="10" r="1.4" fill={color} opacity="0.8" />
      <line x1="10" y1="1.5" x2="10" y2="4.5" stroke={color} strokeWidth="1" opacity="0.5" />
      <line x1="10" y1="15.5" x2="10" y2="18.5" stroke={color} strokeWidth="1" opacity="0.5" />
      <line x1="1.5" y1="10" x2="4.5" y2="10" stroke={color} strokeWidth="1" opacity="0.5" />
      <line x1="15.5" y1="10" x2="18.5" y2="10" stroke={color} strokeWidth="1" opacity="0.5" />
    </svg>
  );
}
