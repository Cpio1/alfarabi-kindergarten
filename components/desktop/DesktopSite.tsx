import type { SiteImages } from "@/lib/images";
import { Footer } from "../shared/Footer";
import { DesktopAbout } from "./DesktopAbout";
import { DesktopClubs } from "./DesktopClubs";
import { DesktopContact } from "./DesktopContact";
import { DesktopDocuments } from "./DesktopDocuments";
import { DesktopFood } from "./DesktopFood";
import { DesktopGallery } from "./DesktopGallery";
import { DesktopHeader } from "./DesktopHeader";
import { DesktopHero } from "./DesktopHero";

/** Десктопная композиция (≥1024px). */
export function DesktopSite({ images }: { images: SiteImages }) {
  return (
    <div className="hidden lg:block">
      <DesktopHeader logo={images.logo} />
      <main>
        <DesktopHero image={images.hero} />
        <DesktopAbout image={images.about ?? null} />
        <DesktopFood />
        <DesktopClubs />
        <DesktopGallery images={images.gallery} />
        <DesktopDocuments />
        <DesktopContact />
      </main>
      <Footer logo={images.logo} variant="desktop" />
    </div>
  );
}
