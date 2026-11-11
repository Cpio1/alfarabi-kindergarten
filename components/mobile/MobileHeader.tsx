"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Clock3, Mail, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { links, navItems, site } from "@/config/site";
import { Logo } from "../shared/Logo";

import { useActiveSection, useScrolled } from "../shared/useActiveSection";

const P = "m-";

export function MobileHeader({ logo }: { logo: string | null }) {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(8);
  const active = useActiveSection(navItems.map((n) => P + n.id));
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onMq);
    return () => {
      document.documentElement.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
      btnRef.current?.focus({ preventScroll: true });
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
          scrolled || open ? "bg-cream/90 shadow-[0_8px_20px_-16px_rgba(36,68,56,0.4)] backdrop-blur-md" : "bg-cream"
        }`}
      >
        <div className="mx-auto flex h-[64px] w-full max-w-[480px] items-center justify-between gap-3 px-4">
          <a href={`#${P}home`} aria-label="Басты бетке өту" className="min-w-0 rounded-2xl" onClick={() => setOpen(false)}>
            <Logo src={logo} />
          </a>
          <button
            ref={btnRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Мәзірді жабу" : "Мәзірді ашу"}
            className={`relative grid h-12 w-12 shrink-0 place-items-center rounded-[16px] border-[1.5px] border-ink shadow-[3px_3px_0_0_#FFD76A] transition-colors ${
              open ? "bg-ink text-white" : "bg-leaf text-white"
            }`}
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.span
                key={open ? "x" : "m"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            className="fixed inset-x-0 bottom-0 top-[64px] z-40 bg-ink/30 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />
        )}
        {open && (
          <motion.div
            key="panel"
            id="mobile-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Мәзір"
            className="fixed inset-x-0 top-[64px] z-50 max-h-[calc(100dvh-64px)] overflow-y-auto overflow-x-hidden rounded-b-[32px] border-b-[1.5px] border-ink bg-cream"
            initial={{ clipPath: "inset(0 0 100% 0 round 0 0 36px 36px)" }}
            animate={{ clipPath: "inset(0 0 0% 0 round 0 0 36px 36px)" }}
            exit={{ clipPath: "inset(0 0 100% 0 round 0 0 36px 36px)" }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative mx-auto w-full max-w-[480px] px-4 pb-6 pt-2">
              <nav aria-label="Мобильді мәзір">
                <motion.ul
                  className="relative flex flex-col gap-2 pr-1"
                  initial="hidden"
                  animate="show"
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.08 } } }}
                >
                  {navItems.map((n, i) => {
                    const isActive = active === P + n.id;
                    return (
                      <motion.li
                        key={n.id}
                        variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0 } }}
                      >
                        <a
                          href={`#${P}${n.id}`}
                          onClick={() => setOpen(false)}
                          aria-current={isActive ? "true" : undefined}
                          className={`flex min-h-[50px] items-center gap-3 border-[1.5px] border-ink px-3.5 font-display text-[15.5px] font-bold transition-colors ${
                            i % 2 ? "rounded-[18px_18px_18px_6px]" : "rounded-[6px_18px_18px_18px]"
                          } ${isActive ? "bg-leaf text-white shadow-[3px_3px_0_0_#244438]" : "bg-white text-ink shadow-[3px_3px_0_0_#FFD76A] active:bg-leaf-50"}`}
                        >
                          <span
                            className={`grid h-7 w-7 shrink-0 place-items-center rounded-full font-hand text-[17px] font-bold ${
                              isActive ? "bg-white/20 text-white" : "bg-sun-100 text-ink"
                            }`}
                          >
                            {i + 1}
                          </span>
                          <span className="min-w-0 flex-1">{n.label}</span>
                        </a>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </nav>

              <div className="mt-4 grid gap-2.5 rounded-[20px] border-2 border-dashed border-ink/25 bg-leaf-50 p-3.5">
                <p className="flex items-center gap-2.5 text-[14px] font-semibold text-ink">
                  <Clock3 className="h-5 w-5 shrink-0 text-leaf-700" aria-hidden="true" />
                  {site.schedule.days}, {site.schedule.hours}
                </p>
                <a href={links.email} className="flex min-w-0 items-center gap-2.5 text-[15px] font-bold text-leaf-700">
                  <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span className="truncate">{site.contacts.email}</span>
                  <ArrowUpRight className="ml-auto h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
