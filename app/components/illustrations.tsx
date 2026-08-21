// Shared chrome for the "case file" theme: a specimen-stamp signature motif
// (Stamp / Seal), a light film-grain overlay standing in for the texture of
// a printed report, a blueprint panel used as a cover when a project has no
// screenshot, and an infinite marquee for the credentials ticker.

import { Award } from "lucide-react";

export function GrainOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[80] opacity-[0.05] mix-blend-multiply"
      aria-hidden="true"
    >
      <svg width="100%" height="100%">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves={2} stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
}

export function Stamp({
  children,
  rotate = -6,
  tone = "ink",
  className = "",
}: {
  children: React.ReactNode;
  rotate?: number;
  tone?: "ink" | "stain" | "graphite";
  className?: string;
}) {
  const color = { ink: "var(--ink)", stain: "var(--stain)", graphite: "var(--graphite)" }[tone];
  return (
    <div className={`inline-flex ${className}`} style={{ transform: `rotate(${rotate}deg)` }}>
      <div className="relative px-4 py-2" style={{ border: `1.5px solid ${color}` }}>
        <div className="pointer-events-none absolute inset-[3px]" style={{ border: `1px dashed ${color}`, opacity: 0.55 }} />
        <span
          className="relative whitespace-nowrap font-mono text-[10px] font-bold uppercase tracking-[0.22em]"
          style={{ color }}
        >
          {children}
        </span>
      </div>
    </div>
  );
}

export function Seal({ title, sub }: { title: string; sub: string }) {
  return (
    <div
      className="relative flex h-28 w-28 shrink-0 rotate-[-4deg] items-center justify-center rounded-full text-center"
      style={{ border: "1.5px solid var(--ink)" }}
    >
      <div className="pointer-events-none absolute inset-[5px] rounded-full" style={{ border: "1px dashed var(--ink-faint)" }} />
      <div className="relative px-3">
        <Award size={14} className="mx-auto mb-1.5" style={{ color: "var(--stain)" }} />
        <p className="font-mono text-[8.5px] font-bold uppercase leading-tight tracking-wide text-[var(--ink)]">
          {title}
        </p>
        <p className="mt-1 font-mono text-[7.5px] uppercase tracking-wide text-[var(--ink-faint)]">{sub}</p>
      </div>
    </div>
  );
}

export function BlueprintPanel({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        border: "1px solid var(--line-strong)",
        backgroundColor: "var(--paper-raised)",
        backgroundImage:
          "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
        backgroundSize: "18px 18px",
      }}
      aria-hidden="true"
    >
      {[
        ["left-2 top-2", "border-l border-t"],
        ["right-2 top-2", "border-r border-t"],
        ["left-2 bottom-2", "border-l border-b"],
        ["right-2 bottom-2", "border-r border-b"],
      ].map(([pos, border]) => (
        <span
          key={pos}
          className={`absolute h-2.5 w-2.5 ${pos} ${border}`}
          style={{ borderColor: "var(--graphite)" }}
        />
      ))}
      <div className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: "var(--graphite)" }}>
        {label}
      </div>
    </div>
  );
}

export function IndexMark({
  index,
  label,
  className = "",
}: {
  index: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--ink-faint)] ${className}`}>
      <span className="text-[var(--stain)]">{index}</span>
      <span>{label}</span>
      <span className="h-px flex-1" style={{ backgroundImage: "repeating-linear-gradient(90deg, var(--line-strong) 0 4px, transparent 4px 8px)" }} />
    </div>
  );
}

export function Redaction({
  widths = [88, 62, 74],
  className = "",
}: {
  widths?: number[];
  className?: string;
}) {
  return (
    <div className={`space-y-1.5 ${className}`} aria-hidden="true">
      {widths.map((w, i) => (
        <div key={i} className="h-[7px]" style={{ width: `${w}%`, background: "var(--ink)", opacity: 0.86 }} />
      ))}
    </div>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const row = items.join("   —   ") + "   —   ";
  return (
    <div className="overflow-hidden" style={{ background: "var(--ink)" }} aria-hidden="true">
      <div className="marquee-track py-3">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="whitespace-nowrap px-3 font-mono text-xs uppercase tracking-[0.2em]"
            style={{ color: "var(--paper)" }}
          >
            {row}
          </span>
        ))}
      </div>
    </div>
  );
}
