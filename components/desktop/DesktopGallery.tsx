"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Expand } from "lucide-react";
import { gallery } from "@/config/content";
import { Float, Flower, Star } from "../shared/Decor";
import { GalleryPlaceholder } from "../shared/GalleryPlaceholder";
import { Lightbox } from "../shared/Lightbox";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { useGallery } from "../shared/useGallery";
import { Wave } from "../shared/Wave";

const INITIAL = 6;
const radii = ["rounded-[40px]", "rounded-[28px_48px_28px_40px]", "rounded-[44px_28px_40px_28px]", "rounded-[32px]", "rounded-[48px_32px_48px_28px]", "rounded-[28px_44px_32px_48px]"];

export function DesktopGallery({ images }: { images: string[] }) {
  const g = useGallery(images, INITIAL);
  const n = g.visible.length;

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="relative overflow-hidden bg-white pb-24 pt-14">
      <Float className="absolute right-[5%] top-20 w-12" y={8} rotate={12} duration={6}>
        <Star className="w-full" color="#FFB4A8" />
      </Float>
      <Float className="absolute left-[4%] top-40 w-14" y={10} rotate={-10} duration={7}>
        <Flower className="w-full" petal="#B9A8EC" />
      </Float>

      <div className="relative z-[2] mx-auto w-full max-w-[1240px] px-8">
        <SectionHeading eyebrow={gallery.eyebrow} title={gallery.title} text={gallery.text} id="gallery-title" />

        <div className="mt-10">
          {images.length === 0 ? (
            <Reveal>
              <GalleryPlaceholder text={gallery.empty} />
            </Reveal>
          ) : (
            <>
              <motion.ul layout className="grid grid-flow-dense grid-cols-3 gap-4 [grid-auto-rows:200px] xl:[grid-auto-rows:220px]">
                <AnimatePresence initial={false}>
                  {g.visible.map((src, i) => {
                    // каждая шестёрка: одно большое фото (2×2) + пять маленьких = три ровных ряда
                    const big = i % 6 === 0 && i + 5 < n;
                    const right = Math.floor(i / 6) % 2 === 1;
                    return (
                      <motion.li
                        key={src}
                        layout
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.94 }}
                        transition={{ duration: 0.45, delay: i >= INITIAL ? (i - INITIAL) * 0.04 : 0 }}
                        className={`${big ? `col-span-2 row-span-2 ${right ? "col-start-2" : ""}` : ""}`}
                      >
                        <button
                          type="button"
                          onClick={() => g.open(i)}
                          aria-label={`Фотосуретті үлкейту: ${i + 1}`}
                          className={`group relative block h-full w-full overflow-hidden bg-leaf-50 shadow-softer ${radii[i % radii.length]}`}
                        >
                          <Image
                            src={src}
                            alt={`Балабақша фотосуреті ${i + 1}`}
                            fill
                            sizes={big ? "(min-width: 1280px) 800px, 64vw" : "(min-width: 1280px) 400px, 32vw"}
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                          />
                          <span className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          <span className="absolute bottom-4 right-4 grid h-11 w-11 translate-y-2 place-items-center rounded-full bg-white text-ink opacity-0 shadow-soft transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            <Expand className="h-5 w-5" aria-hidden="true" />
                          </span>
                        </button>
                      </motion.li>
                    );
                  })}
                </AnimatePresence>
              </motion.ul>

              {g.hasMore && (
                <div className="mt-8 flex justify-center">
                  <button
                    type="button"
                    onClick={g.toggle}
                    aria-expanded={g.expanded}
                    className="group inline-flex h-[52px] items-center gap-2.5 rounded-full bg-leaf px-7 text-[16px] font-extrabold text-white shadow-[0_14px_28px_-12px_rgba(79,158,116,0.8)] transition hover:-translate-y-0.5 hover:bg-leaf-600"
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
