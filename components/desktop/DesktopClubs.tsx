"use client";

import { motion } from "motion/react";
import { clubs } from "@/config/content";
import { Drift, Cloud, Float, Pencil, Sparkle } from "../shared/Decor";
import { Icon } from "../shared/Icon";
import { Stagger, staggerChild } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { tones } from "../shared/tones";
import { Wave } from "../shared/Wave";

const heads = ["blob-a", "blob-b", "blob-c"];

export function DesktopClubs() {
  return (
    <section id="clubs" aria-labelledby="clubs-title" className="relative overflow-hidden bg-cream pb-24 pt-14">
      <Drift className="absolute right-[6%] top-10 w-28" x={-28} duration={18}>
        <Cloud className="w-full" />
      </Drift>
      <Float className="absolute left-[5%] top-24 w-28" y={8} rotate={-6} duration={8}>
        <Pencil className="w-full rotate-[18deg]" />
      </Float>

      <div className="relative z-[2] mx-auto w-full max-w-[1240px] px-8">
        <SectionHeading eyebrow={clubs.eyebrow} title={clubs.title} text={clubs.text} id="clubs-title" />

        <Stagger className="mt-10 grid grid-cols-3 gap-6 xl:gap-8">
          {clubs.items.map((c, i) => {
            const t = tones[c.tone];
            return (
              <motion.article
                key={c.title}
                variants={staggerChild}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className={`group relative flex flex-col items-center overflow-hidden rounded-[36px] bg-white px-7 pb-8 pt-7 text-center shadow-softer ring-1 ${t.ring} transition-shadow hover:shadow-lift ${
                  i === 1 ? "lg:translate-y-4" : ""
                }`}
              >
                <div aria-hidden="true" className={`absolute inset-x-0 top-0 h-[112px] ${t.bg}`}>
                  <svg viewBox="0 0 400 40" preserveAspectRatio="none" className="absolute -bottom-px left-0 h-6 w-full">
                    <path d="M0 20 C 80 44, 160 0, 240 18 S 360 36, 400 14 V40 H0Z" fill="#FFFFFF" />
                  </svg>
                </div>
                <motion.span
                  className={`relative grid h-[92px] w-[92px] place-items-center ${heads[i]} ${t.icon} shadow-soft`}
                  whileHover={{ rotate: [0, -10, 10, -4, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon name={c.icon} className="h-10 w-10" strokeWidth={2} />
                </motion.span>
                <Sparkle
                  className="absolute right-8 top-8 h-5 w-5 transition-transform duration-500 group-hover:rotate-90 group-hover:scale-125"
                  color="#FFFFFF"
                />
                <h3 className="relative mt-5 font-display text-[24px] font-black text-ink">{c.title}</h3>
                <p className={`relative mt-2 inline-block rounded-full px-3.5 py-1 text-[14px] font-extrabold text-ink ${t.bg}`}>
                  {c.subtitle}
                </p>
                <p className="relative mt-3.5 text-[15.5px] leading-relaxed text-ink-soft">{c.text}</p>
              </motion.article>
            );
          })}
        </Stagger>
      </div>
      <Wave fill="#FFFFFF" variant={1} />
    </section>
  );
}
