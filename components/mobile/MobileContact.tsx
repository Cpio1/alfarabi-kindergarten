"use client";

import { motion } from "motion/react";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { links } from "@/config/site";
import { contact } from "@/config/content";
import { getContactItems, getSocialButtons } from "../shared/contactItems";
import { MapArt } from "../shared/MapArt";
import { Reveal, Stagger, staggerChild } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";

const shadows = ["#66B88C", "#FFB4A8", "#8EC9EC", "#FFD76A", "#B9A8EC"];

export function MobileContact() {
  const items = getContactItems("h-[18px] w-[18px]");
  const socials = getSocialButtons();

  return (
    <section id="m-contact" aria-labelledby="m-contact-title" className="relative overflow-hidden bg-cream pb-10 pt-5">
      <div className="relative z-[2] mx-auto w-full max-w-[480px] px-4">
        <SectionHeading eyebrow={contact.eyebrow} title={contact.title} size="mobile" id="m-contact-title" mark="#66B88C" />

        <Stagger className="mt-5 grid gap-2.5 pr-1">
          {items.map((it, i) => {
            const inner = (
              <>
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border-[1.5px] border-ink ${it.tone}`}>{it.icon}</span>
                <span className="min-w-0 flex-1">
                  <span className="block font-hand text-[16px] font-bold leading-none text-leaf-700">{it.label}</span>
                  <span className="mt-0.5 block break-words text-[13.5px] font-semibold leading-snug text-ink">{it.value}</span>
                </span>
                {it.href && <ChevronRight className="h-5 w-5 shrink-0 text-ink" aria-hidden="true" />}
              </>
            );
            const cls = "sticker sticker-sm flex min-h-[60px] items-center gap-3 rounded-[18px] bg-white px-3 py-2.5";
            const style = { ["--sc" as string]: shadows[i % shadows.length] };
            return (
              <motion.div key={it.key} variants={staggerChild}>
                {it.href ? (
                  <a href={it.href} className={`${cls} sticker-press`} style={style} {...(it.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
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
        </Stagger>

        {socials.length > 0 && (
          <div className="mt-3 grid gap-2.5 pr-1">
            {socials.map((s) => (
              <a
                key={s.key}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`sticker sticker-sm sticker-press flex h-[52px] items-center justify-center gap-2.5 rounded-[18px] text-[15px] font-bold ${s.className}`}
                style={{ ["--sc" as string]: "#244438" }}
              >
                {s.icon}
                {s.label}
              </a>
            ))}
          </div>
        )}

        <Reveal className="mt-5 pr-1">
          <div className="sticker sticker-sm rounded-[24px] bg-white p-2.5" style={{ ["--sc" as string]: "#66B88C" }}>
            <div className="overflow-hidden rounded-[18px] border-[1.5px] border-ink">
              <MapArt className="h-[140px]" />
            </div>
            <a
              href={links.twoGis}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2.5 flex h-[50px] w-full items-center justify-center gap-2 rounded-[16px] border-[1.5px] border-ink bg-leaf text-[15px] font-bold text-white active:scale-[0.98]"
            >
              {contact.map}
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
