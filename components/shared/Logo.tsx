import Image from "next/image";
import { site } from "@/config/site";

/** Логотип: реальный logo.* из public/images или фирменный значок-солнце. */
export function Logo({ src, compact = false }: { src: string | null; compact?: boolean }) {
  return (
    <span className="flex min-w-0 items-center gap-2.5">
      <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-[16px] bg-white shadow-softer ring-1 ring-leaf/15">
        {src ? (
          <Image src={src} alt="" fill sizes="44px" className="object-contain p-1" />
        ) : (
          <svg viewBox="0 0 44 44" className="h-9 w-9" aria-hidden="true">
            <circle cx="22" cy="22" r="13" fill="#FFD76A" />
            <g stroke="#FFC93C" strokeWidth="3" strokeLinecap="round">
              <path d="M22 3v4M22 37v4M3 22h4M37 22h4M8.6 8.6l2.8 2.8M32.6 32.6l2.8 2.8M8.6 35.4l2.8-2.8M32.6 11.4l2.8-2.8" />
            </g>
            <path d="M16.5 28 L22 14.5 L27.5 28 M18.6 23.4 h6.8" stroke="#244438" strokeWidth="2.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span className="truncate font-display text-[19px] font-black tracking-tight text-ink">{site.shortName}</span>
        {!compact && (
          <span className="mt-1 truncate text-[11.5px] font-bold text-leaf-700">бөбекжай-балабақшасы</span>
        )}
      </span>
    </span>
  );
}
