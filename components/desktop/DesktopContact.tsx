"use client";

import { motion } from "motion/react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { links, site } from "@/config/site";
import { contact } from "@/config/content";
import { getContactItems, getSocialButtons } from "../shared/contactItems";
import { Cloud, Drift, Float, Sun, Twinkle } from "../shared/Decor";
import { MapArt } from "../shared/MapArt";
import { Reveal, Stagger, staggerChild } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";

const rowShapes = ["rounded-[22px_22px_22px_6px]", "rounded-[22px]", "rounded-[22px]", "rounded-[22px_6px_22px_22px]", "rounded-[22px]"];

export function DesktopContact() {
  const items = getContactItems();
  const socials = getSocialButtons();

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden bg-cream pb-16 pt-10">
      <Drift className="absolute right-[6%] top-6 w-24" x={-22} duration={17}>
        <Cloud className="w-full" />
      </Drift>

      <div className="relative z-[2] mx-auto grid w-full max-w-[1200px] grid-cols-[1fr_1fr] items-center gap-12 px-8">
        <div className="min-w-0">
          <SectionHeading eyebrow={contact.eyebrow} title={contact.title} text={contact.text} align="left" id="contact-title" mark="#66B88C" />

          <Stagger className="mt-6 grid gap-3">
            {items.map((it, i) => {
              const inner = (
                <>
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border-[1.5px] border-ink ${it.tone}`}>{it.icon}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-hand text-[18px] font-bold leading-none text-leaf-700">{it.label}</span>
                    <span className="mt-1 block break-words text-[15px] font-semibold leading-snug text-ink">{it.value}</span>
                  </span>
                  {it.href && <ArrowUpRight className="h-5 w-5 shrink-0 text-ink transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />}
                </>
              );
              const cls = `sticker sticker-sm group flex items-center gap-3.5 bg-white px-4 py-3 ${rowShapes[i] ?? "rounded-[22px]"} ${it.href ? "sticker-hover" : ""}`;
              const style = { ["--sc" as string]: ["#66B88C", "#FFB4A8", "#8EC9EC", "#FFD76A", "#B9A8EC"][i % 5] };
              return (
                <motion.div key={it.key} variants={staggerChild}>
                  {it.href ? (
                    <a href={it.href} className={cls} style={style} {...(it.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                      {inner}
                    </a>
                  ) : (
                    <div className={cls} style={style}>
                      {inner}
                    </div>
                  )}
                </motion.div>
              );
            })}
            {socials.length > 0 && (
              <motion.div variants={staggerChild} className="flex flex-wrap gap-3 pt-1">
                {socials.map((s) => (
                  <a
                    key={s.key}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`sticker sticker-hover inline-flex h-[50px] items-center gap-2.5 rounded-full px-5 text-[15px] font-bold ${s.className}`}
                    style={{ ["--sc" as string]: "#244438" }}
                  >
                    {s.icon}
                    {s.label}
                  </a>
                ))}
              </motion.div>
            )}
          </Stagger>
        </div>

        {/* Открытка с картой */}
        <Reveal delay={0.1} className="relative mx-auto w-full max-w-[500px]">
          <div className="sticker relative rotate-[1.5deg] rounded-[30px] bg-white p-3.5" style={{ ["--sc" as string]: "#66B88C" }}>
            <div className="relative overflow-hidden rounded-[22px] border-[1.5px] border-ink">
              <MapArt className="h-[230px]" />
            </div>
            <div className="flex items-start gap-3 px-1.5 pb-1 pt-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-[1.5px] border-ink bg-rose-100">
                <MapPin className="h-5 w-5 text-ink" aria-hidden="true" />
              </span>
              <p className="min-w-0 flex-1 text-[14px] font-semibold leading-snug text-ink">{site.address.full}</p>
            </div>
            <a
              href={links.twoGis}
              target="_blank"
              rel="noopener noreferrer"
              className="sticker sticker-hover sticker-press mt-3 flex h-[50px] w-full items-center justify-center gap-2 rounded-full bg-leaf text-[15px] font-bold text-white"
              style={{ ["--sc" as string]: "#244438" }}
            >
              {contact.map}
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* «марка» */}
            <div className="absolute -right-5 -top-6 rotate-12">
              <div className="clip-scallop grid h-[78px] w-[78px] place-items-center bg-ink">
                <div className="clip-scallop grid h-[74px] w-[74px] place-items-center bg-sun-100">
                  <Sun className="w-12" />
                </div>
              </div>
            </div>
          </div>
          <Float className="absolute -bottom-5 -left-4 w-9" y={7} rotate={16} duration={5.5}>
            <Twinkle className="w-full" color="#FFB4A8" />
          </Float>
        </Reveal>
      </div>
    </section>
  );
}
