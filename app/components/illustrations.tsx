// Shared chrome. The signature element is PulseLine: a single line that
// reads as a heartbeat trace in research contexts and a circuit trace in
// systems contexts, and physically merges the two in the About section.
// Everything else (VitalTag, SectionMark, ReadoutBadge) is a mono-readout
// language borrowed from the instruments this work actually produces —
// monitor strips and log panels — not a decorative "case file" motif.

import { motion } from "framer-motion";
import { Terminal, Database, Share2 } from "lucide-react";

export function GrainOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[80] opacity-[0.035] mix-blend-multiply"
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

type LineVariant = "pulse" | "trace" | "merge" | "steady";

const PATHS: Record<LineVariant, string> = {
  // Cardiac trace — sharp QRS spikes on a flat baseline. Research contexts.
  pulse:
    "M0,30 H220 L232,30 L244,6 L258,54 L270,12 L282,30 H560 L572,30 L584,6 L598,54 L610,12 L622,30 H900 L912,30 L924,6 L938,54 L950,12 L962,30 H1200",
  // Circuit trace — right-angle jogs, PCB style. Systems contexts.
  trace:
    "M0,30 H140 V10 H320 V50 H480 H620 V10 H780 V50 H960 H1200",
  // The two vocabularies meeting mid-line, at a shared node.
  merge:
    "M0,30 L60,30 L72,30 L84,6 L98,54 L110,12 L122,30 H300 V30 H480 V12 H600 V48 H720 H900 V12 H1060 V48 H1200",
  // A held, steady rhythm — used at Contact to signal an open channel.
  steady:
    "M0,30 H240 L252,20 L264,40 L276,30 H520 L532,20 L544,40 L556,30 H800 L812,20 L824,40 L836,30 H1080 L1092,20 L1104,40 L1116,30 H1200",
};

export function PulseLine({
  variant = "pulse",
  className = "",
  color,
}: {
  variant?: LineVariant;
  className?: string;
  color?: "signal" | "circuit" | "ink";
}) {
  const stroke =
    color === "circuit" ? "var(--circuit)" : color === "ink" ? "var(--ink)" : "var(--signal)";
  return (
    <svg
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <motion.path
        d={PATHS[variant]}
        fill="none"
        stroke={stroke}
        strokeWidth={1.75}
        strokeLinejoin="round"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}

// Small live-status indicator — a beating dot plus a mono readout, the way
// a monitor shows a channel is active. Used sparingly: nav + hero only.
export function LiveTag({ label, tone = "signal" }: { label: string; tone?: "signal" | "circuit" }) {
  const color = tone === "circuit" ? "var(--circuit)" : "var(--signal)";
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.2em]" style={{ color }}>
      <span className="live-dot h-1.5 w-1.5 rounded-full" style={{ background: color }} />
      {label}
    </span>
  );
}

// Track chip — replaces the old stamp. Reads like a channel label on a
// monitor strip: a color, a short code, nothing performative.
export function VitalTag({
  label,
  tone = "signal",
  className = "",
}: {
  label: string;
  tone?: "signal" | "circuit";
  className?: string;
}) {
  const color = tone === "circuit" ? "var(--circuit)" : "var(--signal)";
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] ${className}`}
      style={{ color }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />
      {label}
    </span>
  );
}

// Section header — a label and a rule, no invented numbering unless the
// content is a genuine sequence (passed in via `index`).
export function SectionMark({
  label,
  index,
  className = "",
}: {
  label: string;
  index?: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--ink-faint)] ${className}`}>
      {index && <span style={{ color: "var(--signal)" }}>{index}</span>}
      <span>{label}</span>
      <span
        className="h-px flex-1"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, var(--line-strong) 0 4px, transparent 4px 8px)",
        }}
      />
    </div>
  );
}

// Flat readout badge for publications/honors — a panel, not a ceremonial
// seal. The award icon is dropped; the fact speaks without ornament.
export function ReadoutBadge({ title, sub }: { title: string; sub: string }) {
  return (
    <div
      className="flex h-24 w-24 shrink-0 flex-col items-center justify-center gap-1 border text-center"
      style={{ borderColor: "var(--line-strong)" }}
    >
      <p className="font-mono text-[8.5px] font-bold uppercase leading-tight tracking-wide text-[var(--ink)]">
        {title}
      </p>
      <p className="font-mono text-[7.5px] uppercase tracking-wide text-[var(--ink-faint)]">{sub}</p>
    </div>
  );
}

const COVER_ICONS = { terminal: Terminal, database: Database, api: Share2 };

// Cover for systems projects with no screenshot — a schematic panel in
// circuit blue, standing in for a diagram rather than pretending to be one.
export function SchematicPanel({
  label,
  icon,
  className = "",
}: {
  label: string;
  icon: keyof typeof COVER_ICONS;
  className?: string;
}) {
  const Icon = COVER_ICONS[icon];
  return (
    <div
      className={`relative flex items-end overflow-hidden ${className}`}
      style={{
        border: "1px solid var(--line-strong)",
        backgroundColor: "var(--paper-raised)",
        backgroundImage:
          "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
        backgroundSize: "16px 16px",
      }}
      aria-hidden="true"
    >
      <Icon size={26} className="absolute right-4 top-4" style={{ color: "var(--circuit)", opacity: 0.7 }} />
      <div className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: "var(--circuit)" }}>
        {label}
      </div>
    </div>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const row = items.join("   /   ") + "   /   ";
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
