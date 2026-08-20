// Signature chrome for the "stitched swatch" theme: two material textures —
// a contour field for the research track and a dimension grid for the
// systems track — held together by a hand-drawn running stitch. The weave
// pattern is the payoff, used once, where the two textures interleave into
// a single fabric.
//
// Below the original set: a second layer of pieces (glass, pins, grain,
// scatter, spool) meant to be used sparingly as accents rather than full
// backgrounds — the sewing-kit objects and annotation marks that make the
// swatch feel handled rather than printed.

import { useId } from "react";

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
// Accent layer — sparse, hand-placed pieces rather than full-bleed textures.
// ---------------------------------------------------------------------------

// Slow rotating stitched ring. Drop behind a photo or sticker, absolutely
// positioned and centered, larger than its subject by ~20-40px.
export function StitchRing({
  className = "",
  color = "var(--stitch)",
  size = 220,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  const r = size / 2 - 4;
  const c = size / 2;
  return (
    <svg
      className={`seam-spin pointer-events-none ${className}`}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
    >
      <circle cx={c} cy={c} r={r} fill="none" stroke={color} strokeWidth="1.4" strokeDasharray="1 7" strokeLinecap="round" opacity="0.55" />
      <circle cx={c} cy={c} r={r - 11} fill="none" stroke={color} strokeWidth="1" strokeDasharray="0.5 5" opacity="0.3" />
    </svg>
  );
}

// True glassmorphism, not a flat SVG approximation — needs to sit inside a
// `relative overflow-hidden` element that already has the border radius you
// want, since it inherits it. Good over a photo frame or a raised card.
export function GlassSheen({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] ${className}`} aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 26%, rgba(255,255,255,0) 74%, rgba(255,255,255,0.09) 100%)",
        }}
      />
      <div
        className="absolute -inset-x-12 top-0 h-full opacity-35"
        style={{
          background: "linear-gradient(115deg, transparent 42%, rgba(255,255,255,0.28) 49%, transparent 56%)",
        }}
      />
      <div className="absolute inset-0 rounded-[inherit] border border-white/10" />
    </div>
  );
}

// Fine-grained noise, closer to film grain than to a repeating PNG. Layer at
// low opacity over a raised surface to break up flat dark fills.
export function GrainOverlay({
  className = "",
  opacity = 0.05,
}: {
  className?: string;
  opacity?: number;
}) {
  const filterId = useId();
  return (
    <svg className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} aria-hidden="true">
      <filter id={filterId}>
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter={`url(#${filterId})`} opacity={opacity} />
    </svg>
  );
}

// A sewing pin. Use as a small, tilted corner accent on a card or photo —
// not a background pattern, one or two per composition at most.
export function PinMarker({
  className = "",
  color = "var(--coral)",
  rotate = -12,
  size = 28,
}: {
  className?: string;
  color?: string;
  rotate?: number;
  size?: number;
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <line x1="20" y1="14" x2="12" y2="34" stroke="rgba(0,0,0,0.35)" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="19" y1="13" x2="11" y2="33" stroke="#a8adb3" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="19" cy="10" r="9" fill={color} stroke="rgba(0,0,0,0.25)" strokeWidth="1" />
      <circle cx="15.5" cy="6.5" r="2.3" fill="rgba(255,255,255,0.5)" />
    </svg>
  );
}

// Deterministic scatter of mono glyphs — an alternative to the full-bleed
// field patterns for tighter spaces (a card corner, a hero margin). Fixed
// seed so it renders identically on server and client.
const SCATTER_SEED: Array<[number, number, string, number]> = [
  [8, 14, "×", 0],
  [24, 72, "+", 8],
  [46, 28, "·", 0],
  [63, 84, "\u2234", -6],
  [79, 18, "/", 4],
  [91, 52, "+", 0],
  [35, 92, "×", -3],
  [12, 46, "\u2014", 10],
  [55, 8, "·", 0],
];

export function ScatterGlyphs({
  className = "",
  color = "var(--ink-faint)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 select-none ${className}`} aria-hidden="true">
      {SCATTER_SEED.map(([x, y, glyph, rotate], i) => (
        <span
          key={i}
          className="absolute font-mono text-[11px]"
          style={{ left: `${x}%`, top: `${y}%`, color, opacity: 0.4, transform: `rotate(${rotate}deg)` }}
        >
          {glyph}
        </span>
      ))}
    </div>
  );
}

// A single blueprint-style coordinate/measure annotation. Pair with a stat
// number or a corner of a featured card — the payoff is in using it once
// or twice, not tiling it.
export function MeasureAnnotation({
  className = "",
  label = "01.000",
  color = "var(--clay)",
}: {
  className?: string;
  label?: string;
  color?: string;
}) {
  return (
    <svg className={`pointer-events-none ${className}`} width="90" height="24" viewBox="0 0 90 24" aria-hidden="true">
      <line x1="0" y1="12" x2="18" y2="12" stroke={color} strokeWidth="1" opacity="0.6" />
      <circle cx="18" cy="12" r="2" fill={color} />
      <text x="24" y="16" fontSize="9" letterSpacing="0.05em" fill={color} opacity="0.75" style={{ fontFamily: "var(--font-mono)" }}>
        {label}
      </text>
    </svg>
  );
}

// A decorative object rather than a texture — wound thread on a spool, with
// a stray tail. Fits best in quiet corners: a footer, an empty hero margin.
export function ThreadSpool({
  className = "",
  color = "var(--sage)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg className={className} width="46" height="58" viewBox="0 0 46 58" fill="none" aria-hidden="true">
      <rect x="6" y="4" width="34" height="6" rx="1.5" stroke={color} strokeWidth="1.4" />
      <rect x="6" y="48" width="34" height="6" rx="1.5" stroke={color} strokeWidth="1.4" />
      <path
        d="M10 10 L10 48 M14 10 L14 48 M18 10 L18 48 M22 10 L22 48 M26 10 L26 48 M30 10 L30 48 M36 10 L36 48"
        stroke={color}
        strokeWidth="0.8"
        opacity="0.45"
      />
      <path
        d="M6 16 Q23 21 40 16 M6 24 Q23 29 40 24 M6 32 Q23 37 40 32 M6 40 Q23 45 40 40"
        stroke={color}
        strokeWidth="1"
        opacity="0.85"
      />
      <path d="M32 38 Q41 44 38 55" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}
