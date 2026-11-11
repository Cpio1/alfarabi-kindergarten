"use client";

import { motion, useReducedMotion } from "motion/react";

/** Декоративная схема-карта (без реальных координат) с прыгающей меткой. */
export function MapArt({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <div className={`relative overflow-hidden bg-[#EAF5EE] ${className ?? ""}`} aria-hidden="true">
      <svg viewBox="0 0 400 260" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        <rect width="400" height="260" fill="#EAF5EE" />
        <path d="M-10 70 C 80 60, 140 110, 220 96 S 360 40, 420 60" stroke="#fff" strokeWidth="18" fill="none" />
        <path d="M-10 200 C 90 180, 170 210, 260 190 S 380 150, 420 170" stroke="#fff" strokeWidth="14" fill="none" />
        <path d="M150 -10 C 160 80, 120 160, 170 270" stroke="#fff" strokeWidth="14" fill="none" />
        <path d="M300 -10 C 290 90, 330 170, 300 270" stroke="#FFF1C7" strokeWidth="10" fill="none" />
        <rect x="30" y="100" width="70" height="56" rx="16" fill="#CFE9D9" />
        <rect x="200" y="120" width="80" height="50" rx="16" fill="#CFE9D9" />
        <rect x="330" y="80" width="60" height="70" rx="16" fill="#DCEFFA" />
        <rect x="40" y="10" width="80" height="40" rx="14" fill="#FFF1C7" />
        <circle cx="250" cy="40" r="22" fill="#CFE9D9" />
        <circle cx="70" cy="230" r="18" fill="#CFE9D9" />
      </svg>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[70%]">
        <motion.div
          animate={reduce ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 48 60" className="h-14 w-12 drop-shadow-[0_8px_10px_rgba(36,68,56,0.3)]">
            <path d="M24 2C12 2 3 11 3 23c0 15 21 33 21 33s21-18 21-33C45 11 36 2 24 2z" fill="#FF8E7A" />
            <circle cx="24" cy="23" r="9" fill="#fff" />
          </svg>
        </motion.div>
        <div className="mx-auto mt-0.5 h-2 w-7 rounded-full bg-ink/15" />
      </div>
    </div>
  );
}
