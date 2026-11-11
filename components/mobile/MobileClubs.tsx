"use client";

import { motion } from "motion/react";
import { clubs } from "@/config/content";
import { Icon } from "../shared/Icon";
import { Stagger, staggerChild } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { tones } from "../shared/tones";
import { Wave } from "../shared/Wave";

const windows = ["shape-arch", "clip-scallop", "clip-cloud"];
const cards = ["rounded-[24px_24px_24px_8px]", "rounded-[24px]", "rounded-[24px_24px_8px_24px]"];

export function MobileClubs() {
  return (
    <section id="m-clubs" aria-labelledby="m-clubs-title" className="relative overflow-hidden bg-cream pb-12 pt-5">
      <div className="relative z-[2] mx-auto w-full max-w-[480px] px-4">
        <SectionHeading eyebrow={clubs.eyebrow} title={clubs.title} text={clubs.text} size="mobile" id="m-clubs-title" mark="#B9A8EC" />

        <Stagger className="mt-5 grid gap-3.5 pr-1">
          {clubs.items.map((c, i) => {
            const t = tones[c.tone];
            return (
              <motion.article
                key={c.title}
                variants={staggerChild}
                className={`sticker sticker-sm relative overflow-hidden bg-white p-3.5 ${cards[i]}`}
                style={{ ["--sc" as string]: t.hex }}
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-[54px] w-[58px] shrink-0">
                    <div aria-hidden="true" className={`absolute inset-0 bg-ink ${windows[i]}`} />
                    <div className={`absolute inset-[2px] grid place-items-center ${t.bg} ${windows[i]}`}>
                      <Icon name={c.icon} className="h-6 w-6 text-ink" strokeWidth={1.9} />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-[16.5px] font-bold text-ink">{c.title}</h3>
                    <p className="font-hand text-[18px] font-bold leading-tight text-leaf-700">{c.subtitle}</p>
                  </div>
                </div>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink-soft">{c.text}</p>
              </motion.article>
            );
          })}
        </Stagger>
      </div>
      <Wave fill="#FFFFFF" variant={1} />
    </section>
  );
}
