"use client";

import { motion } from "motion/react";
import { clubs } from "@/config/content";
import { Float, Pencil } from "../shared/Decor";
import { Icon } from "../shared/Icon";
import { Stagger, staggerChild } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { tones } from "../shared/tones";
import { Wave } from "../shared/Wave";

const iconShapes = ["blob-a", "blob-b", "blob-c"];

export function MobileClubs() {
  return (
    <section id="m-clubs" aria-labelledby="m-clubs-title" className="relative overflow-hidden bg-cream pb-16 pt-6">
      <Float className="absolute -right-4 top-6 w-24 opacity-90" y={6} rotate={-4} duration={7}>
        <Pencil className="w-full -rotate-12" />
      </Float>
      <div className="relative z-[2] mx-auto w-full max-w-[640px] px-4">
        <SectionHeading eyebrow={clubs.eyebrow} title={clubs.title} text={clubs.text} size="mobile" id="m-clubs-title" />

        <Stagger className="mt-6 grid gap-3">
          {clubs.items.map((c, i) => {
            const t = tones[c.tone];
            return (
              <motion.article
                key={c.title}
                variants={staggerChild}
                whileTap={{ scale: 0.98 }}
                className={`relative overflow-hidden rounded-[28px] bg-white p-4 shadow-softer ring-1 ${t.ring}`}
              >
                <div aria-hidden="true" className={`absolute -right-8 -top-8 h-28 w-28 rounded-full ${t.bg}`} />
                <div className="relative flex items-center gap-3.5">
                  <span className={`grid h-[60px] w-[60px] shrink-0 place-items-center ${iconShapes[i]} ${t.icon}`}>
                    <Icon name={c.icon} className="h-7 w-7" strokeWidth={2} />
                  </span>
                  <span className="min-w-0">
                    <h3 className="font-display text-[19px] font-black text-ink">{c.title}</h3>
                    <p className="text-[14px] font-extrabold text-leaf-700">{c.subtitle}</p>
                  </span>
                </div>
                <p className="relative mt-3 text-[14.5px] leading-relaxed text-ink-soft">{c.text}</p>
              </motion.article>
            );
          })}
        </Stagger>
      </div>
      <Wave fill="#FFFFFF" variant={1} />
    </section>
  );
}
