import Image from "next/image";
import { KindergartenScene } from "./Scene";

export type PhotoShape = "cloud" | "scallop" | "wave" | "blob" | "flower" | "arch" | "leaf" | "drop";

const clipClass: Record<PhotoShape, string> = {
  cloud: "clip-cloud",
  scallop: "clip-scallop",
  wave: "clip-wave",
  blob: "clip-blob",
  flower: "clip-flower",
  arch: "shape-arch",
  leaf: "shape-leaf",
  drop: "shape-drop",
};

type Props = {
  src: string | null;
  alt: string;
  shape: PhotoShape;
  /** размеры/позиция обёртки */
  className?: string;
  sizes: string;
  priority?: boolean;
  variant?: "hero" | "about";
  /** цвет «тени-подложки» той же формы */
  backdrop?: string;
  /** смещение подложки в px */
  offset?: number;
};

/** Фото в фигурной рамке с цветной подложкой той же формы. Без файла — иллюстрация вместо битой картинки. */
export function Photo({ src, alt, shape, className = "", sizes, priority, variant = "hero", backdrop = "#FFD76A", offset = 10 }: Props) {
  const clip = clipClass[shape];
  return (
    <div className={className}>
      <div className="relative h-full w-full">
        <div
          aria-hidden="true"
          className={`absolute inset-0 ${clip}`}
          style={{ background: backdrop, transform: `translate(${offset}px, ${offset}px)` }}
        />
        <div aria-hidden="true" className={`absolute inset-0 ${clip} bg-ink`} />
        <div className={`absolute inset-[3px] overflow-hidden bg-leaf-100 ${clip}`}>
          {src ? (
            <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
          ) : (
            <KindergartenScene variant={variant} className="absolute inset-0 h-full w-full" />
          )}
        </div>
      </div>
    </div>
  );
}
