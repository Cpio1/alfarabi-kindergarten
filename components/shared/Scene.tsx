/** Иллюстрация садика — используется, пока не загружено реальное фото. */
export function KindergartenScene({ className, variant = "hero" }: { className?: string; variant?: "hero" | "about" }) {
  const isHero = variant === "hero";
  return (
    <svg viewBox="0 0 600 480" className={className} preserveAspectRatio="xMidYMid slice" role="img" aria-label="Балабақша иллюстрациясы">
      <defs>
        <linearGradient id={`sky-${variant}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={isHero ? "#CFEBDD" : "#FFF1C7"} />
          <stop offset="1" stopColor="#FFF9ED" />
        </linearGradient>
      </defs>
      <rect width="600" height="480" fill={`url(#sky-${variant})`} />
      {/* солнце */}
      <circle cx={isHero ? 480 : 110} cy="96" r="46" fill="#FFD76A" />
      <circle cx={isHero ? 480 : 110} cy="96" r="64" fill="#FFD76A" opacity=".25" />
      {/* облака */}
      <g fill="#fff">
        <ellipse cx="140" cy="90" rx="58" ry="22" />
        <ellipse cx="170" cy="74" rx="34" ry="26" />
        <ellipse cx="420" cy="150" rx="46" ry="16" opacity=".9" />
        <ellipse cx="444" cy="138" rx="26" ry="20" opacity=".9" />
      </g>
      {/* холмы */}
      <path d="M0 360 C120 300 230 320 320 350 S500 320 600 300 V480 H0Z" fill="#9BD3B3" />
      <path d="M0 400 C140 360 260 380 360 404 S520 390 600 370 V480 H0Z" fill="#66B88C" />
      {/* здание */}
      <g transform="translate(170 196)">
        <rect x="0" y="70" width="260" height="150" rx="18" fill="#FFFFFF" />
        <path d="M-18 84 L130 -6 L278 84 Z" fill="#FFB4A8" />
        <path d="M-18 84 L130 -6 L278 84" fill="none" stroke="#F49A8C" strokeWidth="8" strokeLinejoin="round" strokeLinecap="round" />
        <circle cx="130" cy="44" r="18" fill="#FFF9ED" />
        <path d="M130 30 l4 9 10 1-7.5 6.6 2.3 9.9-8.8-5.2-8.8 5.2 2.3-9.9-7.5-6.6 10-1z" fill="#FFD76A" />
        <rect x="26" y="104" width="54" height="46" rx="12" fill="#8EC9EC" />
        <rect x="180" y="104" width="54" height="46" rx="12" fill="#8EC9EC" />
        <path d="M53 104 v46 M26 127 h54 M207 104 v46 M180 127 h54" stroke="#fff" strokeWidth="4" />
        <rect x="104" y="128" width="52" height="92" rx="26" fill="#FFD76A" />
        <circle cx="144" cy="176" r="4" fill="#244438" />
        <rect x="18" y="178" width="70" height="10" rx="5" fill="#DCF0E4" />
        <rect x="172" y="178" width="70" height="10" rx="5" fill="#DCF0E4" />
      </g>
      {/* деревья */}
      <g>
        <rect x="92" y="310" width="10" height="56" rx="5" fill="#8A6A4A" />
        <circle cx="97" cy="300" r="38" fill="#4F9E74" />
        <circle cx="80" cy="284" r="20" fill="#66B88C" />
        <rect x="498" y="318" width="10" height="50" rx="5" fill="#8A6A4A" />
        <circle cx="503" cy="306" r="32" fill="#4F9E74" />
        <circle cx="490" cy="294" r="16" fill="#66B88C" />
      </g>
      {/* цветы */}
      <g>
        {[
          [60, 430, "#FFB4A8"],
          [250, 448, "#FFD76A"],
          [380, 440, "#B9A8EC"],
          [540, 432, "#FFB4A8"],
        ].map(([x, y, c], i) => (
          <g key={i} transform={`translate(${x} ${y})`}>
            {[0, 72, 144, 216, 288].map((r) => (
              <ellipse key={r} cx="0" cy="-8" rx="6" ry="9" fill={c as string} transform={`rotate(${r})`} />
            ))}
            <circle r="5" fill="#fff" />
          </g>
        ))}
      </g>
    </svg>
  );
}
