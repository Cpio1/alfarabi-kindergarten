import type { SiteImages } from "@/lib/images";
import { Footer } from "../shared/Footer";
import { MobileAbout } from "./MobileAbout";
import { MobileClubs } from "./MobileClubs";
import { MobileContact } from "./MobileContact";
import { MobileDocuments } from "./MobileDocuments";
import { MobileFood } from "./MobileFood";
import { MobileGallery } from "./MobileGallery";
import { MobileHeader } from "./MobileHeader";
import { MobileHero } from "./MobileHero";

/** Мобильная композиция (<1024px). Якоря с префиксом «m-», чтобы не дублировать id десктопа. */
export function MobileSite({ images }: { images: SiteImages }) {
  return (
    <div className="lg:hidden">
      <MobileHeader logo={images.logo} />
      <main>
        <MobileHero image={images.hero} />
        <MobileAbout image={images.about ?? null} />
        <MobileFood />
        <MobileClubs />
        <MobileGallery images={images.gallery} />
        <MobileDocuments />
        <MobileContact />
      </main>
      <Footer logo={images.logo} prefix="m-" variant="mobile" />
    </div>
  );
}
