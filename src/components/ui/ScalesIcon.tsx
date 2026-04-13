export function ScalesIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className="scales-icon"
      aria-hidden="true"
    >
      {/* Center pillar */}
      <line x1="12" y1="3" x2="12" y2="21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      {/* Base */}
      <line x1="7" y1="21" x2="17" y2="21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      {/* Top crossbar — this tilts gently */}
      <g className="scales-beam">
        {/* Beam */}
        <line x1="4" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        {/* Left chain */}
        <line x1="6" y1="6" x2="5" y2="10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        {/* Right chain */}
        <line x1="18" y1="6" x2="19" y2="10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        {/* Left pan */}
        <path d="M2 10.5 C2 10.5 3.5 14 5 14 C6.5 14 8 10.5 8 10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none" />
        {/* Right pan */}
        <path d="M16 10.5 C16 10.5 17.5 14 19 14 C20.5 14 22 10.5 22 10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      </g>
      {/* Top finial */}
      <circle cx="12" cy="3" r="1.5" fill="currentColor" />
    </svg>
  );
}
