/** Иллюстрация папки с документами. */
export function DocsVisual({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 180" className={className} aria-hidden="true">
      <ellipse cx="110" cy="166" rx="84" ry="10" fill="#244438" opacity=".07" />
      <rect x="46" y="20" width="110" height="130" rx="14" fill="#fff" transform="rotate(-8 100 85)" />
      <rect x="62" y="44" width="70" height="8" rx="4" fill="#DCF0E4" transform="rotate(-8 100 85)" />
      <rect x="62" y="62" width="56" height="8" rx="4" fill="#DCF0E4" transform="rotate(-8 100 85)" />
      <rect x="70" y="14" width="110" height="130" rx="14" fill="#fff" transform="rotate(6 125 80)" />
      <rect x="86" y="38" width="74" height="8" rx="4" fill="#FFF1C7" transform="rotate(6 125 80)" />
      <rect x="86" y="56" width="60" height="8" rx="4" fill="#FFF1C7" transform="rotate(6 125 80)" />
      <rect x="86" y="74" width="68" height="8" rx="4" fill="#FFF1C7" transform="rotate(6 125 80)" />
      <path d="M24 66c0-8 6-14 14-14h44c5 0 9 2 12 6l8 10h80c8 0 14 6 14 14v66c0 8-6 14-14 14H38c-8 0-14-6-14-14z" fill="#66B88C" />
      <path d="M24 84c0-8 6-14 14-14h144c8 0 14 6 14 14v62c0 8-6 14-14 14H38c-8 0-14-6-14-14z" fill="#7CC59D" />
      <circle cx="110" cy="114" r="18" fill="#FFD76A" />
      <path d="M102 114l6 6 10-12" stroke="#244438" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
