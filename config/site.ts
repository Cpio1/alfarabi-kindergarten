/**
 * ─────────────────────────────────────────────────────────────
 *  «Аль-Фараби» бөбекжай-балабақшасы — барлық деректер осында.
 *  Все данные садика хранятся только в этом файле.
 * ─────────────────────────────────────────────────────────────
 *
 *  Как добавить недостающие данные:
 *   • Телефон:   contacts.phone = "+7 700 000 00 00"
 *                → появится кнопка звонка и кнопка WhatsApp
 *                  (номер для WhatsApp берётся из contacts.whatsapp,
 *                   а если он пуст — из contacts.phone).
 *   • Instagram: contacts.instagram = "alfarabi_kids"  (без @)
 *   • Группы:    groups = [{ name: "Балапан", age: "2–3 жас" }, ...]
 *   • Документы: documents.googleDriveUrl = "https://drive.google.com/drive/folders/..."
 *                и/или documents.items = [{ title: "Жарғы", url: "https://..." }]
 *   • Сайт:      siteUrl = "https://alfarabi.kz" (для SEO / Open Graph)
 *
 *  Фотографии: положите файлы в public/images — они подключатся автоматически
 *   logo.png            — логотип
 *   main-page.(png|jpg) — фото на главном экране
 *   main-page2.(...)    — фото в разделе «Біз туралы»
 *   любые другие файлы  — галерея (image1.jpeg, image2.jpeg, ...)
 */

export type Group = { name: string; age?: string; description?: string };
export type DocumentItem = { title: string; url: string; description?: string };

export const site = {
  shortName: "Аль-Фараби",
  fullName: "ЖШС «Аль-Фараби» бөбекжай-балабақшасы",
  heroTitle: "«Аль-Фараби» бөбекжай-балабақшасы",
  slogan:
    "Балаңыздың бақытты балалық шағы мен жарқын болашағына бірге қадам басайық!",

  /** Боевой адрес сайта (необязательно). Пример: "https://alfarabi.kz" */
  siteUrl: null as string | null,

  address: {
    region: "Алматы облысы",
    district: "Еңбекшіқазақ ауданы",
    locality: "Жаңашар ауылы",
    street: "СПК «Казгорбахша», 43",
    full: "Алматы облысы, Еңбекшіқазақ ауданы, Жаңашар ауылы, СПК «Казгорбахша», 43",
    /** Поисковый запрос для 2GIS (точные координаты неизвестны). */
    mapQuery: "Еңбекшіқазақ ауданы, Жаңашар, Казгорбахша 43",
  },

  contacts: {
    email: "Erbolat90kaz@mail.ru",
    /** Телефон пока неизвестен. Пример: "+7 700 000 00 00" */
    phone: null as string | null,
    /** WhatsApp (если отличается от телефона). Пример: "+7 700 000 00 00" */
    whatsapp: null as string | null,
    /** Instagram логин без @. Пример: "alfarabi_kids" */
    instagram: null as string | null,
  },

  schedule: {
    days: "Дүйсенбі – жұма",
    hours: "07:30 – 18:00",
    short: "07:30–18:00",
  },

  ageRange: "2–5 жас",
  language: "Қазақ тілі",
  meals: "Күніне 4 мезгіл",

  /** Количество и названия групп пока неизвестны — оставьте пустым, пока нет данных. */
  groups: [] as Group[],

  documents: {
    /** Ссылка на папку Google Drive. Пока нет — раздел покажет аккуратную заглушку. */
    googleDriveUrl: null as string | null,
    items: [] as DocumentItem[],
  },
};

/* ───────────── Производные значения (не редактировать) ───────────── */

export const navItems = [
  { id: "home", label: "Басты бет" },
  { id: "about", label: "Біз туралы және топтар" },
  { id: "food", label: "Тамақтану" },
  { id: "clubs", label: "Үйірмелер" },
  { id: "gallery", label: "Галерея" },
  { id: "documents", label: "Құжаттар" },
  { id: "contact", label: "Байланыс" },
] as const;

export type SectionId = (typeof navItems)[number]["id"];

const digits = (v: string | null) => (v ? v.replace(/\D/g, "") : "");

export const links = {
  email: `mailto:${site.contacts.email}`,
  twoGis: `https://2gis.kz/search/${encodeURIComponent(site.address.mapQuery)}`,
  phone: site.contacts.phone ? `tel:+${digits(site.contacts.phone)}` : null,
  whatsapp:
    site.contacts.whatsapp || site.contacts.phone
      ? `https://wa.me/${digits(site.contacts.whatsapp || site.contacts.phone)}`
      : null,
  instagram: site.contacts.instagram
    ? `https://instagram.com/${site.contacts.instagram.replace(/^@/, "")}`
    : null,
};
