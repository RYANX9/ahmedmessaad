type Props = {
  projectId: string
  label: string
  coord: string
}

export function ProjectVisual({ projectId, label, coord }: Props) {
  return (
    <div className={`project-art art-${projectId}`}>
      <span className="art-label">{label}</span>
      <span className="art-coord">{coord}</span>

      <div className="signal">
        {projectId === "01" && (
          <svg viewBox="0 0 600 300" aria-hidden="true">
            <path className="trace" d="M0 210 C70 210 70 170 125 170 S170 250 230 205 300 80 360 145 420 205 470 130 520 100 600 65" />
            <path className="pulse" d="M0 220 L90 220 L115 95 L140 220 L230 220 L255 145 L280 220 L380 220 L410 50 L435 220 L600 220" />
            <circle className="node" cx="410" cy="50" r="7" />
          </svg>
        )}

        {projectId === "02" && (
          <svg viewBox="0 0 600 300" aria-hidden="true">
            <g className="cells">
              <circle cx="130" cy="95" r="28" /><circle cx="215" cy="80" r="18" />
              <circle cx="300" cy="125" r="34" /><circle cx="395" cy="85" r="22" />
              <circle cx="480" cy="125" r="30" /><circle cx="170" cy="190" r="22" />
              <circle cx="270" cy="215" r="30" /><circle cx="380" cy="195" r="18" />
              <circle cx="465" cy="220" r="25" />
            </g>
            <line className="scan" x1="300" y1="25" x2="300" y2="275" />
          </svg>
        )}

        {projectId === "03" && (
          <svg viewBox="0 0 600 300" aria-hidden="true">
            <circle className="ring" cx="300" cy="150" r="105" />
            <circle className="ring" cx="300" cy="150" r="72" />
            <circle className="core" cx="300" cy="150" r="42" />
            <circle className="ring" cx="300" cy="150" r="18" />
          </svg>
        )}

        {projectId === "04" && (
          <svg viewBox="0 0 600 300" aria-hidden="true">
            <path className="decision" d="M80 150 H190 L260 75 L360 150 L455 75 L530 150" />
            <path className="decision hot" d="M190 150 L260 75 L360 150" />
            <circle className="dot" cx="80" cy="150" r="7" />
            <circle className="dot" cx="260" cy="75" r="7" />
            <circle className="dot" cx="360" cy="150" r="7" />
            <circle className="dot" cx="530" cy="150" r="7" />
          </svg>
        )}

        {projectId === "05" && (
          <svg viewBox="0 0 600 300" aria-hidden="true">
            <line className="axisline" x1="60" y1="250" x2="550" y2="250" />
            <line className="axisline" x1="60" y1="45" x2="60" y2="250" />
            <g className="bars">
              <rect x="105" y="180" width="30" height="70" />
              <rect x="155" y="205" width="30" height="45" />
              <rect x="205" y="85" width="30" height="165" />
              <rect x="255" y="155" width="30" height="95" />
              <rect x="305" y="115" width="30" height="135" />
              <rect x="355" y="195" width="30" height="55" />
              <rect x="405" y="70" width="30" height="180" />
              <rect x="455" y="145" width="30" height="105" />
              <rect x="505" y="105" width="30" height="145" />
            </g>
          </svg>
        )}

        {projectId === "06" && (
          <svg viewBox="0 0 600 300" aria-hidden="true">
            <g className="net">
              <line x1="100" y1="70" x2="280" y2="150" />
              <line x1="100" y1="150" x2="280" y2="150" />
              <line x1="100" y1="230" x2="280" y2="150" />
              <line x1="280" y1="150" x2="480" y2="80" />
              <line x1="280" y1="150" x2="480" y2="150" />
              <line x1="280" y1="150" x2="480" y2="220" />
              <circle cx="100" cy="70" r="18" /><circle cx="100" cy="150" r="18" />
              <circle cx="100" cy="230" r="18" /><circle cx="280" cy="150" r="25" />
              <circle cx="480" cy="80" r="18" /><circle cx="480" cy="150" r="18" />
              <circle cx="480" cy="220" r="18" />
            </g>
          </svg>
        )}

        {projectId === "07" && (
          <svg viewBox="0 0 600 300" aria-hidden="true">
            <path className="curve" d="M0 205 C55 190 80 220 125 180 S180 135 225 165 285 125 325 150 390 95 430 120 500 70 600 90" />
            <path className="curve" d="M0 225 C70 210 110 230 160 210 S235 230 290 195 350 225 410 205 470 230 600 215" />
            <path className="winner" d="M0 215 C60 190 95 205 145 165 S230 120 280 140 355 85 405 100 485 55 600 65" />
            <circle className="mark" cx="600" cy="65" r="6" />
          </svg>
        )}

        {projectId === "08" && (
          <svg viewBox="0 0 600 300" aria-hidden="true">
            <g className="gridline">
              <path d="M60 50H540M60 100H540M60 150H540M60 200H540M60 250H540" />
              <path d="M110 30V270M160 30V270M210 30V270M260 30V270M310 30V270M360 30V270M410 30V270M460 30V270M510 30V270" />
            </g>
            <g className="day">
              <rect x="78" y="65" width="28" height="28" /><rect x="128" y="115" width="28" height="28" />
              <rect className="active" x="178" y="165" width="28" height="28" /><rect x="228" y="215" width="28" height="28" />
              <rect className="active" x="278" y="65" width="28" height="28" /><rect x="328" y="115" width="28" height="28" />
              <rect className="active" x="378" y="165" width="28" height="28" /><rect x="428" y="215" width="28" height="28" />
              <rect className="active" x="478" y="65" width="28" height="28" />
            </g>
          </svg>
        )}

        {projectId === "09" && (
          <svg viewBox="0 0 600 300" aria-hidden="true">
            <path className="branch" d="M80 70 H230 V150 H360 V230 H520" />
            <path className="branch" d="M230 150 V65 H420" />
            <path className="branch" d="M360 230 V150 H470" />
            <circle className="commit" cx="80" cy="70" r="7" />
            <circle className="commit" cx="230" cy="150" r="7" />
            <circle className="commit" cx="360" cy="230" r="7" />
            <circle className="commit" cx="520" cy="230" r="7" />
            <circle className="commit" cx="420" cy="65" r="7" />
            <circle className="commit" cx="470" cy="150" r="7" />
          </svg>
        )}
      </div>
    </div>
  )
}
