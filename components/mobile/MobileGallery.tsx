"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { gallery } from "@/config/content";
import { GalleryPlaceholder } from "../shared/GalleryPlaceholder";
import { Lightbox } from "../shared/Lightbox";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { useGallery } from "../shared/useGallery";
import { Wave } from "../shared/Wave";

const INITIAL = 5;

export function MobileGallery({ images }: { images: string[] }) {
  const g = useGallery(images, INITIAL);
  const n = g.visible.length;

  return (
    <section id="m-gallery" aria-labelledby="m-gallery-title" className="relative overflow-hidden bg-white pb-16 pt-6">
      <div className="relative z-[2] mx-auto w-full max-w-[640px] px-4">
        <SectionHeading eyebrow={gallery.eyebrow} title={gallery.title} text={gallery.text} size="mobile" id="m-gallery-title" />

        <div className="mt-6">
          {images.length === 0 ? (
            <Reveal>
              <GalleryPlaceholder text={gallery.empty} compact />
            </Reveal>
          ) : (
            <>
              <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                <AnimatePresence initial={false}>
                  {g.visible.map((src, i) => {
                    // широкое фото в начале каждой пятёрки (если после него остаётся чётное число)
                    const wide = i % 5 === 0 && (n - i - 1) % 2 === 0;
                    return (
                      <motion.li
                        key={src}
                        layout
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className={wide ? "col-span-2 sm:col-span-3" : ""}
                      >
                        <button
                          type="button"
                          onClick={() => g.open(i)}
                          aria-label={`Фотосуретті үлкейту: ${i + 1}`}
                          className={`relative block w-full overflow-hidden bg-leaf-50 shadow-softer active:scale-[0.98] ${
                            wide ? "aspect-[4/3] rounded-[28px] sm:aspect-[16/9]" : "aspect-square rounded-[22px]"
                          }`}
                        >
                          <Image
                            src={src}
                            alt={`Балабақша фотосуреті ${i + 1}`}
                            fill
                            sizes={wide ? "(max-width: 640px) 92vw, 600px" : "(max-width: 640px) 46vw, 200px"}
                            className="object-cover"
                          />
                        </button>
                      </motion.li>
                    );
                  })}
                </AnimatePresence>
              </ul>
              {g.hasMore && (
                <button
                  type="button"
                  onClick={g.toggle}
                  aria-expanded={g.expanded}
                  className="mt-5 flex h-14 w-full items-center justify-center gap-2 rounded-[20px] bg-leaf text-[16px] font-extrabold text-white shadow-[0_12px_24px_-12px_rgba(79,158,116,0.9)] active:scale-[0.98]"
                >
                  {g.expanded ? gallery.less : `${gallery.more} (+${g.hiddenCount})`}
                  <ChevronDown className={`h-5 w-5 transition-transform ${g.expanded ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>
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
