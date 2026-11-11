"use client";

import { motion } from "motion/react";
import { Users } from "lucide-react";
import { site } from "@/config/site";
import { about } from "@/config/content";
import { Float, Leaf, Star } from "../shared/Decor";
import { Icon } from "../shared/Icon";
import { Photo } from "../shared/Photo";
import { Reveal, Stagger, staggerChild } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { tones } from "../shared/tones";
import { Wave } from "../shared/Wave";

export function MobileAbout({ image }: { image: string | null }) {
  return (
    <section id="m-about" aria-labelledby="m-about-title" className="relative overflow-hidden bg-white pb-16 pt-8">
      <div className="relative z-[2] mx-auto w-full max-w-[640px] px-4">
        <SectionHeading eyebrow={about.eyebrow} title={about.title} size="mobile" id="m-about-title" />

        <Reveal className="relative mx-auto mt-6 w-[86%] max-w-[400px]">
          <div aria-hidden="true" className="arch absolute inset-0 translate-x-3 translate-y-3 bg-leaf-100" />
          <Photo
            src={image}
            alt="Балабақшадағы күнделікті өмір"
            variant="about"
            className="arch relative aspect-[4/4.4] w-full shadow-soft ring-[6px] ring-cream"
            sizes="(max-width: 640px) 86vw, 400px"
          />
          <Float className="absolute -right-3 top-6 w-10" y={7} rotate={12} duration={6}>
            <Star className="w-full" />
          </Float>
          <Float className="absolute -left-4 top-1/2 w-11" y={7} rotate={-10} duration={7}>
            <Leaf className="w-full" />
          </Float>
        </Reveal>

        <Reveal className="mt-6">
          <p className="text-[16px] font-semibold leading-relaxed text-ink">{about.lead}</p>
          <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">{about.text}</p>
        </Reveal>

        <Stagger className="mt-5 grid gap-2.5">
          {about.values.map((v) => {
            const t = tones[v.tone];
            return (
              <motion.div
                key={v.title}
                variants={staggerChild}
                className={`flex items-center gap-3.5 rounded-[22px] p-3.5 ${t.soft} ring-1 ${t.ring}`}
              >
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-[15px] ${t.icon}`}>
                  <Icon name={v.icon} className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-[16px] font-black text-ink">{v.title}</span>
                  <span className="mt-0.5 block text-[14px] leading-snug text-ink-soft">{v.text}</span>
                </span>
              </motion.div>
            );
          })}
        </Stagger>

        {/* Топтар */}
        <Reveal className="mt-7">
          <div className="relative overflow-hidden rounded-[30px] bg-leaf p-5 text-white shadow-soft">
            <div aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10" />
            <div className="relative flex items-center gap-3">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[16px] bg-white/15">
                <Users className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="font-display text-[21px] font-black">{about.groups.title}</h3>
            </div>
            <div className="relative mt-4 flex items-end justify-center gap-2" aria-label="Балалар жасы: 2 жастан 5 жасқа дейін">
              {["2", "3", "4", "5"].map((a, i) => (
                <motion.span
                  key={a}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07, type: "spring", stiffness: 260, damping: 18 }}
                  className="grid place-items-center rounded-full bg-white font-display font-black text-leaf-700"
                  style={{ width: 40 + i * 6, height: 40 + i * 6, fontSize: 15 + i * 2 }}
                  aria-hidden="true"
                >
                  {a}
                </motion.span>
              ))}
              <span className="mb-1 ml-1 text-[14px] font-extrabold" aria-hidden="true">жас</span>
            </div>
            <p className="relative mt-4 text-[15px] leading-relaxed text-white/90">{about.groups.text}</p>
            {site.groups.length > 0 ? (
              <ul className="relative mt-3 flex flex-wrap gap-2">
                {site.groups.map((g) => (
                  <li key={g.name} className="rounded-full bg-white px-3.5 py-1.5 text-[14px] font-extrabold text-ink">
                    {g.name}
                    {g.age && <span className="ml-1 font-semibold text-ink-soft">· {g.age}</span>}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="relative mt-2 text-[14px] font-semibold text-sun-100">{about.groups.note}</p>
            )}
          </div>
        </Reveal>
      </div>
      <Wave fill="#EEF8F2" variant={2} />
    </section>
  );
}
