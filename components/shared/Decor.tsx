"use client";

import { motion, useReducedMotion } from "motion/react";
import { useId, type CSSProperties, type ReactNode } from "react";

/* Иллюстрированные «стикеры»: заливка + тонкий тёмный контур. */
type P = { className?: string; style?: CSSProperties };
const INK = "#244438";
const SW = 2.4;

export function Sun({ className, style }: P) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden="true">
      <g stroke={INK} strokeWidth={SW} strokeLinecap="round" fill="#FFD76A">
        {Array.from({ length: 8 }).map((_, i) => (
          <path key={i} d="M50 6 C55 14 55 18 50 22 C45 18 45 14 50 6Z" transform={`rotate(${i * 45} 50 50)`} />
        ))}
        <circle cx="50" cy="50" r="22" />
      </g>
      <path d="M43 50 q2 -3 4 0 M53 50 q2 -3 4 0" stroke={INK} strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <path d="M45 57 q5 4 10 0" stroke={INK} strokeWidth="2.2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function Cloud({ className, style, fill = "#FFFFFF" }: P & { fill?: string }) {
  return (
    <svg viewBox="0 0 120 70" className={className} style={style} aria-hidden="true">
      <path
        d="M28 62 C14 62 6 54 6 44 C6 34 14 27 24 27 C26 15 37 7 50 7 C62 7 72 14 75 25 C78 23 82 22 86 22 C100 22 112 31 112 44 C112 55 103 62 92 62 Z"
        fill={fill}
        stroke={INK}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <path d="M62 30 q6 -6 12 -2" stroke={INK} strokeWidth="2" fill="none" strokeLinecap="round" opacity=".5" />
    </svg>
  );
}

/** Мягкая четырёхлучевая звёздочка. */
export function Twinkle({ className, style, color = "#FFD76A" }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} style={style} aria-hidden="true">
      <path
        d="M20 3 C22 13 27 18 37 20 C27 22 22 27 20 37 C18 27 13 22 3 20 C13 18 18 13 20 3Z"
        fill={color}
        stroke={INK}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Пухлая пятиконечная звезда. */
export function Star({ className, style, color = "#FFD76A" }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} style={style} aria-hidden="true">
      <path
        d="M24 4.5c1.7 0 2.7 1.2 3.6 3.2l3.6 7.6 8.3 1.1c3.8.5 4.5 3 1.8 5.6l-6 5.8 1.6 8.3c.7 3.8-1.4 5.2-4.7 3.4L24 35.6l-8.2 3.9c-3.3 1.8-5.4.4-4.7-3.4l1.6-8.3-6-5.8c-2.7-2.6-2-5.1 1.8-5.6l8.3-1.1 3.6-7.6c.9-2 1.9-3.2 3.6-3.2z"
        fill={color}
        stroke={INK}
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Daisy({ className, style, petal = "#FFFFFF", center = "#FFD76A" }: P & { petal?: string; center?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} style={style} aria-hidden="true">
      <g stroke={INK} strokeWidth="2" fill={petal}>
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse key={i} cx="32" cy="15" rx="7" ry="11" transform={`rotate(${i * 45} 32 32)`} />
        ))}
      </g>
      <circle cx="32" cy="32" r="9" fill={center} stroke={INK} strokeWidth="2" />
    </svg>
  );
}

export function Rainbow({ className, style }: P) {
  return (
    <svg viewBox="0 0 120 66" className={className} style={style} aria-hidden="true" fill="none">
      <path d="M8 62 A52 52 0 0 1 112 62" stroke={INK} strokeWidth="17" strokeLinecap="round" />
      <path d="M8 62 A52 52 0 0 1 112 62" stroke="#FFB4A8" strokeWidth="13" strokeLinecap="round" />
      <path d="M22 62 A38 38 0 0 1 98 62" stroke={INK} strokeWidth="15" strokeLinecap="round" />
      <path d="M22 62 A38 38 0 0 1 98 62" stroke="#FFD76A" strokeWidth="11" strokeLinecap="round" />
      <path d="M35 62 A25 25 0 0 1 85 62" stroke={INK} strokeWidth="14" strokeLinecap="round" />
      <path d="M35 62 A25 25 0 0 1 85 62" stroke="#8EC9EC" strokeWidth="10" strokeLinecap="round" />
    </svg>
  );
}

