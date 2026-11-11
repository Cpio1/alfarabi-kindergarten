import "server-only";
import fs from "node:fs";
import path from "node:path";

export type SiteImages = {
  logo: string | null;
  hero: string | null;
  about: string | null;
  gallery: string[];
};

const IMAGE_RE = /\.(jpe?g|png|webp)$/i;
const DIR = path.join(process.cwd(), "public", "images");

const naturalSort = (a: string, b: string) =>
  a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });

/**
 * Читает public/images во время сборки и возвращает только реально существующие файлы.
 * logo.*        → логотип
 * main-page.*   → главный экран
 * main-page2.*  → раздел «Біз туралы»
 * остальные     → галерея
 */
export function getSiteImages(): SiteImages {
  let files: string[] = [];
  try {
    files = fs
      .readdirSync(DIR)
      .filter((f) => IMAGE_RE.test(f) && !f.startsWith("."))
      .sort(naturalSort);
  } catch {
    files = [];
  }

  const base = (f: string) => f.replace(IMAGE_RE, "").toLowerCase();
  const find = (name: string) => files.find((f) => base(f) === name) ?? null;
  const url = (f: string | null) => (f ? `/images/${encodeURIComponent(f)}` : null);

  const logo = find("logo");
  const hero = find("main-page");
  const about = find("main-page2");
  const reserved = new Set([logo, hero, about]);

  return {
    logo: url(logo),
    hero: url(hero),
    about: url(about),
    gallery: files.filter((f) => !reserved.has(f)).map((f) => url(f)!),
  };
}
