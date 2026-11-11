"use client";

import { motion } from "motion/react";
import { ArrowRight, MessageCircleHeart } from "lucide-react";
import { site } from "@/config/site";
import { heroFacts } from "@/config/content";
import { Cloud, Drift, Flower, Float, Pencil, Sparkle, Star, Sun } from "../shared/Decor";
import { Icon } from "../shared/Icon";
import { Photo } from "../shared/Photo";
import { Wave } from "../shared/Wave";

const ease = [0.22, 1, 0.36, 1] as const;

export function DesktopHero({ image }: { image: string | null }) {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden bg-cream pb-16">
      {/* мягкий фон */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-leaf-100/70 blur-3xl" />
        <div className="absolute -right-24 -top-24 h-[380px] w-[380px] rounded-full bg-sun-100 blur-3xl" />
        <div className="dots absolute bottom-16 left-[44%] h-40 w-56 opacity-70" />
      </div>
      <Drift className="absolute left-[3%] top-6 w-28 opacity-90" x={30} duration={16}>
        <Cloud className="w-full drop-shadow-[0_8px_14px_rgba(36,68,56,0.08)]" />
      </Drift>
      <Drift className="absolute left-[38%] top-2 w-20 opacity-80" x={-24} duration={19} delay={2}>
        <Cloud className="w-full" />
      </Drift>

      <div className="relative z-[2] mx-auto grid w-full max-w-[1240px] grid-cols-[1.06fr_1fr] items-center gap-10 px-8 pt-6 xl:gap-14 xl:pt-10">
        {/* Текст */}
        <div className="min-w-0">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[14px] font-extrabold text-leaf-700 shadow-softer ring-1 ring-leaf/15"
          >
            <Sparkle className="h-4 w-4" color="#FFC93C" />
            Жеке бөбекжай-балабақша · {site.ageRange}
          </motion.span>

          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease }}
            className="mt-5 font-display text-[clamp(36px,3.5vw,50px)] font-black leading-[1.1] tracking-tight text-ink"
          >
            <span className="relative inline-block text-leaf">
              «Аль-Фараби»
              <svg aria-hidden="true" viewBox="0 0 300 18" className="absolute -bottom-2 left-0 h-3.5 w-full" preserveAspectRatio="none">
                <path d="M4 12 C 80 2, 200 2, 296 10" stroke="#FFD76A" strokeWidth="8" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            <br />
            <span className="whitespace-nowrap">бөбекжай-балабақшасы</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease }}
            className="mt-5 max-w-[540px] text-[18px] font-semibold leading-relaxed text-ink-soft xl:text-[19px]"
          >
            {site.slogan}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <a
              href="#about"
              className="group inline-flex h-[54px] items-center gap-2.5 rounded-full bg-leaf px-7 text-[16px] font-extrabold text-white shadow-[0_14px_28px_-12px_rgba(79,158,116,0.8)] transition hover:-translate-y-0.5 hover:bg-leaf-600"
            >
              Біз туралы
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-[54px] items-center gap-2.5 rounded-full bg-white px-7 text-[16px] font-extrabold text-ink shadow-softer ring-2 ring-sun transition hover:-translate-y-0.5 hover:bg-sun-50"
            >
              <MessageCircleHeart className="h-5 w-5 text-leaf" aria-hidden="true" />
              Байланысу
            </a>
          </motion.div>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.35 } } }}
            className="mt-8 grid max-w-[600px] grid-cols-2 gap-3 xl:mt-9 xl:grid-cols-4"
          >
            {heroFacts.map((f, i) => (
              <motion.li
                key={f.label}
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}
                whileHover={{ y: -4 }}
                className={`flex items-center gap-3 bg-white px-3.5 py-3 xl:flex-col xl:items-start xl:gap-2 shadow-softer ring-1 ring-leaf/10 ${
                  ["rounded-[26px_18px_26px_18px]", "rounded-[18px_26px_18px_26px]", "rounded-[26px_18px_26px_18px]", "rounded-[18px_26px_18px_26px]"][i]
                }`}
              >
                <span
                  className={`grid h-9 w-9 place-items-center rounded-xl ${
                    ["bg-leaf text-white", "bg-sun text-ink", "bg-rose text-ink", "bg-sky text-white"][i]
                  }`}
                >
                  <Icon name={f.icon} className="h-[18px] w-[18px]" />
                </span>
                <span className="leading-tight">
                  <span className="block whitespace-nowrap text-[15px] font-black text-ink">{f.label}</span>
                  <span className="block text-[12.5px] font-semibold text-ink-soft">{f.caption}</span>
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Фото */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="relative mx-auto aspect-[1/0.92] w-full max-w-[540px]"
        >
          <div aria-hidden="true" className="blob-b absolute inset-[-14px] rotate-6 bg-sun/60" />
          <div aria-hidden="true" className="blob-c absolute inset-[-4px] -rotate-3 bg-leaf/25" />
          <Photo
            src={image}
            alt="«Аль-Фараби» балабақшасының ғимараты"
            className="blob-a absolute inset-0 shadow-lift ring-[10px] ring-white"
            sizes="(min-width: 1280px) 540px, 45vw"
            priority
          />

          <Float className="absolute -right-6 -top-10 w-28 xl:w-32" y={12} rotate={8} duration={7}>
            <Sun className="w-full drop-shadow-[0_10px_18px_rgba(255,201,60,0.45)]" />
          </Float>
          <Float className="absolute -left-8 top-[18%] w-12" y={8} rotate={-14} duration={5} delay={0.6}>
            <Star className="w-full" />
          </Float>
          <Float className="absolute -bottom-3 -left-4 w-16" y={10} rotate={10} duration={6.5} delay={1}>
            <Flower className="w-full" />
          </Float>
          <Float className="absolute right-[6%] top-[46%] w-7" y={6} rotate={20} duration={4.5} delay={0.3}>
            <Sparkle className="w-full" color="#FFFFFF" />
          </Float>
          <Float className="absolute -bottom-6 right-[12%] w-32" y={6} rotate={-6} duration={8} delay={0.4}>
            <Pencil className="w-full -rotate-12 drop-shadow-[0_8px_12px_rgba(36,68,56,0.15)]" />
          </Float>

          {/* стикер */}
          <motion.div
            initial={{ opacity: 0, y: 16, rotate: -8 }}
            animate={{ opacity: 1, y: 0, rotate: -6 }}
            transition={{ duration: 0.6, delay: 0.6, ease }}
            className="absolute -left-6 bottom-[22%] flex items-center gap-2.5 rounded-[22px] bg-white px-4 py-3 shadow-soft"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-leaf-100 font-display text-[15px] font-black text-leaf-700">
              Ә
            </span>
            <span className="leading-tight">
              <span className="block text-[14px] font-black text-ink">Қазақ тілінде</span>
              <span className="block text-[12px] font-semibold text-ink-soft">тәрбие мен білім</span>
            </span>
          </motion.div>
        </motion.div>
      </div>

      <Wave fill="#FFFFFF" variant={1} />
    </section>
  );
}
