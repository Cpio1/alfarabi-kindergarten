import Image from "next/image";
import { KindergartenScene } from "./Scene";

type Props = {
  src: string | null;
  alt: string;
  /** CSS-класс формы (blob-a, arch …) + размеры */
  className?: string;
  sizes: string;
  priority?: boolean;
  variant?: "hero" | "about";
  /** позиционирование кадра (object-position) */
  position?: string;
};

/** Фото в фигурном контейнере; если файла нет — аккуратная иллюстрация вместо битой картинки. */
export function Photo({ src, alt, className = "", sizes, priority, variant = "hero", position = "center" }: Props) {
  return (
    <div className={`isolate overflow-hidden bg-leaf-100 ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          style={{ objectPosition: position }}
        />
      ) : (
        <KindergartenScene variant={variant} className="absolute inset-0 h-full w-full" />
      )}
    </div>
  );
}
