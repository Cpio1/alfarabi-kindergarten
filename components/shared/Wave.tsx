type WaveProps = {
  /** цвет следующей секции */
  fill: string;
  /** верх или низ секции */
  position?: "top" | "bottom";
  variant?: 1 | 2 | 3;
  className?: string;
};

const paths = {
  1: "M0 40c120 26 240 34 360 22S600 10 720 12s240 34 360 40 240-4 360-24v52H0z",
  2: "M0 26c160 30 300 36 440 18S700 0 860 8s300 40 440 36c60-2 100-10 140-18v54H0z",
  3: "M0 50c100-30 220-42 340-30s220 42 360 40 240-36 380-38 220 20 360 34v24H0z",
};

/** Волнистый переход между секциями. */
export function Wave({ fill, position = "bottom", variant = 1, className = "" }: WaveProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 z-[1] leading-[0] ${
        position === "bottom" ? "bottom-[-1px]" : "top-[-1px] rotate-180"
      } ${className}`}
    >
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="block h-[44px] w-full md:h-[64px]">
        <path d={paths[variant]} fill={fill} />
      </svg>
    </div>
  );
}
