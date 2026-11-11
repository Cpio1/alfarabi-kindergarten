"use client";

import { motion } from "motion/react";
import { ArrowDown, MessageCircleHeart } from "lucide-react";
import { site } from "@/config/site";
import { heroFacts } from "@/config/content";
import { Float, Heart, Rainbow, RoundBadge, Twinkle } from "../shared/Decor";
import { Icon } from "../shared/Icon";
import { Photo } from "../shared/Photo";
import { Wave } from "../shared/Wave";

const ease = [0.22, 1, 0.36, 1] as const;
const factTones = ["bg-leaf-100", "bg-sun-100", "bg-rose-100", "bg-sky-100"];

/** Мобильный первый экран: заголовок → фото-облако → кнопки → факты. */
export function MobileHero({ image }: { image: string | null }) {
  return (
    <section id="m-home" aria-labelledby="m-hero-title" className="relative overflow-hidden bg-cream pb-11">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <svg viewBox="0 0 400 400" className="absolute -right-28 top-[34%] h-[360px] w-[360px] text-leaf-100">
          <path d="M288 43c47 27 88 80 85 143s-49 112-100 143-111 36-159 7S27 253 33 193 88 77 140 48s101-32 148-5z" fill="currentColor" />
        </svg>
      </div>

      <div className="relative z-[2] mx-auto w-full max-w-[480px] px-4 pt-4">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease }}
          className="font-hand text-[22px] font-bold leading-none text-leaf-700"
        >
          Қош келдіңіз!
        </motion.p>

        <motion.h1
          id="m-hero-title"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05, ease }}
          className="mt-2 font-display text-[clamp(1.3rem,6.6vw,1.9rem)] font-extrabold leading-[1.18] tracking-[-0.01em] text-ink"
        >
          <span className="relative inline-block">
            <span aria-hidden="true" className="absolute -inset-x-1.5 bottom-[0.04em] top-[0.55em] -rotate-1 rounded-[8px] bg-sun" />
            <span className="relative">«Аль-Фараби»</span>
          </span>
          <br />
          <span className="text-leaf-700">бөбекжай-балабақшасы</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="mt-2.5 text-[14.5px] font-medium leading-relaxed text-ink-soft"
        >
          {site.slogan}
        </motion.p>

        {/* Фото-облако */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease }}
          className="relative mx-auto mt-6 w-[92%] max-w-[380px]"
        >
          <Photo
            src={image}
            alt="«Аль-Фараби» балабақшасының ғимараты"
            shape="cloud"
            className="aspect-[1.15/1] w-full"
            sizes="(max-width: 480px) 88vw, 380px"
            backdrop="#FFD76A"
            offset={8}
            priority
          />
          <Float className="absolute -top-4 left-[4%] w-[72px]" y={6} rotate={-4} duration={7}>
            <Rainbow className="w-full" />
          </Float>
          <Float className="absolute right-[4%] top-[6%] w-7" y={6} rotate={18} duration={5}>
            <Twinkle className="w-full" />
          </Float>
          <Float className="absolute bottom-[6%] left-[44%] w-6" y={5} rotate={-10} duration={5.5} delay={0.6}>
            <Heart className="w-full" />
          </Float>
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 160, damping: 16, delay: 0.45 }}
            className="absolute -bottom-3 right-0"
          >
            <RoundBadge text="2–5 ЖАС ✦ ҚАЗАҚ ТІЛІНДЕ ✦ 4 МЕЗГІЛ АС ✦ " className="h-[84px] w-[84px]">
              <span className="font-display text-[14px] font-extrabold text-leaf-700">2–5</span>
            </RoundBadge>
          </motion.div>
        </motion.div>

        {/* Кнопки */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22, ease }}
          className="mt-8 grid grid-cols-2 gap-3 pr-1"
        >
          <a
            href="#m-about"
            className="sticker sticker-press flex h-[52px] items-center justify-center gap-1.5 rounded-[18px] bg-leaf px-2 text-[15px] font-bold text-white"
            style={{ ["--sc" as string]: "#244438" }}
          >
            Біз туралы
            <ArrowDown className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
          </a>
          <a
            href="#m-contact"
            className="sticker sticker-press flex h-[52px] items-center justify-center gap-1.5 rounded-[18px] bg-white px-2 text-[15px] font-bold text-ink"
            style={{ ["--sc" as string]: "#FFD76A" }}
          >
            <MessageCircleHeart className="h-[18px] w-[18px] shrink-0 text-leaf-700" aria-hidden="true" />
            Байланысу
          </a>
        </motion.div>

        {/* Факты: одна карточка 2×2 */}
        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          className="sticker sticker-sm mt-5 grid grid-cols-2 rounded-[22px] bg-white"
          style={{ ["--sc" as string]: "#66B88C" }}
        >
          {heroFacts.map((f, i) => (
            <li
              key={f.label}
              className={`flex min-w-0 items-center gap-2 p-2.5 ${i % 2 === 1 ? "border-l-[1.5px] border-dashed border-ink/20" : ""} ${
                i > 1 ? "border-t-[1.5px] border-dashed border-ink/20" : ""
              }`}
            >
              <span className={`hidden h-8 w-8 shrink-0 place-items-center rounded-full min-[360px]:grid ${factTones[i]}`}>
                <Icon name={f.icon} className="h-4 w-4 text-ink" />
              </span>
              <span className="min-w-0 leading-tight">
                <span className="block whitespace-nowrap font-display text-[12.5px] font-bold text-ink">{f.label}</span>
                <span className="block truncate text-[11px] font-medium text-ink-soft">{f.caption}</span>
              </span>
            </li>
          ))}
        </motion.ul>
      </div>
      <Wave fill="#FFFFFF" variant={1} />
    </section>
  );
}
