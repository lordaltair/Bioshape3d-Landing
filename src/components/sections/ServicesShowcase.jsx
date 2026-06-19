import { useState } from "react";
import { ArrowDownRight, ArrowUpLeft } from "lucide-react";
import { services } from "../../data/siteData.js";
import SectionTitle from "../SectionTitle.jsx";
import MediaCard from "../MediaCard.jsx";

export default function ServicesShowcase() {
  const core = services.slice(0, 9);
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const progress = ((active + 1) / core.length) * 100;

  const goTo = (index) => {
    setActive(Math.min(Math.max(index, 0), core.length - 1));
  };

  const handleTouchEnd = (event) => {
    if (touchStart === null) return;
    const delta = event.changedTouches[0].clientX - touchStart;

    if (Math.abs(delta) > 45) {
      goTo(active + (delta > 0 ? 1 : -1));
    }

    setTouchStart(null);
  };

  return (
    <section id="services" className="bg-white py-12 sm:py-20 md:py-28">
      <div className="px-10">
        <div data-reveal className="mb-8 max-w-5xl sm:mb-14">
          <p className="mb-5 text-base font-semibold uppercase tracking-[.22em] text-spring-muted">
            خدمات
          </p>
          <SectionTitle
            title="بهترین راهکارها و فناوری ها برای ساخت"
            muted="افزایشی"
          />
        </div>

        <div
          data-reveal
          style={{ "--reveal-delay": "120ms" }}
          className="overflow-hidden pb-6"
          onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex will-change-transform transition-transform duration-[1100ms] ease-[cubic-bezier(.22,1,.36,1)]"
            style={{ transform: `translateX(${active * 100}%)` }}
          >
            {core.map((item) => (
              <div key={item.slug} className="w-full shrink-0 px-1">
                <MediaCard item={item} />
              </div>
            ))}
          </div>
        </div>

        <div
          data-reveal
          style={{ "--reveal-delay": "220ms" }}
          className="mt-6 flex items-center gap-8 sm:mt-10"
        >
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              disabled={active === 0}
              className="group grid min-h-11 w-11 place-items-center rounded-md border border-spring-line bg-black text-white transition hover:bg-spring-charcoal disabled:pointer-events-none disabled:opacity-45 sm:min-h-12 sm:w-12"
              aria-label="سرویس قبلی"
            >
              <ArrowDownRight className="transition-transform duration-300 group-hover:-rotate-45 group-hover:scale-125" size={18} strokeWidth={1.8} />
            </button>
            <button
              type="button"
              onClick={() => goTo(active + 1)}
              disabled={active === core.length - 1}
              className="group grid min-h-11 w-11 place-items-center rounded-md border border-spring-line bg-black text-white transition hover:bg-spring-charcoal disabled:pointer-events-none disabled:opacity-45 sm:min-h-12 sm:w-12"
              aria-label="سرویس بعدی"
            >
              <ArrowUpLeft className="transition-transform duration-300 group-hover:-rotate-45 group-hover:scale-125" size={18} strokeWidth={1.8} />
            </button>
          </div>

          <div
            className="relative h-[2px] flex-1 overflow-hidden bg-spring-line"
            aria-hidden="true"
          >
            <div
              className="absolute inset-y-0 right-0 bg-black transition-[width] duration-[1100ms] ease-[cubic-bezier(.22,1,.36,1)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
