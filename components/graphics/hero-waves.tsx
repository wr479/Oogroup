export function HeroWaves() {
  return (
    <div className="hero-waves absolute inset-x-0 top-0 h-[140%] -z-[1]">
      <svg
        className="wave wave-slowest"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0 80 C 300 180 900 -20 1200 80 L 1200 200 L 0 200 Z"
          fill="rgba(255,255,255,0.20)"
        />
      </svg>
      <svg
        className="wave wave-slow"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0 90 C 250 160 850 0 1200 90 L 1200 200 L 0 200 Z"
          fill="rgba(255,255,255,0.15)"
        />
      </svg>
      <svg
        className="wave wave-fast"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0 100 C 200 150 800 10 1200 100 L 1200 200 L 0 200 Z"
          fill="rgba(255,255,255,0.10)"
        />
      </svg>
    </div>
  );
}


