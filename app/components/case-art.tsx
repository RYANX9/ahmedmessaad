export function CaseArt({ symbol, label }: { symbol: string; label: string }) {
  return (
    <div className="case-art">
      <svg className="case-visual" viewBox="0 0 1200 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <use href={`#${symbol}`} />
      </svg>
      <span className="case-art-label">{label}</span>
    </div>
  );
}
