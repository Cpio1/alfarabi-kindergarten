"use client";

import { motion } from "motion/react";
import { ExternalLink, MapPin } from "lucide-react";
import { links, site } from "@/config/site";
import { contact } from "@/config/content";
import { getContactItems, getSocialButtons } from "../shared/contactItems";
import { Float, Flower, Star } from "../shared/Decor";
import { MapArt } from "../shared/MapArt";
import { Reveal, Stagger, staggerChild } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";

export function DesktopContact() {
  const items = getContactItems();
  const socials = getSocialButtons();

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden bg-cream pb-20 pt-14">
      <Float className="absolute left-[3%] top-24 w-12" y={8} rotate={12} duration={6}>
        <Star className="w-full" />
      </Float>
      <Float className="absolute bottom-16 right-[3%] w-14" y={10} rotate={-10} duration={7}>
        <Flower className="w-full" />
      </Float>

      <div className="relative z-[2] mx-auto w-full max-w-[1240px] px-8">
        <SectionHeading eyebrow={contact.eyebrow} title={contact.title} text={contact.text} id="contact-title" />

        <div className="mt-10 grid grid-cols-[1.05fr_1fr] gap-8">
          <Stagger className="flex flex-col gap-3.5">
            {items.map((it) => {
              const inner = (
                <>
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${it.tone}`}>{it.icon}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[13px] font-extrabold uppercase tracking-[0.06em] text-ink-soft">{it.label}</span>
                    <span className="mt-0.5 block break-words text-[16.5px] font-bold leading-snug text-ink">{it.value}</span>
                  </span>
                  {it.href && <ExternalLink className="h-5 w-5 shrink-0 text-ink-soft transition group-hover:text-leaf" aria-hidden="true" />}
                </>
              );
              const cls =
                "group flex items-center gap-4 rounded-[26px] bg-white p-4 pr-5 shadow-softer ring-1 ring-leaf/10 transition hover:-translate-y-0.5 hover:shadow-soft";
              return (
                <motion.div key={it.key} variants={staggerChild}>
                  {it.href ? (
                    <a href={it.href} className={cls} {...(it.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                      {inner}
                    </a>
                  ) : (
                    <div className={cls}>{inner}</div>
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
                    className={`inline-flex h-[52px] items-center gap-2.5 rounded-full px-6 text-[15.5px] font-extrabold shadow-softer transition hover:-translate-y-0.5 ${s.className}`}
                  >
                    {s.icon}
                    {s.label}
                  </a>
                ))}
              </motion.div>
            )}
          </Stagger>

          <Reveal delay={0.1} className="relative">
            <div className="flex h-full flex-col overflow-hidden rounded-[40px] bg-white shadow-soft ring-1 ring-leaf/10">
              <MapArt className="min-h-[240px] flex-1" />
              <div className="flex items-center gap-4 p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-rose-100 text-ink">
                  <MapPin className="h-6 w-6" aria-hidden="true" />
                </span>
                <p className="min-w-0 flex-1 text-[15px] font-semibold leading-snug text-ink">{site.address.full}</p>
              </div>
              <div className="px-6 pb-6">
                <a
                  href={links.twoGis}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[54px] w-full items-center justify-center gap-2.5 rounded-full bg-leaf text-[16px] font-extrabold text-white shadow-[0_14px_28px_-12px_rgba(79,158,116,0.8)] transition hover:-translate-y-0.5 hover:bg-leaf-600"
                >
                  {contact.map}
                  <ExternalLink className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
