"use client";

import { motion } from "motion/react";
import { food } from "@/config/content";
import { Icon } from "../shared/Icon";
import { Stagger, staggerChild } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { tones } from "../shared/tones";
import { Wave } from "../shared/Wave";

const shapes = ["rounded-[28px_18px_28px_18px]", "rounded-[18px_28px_18px_28px]", "rounded-[18px_28px_18px_28px]", "rounded-[28px_18px_28px_18px]"];

export function MobileFood() {
  return (
    <section id="m-food" aria-labelledby="m-food-title" className="relative overflow-hidden bg-leaf-50 pb-16 pt-6">
      <div className="relative z-[2] mx-auto w-full max-w-[640px] px-4">
        <SectionHeading eyebrow={food.eyebrow} title={food.title} text={food.text} size="mobile" id="m-food-title" />

        <div className="mx-auto mt-5 flex w-fit items-center gap-2 rounded-full bg-white py-1.5 pl-1.5 pr-4 shadow-softer">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-sun font-display text-[18px] font-black text-ink">4</span>
          <span className="text-[14.5px] font-extrabold text-ink">мезгіл тамақтану</span>
        </div>

        <Stagger className="mt-5 grid grid-cols-2 gap-2.5">
          {food.meals.map((m, i) => {
            const t = tones[m.tone];
            return (
              <motion.article
                key={m.title}
                variants={staggerChild}
                className={`relative flex flex-col items-start bg-white p-3.5 shadow-softer ring-1 ring-leaf/10 ${shapes[i]}`}
              >
                <span className={`relative grid h-12 w-12 place-items-center rounded-[16px] ${t.bg}`}>
                  <Icon name={m.icon} className="h-6 w-6 text-ink" strokeWidth={2} />
                </span>
                <span className={`absolute right-3 top-3 grid h-6 w-6 place-items-center rounded-full text-[12px] font-black ${t.icon}`}>
                  {i + 1}
                </span>
                <h3 className="mt-2.5 font-display text-[16.5px] font-black text-ink">{m.title}</h3>
                <p className="mt-0.5 text-[13px] leading-snug text-ink-soft">{m.text}</p>
              </motion.article>
            );
          })}
        </Stagger>
      </div>
      <Wave fill="#FFF9ED" variant={3} />
    </section>
  );
}
