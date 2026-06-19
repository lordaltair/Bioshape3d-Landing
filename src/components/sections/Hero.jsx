import { ArrowDown } from "lucide-react";
import { assets } from "../../data/siteData.js";
import OrderButton from "../OrderButton.jsx";

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
      <div className="relative grid w-full gap-8 px-10 pb-12 pt-28 sm:gap-10 sm:pb-16 sm:pt-32 md:pt-36 lg:grid-cols-[1fr_60px] lg:items-end">
        <div className="max-w-4xl animate-reveal">
          <h1
            data-reveal
            style={{ lineHeight: "1.4" }}
            className="text-2xl font-semibold leading-tight sm:text-3xl md:text-5xl lg:text-6xl"
          >
            BIOSHAPE3D با عشق به فناوری، مواد پیشرفته، تحقیق و نوآوری
          </h1>
          <p
            data-reveal
            style={{ "--reveal-delay": "120ms" }}
            className="mt-5 max-w-2xl text-base leading-8 text-white/82 sm:mt-7 sm:text-lg sm:leading-9"
          >
            از سال ۱۹۹۸ توان فنی، فناوری های پیشرفته چاپ سه بعدی و دانش تجربی
            خود را برای تبدیل ایده ها و پروژه های صنعتی به راهکارهای واقعی در
            اختیار مشتریان قرار داده ایم.
          </p>
          <div data-reveal style={{ "--reveal-delay": "240ms" }}>
            <OrderButton variant="light" className="mt-8" />
          </div>
        </div>

        <a
          href="#services"
          data-reveal
          style={{ "--reveal-delay": "360ms" }}
          className="group flex w-fit flex-col items-center gap-2 text-sm text-white/85 lg:justify-self-start"
        >
          <span className="relative grid h-14 w-14 place-items-center">
            <svg
              className="absolute inset-0 h-14 w-14 -rotate-90"
              viewBox="0 0 50 50"
            >
              <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke="rgba(255,255,255,.24)"
                strokeWidth="1.5"
              />
              <circle
                className="animate-ring"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke="#fff"
                strokeWidth="1.5"
                strokeDasharray="126"
              />
            </svg>
            <ArrowDown
              size={18}
              className="transition group-hover:translate-y-1"
            />
          </span>
          <span>پایین بروید</span>
        </a>
      </div>
    </section>
  );
}
