import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  size?: "desktop" | "mobile";
  id?: string;
  /** цвет маркера-подчёркивания */
  mark?: string;
};

/** Заголовок секции: рукописная подпись + выразительный заголовок + маркер. */
export function SectionHeading({ eyebrow, title, text, align = "center", size = "desktop", id, mark = "#FFD76A" }: Props) {
  const center = align === "center";
  const d = size === "desktop";
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} ${d ? "max-w-[620px]" : "max-w-[440px]"}`}>
      <p className={`inline-flex items-center gap-2 font-hand font-bold text-leaf-700 ${d ? "text-[25px]" : "text-[22px]"} leading-none`}>
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path d="M12 2 C13 8 16 11 22 12 C16 13 13 16 12 22 C11 16 8 13 2 12 C8 11 11 8 12 2Z" fill={mark} stroke="#244438" strokeWidth="1.6" />
        </svg>
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-2 font-display font-bold leading-[1.15] tracking-[-0.01em] text-ink text-balance ${
          d ? "text-[30px] xl:text-[34px]" : "text-[clamp(1.45rem,6.6vw,1.85rem)]"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`text-ink-soft text-pretty ${d ? "mt-3 text-[16px] leading-relaxed" : "mt-2.5 text-[14.5px] leading-relaxed"}`}>{text}</p>
      )}
    </Reveal>
  );
}
