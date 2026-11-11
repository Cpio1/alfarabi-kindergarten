"use client";

import { motion } from "motion/react";
import { ArrowRight, MessageCircleHeart } from "lucide-react";
import { site } from "@/config/site";
import { heroFacts } from "@/config/content";
import { Cloud, Daisy, DoodleArrow, Drift, Float, Heart, Rainbow, RoundBadge, Twinkle } from "../shared/Decor";
import { Icon } from "../shared/Icon";
import { Photo } from "../shared/Photo";
import { Wave } from "../shared/Wave";

const ease = [0.22, 1, 0.36, 1] as const;
const factTones = ["bg-leaf-100", "bg-sun-100", "bg-rose-100", "bg-sky-100"];

export function DesktopHero({ image }: { image: string | null }) {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden bg-cream pb-14">
      {/* фон: клякса и точки */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <svg viewBox="0 0 600 600" className="absolute -right-24 -top-28 h-[640px] w-[640px] text-leaf-100">
          <path d="M432 64c70 40 132 120 128 214s-74 168-150 214-166 54-238 10S40 380 50 290 132 116 210 72s152-48 222-8z" fill="currentColor" />
        </svg>
        <div className="dots absolute bottom-20 left-[40%] h-32 w-48 opacity-60" />
      </div>
      <Drift className="absolute left-[2%] top-5 w-24" x={26} duration={16}>
        <Cloud className="w-full" />
      </Drift>

      <div className="relative z-[2] mx-auto grid w-full max-w-[1200px] grid-cols-[1.1fr_1fr] items-center gap-10 px-8 pt-8 xl:gap-14 xl:pt-10">
        {/* Текст */}
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="flex items-center gap-2"
          >
            <span className="rounded-full border-[1.5px] border-ink bg-white px-3.5 py-1 text-[13px] font-bold text-ink">
              Жеке бөбекжай-балабақша
            </span>
            <span className="font-hand text-[26px] font-bold leading-none text-leaf-700">Қош келдіңіз!</span>
          </motion.div>

          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06, ease }}
            className="mt-5 font-display text-[clamp(32px,3.15vw,44px)] font-extrabold leading-[1.12] tracking-[-0.015em] text-ink"
          >
            <span className="relative inline-block">
              <span aria-hidden="true" className="absolute -inset-x-2 bottom-[0.06em] top-[0.52em] -rotate-1 rounded-[10px] bg-sun" />
              <span className="relative text-ink">«Аль-Фараби»</span>
            </span>
            <br />
            <span className="whitespace-nowrap text-leaf-700">бөбекжай-балабақшасы</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14, ease }}
            className="mt-4 max-w-[480px] text-[17px] font-medium leading-relaxed text-ink-soft"
          >
            {site.slogan}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22, ease }}
            className="relative mt-6 flex flex-wrap items-center gap-4"
          >
            <a
              href="#about"
              className="sticker sticker-hover sticker-press group inline-flex h-[52px] items-center gap-2.5 rounded-full bg-leaf px-6 text-[15.5px] font-bold text-white"
              style={{ ["--sc" as string]: "#244438" }}
            >
              Біз туралы
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="sticker sticker-hover sticker-press inline-flex h-[52px] items-center gap-2.5 rounded-full bg-white px-6 text-[15.5px] font-bold text-ink"
              style={{ ["--sc" as string]: "#FFD76A" }}
            >
              <MessageCircleHeart className="h-5 w-5 text-leaf-700" aria-hidden="true" />
              Байланысу
            </a>
            <DoodleArrow className="hidden w-16 -rotate-12 xl:block" />
          </motion.div>

          {/* Лента фактов */}
          <motion.ul
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32, ease }}
            className="sticker mt-7 grid max-w-[470px] grid-cols-2 rounded-[26px] bg-white p-1.5"
            style={{ ["--sc" as string]: "#66B88C" }}
          >
            {heroFacts.map((f, i) => (
              <li
                key={f.label}
                className={`flex min-w-0 items-center gap-2.5 px-3 py-2 ${i % 2 === 1 ? "border-l-[1.5px] border-dashed border-ink/20" : ""} ${
                  i > 1 ? "border-t-[1.5px] border-dashed border-ink/20" : ""
                }`}
              >
                <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${factTones[i]}`}>
                  <Icon name={f.icon} className="h-[18px] w-[18px] text-ink" />
                </span>
                <span className="min-w-0 leading-tight">
                  <span className="block whitespace-nowrap font-display text-[14px] font-bold text-ink">{f.label}</span>
                  <span className="block truncate text-[12.5px] font-medium text-ink-soft">{f.caption}</span>
                </span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Фото в форме облака */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="relative mx-auto w-full max-w-[500px]"
        >
          <Photo
            src={image}
            alt="«Аль-Фараби» балабақшасының ғимараты"
            shape="cloud"
            className="aspect-[1.12/1] w-full"
            sizes="(min-width: 1280px) 500px, 42vw"
            backdrop="#FFD76A"
            offset={12}
            priority
          />
          <Float className="absolute -top-6 left-[6%] w-28" y={8} rotate={-4} duration={7}>
            <Rainbow className="w-full" />
          </Float>
          <Float className="absolute right-[2%] top-[8%] w-9" y={7} rotate={18} duration={5} delay={0.4}>
            <Twinkle className="w-full" />
          </Float>
          <Float className="absolute -right-3 bottom-[22%] w-12" y={9} rotate={10} duration={6.5} delay={0.8}>
            <Daisy className="w-full" />
          </Float>
          <Float className="absolute bottom-[4%] left-[38%] w-8" y={6} rotate={-10} duration={5.5} delay={1.1}>
            <Heart className="w-full" />
          </Float>
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 160, damping: 16, delay: 0.5 }}
            className="absolute -left-5 bottom-[2%]"
          >
            <RoundBadge text="2–5 ЖАС ✦ ҚАЗАҚ ТІЛІНДЕ ✦ 4 МЕЗГІЛ АС ✦ " className="h-[118px] w-[118px]">
              <span className="font-display text-[19px] font-extrabold text-leaf-700">2–5</span>
            </RoundBadge>
          </motion.div>
        </motion.div>
      </div>

      <Wave fill="#FFFFFF" variant={1} />
    </section>
  );
}
