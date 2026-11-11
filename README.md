# «Аль-Фараби» бөбекжай-балабақшасы — сайт

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Motion · Lucide React.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production-сборка (Vercel: импортировать репозиторий, настройки по умолчанию)
```

## Где менять данные
- `config/site.ts` — название, адрес, email, режим работы, **телефон / WhatsApp / Instagram**
  (кнопки появятся автоматически после заполнения), **группы**, **Google Drive с документами**, `siteUrl`.
- `config/content.ts` — тексты разделов на казахском.

## Фотографии — `public/images`
Подхватываются автоматически при сборке (jpg, jpeg, png, webp):
- `logo.*` — логотип; `main-page.*` — главный экран; `main-page2.*` — блок «Біз туралы»;
- все остальные файлы — галерея (сортировка по имени: image1, image2, …).
Пока файлов нет, показываются аккуратные иллюстрации и заглушка галереи.

## Структура
- `components/desktop/` — композиция для ≥1024px
- `components/mobile/` — отдельная композиция для <1024px (якоря с префиксом `m-`)
- `components/shared/` — общие элементы (декор, анимации, лайтбокс, фото, футер)
