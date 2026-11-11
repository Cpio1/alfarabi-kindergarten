"use client";

import { motion } from "motion/react";
import { food } from "@/config/content";
import { Icon } from "../shared/Icon";
import { Stagger, staggerChild } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { tones } from "../shared/tones";
import { Wave } from "../shared/Wave";

const plateShapes = ["rounded-full", "clip-scallop", "shape-bean", "clip-flower"];

/** Мобильная версия: вертикальная «линия дня» с тарелками разной формы. */
export function MobileFood() {
  return (
    <section id="m-food" aria-labelledby="m-food-title" className="relative overflow-hidden bg-leaf-50 pb-12 pt-5">
      <div className="relative z-[2] mx-auto w-full max-w-[480px] px-4">
        <SectionHeading eyebrow={food.eyebrow} title={food.title} text={food.text} size="mobile" id="m-food-title" mark="#FFB4A8" />

        <Stagger className="relative mt-6 grid gap-3">
          <span aria-hidden="true" className="absolute bottom-6 left-[27px] top-6 border-l-2 border-dashed border-ink/35" />
          {food.meals.map((m, i) => {
            const t = tones[m.tone];
            return (
              <motion.article key={m.title} variants={staggerChild} className="relative flex items-center gap-3 pr-1">
                <div className="relative h-14 w-14 shrink-0">
                  <div aria-hidden="true" className={`absolute inset-0 bg-ink ${plateShapes[i]}`} />
                  <div className={`absolute inset-[2px] grid place-items-center ${t.bg} ${plateShapes[i]}`}>
                    <Icon name={m.icon} className="h-6 w-6 text-ink" strokeWidth={1.9} />
                  </div>
                </div>
                <div
                  className={`sticker sticker-sm min-w-0 flex-1 bg-white px-3.5 py-2.5 ${i % 2 ? "rounded-[18px_18px_18px_6px]" : "rounded-[6px_18px_18px_18px]"}`}
                  style={{ ["--sc" as string]: t.hex }}
                >
                  <h3 className="flex items-center gap-2 font-display text-[15px] font-bold text-ink">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-ink text-[10.5px] text-white">{i + 1}</span>
                    {m.title}
                  </h3>
                  <p className="mt-0.5 text-[12.5px] leading-snug text-ink-soft">{m.text}</p>
                </div>
              </motion.article>
            );
          })}
        </Stagger>
      </div>
      <Wave fill="#FFF9ED" variant={3} />
    </section>
  );
}
