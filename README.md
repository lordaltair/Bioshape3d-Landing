# BIOSHAPE3D Persian RTL Replica

یک پروژه React/Vite/Tailwind برای وب سایت BIOSHAPE3D با ساختار، حس بصری، ناوبری، کارت ها، اسلایدرها، فرم ها، CTAها و صفحات داخلی مشابه مرجع، به فارسی و راست چین.

## ساختار

```txt
.
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ layout/
│  │  └─ sections/
│  ├─ data/siteData.js
│  ├─ pages/
│  ├─ styles.css
│  └─ main.jsx
├─ index.html
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
└─ vite.config.js
```

## نصب و اجرا

```bash
npm install
npm run dev
npm run build
npm run preview
```

## وابستگی ها

React, React DOM, React Router DOM, Vite, Tailwind CSS, PostCSS, Autoprefixer, Lucide React, ESLint.

## صفحات

Home, About Us, Services, service detail pages, Security Services, Web Hosting, Corporate Networks, Technologies, Sectors, Materials, News, Careers, Quote, Contact.

## استقرار

۱. `npm run build` را اجرا کنید.
۲. پوشه `dist` را روی Vercel، Netlify، Cloudflare Pages یا هر هاست استاتیک آپلود کنید.
۳. برای مسیرهای React Router، rewrite همه مسیرها به `index.html` را فعال کنید.
