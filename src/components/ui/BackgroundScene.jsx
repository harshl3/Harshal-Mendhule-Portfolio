export function BackgroundScene() {
  return (
    <div
      aria-hidden="true"
      className="absolute top-0 inset-x-0 h-[110svh] -z-10 overflow-hidden pointer-events-none"
      style={{
        maskImage: 'linear-gradient(#000 62%, transparent)',
        WebkitMaskImage: 'linear-gradient(#000 62%, transparent)',
      }}
    >
      <div className="grid-bg absolute inset-0" />
      <svg
        className="absolute inset-0 size-full opacity-70 sm:opacity-100"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMaxYMax slice"
      >
        <defs>
          <radialGradient id="orb" cx=".38" cy=".32" r=".85">
            <stop offset="0" style={{ stopColor: 'var(--orb1)' }} />
            <stop offset="1" style={{ stopColor: 'var(--orb2)' }} />
          </radialGradient>
          <filter id="b1">
            <feGaussianBlur stdDeviation="12" />
          </filter>
          <filter id="b2">
            <feGaussianBlur stdDeviation="45" />
          </filter>
        </defs>
        <g className="cloud" style={{ fill: 'var(--tx)' }} opacity=".12" filter="url(#b1)">
          <ellipse cx="880" cy="270" rx="190" ry="13" />
          <ellipse cx="1010" cy="315" rx="130" ry="9" />
          <ellipse cx="1310" cy="205" rx="150" ry="11" />
        </g>
        <path
          style={{ fill: 'var(--r1)' }}
          d="M0 700C200 610 330 700 520 640S860 550 1060 650 1320 600 1440 650V900H0Z"
        />
        <path
          style={{ fill: 'var(--r2)' }}
          d="M0 780C150 700 320 760 500 720S840 650 1010 730 1300 700 1440 740V900H0Z"
        />
        <path
          style={{ fill: 'var(--r3)' }}
          d="M0 840C220 790 420 830 640 800S1000 760 1200 810 1380 800 1440 820V900H0Z"
        />
      </svg>
    </div>
  )
}

