export default function AELogo({ className = 'h-5 w-5', ...props }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <g transform="translate(2, 0)">
        {/* Keystone Diamond */}
        <polygon points="36,13 40,18 36,23 32,18" fill="var(--color-gold, #C5A059)" />

        {/* 'A' Structure in Deep Forest Green */}
        <line x1="36" y1="22" x2="18" y2="76" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        <line x1="36" y1="22" x2="54" y2="76" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        <line x1="26" y1="53" x2="52" y2="53" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />

        {/* 'E' Structure in Champagne Gold */}
        <line x1="54" y1="30" x2="54" y2="76" stroke="var(--color-gold, #C5A059)" strokeWidth="5.5" strokeLinecap="round" />
        <line x1="54" y1="31" x2="78" y2="31" stroke="var(--color-gold, #C5A059)" strokeWidth="5.5" strokeLinecap="round" />
        <line x1="50" y1="53" x2="74" y2="53" stroke="var(--color-gold, #C5A059)" strokeWidth="5.5" strokeLinecap="round" />
        <line x1="54" y1="76" x2="78" y2="76" stroke="var(--color-gold, #C5A059)" strokeWidth="5.5" strokeLinecap="round" />

        {/* Architectural Plinth Foundation */}
        <line x1="12" y1="83" x2="82" y2="83" stroke="var(--color-gold, #C5A059)" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}
