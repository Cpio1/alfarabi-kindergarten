"use client";

import { motion } from "motion/react";
import { Users } from "lucide-react";
import { site } from "@/config/site";
import { about } from "@/config/content";
import { Float, Flower, Leaf, Sparkle, Star } from "../shared/Decor";
import { Icon } from "../shared/Icon";
import { Photo } from "../shared/Photo";
import { Reveal, Stagger, staggerChild } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { tones } from "../shared/tones";
import { Wave } from "../shared/Wave";

const ages = ["2", "3", "4", "5"];
const shapes = ["pebble-a", "pebble-b", "pebble-c", "pebble-d"];

export function DesktopAbout({ image }: { image: string | null }) {
  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden bg-white pb-24 pt-14">
      <div className="relative z-[2] mx-auto w-full max-w-[1240px] px-8">
        <div className="grid grid-cols-[0.9fr_1.1fr] items-center gap-12 xl:gap-16">
          {/* Фото */}
          <Reveal className="relative mx-auto w-full max-w-[420px]">
            <div className="relative aspect-[4/4.3]">
              <div aria-hidden="true" className="arch absolute inset-x-6 -bottom-4 top-6 bg-leaf-100" />
              <Photo
                src={image}
                alt="Балабақшадағы күнделікті өмір"
                variant="about"
                className="arch absolute inset-0 right-6 shadow-soft ring-8 ring-cream"
                sizes="(min-width: 1280px) 440px, 36vw"
              />
            </div>
            <Float className="absolute -right-2 top-10 w-14" y={9} rotate={12} duration={6}>
              <Star className="w-full" />
            </Float>
            <Float className="absolute -left-6 top-1/3 w-14" y={8} rotate={-10} duration={7} delay={0.5}>
              <Leaf className="w-full" />
            </Float>
            <Float className="absolute bottom-24 -right-4 w-8" y={6} rotate={20} duration={5} delay={1}>
              <Sparkle className="w-full" color="#FFB4A8" />
            </Float>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.2 }}
              className="blob-d absolute -bottom-6 left-2 grid h-[118px] w-[128px] place-items-center bg-sun text-center shadow-soft"
            >
              <span className="leading-none">
                <span className="block font-display text-[32px] font-black text-ink">2–5</span>
                <span className="mt-1 block text-[14px] font-extrabold text-ink/80">жас</span>
              </span>
            </motion.div>
          </Reveal>

          {/* Текст */}
          <div className="min-w-0">
            <SectionHeading eyebrow={about.eyebrow} title={about.title} align="left" id="about-title" />
            <Reveal delay={0.08}>
              <p className="mt-4 text-[17.5px] font-semibold leading-relaxed text-ink">{about.lead}</p>
              <p className="mt-3 text-[16px] leading-relaxed text-ink-soft">{about.text}</p>
            </Reveal>

            <Stagger className="mt-7 grid grid-cols-2 gap-4">
              {about.values.map((v, i) => {
                const t = tones[v.tone];
                return (
                  <motion.div
                    key={v.title}
                    variants={staggerChild}
                    whileHover={{ y: -5 }}
                    className={`group flex items-start gap-3.5 p-4 ${t.soft} ${shapes[i]} ring-1 ${t.ring} transition-shadow hover:shadow-soft`}
                  >
                    <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${t.icon} transition-transform group-hover:rotate-[-8deg] group-hover:scale-110`}>
                      <Icon name={v.icon} className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-[17px] font-black text-ink">{v.title}</span>
                      <span className="mt-1 block text-[14.5px] leading-snug text-ink-soft">{v.text}</span>
                    </span>
                  </motion.div>
                );
              })}
            </Stagger>
          </div>
        </div>

        {/* Топтар */}
        <Reveal className="relative mt-12">
          <div className="relative grid grid-cols-[auto_1fr_auto] items-center gap-8 overflow-hidden rounded-[40px] bg-leaf px-10 py-8 text-white shadow-soft">
            <div aria-hidden="true" className="absolute -right-10 -top-16 h-48 w-48 rounded-full bg-white/10" />
            <div aria-hidden="true" className="absolute -bottom-20 left-1/3 h-40 w-40 rounded-full bg-sun/25" />
            <span className="relative grid h-16 w-16 place-items-center rounded-[22px] bg-white/15">
              <Users className="h-8 w-8" aria-hidden="true" />
            </span>
            <div className="relative min-w-0">
              <h3 className="font-display text-[26px] font-black">{about.groups.title}</h3>
              <p className="mt-1.5 max-w-[560px] text-[16px] leading-relaxed text-white/90">{about.groups.text}</p>
              {site.groups.length > 0 ? (
                <ul className="mt-4 flex flex-wrap gap-2.5">
                  {site.groups.map((g) => (
                    <li key={g.name} className="rounded-full bg-white px-4 py-2 text-[14px] font-extrabold text-ink">
                      {g.name}
                      {g.age && <span className="ml-1.5 font-semibold text-ink-soft">· {g.age}</span>}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-[14.5px] font-semibold text-sun-100">{about.groups.note}</p>
              )}
            </div>
            <div className="relative flex items-end gap-2.5" aria-label="Балалар жасы: 2 жастан 5 жасқа дейін">
              {ages.map((a, i) => (
                <motion.span
                  key={a}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08, type: "spring", stiffness: 260, damping: 18 }}
                  className="grid place-items-center rounded-full bg-white font-display font-black text-leaf-700 shadow-softer"
                  style={{ width: 46 + i * 8, height: 46 + i * 8, fontSize: 17 + i * 2 }}
                  aria-hidden="true"
                >
                  {a}
                </motion.span>
              ))}
              <span className="mb-1 ml-1 text-[15px] font-extrabold" aria-hidden="true">жас</span>
            </div>
            <Flower className="absolute -bottom-4 right-[28%] h-12 w-12 opacity-80" petal="#FFFFFF" />
          </div>
        </Reveal>
      </div>
      <Wave fill="#EEF8F2" variant={2} />
    </section>
  );
}
