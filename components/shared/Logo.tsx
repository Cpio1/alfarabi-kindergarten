import Image from "next/image";
import { site } from "@/config/site";

/** Логотип: реальный logo.* из public/images или фирменный значок-печать с солнцем. */
export function Logo({ src, light = false }: { src: string | null; light?: boolean }) {
  return (
    <span className="flex min-w-0 items-center gap-2.5">
      <span className="relative grid h-11 w-11 shrink-0 place-items-center">
        {src ? (
          <span className="relative h-11 w-11 overflow-hidden rounded-full border-[1.5px] border-ink bg-white">
            <Image src={src} alt="" fill sizes="44px" className="object-contain p-1" />
          </span>
        ) : (
          <svg viewBox="0 0 48 48" className="h-11 w-11" aria-hidden="true">
            <path
              d="M24 2 l4.2 3.3 5.2-1 2.2 4.9 5.1 1.6-.4 5.3 3.7 3.8-2.4 4.8 2.4 4.8-3.7 3.8.4 5.3-5.1 1.6-2.2 4.9-5.2-1L24 46l-4.2-3.3-5.2 1-2.2-4.9-5.1-1.6.4-5.3-3.7-3.8 2.4-4.8-2.4-4.8 3.7-3.8-.4-5.3 5.1-1.6 2.2-4.9 5.2 1z"
              fill="#66B88C"
              stroke="#244438"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <circle cx="24" cy="24" r="12.5" fill="#FFD76A" stroke="#244438" strokeWidth="1.6" />
            <path d="M19 29.5 L24 17.5 L29 29.5 M20.8 25.4 h6.4" stroke="#244438" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span className={`truncate font-display text-[18px] font-bold ${light ? "text-white" : "text-ink"}`}>{site.shortName}</span>
        <span className={`mt-1 truncate font-hand text-[16px] font-bold ${light ? "text-sun" : "text-leaf-700"}`}>бөбекжай-балабақша</span>
      </span>
    </span>
  );
}
