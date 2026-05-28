import { assets } from '../../data/siteData.js';
import OrderButton from '../OrderButton.jsx';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-spring-ink text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-75"
        src={assets.heroVideo}
        autoPlay
        muted
        loop
        playsInline
        poster={assets.services.additive}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/35" />
      <div className="relative mx-auto grid w-full max-w-[1320px] gap-10 px-5 pb-16 pt-36 md:px-8 lg:grid-cols-[1fr_220px] lg:items-end">
        <div className="max-w-4xl animate-reveal">
          <h1
            style={{ lineHeight: '1.4' }}
            className="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl"
          >
            BioShape۳D با عشق به فناوری، مواد پیشرفته، تحقیق و نوآوری
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-white/82">
            از سال ۱۹۹۸ توان فنی، فناوری های پیشرفته چاپ سه بعدی و دانش تجربی
            خود را برای تبدیل ایده ها و پروژه های صنعتی به راهکارهای واقعی در
            اختیار مشتریان قرار داده ایم.
          </p>
          <OrderButton variant="light" className="mt-8" />
        </div>
        {/* Scroll-down control intentionally hidden.
        <a href="#services" className="group flex items-center gap-4 text-sm text-white/85">
          <svg className="h-14 w-14 -rotate-90" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" fill="none" stroke="rgba(255,255,255,.24)" strokeWidth="1.5" />
            <circle className="animate-ring" cx="25" cy="25" r="20" fill="none" stroke="#fff" strokeWidth="1.5" strokeDasharray="126" />
          </svg>
          پایین بروید
        </a>
        */}
      </div>
    </section>
  );
}
