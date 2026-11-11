"use client";

import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";

type SvgProps = { className?: string; style?: CSSProperties };

export function Sun({ className, style }: SvgProps) {
  return (
    <svg viewBox="0 0 120 120" className={className} style={style} aria-hidden="true">
      <g stroke="#FFC93C" strokeWidth="7" strokeLinecap="round">
        {Array.from({ length: 10 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 10;
          const x1 = 60 + Math.cos(a) * 40;
          const y1 = 60 + Math.sin(a) * 40;
          const x2 = 60 + Math.cos(a) * 54;
          const y2 = 60 + Math.sin(a) * 54;
          return <line key={i} x1={x1.toFixed(2)} y1={y1.toFixed(2)} x2={x2.toFixed(2)} y2={y2.toFixed(2)} />;
        })}
      </g>
      <circle cx="60" cy="60" r="31" fill="#FFD76A" />
      <circle cx="49" cy="56" r="3.4" fill="#244438" />
      <circle cx="71" cy="56" r="3.4" fill="#244438" />
      <path d="M50 67 q10 9 20 0" stroke="#244438" strokeWidth="3.4" fill="none" strokeLinecap="round" />
      <circle cx="43" cy="66" r="4.5" fill="#FFB4A8" opacity=".75" />
      <circle cx="77" cy="66" r="4.5" fill="#FFB4A8" opacity=".75" />
    </svg>
  );
}

export function Cloud({ className, style }: SvgProps) {
  return (
    <svg viewBox="0 0 160 90" className={className} style={style} aria-hidden="true">
      <path
        d="M38 82c-18 0-30-12-30-27 0-14 11-26 26-27 5-15 19-25 36-25 19 0 34 13 37 30 2-1 6-2 9-2 14 0 25 11 25 25 0 15-12 26-27 26H38z"
        fill="#fff"
      />
      <path
        d="M38 82c-18 0-30-12-30-27 0-14 11-26 26-27 5-15 19-25 36-25 19 0 34 13 37 30 2-1 6-2 9-2 14 0 25 11 25 25 0 15-12 26-27 26H38z"
        fill="none"
        stroke="#244438"
        strokeOpacity=".06"
        strokeWidth="2"
      />
    </svg>
  );
}

export function Star({ className, style, color = "#FFD76A" }: SvgProps & { color?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} style={style} aria-hidden="true">
      <path
        d="M24 3c2 0 3 1.4 4 3.6l4 8.6 9.3 1.2c4.3.6 5 3.3 2 6.2l-6.8 6.4 1.8 9.3c.8 4.2-1.6 5.8-5.3 3.8L24 37.6 15.9 42c-3.7 2-6.1.4-5.3-3.8l1.8-9.3-6.8-6.4c-3-2.9-2.3-5.6 2-6.2l9.3-1.2 4-8.6C21 4.4 22 3 24 3z"
        fill={color}
      />
    </svg>
  );
}

export function Sparkle({ className, style, color = "#66B88C" }: SvgProps & { color?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} style={style} aria-hidden="true">
      <path d="M20 2c1.6 9.6 8.4 16.4 18 18-9.6 1.6-16.4 8.4-18 18-1.6-9.6-8.4-16.4-18-18C11.6 18.4 18.4 11.6 20 2z" fill={color} />
    </svg>
  );
}

export function Flower({ className, style, petal = "#FFB4A8", center = "#FFD76A" }: SvgProps & { petal?: string; center?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} style={style} aria-hidden="true">
      {Array.from({ length: 6 }).map((_, i) => (
        <ellipse key={i} cx="32" cy="16" rx="9" ry="13" fill={petal} transform={`rotate(${i * 60} 32 32)`} />
      ))}
      <circle cx="32" cy="32" r="9" fill={center} />
    </svg>
  );
}

export function Pencil({ className, style }: SvgProps) {
  return (
    <svg viewBox="0 0 140 36" className={className} style={style} aria-hidden="true">
      <rect x="22" y="6" width="96" height="24" rx="4" fill="#FFD76A" />
      <rect x="22" y="6" width="96" height="8" fill="#FFE59A" />
      <rect x="112" y="6" width="22" height="24" rx="6" fill="#FFB4A8" />
      <rect x="106" y="6" width="10" height="24" fill="#C9D6CF" />
      <path d="M22 6 L2 18 L22 30 Z" fill="#F6E1B8" />
      <path d="M8 14.5 L2 18 L8 21.5 Z" fill="#244438" />
    </svg>
  );
}

export function Leaf({ className, style }: SvgProps) {
  return (
    <svg viewBox="0 0 60 60" className={className} style={style} aria-hidden="true">
      <path d="M8 52C8 24 26 8 54 6c-2 28-18 46-46 46z" fill="#66B88C" />
      <path d="M10 50C22 36 32 26 46 16" stroke="#fff" strokeOpacity=".7" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function Squiggle({ className, style, color = "#FFD76A" }: SvgProps & { color?: string }) {
  return (
    <svg viewBox="0 0 120 20" className={className} style={style} aria-hidden="true" fill="none">
      <path d="M3 12c10-10 18-10 28 0s18 10 28 0 18-10 28 0 18 10 28 0" stroke={color} strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

/* ───────── Анимированные обёртки ───────── */

type FloatProps = {
  children: ReactNode;
  className?: string;
  /** амплитуда в px */
  y?: number;
  rotate?: number;
  duration?: number;
  delay?: number;
};

/** Мягкое покачивание декоративных элементов. */
export function Float({ children, className, y = 10, rotate = 4, duration = 6, delay = 0 }: FloatProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden="true"
      className={className}
      animate={reduce ? undefined : { y: [0, -y, 0], rotate: [0, rotate, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

/** Неспешный дрейф облаков (горизонтально, в пределах родителя с overflow-hidden). */
export function Drift({ children, className, x = 24, duration = 14, delay = 0 }: Omit<FloatProps, "y" | "rotate"> & { x?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden="true"
      className={className}
      animate={reduce ? undefined : { x: [0, x, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

/** Медленное вращение (например, лучи солнца). */
export function Spin({ children, className, duration = 40 }: { children: ReactNode; className?: string; duration?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden="true"
      className={className}
      animate={reduce ? undefined : { rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {children}
    </motion.div>
  );
}
