/**
 * Тексты разделов (на казахском языке). Факты о садике — в config/site.ts.
 */

export const heroFacts = [
  { icon: "baby", label: "2–5 жас", caption: "Балалар жасы" },
  { icon: "languages", label: "Қазақ тілінде", caption: "тәрбие" },
  { icon: "utensils", label: "4 мезгіл", caption: "тамақтану" },
  { icon: "clock", label: "07:30–18:00", caption: "Дүйсенбі – жұма" },
] as const;

export const about = {
  eyebrow: "Біз туралы",
  title: "Баланың әр күні — жаңа мүмкіндік!",
  lead: "«Аль-Фараби» — бүлдіршіндер үшін жылы да жайлы екінші үй. Мұнда бала ойнап үйренеді, дос табады және қауіпсіз ортада өседі.",
  values: [
    {
      icon: "heart",
      title: "Қамқор тәрбие",
      text: "Мейірім мен ықылас",
      tone: "rose",
    },
    {
      icon: "shield",
      title: "Қауіпсіз орта",
      text: "Таза әрі жайлы жағдай",
      tone: "leaf",
    },
    {
      icon: "sparkles",
      title: "Жан-жақты даму",
      text: "Ойын мен шығармашылық",
      tone: "sun",
    },
    {
      icon: "puzzle",
      title: "Жеке көзқарас",
      text: "Әр балаға жеке назар",
      tone: "sky",
    },
  ],
  groups: {
    title: "Біздің топтар",
    text: "2–5 жастағы балалар, қазақ тілінде.",
    note: "Бос орындар туралы бізден біліңіз.",
  },
} as const;

export const food = {
  eyebrow: "Тамақтану",
  title: "Дәмді әрі пайдалы тамақтану",
  text: "Күніне 4 мезгіл тамақтану.",
  meals: [
    { icon: "croissant", title: "Таңғы ас", text: "Жылы ас", tone: "sun" },
    { icon: "soup", title: "Түскі ас", text: "Толыққанды ас", tone: "leaf" },
    { icon: "apple", title: "Бесін ас", text: "Жеңіл ас", tone: "rose" },
    { icon: "salad", title: "Кешкі ас", text: "Үйге дейінгі ас", tone: "sky" },
  ],
} as const;

export const clubs = {
  eyebrow: "Үйірмелер",
  title: "Қосымша сабақтар мен үйірмелер",
  items: [
    {
      icon: "speech",
      title: "Логопед",
      subtitle: "Сөйлеу дағдыларын дамыту",
      text: "Анық әрі дұрыс сөйлеуге көмектеседі.",
      tone: "rose",
    },
    {
      icon: "medal",
      title: "Таэквондо",
      subtitle: "Шапшаңдық пен тәртіпке баулу",
      text: "Ептілік, тәртіп және сенімділік.",
      tone: "sky",
    },
    {
      icon: "languages",
      title: "Ағылшын тілі",
      subtitle: "Шет тілімен алғашқы танысу",
      text: "Алғашқы сөздер — ойын арқылы.",
      tone: "lilac",
    },
  ],
} as const;

export const gallery = {
  eyebrow: "Галерея",
  title: "Балабақша өмірінен сәттер",
  empty: "Фотосуреттер жақын арада қосылады",
  more: "Көбірек көрсету",
  less: "Жасыру",
} as const;

export const documents = {
  eyebrow: "Құжаттар",
  title: "Балабақша құжаттары",
  text: "Ата-аналарға арналған құжаттар осында болады.",
  pendingTitle: "Құжаттар жақын арада жарияланады",
  pendingText: "Сұрақтарыңызды поштаға жазыңыз.",
  driveTitle: "Google Drive қалтасы",
  driveText: "Барлық құжаттар бір қалтада",
  driveButton: "Құжаттарды ашу",
} as const;

export const contact = {
  eyebrow: "Байланыс",
  title: "Бізге келіңіз, танысайық!",
  map: "2GIS картасынан табу",
} as const;

export type Tone = "leaf" | "sun" | "rose" | "sky" | "lilac";
