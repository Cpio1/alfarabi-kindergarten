"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Expand } from "lucide-react";
import { gallery } from "@/config/content";
import { Daisy, Float, Heart } from "../shared/Decor";
import { GalleryPlaceholder } from "../shared/GalleryPlaceholder";
import { Lightbox } from "../shared/Lightbox";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { useGallery } from "../shared/useGallery";
import { Wave } from "../shared/Wave";

const INITIAL = 6;
/* шестёрка-мозаика: арка, плитки, волна, овал, лист */
const frames = [
  "rounded-[999px_999px_28px_28px]",
  "rounded-[28px_28px_28px_6px]",
  "clip-wave",
  "rounded-[999px]",
  "shape-leaf",
  "rounded-[6px_28px_28px_28px]",
];

export function DesktopGallery({ images }: { images: string[] }) {
  const g = useGallery(images, INITIAL);
  const n = g.visible.length;

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="relative overflow-hidden bg-white pb-16 pt-8">
      <Float className="absolute right-[4%] top-12 w-12" y={8} rotate={12} duration={6}>
        <Daisy className="w-full" petal="#ECE6FC" />
      </Float>
      <Float className="absolute left-[4%] top-20 w-9" y={8} rotate={-10} duration={7}>
        <Heart className="w-full" />
      </Float>

      <div className="relative z-[2] mx-auto w-full max-w-[1100px] px-8">
        <SectionHeading eyebrow={gallery.eyebrow} title={gallery.title} id="gallery-title" mark="#8EC9EC" />

        <div className="mt-6">
          {images.length === 0 ? (
            <Reveal>
              <GalleryPlaceholder text={gallery.empty} />
            </Reveal>
          ) : (
            <>
              <ul className="grid grid-flow-dense grid-cols-4 gap-4 [grid-auto-rows:150px] xl:[grid-auto-rows:160px]">
                <AnimatePresence initial={false}>
                  {g.visible.map((src, i) => {
                    const k = i % 6;
                    const groupFull = i - k + 5 < n;
                    const tall = groupFull && (k === 0 || k === 3);
                    return (
                      <motion.li
                        key={src}
                        layout
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.94 }}
                        transition={{ duration: 0.45, delay: i >= INITIAL ? (i - INITIAL) * 0.04 : 0 }}
                        className={tall ? "row-span-2" : ""}
                      >
                        <button
                          type="button"
                          onClick={() => g.open(i)}
                          aria-label={`Фотосуретті үлкейту: ${i + 1}`}
                          className={`group relative block h-full w-full overflow-hidden bg-leaf-50 ${frames[k]}`}
                        >
                          <Image
                            src={src}
                            alt={`Балабақша фотосуреті ${i + 1}`}
                            fill
                            sizes="(min-width: 1280px) 270px, 24vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                          />
                          <span className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/15" />
                          <span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 scale-75 place-items-center rounded-full border-[1.5px] border-ink bg-white text-ink opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                            <Expand className="h-5 w-5" aria-hidden="true" />
                          </span>
                        </button>
                      </motion.li>
                    );
                  })}
                </AnimatePresence>
              </ul>

              {g.hasMore && (
                <div className="mt-7 flex justify-center">
                  <button
                    type="button"
                    onClick={g.toggle}
                    aria-expanded={g.expanded}
                    className="sticker sticker-hover sticker-press inline-flex h-[50px] items-center gap-2.5 rounded-full bg-sun px-6 text-[15px] font-bold text-ink"
                    style={{ ["--sc" as string]: "#244438" }}
                  >
                    {g.expanded ? gallery.less : `${gallery.more} (+${g.hiddenCount})`}
                    <ChevronDown className={`h-5 w-5 transition-transform ${g.expanded ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <Lightbox images={images} index={g.active} onClose={g.close} onChange={g.setActive} />
      <Wave fill="#FFF8E1" variant={2} />
    </section>
  );
}
