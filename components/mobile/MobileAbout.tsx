"use client";

import { motion } from "motion/react";
import { site } from "@/config/site";
import { about } from "@/config/content";
import { AgeBalloons } from "../shared/AgeBalloons";
import { Float, Leaf, Star } from "../shared/Decor";
import { Icon } from "../shared/Icon";
import { Photo } from "../shared/Photo";
import { Reveal, Stagger, staggerChild } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { tones } from "../shared/tones";
import { Wave } from "../shared/Wave";

const iconShapes = ["shape-drop", "shape-bean", "rounded-full", "shape-drop-r"];

export function MobileAbout({ image }: { image: string | null }) {
  return (
    <section id="m-about" aria-labelledby="m-about-title" className="relative overflow-hidden bg-white pb-12 pt-6">
      <div className="relative z-[2] mx-auto w-full max-w-[480px] px-4">
        <SectionHeading eyebrow={about.eyebrow} title={about.title} size="mobile" id="m-about-title" />

        {/* фото-печать + текст рядом не помещаются — фото компактно по центру */}
        <Reveal className="relative mx-auto mt-5 w-[64%] max-w-[250px]">
          <Photo
            src={image}
            alt="Балабақшадағы күнделікті өмір"
            shape="scallop"
            variant="about"
            className="aspect-square w-full"
            sizes="(max-width: 480px) 62vw, 250px"
            backdrop="#66B88C"
            offset={7}
          />
          <Float className="absolute -left-6 top-1 w-9" y={5} rotate={-12} duration={6}>
            <Leaf className="w-full" />
          </Float>
          <Float className="absolute -right-5 top-3 w-8" y={6} rotate={14} duration={5.5}>
            <Star className="w-full" />
          </Float>
        </Reveal>

        <Reveal className="mt-5">
          <p className="text-[15px] font-semibold leading-relaxed text-ink">{about.lead}</p>
        </Reveal>

        {/* ценности: компактная сетка 2×2 */}
        <Stagger className="mt-5 grid grid-cols-2 gap-3 pr-1">
          {about.values.map((v, i) => {
            const t = tones[v.tone];
            return (
              <motion.div
                key={v.title}
                variants={staggerChild}
                className={`sticker sticker-sm flex flex-col gap-2 bg-white p-3 ${i % 2 ? "rounded-[8px_22px_8px_22px]" : "rounded-[22px_8px_22px_8px]"}`}
                style={{ ["--sc" as string]: t.hex }}
              >
                <span className={`grid h-9 w-9 place-items-center border-[1.5px] border-ink ${t.bg} ${iconShapes[i]}`}>
                  <Icon name={v.icon} className="h-[18px] w-[18px] text-ink" />
                </span>
                <span className="font-display text-[13.5px] font-bold leading-tight text-ink">{v.title}</span>
                <span className="text-[12.5px] leading-snug text-ink-soft">{v.text}</span>
              </motion.div>
            );
          })}
        </Stagger>

        {/* Топтар */}
        <Reveal className="mt-6 pr-1">
          <div className="sticker sticker-sm rounded-[24px] bg-leaf p-4 text-white" style={{ ["--sc" as string]: "#FFD76A" }}>
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-display text-[17px] font-bold">{about.groups.title}</h3>
              <AgeBalloons size="sm" />
            </div>
            <p className="mt-2 text-[13.5px] leading-relaxed text-white/90">{about.groups.text}</p>
            {site.groups.length > 0 ? (
              <ul className="mt-2.5 flex flex-wrap gap-2">
                {site.groups.map((g) => (
                  <li key={g.name} className="rounded-full bg-white px-3 py-1 text-[13px] font-bold text-ink">
                    {g.name}
                    {g.age && <span className="ml-1 font-medium text-ink-soft">· {g.age}</span>}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 border-t border-dashed border-white/40 pt-2 text-[12.5px] font-semibold text-sun-100">{about.groups.note}</p>
            )}
          </div>
        </Reveal>
      </div>
      <Wave fill="#EEF8F2" variant={2} />
    </section>
  );
}
