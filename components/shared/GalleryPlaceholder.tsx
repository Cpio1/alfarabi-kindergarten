import { Camera } from "lucide-react";
import { Flower, Star, Sun } from "./Decor";

/** Заглушка, пока в public/images нет фотографий галереи. */
export function GalleryPlaceholder({ text, compact = false }: { text: string; compact?: boolean }) {
  const tiles = compact
    ? ["bg-leaf-100 blob-a", "bg-sun-100 blob-b", "bg-rose-100 blob-c", "bg-sky-100 blob-d"]
    : ["bg-leaf-100 pebble-a", "bg-sun-100 pebble-b", "bg-rose-100 pebble-c", "bg-sky-100 pebble-d"];
  return (
    <div className="relative">
      <div className={`grid ${compact ? "grid-cols-2 gap-3" : "grid-cols-4 gap-4"}`} aria-hidden="true">
        {tiles.map((t, i) => (
          <div key={i} className={`relative grid place-items-center ${compact ? "aspect-[5/4]" : "aspect-[5/4]"} ${t}`}>
            {i % 3 === 0 ? (
              <Sun className="h-1/3 w-1/3 opacity-70" />
            ) : i % 3 === 1 ? (
              <Flower className="h-1/4 w-1/4 opacity-70" />
            ) : (
              <Star className="h-1/4 w-1/4 opacity-70" />
            )}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 grid place-items-center p-4">
        <div className="flex max-w-[340px] flex-col items-center gap-2 rounded-[28px] bg-white/95 px-6 py-5 text-center shadow-soft backdrop-blur">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-leaf text-white">
            <Camera className="h-6 w-6" aria-hidden="true" />
          </span>
          <p className="font-display text-[17px] font-extrabold text-ink">{text}</p>
        </div>
      </div>
    </div>
  );
}
