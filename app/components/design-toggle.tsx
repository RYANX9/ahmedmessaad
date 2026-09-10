"use client";

export type DesignMode = "dossier" | "minimal" | "editorial";

const MODES: { key: DesignMode; label: string }[] = [
  { key: "dossier", label: "Dossier" },
  { key: "minimal", label: "Minimal" },
  { key: "editorial", label: "Editorial" },
];

export function DesignToggle({
  mode,
  onChange,
}: {
  mode: DesignMode;
  onChange: (mode: DesignMode) => void;
}) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        zIndex: 9999,
        display: "flex",
        gap: "2px",
        padding: "3px",
        background: "#ffffff",
        border: "1.5px solid #e2e8f0",
        borderRadius: "6px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
      }}
    >
      {MODES.map((m) => (
        <button
          key={m.key}
          type="button"
          onClick={() => onChange(m.key)}
          title={`Switch to ${m.label} design`}
          style={{
            padding: "0.4rem 0.7rem",
            fontSize: "10px",
            fontFamily: "var(--font-mono, monospace)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background 0.2s ease, color 0.2s ease",
            background: mode === m.key ? "#0f172a" : "transparent",
            color: mode === m.key ? "#f5f2eb" : "#0f172a",
          }}
        >
          {m.label}
        </button>
      ))}
    </div>
  );
}
