// Single-stroke, hand-drawn style line art. Kept as components so they can be
// reused, recolored via currentColor, and swapped out independently of layout.

export function Blob({ className = "", color = "var(--sage)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
      <path
        fill={color}
        d="M138.5 34.2c47.6-14.8 101.9-4.4 138.6 27.9 36.7 32.2 55.8 82.1 51.4 130.7-4.4 48.6-32.3 96-73.9 122.6-41.6 26.6-96.9 32.5-143.6 13.6C64.3 309.9 27 265.6 15.4 214.8 3.8 164 18 106.8 55.2 70.3c17.8-17.5 51.9-21.3 83.3-36.1z"
      />
    </svg>
  );
}

export function VitalLine({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 80" className={className} fill="none" aria-hidden="true">
      <path
        d="M0 40 H150 L175 10 L200 70 L225 40 L245 40 L260 20 L275 60 L295 40 H600"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ScribbleUnderline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 20" className={className} fill="none" aria-hidden="true">
      <path
        d="M3 12.5C48 4 96 4 150 9.5C204 15 252 15 297 7"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DoodleStethoscope({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden="true">
      <path
        d="M30 15v28c0 14 10 24 24 24s24-10 24-24V15"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path d="M30 15c0-5-4-9-9-9s-9 4-9 9 4 9 9 9" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M78 15c0-5 4-9 9-9s9 4 9 9-4 9-9 9" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M54 67v14c0 8 6 15 14 15" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="82" cy="96" r="11" stroke="currentColor" strokeWidth="3.5" />
    </svg>
  );
}

export function DoodleScan({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden="true">
      <rect x="18" y="18" width="84" height="84" rx="14" stroke="currentColor" strokeWidth="3.5" />
      <path
        d="M32 78c8-22 14-34 22-34s10 18 16 18 8-10 18-10"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="60" cy="60" r="4" fill="currentColor" />
    </svg>
  );
}

export function DoodleFlask({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden="true">
      <path
        d="M48 14h24M52 14v28l-26 46c-4 7 1 16 9 16h50c8 0 13-9 9-16l-26-46V14"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M38 78h44" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// "Systems" side doodles — same single-stroke hand-drawn language as the
// medical set above, standing in for the software/engineering track.
// ---------------------------------------------------------------------------

export function DoodleTerminal({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden="true">
      <rect x="14" y="24" width="92" height="72" rx="10" stroke="currentColor" strokeWidth="3.5" />
      <path d="M30 46l16 14-16 14" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M58 74h32" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M14 38h92" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

export function DoodleDatabase({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden="true">
      <ellipse cx="60" cy="28" rx="38" ry="14" stroke="currentColor" strokeWidth="3.5" />
      <path d="M22 28v32c0 7.7 17 14 38 14s38-6.3 38-14V28" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M22 60v32c0 7.7 17 14 38 14s38-6.3 38-14V60" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

export function DoodleApi({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden="true">
      <circle cx="22" cy="60" r="12" stroke="currentColor" strokeWidth="3.5" />
      <circle cx="98" cy="30" r="12" stroke="currentColor" strokeWidth="3.5" />
      <circle cx="98" cy="90" r="12" stroke="currentColor" strokeWidth="3.5" />
      <path d="M33 55l55-19M33 65l55 19" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}
