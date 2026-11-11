import { Reveal } from "./Reveal";
import { Squiggle } from "./Decor";

type Props = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  size?: "desktop" | "mobile";
  id?: string;
};

export function SectionHeading({ eyebrow, title, text, align = "center", size = "desktop", id }: Props) {
  const center = align === "center";
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} ${size === "desktop" ? "max-w-[640px]" : "max-w-[520px]"}`}>
      <span
        className={`inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[13px] font-extrabold uppercase tracking-[0.08em] text-leaf-700 shadow-softer ring-1 ring-leaf/15`}
      >
        <span className="h-2 w-2 rounded-full bg-sun" />
        {eyebrow}
      </span>
      <h2
        id={id}
        className={`mt-3 font-display font-black leading-[1.12] tracking-tight text-ink text-balance ${
          size === "desktop" ? "text-[34px] xl:text-[40px]" : "text-[clamp(1.6rem,7vw,2.1rem)]"
        }`}
      >
        {title}
      </h2>
      <Squiggle className={`mt-2 h-3 w-24 ${center ? "mx-auto" : ""}`} />
      {text && (
        <p className={`mt-3 text-ink-soft text-pretty ${size === "desktop" ? "text-[17px] leading-relaxed" : "text-[15.5px] leading-relaxed"}`}>
          {text}
        </p>
      )}
    </Reveal>
  );
}
