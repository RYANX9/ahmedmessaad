// Signature chrome for the "stitched swatch" theme: two material textures —
// a contour field for the research track and a dimension grid for the
// systems track — held together by a hand-drawn running stitch. The weave
// pattern is the payoff, used once, where the two textures interleave into
// a single fabric.

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
