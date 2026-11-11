"use client";

import { motion } from "motion/react";
import { ChevronRight, ExternalLink } from "lucide-react";
import { links } from "@/config/site";
import { contact } from "@/config/content";
import { getContactItems, getSocialButtons } from "../shared/contactItems";
import { MapArt } from "../shared/MapArt";
import { Reveal, Stagger, staggerChild } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";

export function MobileContact() {
  const items = getContactItems();
  const socials = getSocialButtons();

  return (
    <section id="m-contact" aria-labelledby="m-contact-title" className="relative overflow-hidden bg-cream pb-12 pt-6">
      <div className="relative z-[2] mx-auto w-full max-w-[640px] px-4">
        <SectionHeading eyebrow={contact.eyebrow} title={contact.title} text={contact.text} size="mobile" id="m-contact-title" />

        <Stagger className="mt-6 grid gap-2.5">
          {items.map((it) => {
            const inner = (
              <>
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-[15px] ${it.tone}`}>{it.icon}</span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[11.5px] font-extrabold uppercase tracking-[0.06em] text-ink-soft">{it.label}</span>
                  <span className="mt-0.5 block break-words text-[15px] font-bold leading-snug text-ink">{it.value}</span>
                </span>
                {it.href && <ChevronRight className="h-5 w-5 shrink-0 text-ink-soft" aria-hidden="true" />}
              </>
            );
            const cls = "flex min-h-[64px] items-center gap-3 rounded-[22px] bg-white p-3 shadow-softer ring-1 ring-leaf/10";
            return (
              <motion.div key={it.key} variants={staggerChild}>
                {it.href ? (
                  <a href={it.href} className={`${cls} active:scale-[0.98]`} {...(it.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                    {inner}
                  </a>
                ) : (
                  <div className={cls}>{inner}</div>
                )}
              </motion.div>
            );
          })}
        </Stagger>

        {socials.length > 0 && (
          <div className="mt-3 grid gap-2.5">
            {socials.map((s) => (
              <a
                key={s.key}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex h-14 items-center justify-center gap-2.5 rounded-[20px] text-[16px] font-extrabold shadow-softer ${s.className}`}
              >
                {s.icon}
                {s.label}
              </a>
            ))}
          </div>
        )}

        <Reveal className="mt-5">
          <div className="overflow-hidden rounded-[28px] bg-white shadow-soft ring-1 ring-leaf/10">
            <MapArt className="h-[170px]" />
            <div className="p-3">
              <a
                href={links.twoGis}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-full items-center justify-center gap-2 rounded-[18px] bg-leaf text-[16px] font-extrabold text-white active:scale-[0.98]"
              >
                {contact.map}
                <ExternalLink className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
