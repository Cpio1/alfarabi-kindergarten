"use client";

import { motion, useReducedMotion } from "motion/react";

const colors = ["#FFD76A", "#FFB4A8", "#8EC9EC", "#FFFFFF"];

/** Возраст 2–5 жас в виде воздушных шариков на ниточках. */
export function AgeBalloons({ className = "", size = "md" }: { className?: string; size?: "sm" | "md" }) {
  const reduce = useReducedMotion();
  const base = size === "sm" ? 24 : 30;
  const step = size === "sm" ? 4 : 5;
  return (
    <div className={`flex items-end gap-1 ${className}`} role="img" aria-label="Балалар жасы: 2 жастан 5 жасқа дейін">
      {["2", "3", "4", "5"].map((a, i) => {
        const d = base + i * step;
        return (
          <motion.div
            key={a}
            className="flex flex-col items-center"
            animate={reduce ? undefined : { y: [0, -4, 0], rotate: [0, i % 2 ? 3 : -3, 0] }}
            transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
          >
            <span
              className="grid place-items-center border-[1.5px] border-ink font-display font-extrabold text-ink"
              style={{
                width: d,
                height: d * 1.15,
                borderRadius: "50% 50% 48% 48% / 55% 55% 45% 45%",
                background: colors[i],
                fontSize: d * 0.45,
              }}
            >
              {a}
            </span>
            <svg width="8" height={size === "sm" ? 14 : 18} viewBox="0 0 8 18" aria-hidden="true">
              <path d="M4 0 l-2 3 h4 z" fill="#244438" />
              <path d="M4 3 q-3 4 0 8 q3 4 0 7" stroke="#244438" strokeWidth="1.2" fill="none" />
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
}
