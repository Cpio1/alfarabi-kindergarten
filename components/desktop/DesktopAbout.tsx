"use client";

import { motion } from "motion/react";
import { site } from "@/config/site";
import { about } from "@/config/content";
import { Float, Leaf, Star, Twinkle } from "../shared/Decor";
import { Icon } from "../shared/Icon";
import { Photo } from "../shared/Photo";
import { Reveal, Stagger, staggerChild } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { tones } from "../shared/tones";
import { Wave } from "../shared/Wave";
import { AgeBalloons } from "../shared/AgeBalloons";

/* у каждой карточки своя форма и цвет «тени» */
const cardShapes = ["shape-leaf", "shape-tag-r", "shape-tag", "shape-leaf-r"];
const iconShapes = ["shape-drop", "shape-bean", "rounded-full", "shape-drop-r"];

export function DesktopAbout({ image }: { image: string | null }) {
  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden bg-white pb-20 pt-10">
      <div className="relative z-[2] mx-auto grid w-full max-w-[1200px] grid-cols-[400px_1fr] items-center gap-12 px-8 xl:grid-cols-[430px_1fr] xl:gap-16">
        {/* Левая колонка: фото-печать + группы */}
        <div className="relative">
          <Reveal className="relative mx-auto w-[86%]">
            <Photo
              src={image}
              alt="Балабақшадағы күнделікті өмір"
              shape="scallop"
              variant="about"
              className="aspect-square w-full"
              sizes="(min-width: 1280px) 370px, 340px"
              backdrop="#66B88C"
              offset={10}
            />
            <Float className="absolute -left-4 top-2 w-12" y={7} rotate={-12} duration={6}>
              <Leaf className="w-full" />
            </Float>
            <Float className="absolute -right-2 top-6 w-10" y={8} rotate={14} duration={5.5} delay={0.4}>
              <Star className="w-full" />
            </Float>
          </Reveal>

          {/* Топтар */}
          <Reveal delay={0.1} className="relative -mt-6">
            <div className="sticker relative rounded-[28px] bg-leaf px-5 pb-4 pt-4 text-white" style={{ ["--sc" as string]: "#FFD76A" }}>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="font-display text-[19px] font-bold">{about.groups.title}</h3>
                  <p className="mt-1 text-[13.5px] leading-snug text-white/90">{about.groups.text}</p>
                </div>
                <AgeBalloons className="shrink-0" size="sm" />
              </div>
              {site.groups.length > 0 ? (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {site.groups.map((g) => (
                    <li key={g.name} className="rounded-full bg-white px-3 py-1 text-[13px] font-bold text-ink">
                      {g.name}
                      {g.age && <span className="ml-1 font-medium text-ink-soft">· {g.age}</span>}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 border-t border-dashed border-white/40 pt-2 text-[13px] font-semibold text-sun-100">{about.groups.note}</p>
              )}
            </div>
          </Reveal>
        </div>

        {/* Правая колонка: текст и ценности */}
        <div className="min-w-0">
          <SectionHeading eyebrow={about.eyebrow} title={about.title} align="left" id="about-title" />
          <Reveal delay={0.06}>
            <p className="mt-3 text-[16px] font-semibold leading-relaxed text-ink">{about.lead}</p>
          </Reveal>

          <Stagger className="mt-6 grid grid-cols-2 gap-4">
            {about.values.map((v, i) => {
              const t = tones[v.tone];
              return (
                <motion.div
                  key={v.title}
                  variants={staggerChild}
                  className={`sticker sticker-hover group flex items-start gap-3 bg-white p-3.5 ${cardShapes[i]}`}
                  style={{ ["--sc" as string]: t.hex }}
                >
                  <span className={`grid h-11 w-11 shrink-0 place-items-center border-[1.5px] border-ink ${t.bg} ${iconShapes[i]} transition-transform duration-300 group-hover:-rotate-12`}>
                    <Icon name={v.icon} className="h-5 w-5 text-ink" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[15.5px] font-bold text-ink">{v.title}</span>
                    <span className="mt-0.5 block text-[13.5px] leading-snug text-ink-soft">{v.text}</span>
                  </span>
                </motion.div>
              );
            })}
          </Stagger>
        </div>
      </div>
      <Float className="absolute bottom-16 right-[3%] w-8" y={6} rotate={20} duration={5}>
        <Twinkle className="w-full" color="#B9A8EC" />
      </Float>
      <Wave fill="#EEF8F2" variant={2} />
    </section>
  );
}
