import type { Tone } from "@/config/content";

/** Пастельные акценты: фон, иконка, обводка. */
export const tones: Record<Tone, { bg: string; soft: string; icon: string; ring: string; hex: string }> = {
  leaf: { bg: "bg-leaf-100", soft: "bg-leaf-50", icon: "bg-leaf text-white", ring: "ring-leaf/30", hex: "#66B88C" },
  sun: { bg: "bg-sun-100", soft: "bg-sun-50", icon: "bg-sun text-ink", ring: "ring-sun/50", hex: "#FFD76A" },
  rose: { bg: "bg-rose-100", soft: "bg-[#fff2ee]", icon: "bg-rose text-ink", ring: "ring-rose/40", hex: "#FFB4A8" },
  sky: { bg: "bg-sky-100", soft: "bg-[#eef7fd]", icon: "bg-sky text-white", ring: "ring-sky/40", hex: "#8EC9EC" },
  lilac: { bg: "bg-lilac-100", soft: "bg-[#f5f2fd]", icon: "bg-lilac text-white", ring: "ring-lilac/40", hex: "#B9A8EC" },
};
