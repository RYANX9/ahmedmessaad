// Instrumentation chrome for the reading-room theme: the reticle frame, scan
// sweep, tick ruler, and pulse trace are the signature elements reused across
// the page so every panel reads as part of the same instrument, not a
// one-off decoration.

export function CornerFrame({
  className = "",
  color = "var(--phosphor-dim)",
}: {
  className?: string;
  color?: string;
}) {
  const corner = "absolute h-4 w-4";
  const style = { borderColor: color } as React.CSSProperties;
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`}>
      <span className={`${corner} left-0 top-0 border-l-2 border-t-2`} style={style} />
      <span className={`${corner} right-0 top-0 border-r-2 border-t-2`} style={style} />
      <span className={`${corner} bottom-0 left-0 border-b-2 border-l-2`} style={style} />
      <span className={`${corner} bottom-0 right-0 border-b-2 border-r-2`} style={style} />
    </div>
  );
}

export function ScanSweep({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div
        className="animate-scan-sweep absolute left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--phosphor) 20%, var(--phosphor) 80%, transparent)",
          boxShadow: "0 0 8px var(--phosphor)",
        }}
      />
    </div>
  );
}

export function TickRuler({ className = "", count = 48 }: { className?: string; count?: number }) {
  const ticks = Array.from({ length: count });
  return (
    <div className={`flex items-end gap-[3px] ${className}`} aria-hidden="true">
      {ticks.map((_, i) => (
        <span
          key={i}
          className="w-px bg-[var(--line-bright)]"
          style={{ height: i % 8 === 0 ? "12px" : i % 4 === 0 ? "8px" : "4px" }}
        />
      ))}
    </div>
  );
}

export function PulseLine({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 60" className={className} fill="none" aria-hidden="true">
      <path
        d="M0 30 H210 L228 8 L246 52 L264 30 L282 30 L296 16 L310 44 L326 30 H600"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ReticleDot({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
      <path d="M12 1v4M12 19v4M1 12h4M19 12h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
