"use client";

import { motion } from "motion/react";
import { navItems } from "@/config/site";
import { Logo } from "../shared/Logo";
import { useActiveSection, useScrolled } from "../shared/useActiveSection";

const short: Record<string, string> = { about: "Біз туралы" };

export function DesktopHeader({ logo }: { logo: string | null }) {
  const active = useActiveSection(navItems.map((n) => n.id));
  const scrolled = useScrolled();

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled ? "bg-cream/85 shadow-[0_8px_24px_-18px_rgba(36,68,56,0.35)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[76px] w-full max-w-[1240px] items-center justify-between gap-6 px-8">
        <a href="#home" aria-label="Басты бетке өту" className="rounded-2xl">
          <Logo src={logo} />
        </a>
        <nav aria-label="Негізгі мәзір">
          <ul className="flex items-center gap-1 rounded-full bg-white/80 p-1.5 shadow-softer ring-1 ring-leaf/10">
            {navItems.map((item) => {
              const isActive = active === item.id;
              const isContact = item.id === "contact";
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative block whitespace-nowrap rounded-full px-3 py-2 text-[14px] font-bold transition-colors xl:px-3.5 ${
                      isContact
                        ? "bg-sun text-ink hover:bg-[#ffcd45]"
                        : isActive
                          ? "text-white"
                          : "text-ink/80 hover:bg-leaf-50 hover:text-ink"
                    }`}
                  >
                    {isActive && !isContact && (
                      <motion.span
                        layoutId="desktop-nav-pill"
                        className="absolute inset-0 -z-0 rounded-full bg-leaf"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    )}
                    <span className="relative z-10">
                      {short[item.id] ? (
                        <>
                          <span className="xl:hidden">{short[item.id]}</span>
                          <span className="hidden xl:inline">{item.label}</span>
                        </>
                      ) : (
                        item.label
                      )}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
