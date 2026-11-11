import { navItems, site } from "@/config/site";
import { Logo } from "./Logo";

/** Подвал; prefix — для якорей мобильной версии. */
export function Footer({ logo, prefix = "", variant }: { logo: string | null; prefix?: string; variant: "desktop" | "mobile" }) {
  const year = new Date().getFullYear();
  const desktop = variant === "desktop";
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <svg aria-hidden="true" viewBox="0 0 1440 60" preserveAspectRatio="none" className="block h-[30px] w-full bg-cream md:h-[46px]">
        <path d="M0 40c160-30 320-36 480-20s320 34 480 26 320-30 480-26V60H0z" fill="#244438" />
      </svg>
      <div className={`mx-auto w-full ${desktop ? "max-w-[1200px] px-8 pb-7 pt-5" : "max-w-[560px] px-5 pb-7 pt-3"}`}>
        <div className={desktop ? "flex items-start justify-between gap-10" : "flex flex-col gap-5"}>
          <div className="max-w-[340px]">
            <Logo src={logo} light />
            <p className="mt-3 text-[14px] leading-relaxed text-white/70">{site.slogan}</p>
          </div>
          <nav aria-label="Төменгі мәзір">
            <ul className={desktop ? "grid grid-cols-2 gap-x-10 gap-y-1.5" : "grid grid-cols-2 gap-x-4 gap-y-2"}>
              {navItems.map((n) => (
                <li key={n.id}>
                  <a href={`#${prefix}${n.id}`} className="text-[14px] font-medium text-white/80 transition hover:text-sun">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="text-[14px] leading-relaxed text-white/80">
            <p className="font-hand text-[20px] font-bold leading-none text-sun">{site.schedule.days}</p>
            <p className="mt-1">{site.schedule.hours}</p>
            <a href={`mailto:${site.contacts.email}`} className="mt-1.5 inline-block break-all font-semibold text-white hover:text-sun">
              {site.contacts.email}
            </a>
          </div>
        </div>
        <div className="mt-6 border-t border-white/10 pt-4 text-[12.5px] text-white/55">
          © {year} {site.fullName}
        </div>
      </div>
    </footer>
  );
}
