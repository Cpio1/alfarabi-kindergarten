import { navItems, site } from "@/config/site";
import { Logo } from "./Logo";

/** Подвал; prefix — для якорей мобильной версии. */
export function Footer({ logo, prefix = "", variant }: { logo: string | null; prefix?: string; variant: "desktop" | "mobile" }) {
  const year = new Date().getFullYear();
  const desktop = variant === "desktop";
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <svg aria-hidden="true" viewBox="0 0 1440 60" preserveAspectRatio="none" className="block h-[36px] w-full bg-cream md:h-[52px]">
        <path d="M0 40c160-30 320-36 480-20s320 34 480 26 320-30 480-26V60H0z" fill="#244438" />
      </svg>
      <div className={`mx-auto w-full ${desktop ? "max-w-[1240px] px-8 pb-8 pt-6" : "max-w-[640px] px-5 pb-8 pt-4"}`}>
        <div className={desktop ? "flex items-start justify-between gap-10" : "flex flex-col gap-6"}>
          <div className="max-w-[360px]">
            <span className="inline-block rounded-[20px] bg-white/95 px-3 py-2">
              <Logo src={logo} />
            </span>
            <p className="mt-4 text-[14.5px] leading-relaxed text-white/75">{site.slogan}</p>
          </div>
          <nav aria-label="Төменгі мәзір">
            <ul className={desktop ? "grid grid-cols-2 gap-x-10 gap-y-2" : "grid grid-cols-2 gap-x-4 gap-y-2.5"}>
              {navItems.map((n) => (
                <li key={n.id}>
                  <a href={`#${prefix}${n.id}`} className="text-[15px] font-semibold text-white/80 transition hover:text-sun">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="text-[14.5px] leading-relaxed text-white/80">
            <p className="font-bold text-white">{site.schedule.days}</p>
            <p>{site.schedule.hours}</p>
            <a href={`mailto:${site.contacts.email}`} className="mt-2 inline-block break-all font-semibold text-sun hover:underline">
              {site.contacts.email}
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-5 text-[13px] text-white/60">
          © {year} {site.fullName}
        </div>
      </div>
    </footer>
  );
}
