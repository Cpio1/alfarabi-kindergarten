import { Camera } from "lucide-react";
import { Daisy, Star, Sun, Twinkle } from "./Decor";

/** Заглушка, пока в public/images нет фотографий галереи. */
export function GalleryPlaceholder({ text, compact = false }: { text: string; compact?: boolean }) {
  const tiles = [
    { cls: "shape-arch bg-leaf-100", icon: <Sun className="w-1/3" /> },
    { cls: "clip-scallop bg-sun-100", icon: <Daisy className="w-1/3" /> },
    { cls: "shape-leaf bg-rose-100", icon: <Star className="w-1/4" color="#FFB4A8" /> },
    { cls: "shape-drop-r bg-sky-100", icon: <Twinkle className="w-1/4" color="#8EC9EC" /> },
  ];
  return (
    <div className="relative">
      <div className={`grid ${compact ? "grid-cols-2 gap-3" : "grid-cols-4 gap-5"}`} aria-hidden="true">
        {tiles.map((t, i) => (
          <div key={i} className={`grid ${compact ? "aspect-square" : "aspect-[5/4]"} place-items-center ${t.cls}`}>
            {t.icon}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 grid place-items-center p-3">
        <div className="sticker flex max-w-[320px] items-center gap-3 rounded-[22px] bg-white px-5 py-4" style={{ ["--sc" as string]: "#66B88C" }}>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sun">
            <Camera className="h-5 w-5 text-ink" aria-hidden="true" />
          </span>
          <p className="font-display text-[15px] font-bold leading-snug text-ink">{text}</p>
        </div>
      </div>
    </div>
  );
}
