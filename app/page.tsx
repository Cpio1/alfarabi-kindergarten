import { DesktopSite } from "@/components/desktop/DesktopSite";
import { MobileSite } from "@/components/mobile/MobileSite";
import { getSiteImages } from "@/lib/images";

export default function Home() {
  const images = getSiteImages();
  // если нет main-page2, во втором блоке показываем первое фото галереи (или иллюстрацию)
  const resolved = { ...images, about: images.about ?? images.gallery[0] ?? null };
  return (
    <>
      <span id="main-start" className="sr-only" tabIndex={-1} />
      <DesktopSite images={resolved} />
      <MobileSite images={resolved} />
    </>
  );
}
