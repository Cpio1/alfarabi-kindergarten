"use client";

import { motion } from "motion/react";
import { food } from "@/config/content";
import { Drop, Float, Leaf, Sun } from "../shared/Decor";
import { Icon } from "../shared/Icon";
import { Stagger, staggerChild } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { tones } from "../shared/tones";
import { Wave } from "../shared/Wave";

/* «Тарелки» разной формы на волнистой линии дня — от утра к вечеру */
const plateShapes = ["rounded-full", "clip-scallop", "shape-bean", "clip-flower"];
const cardShapes = ["shape-tag", "shape-leaf", "shape-tag-r", "shape-leaf-r"];
const lift = ["", "translate-y-5", "", "translate-y-5"];

export function DesktopFood() {
  return (
    <section id="food" aria-labelledby="food-title" className="relative overflow-hidden bg-leaf-50 pb-20 pt-10">
      <div aria-hidden="true" className="grid-paper pointer-events-none absolute inset-0 opacity-60" />
      <Float className="absolute left-[4%] top-12 w-16" y={8} rotate={8} duration={7}>
        <Sun className="w-full" />
      </Float>
      <Float className="absolute right-[5%] top-16 w-8" y={8} rotate={-8} duration={6}>
        <Drop className="w-full" />
      </Float>
      <Float className="absolute bottom-20 right-[3%] w-12" y={8} rotate={-10} duration={7}>
        <Leaf className="w-full" />
      </Float>

      <div className="relative z-[2] mx-auto w-full max-w-[1100px] px-8">
        <SectionHeading eyebrow={food.eyebrow} title={food.title} text={food.text} id="food-title" mark="#FFB4A8" />

        <div className="relative mt-8">
          {/* пунктирная волна, соединяющая приёмы пищи */}
          <svg aria-hidden="true" viewBox="0 0 1000 80" preserveAspectRatio="none" className="absolute left-[8%] right-[8%] top-[34px] h-[70px] w-[84%]">
            <path d="M0 40 C 120 0, 210 80, 333 40 S 546 0, 666 40 S 880 80, 1000 40" stroke="#244438" strokeWidth="2" strokeDasharray="2 9" strokeLinecap="round" fill="none" />
          </svg>

          <Stagger className="relative grid grid-cols-4 gap-5">
            {food.meals.map((m, i) => {
              const t = tones[m.tone];
              return (
                <motion.article key={m.title} variants={staggerChild} className={`flex flex-col items-center text-center ${lift[i]}`}>
                  <div className="relative h-[88px] w-[88px]">
                    <div aria-hidden="true" className={`absolute inset-0 translate-x-[5px] translate-y-[5px] bg-ink ${plateShapes[i]}`} />
                    <div aria-hidden="true" className={`absolute inset-0 bg-ink ${plateShapes[i]}`} />
                    <div className={`absolute inset-[2px] grid place-items-center ${t.bg} ${plateShapes[i]}`}>
                      <motion.span whileHover={{ rotate: [0, -12, 12, 0], scale: 1.1 }} transition={{ duration: 0.5 }}>
                        <Icon name={m.icon} className="h-9 w-9 text-ink" strokeWidth={1.9} />
                      </motion.span>
                    </div>
                    <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full border-[1.5px] border-ink bg-white font-display text-[13px] font-extrabold text-ink">
                      {i + 1}
                    </span>
                  </div>
                  <div
                    className={`sticker sticker-hover mt-4 w-full bg-white px-4 pb-4 pt-4 ${cardShapes[i]}`}
                    style={{ ["--sc" as string]: t.hex }}
                  >
                    <h3 className="font-display text-[18px] font-bold text-ink">{m.title}</h3>
                    <p className="mt-1 text-[13.5px] leading-snug text-ink-soft">{m.text}</p>
                  </div>
                </motion.article>
              );
            })}
          </Stagger>
        </div>
      </div>
      <Wave fill="#FFF9ED" variant={3} />
    </section>
  );
}
