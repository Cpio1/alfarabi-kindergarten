"use client";

import { motion } from "motion/react";
import { ArrowDown, MessageCircleHeart } from "lucide-react";
import { site } from "@/config/site";
import { heroFacts } from "@/config/content";
import { Cloud, Drift, Float, Flower, Sparkle, Star, Sun } from "../shared/Decor";
import { Icon } from "../shared/Icon";
import { Photo } from "../shared/Photo";
import { Wave } from "../shared/Wave";

const ease = [0.22, 1, 0.36, 1] as const;

export function MobileHero({ image }: { image: string | null }) {
  return (
    <section id="m-home" aria-labelledby="m-hero-title" className="relative overflow-hidden bg-cream pb-14">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sun-100 blur-3xl" />
        <div className="absolute -left-24 top-[45%] h-64 w-64 rounded-full bg-leaf-100/80 blur-3xl" />
      </div>
      <Drift className="absolute right-3 top-3 w-16 opacity-90" x={-14} duration={12}>
        <Cloud className="w-full" />
      </Drift>

      <div className="relative z-[2] mx-auto w-full max-w-[640px] px-4 pt-3">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease }}
          className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[12.5px] font-extrabold text-leaf-700 shadow-softer ring-1 ring-leaf/15"
        >
          <Sparkle className="h-3.5 w-3.5" color="#FFC93C" />
          Жеке бөбекжай-балабақша
        </motion.span>

        <motion.h1
          id="m-hero-title"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.06, ease }}
          className="mt-3 font-display text-[clamp(1.4rem,7.1vw,2.5rem)] font-black leading-[1.08] tracking-tight text-ink"
        >
          <span className="relative inline-block text-leaf">
            «Аль-Фараби»
            <svg aria-hidden="true" viewBox="0 0 300 18" className="absolute -bottom-1.5 left-0 h-2.5 w-full" preserveAspectRatio="none">
              <path d="M4 12 C 80 2, 200 2, 296 10" stroke="#FFD76A" strokeWidth="9" fill="none" strokeLinecap="round" />
            </svg>
          </span>
          <br />
          бөбекжай-балабақшасы
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease }}
          className="mt-3 text-[15.5px] font-semibold leading-relaxed text-ink-soft"
        >
          {site.slogan}
        </motion.p>

        {/* Фото */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="relative mx-auto mt-6 w-full max-w-[440px] px-2"
        >
          <div aria-hidden="true" className="blob-b absolute inset-x-0 -bottom-2 top-3 rotate-3 bg-sun/60" />
          <Photo
            src={image}
            alt="«Аль-Фараби» балабақшасының ғимараты"
            className="blob-c relative aspect-[4/3.3] w-full shadow-lift ring-[6px] ring-white"
            sizes="(max-width: 480px) 92vw, 440px"
            priority
          />
          <Float className="absolute -top-7 right-0 w-[76px]" y={8} rotate={8} duration={6}>
            <Sun className="w-full drop-shadow-[0_8px_14px_rgba(255,201,60,0.45)]" />
          </Float>
          <Float className="absolute -left-1 top-6 w-9" y={6} rotate={-14} duration={5} delay={0.4}>
            <Star className="w-full" />
          </Float>
          <Float className="absolute -bottom-4 left-2 w-12" y={6} rotate={10} duration={6} delay={0.8}>
            <Flower className="w-full" />
          </Float>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0, rotate: 4 }}
            transition={{ duration: 0.5, delay: 0.5, ease }}
            className="absolute -bottom-4 right-3 rounded-[18px] bg-white px-3 py-2 shadow-soft"
          >
            <span className="block font-display text-[18px] font-black leading-none text-leaf-700">{site.ageRange}</span>
          </motion.div>
        </motion.div>

        {/* Кнопки */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease }}
          className="mt-9 grid grid-cols-2 gap-2.5"
        >
          <a
            href="#m-about"
            className="flex h-14 items-center justify-center gap-2 rounded-[20px] bg-leaf px-3 text-[16px] font-extrabold text-white shadow-[0_12px_24px_-12px_rgba(79,158,116,0.9)] active:scale-[0.98]"
          >
            Біз туралы
            <ArrowDown className="h-5 w-5 shrink-0" aria-hidden="true" />
          </a>
          <a
            href="#m-contact"
            className="flex h-14 items-center justify-center gap-2 rounded-[20px] bg-white px-3 text-[16px] font-extrabold text-ink shadow-softer ring-2 ring-sun active:scale-[0.98]"
          >
            <MessageCircleHeart className="h-5 w-5 shrink-0 text-leaf" aria-hidden="true" />
            Байланысу
          </a>
        </motion.div>

        {/* Факты */}
        <motion.ul
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.35 } } }}
          className="mt-4 grid grid-cols-2 gap-2.5"
        >
          {heroFacts.map((f, i) => (
            <motion.li
              key={f.label}
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              className="flex min-w-0 flex-col items-start gap-2 rounded-[20px] bg-white p-2.5 shadow-softer ring-1 ring-leaf/10 min-[360px]:flex-row min-[360px]:items-center min-[360px]:gap-2.5"
            >
              <span
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-[14px] ${
                  ["bg-leaf text-white", "bg-sun text-ink", "bg-rose text-ink", "bg-sky text-white"][i]
                }`}
              >
                <Icon name={f.icon} className="h-5 w-5" />
              </span>
              <span className="min-w-0 leading-tight">
                <span className="block whitespace-nowrap text-[14px] font-black text-ink">{f.label}</span>
                <span className="block text-[12px] font-semibold text-ink-soft">{f.caption}</span>
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <Wave fill="#FFFFFF" variant={1} />
    </section>
  );
}
