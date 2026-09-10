"use client";

export type DesignMode = "dossier" | "minimal";

export function DesignToggle({
  mode,
  onToggle,
}: {
  mode: DesignMode;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      title={`Switch to ${mode === "dossier" ? "minimal" : "dossier"} design`}
      style={{
        position: "fixed",
        bottom: "1.5rem",
        right: "1.5rem",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.5rem 0.875rem",
        fontSize: "11px",
        fontFamily: "var(--font-mono, monospace)",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.14em",
        border: "1.5px solid",
        cursor: "pointer",
        transition: "all 0.2s ease",
        ...(mode === "dossier"
          ? {
              background: "#ffffff",
              color: "#0f172a",
              borderColor: "#e2e8f0",
              borderRadius: "6px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
            }
          : {
              background: "var(--ink, #17181a)",
              color: "var(--paper, #e9e8e3)",
              borderColor: "var(--line-strong, rgba(23,24,26,0.32))",
              borderRadius: "0px",
              boxShadow: "none",
            }),
      }}
    >
      <span style={{ opacity: 0.5, fontSize: "9px" }}>View:</span>
      {mode === "dossier" ? "Minimal" : "Dossier"}
    </button>
  );
}