export function Heart({ className, style, color = "#FFB4A8" }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 40 36" className={className} style={style} aria-hidden="true">
      <path
        d="M20 33 C8 25 3 19 3 12 C3 7 7 3 12 3 C15.5 3 18.5 5 20 8 C21.5 5 24.5 3 28 3 C33 3 37 7 37 12 C37 19 32 25 20 33Z"
        fill={color}
        stroke={INK}
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Drop({ className, style, color = "#8EC9EC" }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 32 42" className={className} style={style} aria-hidden="true">
      <path d="M16 3 C22 12 29 19 29 27 C29 34 23 39 16 39 C9 39 3 34 3 27 C3 19 10 12 16 3Z" fill={color} stroke={INK} strokeWidth="2.2" />
      <path d="M10 27 q0 5 5 7" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function Pencil({ className, style }: P) {
  return (
    <svg viewBox="0 0 150 40" className={className} style={style} aria-hidden="true">
      <g stroke={INK} strokeWidth="2.2" strokeLinejoin="round">
        <path d="M30 8 H120 V32 H30 Z" fill="#FFD76A" />
        <path d="M120 8 H134 C140 8 144 12 144 20 C144 28 140 32 134 32 H120 Z" fill="#FFB4A8" />
        <path d="M114 8 V32" />
        <path d="M30 8 L6 20 L30 32 Z" fill="#FFF1C7" />
        <path d="M14 16 L6 20 L14 24 Z" fill={INK} />
        <path d="M30 20 H112" opacity=".35" />
      </g>
    </svg>
  );
}

export function Leaf({ className, style }: P) {
  return (
    <svg viewBox="0 0 60 60" className={className} style={style} aria-hidden="true">
      <path d="M8 52C8 24 26 8 54 6c-2 28-18 46-46 46z" fill="#66B88C" stroke={INK} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M12 48C22 36 32 26 46 15" stroke={INK} strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/** Рисованная волнистая линия. */
export function Squiggle({ className, style, color = "#FFD76A" }: P & { color?: string }) {
  return (
    <svg viewBox="0 0 120 20" className={className} style={style} aria-hidden="true" fill="none">
      <path d="M3 12c10-10 18-10 28 0s18 10 28 0 18-10 28 0 18 10 28 0" stroke={color} strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

/** Рисованная стрелка-подсказка. */
export function DoodleArrow({ className, style }: P) {
  return (
    <svg viewBox="0 0 80 50" className={className} style={style} aria-hidden="true" fill="none">
      <path d="M4 8 C 24 4, 48 12, 56 36" stroke={INK} strokeWidth="2.4" strokeLinecap="round" strokeDasharray="0.1 6" />
      <path d="M46 30 L57 40 L64 26" stroke={INK} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ───────── Вращающийся круглый бейдж с текстом ───────── */
export function RoundBadge({ text, className, children }: { text: string; className?: string; children?: ReactNode }) {
  const reduce = useReducedMotion();
  const id = "badge-" + useId().replace(/[^a-zA-Z0-9]/g, "");
  return (
    <div className={`relative ${className ?? ""}`} aria-hidden="true">
      <motion.svg
        viewBox="0 0 120 120"
        className="absolute inset-0 h-full w-full"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="60" cy="60" r="58" fill="#FFD76A" stroke={INK} strokeWidth="2" />
        <defs>
          <path id={id} d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0" />
        </defs>
        <text fill={INK} fontSize="10.5" fontWeight="700" letterSpacing="1.2" style={{ fontFamily: "var(--font-alt)" }}>
          <textPath href={`#${id}`} textLength="272" lengthAdjust="spacingAndGlyphs">
            {text}
          </textPath>
        </text>
      </motion.svg>
      <div className="absolute inset-[27%] grid place-items-center rounded-full border-2 border-ink bg-white">{children}</div>
    </div>
  );
}

/* ───────── Анимированные обёртки ───────── */
type FloatProps = { children: ReactNode; className?: string; y?: number; rotate?: number; duration?: number; delay?: number };

export function Float({ children, className, y = 8, rotate = 5, duration = 6, delay = 0 }: FloatProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none ${className ?? ""}`}
      animate={reduce ? undefined : { y: [0, -y, 0], rotate: [0, rotate, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export function Drift({ children, className, x = 20, duration = 14, delay = 0 }: { children: ReactNode; className?: string; x?: number; duration?: number; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none ${className ?? ""}`}
      animate={reduce ? undefined : { x: [0, x, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
