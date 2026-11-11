"use client";

import { motion } from "motion/react";
import { clubs } from "@/config/content";
import { Float, Pencil, Twinkle } from "../shared/Decor";
import { Icon } from "../shared/Icon";
import { Reveal, Stagger, staggerChild } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { tones } from "../shared/tones";
import { Wave } from "../shared/Wave";

/* у каждого кружка — своё «окошко» для иконки */
const windows = ["shape-arch", "clip-scallop", "clip-cloud"];
const cards = ["rounded-[30px_30px_30px_8px]", "rounded-[30px]", "rounded-[30px_30px_8px_30px]"];

export function DesktopClubs() {
  return (
    <section id="clubs" aria-labelledby="clubs-title" className="relative overflow-hidden bg-cream pb-20 pt-10">
      <div className="relative z-[2] mx-auto grid w-full max-w-[1200px] grid-cols-[300px_1fr] items-center gap-10 px-8 xl:grid-cols-[330px_1fr] xl:gap-12">
        <div className="relative">
          <SectionHeading eyebrow={clubs.eyebrow} title={clubs.title} text={clubs.text} align="left" id="clubs-title" mark="#B9A8EC" />
          <Reveal delay={0.1} className="mt-6">
            <Float y={6} rotate={-3} duration={7}>
              <Pencil className="w-40 -rotate-6" />
            </Float>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-3 gap-5">
          {clubs.items.map((c, i) => {
            const t = tones[c.tone];
            return (
              <motion.article
                key={c.title}
                variants={staggerChild}
                className={`sticker sticker-hover group relative flex flex-col items-center overflow-hidden bg-white px-5 pb-6 pt-5 text-center ${cards[i]} ${
                  i === 1 ? "translate-y-4" : ""
                }`}
                style={{ ["--sc" as string]: t.hex }}
              >
                <div aria-hidden="true" className={`dots absolute inset-x-0 top-0 h-24 opacity-70`} />
                <div className="relative h-[104px] w-[112px]">
                  <div aria-hidden="true" className={`absolute inset-0 bg-ink ${windows[i]}`} />
                  <div className={`absolute inset-[2px] grid place-items-center ${t.bg} ${windows[i]}`}>
                    <Icon name={c.icon} className="h-10 w-10 text-ink transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" strokeWidth={1.9} />
                  </div>
                </div>
                <Twinkle className="absolute right-4 top-4 w-5 transition-transform duration-500 group-hover:rotate-90" color={t.hex} />
                <h3 className="relative mt-4 font-display text-[21px] font-bold text-ink">{c.title}</h3>
                <p className={`relative mt-2 rounded-full border-[1.5px] border-ink px-3 py-0.5 text-[12.5px] font-bold text-ink ${t.bg}`}>
                  {c.subtitle}
                </p>
                <p className="relative mt-3 text-[14px] leading-relaxed text-ink-soft">{c.text}</p>
              </motion.article>
            );
          })}
        </Stagger>
      </div>
      <Wave fill="#FFFFFF" variant={1} />
    </section>
  );
}
