import type { Metadata, Viewport } from "next";
import { Caveat, Manrope, Montserrat_Alternates } from "next/font/google";
import { site } from "@/config/site";
import { MotionProvider } from "@/components/shared/MotionProvider";
import { ShapeDefs } from "@/components/shared/ShapeDefs";
import "./globals.css";

/* Заголовки — выразительный Montserrat Alternates, текст — чистый Manrope, акценты — рукописный Caveat.
   Все три шрифта содержат cyrillic-ext (ә, ғ, қ, ң, ө, ұ, ү, һ, і). */
const display = Montserrat_Alternates({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["600", "700", "800"],
  variable: "--font-alt",
  display: "swap",
});
const body = Manrope({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});
const hand = Caveat({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

const description =
  "«Аль-Фараби» жеке бөбекжай-балабақшасы — 2–5 жастағы балаларға арналған қамқор тәрбие, қазақ тілінде білім, күніне 4 мезгіл тамақтану, логопед, таэквондо және ағылшын тілі. Алматы облысы, Еңбекшіқазақ ауданы, Жаңашар ауылы.";

export const metadata: Metadata = {
  ...(site.siteUrl ? { metadataBase: new URL(site.siteUrl) } : {}),
  title: {
    default: `${site.fullName} — Жаңашар ауылы`,
    template: `%s · ${site.shortName}`,
  },
  description,
  applicationName: site.fullName,
  keywords: [
    "балабақша",
    "бөбекжай",
    "жеке балабақша",
    "Аль-Фараби",
    "Жаңашар",
    "Еңбекшіқазақ ауданы",
    "Алматы облысы",
    "қазақ тілді балабақша",
    "логопед",
    "таэквондо",
    "ағылшын тілі",
  ],
  openGraph: {
    type: "website",
    locale: "kk_KZ",
    siteName: site.fullName,
    title: site.fullName,
    description,
  },
  twitter: { card: "summary_large_image", title: site.fullName, description },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFF9ED",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Preschool",
  name: site.fullName,
  email: site.contacts.email,
  ...(site.contacts.phone ? { telephone: site.contacts.phone } : {}),
  address: {
    "@type": "PostalAddress",
    addressCountry: "KZ",
    addressRegion: site.address.region,
    addressLocality: site.address.locality,
    streetAddress: site.address.street,
  },
  openingHours: "Mo-Fr 07:30-18:00",
  inLanguage: "kk",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="kk" className={`${display.variable} ${body.variable} ${hand.variable}`} style={{ colorScheme: "light" }} suppressHydrationWarning>
      <body className="min-h-dvh bg-cream font-sans text-ink">
        <a
          href="#main-start"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:font-bold focus:text-white"
        >
          Негізгі мазмұнға өту
        </a>
        <ShapeDefs />
        <MotionProvider>{children}</MotionProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
