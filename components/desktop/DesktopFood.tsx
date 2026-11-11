"use client";

import { motion } from "motion/react";
import { food } from "@/config/content";
import { Float, Leaf, Sparkle, Star } from "../shared/Decor";
import { Icon } from "../shared/Icon";
import { Reveal, Stagger, staggerChild } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { tones } from "../shared/tones";
import { Wave } from "../shared/Wave";

const shapes = ["pebble-a", "pebble-b", "pebble-c", "pebble-d"];

export function DesktopFood() {
  return (
    <section id="food" aria-labelledby="food-title" className="relative overflow-hidden bg-leaf-50 pb-24 pt-14">
      <Float className="absolute left-[4%] top-16 w-10" y={8} rotate={14} duration={6}>
        <Star className="w-full" />
      </Float>
      <Float className="absolute bottom-24 right-[3%] w-14" y={10} rotate={-8} duration={7}>
        <Leaf className="w-full" />
      </Float>

      <div className="relative z-[2] mx-auto grid w-full max-w-[1240px] grid-cols-[0.85fr_1.15fr] items-center gap-12 px-8 xl:gap-16">
        <div className="min-w-0">
          <SectionHeading eyebrow={food.eyebrow} title={food.title} text={food.text} align="left" id="food-title" />

          <Reveal delay={0.1} className="mt-7 flex items-center gap-5">
            <div className="relative grid h-[132px] w-[132px] shrink-0 place-items-center">
              <svg viewBox="0 0 132 132" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <circle cx="66" cy="66" r="62" fill="#FFFFFF" />
                <circle cx="66" cy="66" r="50" fill="none" stroke="#DCF0E4" strokeWidth="6" />
                {[0, 1, 2, 3].map((i) => (
                  <motion.circle
                    key={i}
                    cx="66"
                    cy="66"
                    r="50"
                    fill="none"
                    stroke={["#FFD76A", "#66B88C", "#FFB4A8", "#8EC9EC"][i]}
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="56 258.2"
                    transform={`rotate(${-90 + i * 90 + 10} 66 66)`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                  />
                ))}
              </svg>
              <span className="relative text-center leading-none">
                <span className="block font-display text-[42px] font-black text-leaf-700">4</span>
                <span className="mt-0.5 block text-[13px] font-extrabold text-ink-soft">мезгіл</span>
              </span>
            </div>
            <p className="max-w-[300px] text-[16px] font-semibold leading-relaxed text-ink">
              Таңертеңнен кешке дейін — балалар күні бойы тамақпен қамтамасыз етіледі.
            </p>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-2 gap-5">
          {food.meals.map((m, i) => {
            const t = tones[m.tone];
            return (
              <motion.article
                key={m.title}
                variants={staggerChild}
                whileHover={{ y: -6, rotate: i % 2 ? 1 : -1 }}
                className={`group relative flex items-center gap-4 bg-white p-5 shadow-softer ring-1 ring-leaf/10 transition-shadow hover:shadow-soft ${shapes[i]} ${
                  i % 2 === 1 ? "translate-y-6" : ""
                }`}
              >
                <span className={`relative grid h-[70px] w-[70px] shrink-0 place-items-center ${t.bg} blob-${["a", "b", "c", "d"][i]}`}>
                  <Icon name={m.icon} className="h-8 w-8 text-ink transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />
                  <span className={`absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full text-[13px] font-black shadow-softer ${t.icon}`}>
                    {i + 1}
                  </span>
                </span>
                <span className="min-w-0">
                  <h3 className="font-display text-[20px] font-black text-ink">{m.title}</h3>
                  <p className="mt-1 text-[14.5px] leading-snug text-ink-soft">{m.text}</p>
                </span>
                <Sparkle className="absolute right-4 top-4 h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" color={t.hex} />
              </motion.article>
            );
          })}
        </Stagger>
      </div>
      <Wave fill="#FFF9ED" variant={3} />
    </section>
  );
}
