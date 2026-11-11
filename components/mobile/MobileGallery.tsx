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
const smallFrames = ["rounded-[999px_999px_20px_20px]", "rounded-[20px_20px_20px_6px]", "shape-leaf", "rounded-[20px_6px_20px_20px]"];

export function MobileGallery({ images }: { images: string[] }) {
  const g = useGallery(images, INITIAL);
  const n = g.visible.length;

  return (
    <section id="m-gallery" aria-labelledby="m-gallery-title" className="relative overflow-hidden bg-white pb-12 pt-5">
      <div className="relative z-[2] mx-auto w-full max-w-[480px] px-4">
        <SectionHeading eyebrow={gallery.eyebrow} title={gallery.title} size="mobile" id="m-gallery-title" mark="#8EC9EC" />

        <div className="mt-5">
          {images.length === 0 ? (
            <Reveal>
              <GalleryPlaceholder text={gallery.empty} compact />
            </Reveal>
          ) : (
            <>
              <ul className="grid grid-cols-2 gap-2.5">
                <AnimatePresence initial={false}>
                  {g.visible.map((src, i) => {
                    // широкое фото-«волна» в начале каждой пятёрки, если после него чётное число фото
                    const wide = i % 5 === 0 && (n - i - 1) % 2 === 0;
                    return (
                      <motion.li
                        key={src}
                        layout
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className={wide ? "col-span-2" : ""}
                      >
                        <button
                          type="button"
                          onClick={() => g.open(i)}
                          aria-label={`Фотосуретті үлкейту: ${i + 1}`}
                          className={`relative block w-full overflow-hidden bg-leaf-50 active:scale-[0.98] ${
                            wide ? "clip-wave aspect-[16/10]" : `aspect-square ${smallFrames[i % 4]}`
                          }`}
                        >
                          <Image
                            src={src}
                            alt={`Балабақша фотосуреті ${i + 1}`}
                            fill
                            sizes={wide ? "(max-width: 480px) 92vw, 450px" : "(max-width: 480px) 46vw, 220px"}
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
                  className="sticker sticker-press mt-5 flex h-[52px] w-[calc(100%-4px)] items-center justify-center gap-2 rounded-[18px] bg-sun text-[15px] font-bold text-ink"
                  style={{ ["--sc" as string]: "#244438" }}
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
