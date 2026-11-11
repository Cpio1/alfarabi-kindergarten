import { Clock3, Mail, MapPin, Phone, School } from "lucide-react";
import type { ReactNode } from "react";
import { links, site } from "@/config/site";
import { InstagramIcon, WhatsAppIcon } from "./BrandIcons";

export type ContactItem = {
  key: string;
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  tone: string;
};

/** Контакты из конфигурации. Телефон, WhatsApp и Instagram появляются только если они заданы. */
export function getContactItems(iconClass = "h-5 w-5"): ContactItem[] {
  const items: ContactItem[] = [
    { key: "name", icon: <School className={iconClass} aria-hidden="true" />, label: "Атауы", value: site.fullName, tone: "bg-leaf text-white" },
    { key: "address", icon: <MapPin className={iconClass} aria-hidden="true" />, label: "Мекенжай", value: site.address.full, href: links.twoGis, external: true, tone: "bg-rose text-ink" },
    { key: "email", icon: <Mail className={iconClass} aria-hidden="true" />, label: "Электрондық пошта", value: site.contacts.email, href: links.email, tone: "bg-sky text-white" },
    { key: "hours", icon: <Clock3 className={iconClass} aria-hidden="true" />, label: "Жұмыс уақыты", value: `${site.schedule.days}, ${site.schedule.hours}`, tone: "bg-sun text-ink" },
  ];
  if (site.contacts.phone && links.phone) {
    items.push({ key: "phone", icon: <Phone className={iconClass} aria-hidden="true" />, label: "Телефон", value: site.contacts.phone, href: links.phone, tone: "bg-lilac text-white" });
  }
  return items;
}

export function getSocialButtons() {
  const out: { key: string; label: string; href: string; icon: ReactNode; className: string }[] = [];
  if (links.whatsapp) {
    out.push({ key: "wa", label: "WhatsApp-қа жазу", href: links.whatsapp, icon: <WhatsAppIcon className="h-5 w-5" />, className: "bg-[#25D366] text-white hover:bg-[#1fbd5a]" });
  }
  if (links.instagram && site.contacts.instagram) {
    out.push({ key: "ig", label: `@${site.contacts.instagram.replace(/^@/, "")}`, href: links.instagram, icon: <InstagramIcon className="h-5 w-5" />, className: "bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white hover:opacity-90" });
  }
  return out;
}
