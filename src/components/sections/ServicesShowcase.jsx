import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { services } from '../../data/siteData.js';
import SectionTitle from '../SectionTitle.jsx';
import MediaCard from '../MediaCard.jsx';

export default function ServicesShowcase() {
  const core = services.slice(0, 9);
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const move = (direction) => {
    setActive((current) => {
      const next = current + direction;
      if (next < 0) return core.length - 1;
      if (next >= core.length) return 0;
      return next;
    });
  };

  const handleTouchEnd = (event) => {
    if (touchStart === null) return;
    const delta = event.changedTouches[0].clientX - touchStart;
    if (Math.abs(delta) > 45) {
      move(delta > 0 ? 1 : -1);
    }
    setTouchStart(null);
  };

  return (
    <section id="services" className="bg-white py-12 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-5 md:px-8">
        <div className="mb-8 max-w-5xl sm:mb-14">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[.22em] text-spring-muted">خدمات</p>
          <SectionTitle title="بهترین راهکارها و فناوری ها برای ساخت" muted="افزایشی" />
        </div>

        <div
          className="overflow-hidden pb-6"
          onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(${active * 100}%)` }}
          >
            {core.map((item) => (
              <div key={item.slug} className="w-full shrink-0 px-1">
                <MediaCard item={item} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-5">
          <div className="flex items-center gap-2">
            {core.map((item, index) => (
              <button
                key={item.slug}
                type="button"
                aria-label={`نمایش ${item.title}`}
                onClick={() => setActive(index)}
                className={`h-2.5 rounded-full transition-all ${active === index ? 'w-9 bg-spring-blue' : 'w-2.5 bg-spring-line hover:bg-spring-muted'}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => move(-1)}
              className="grid h-12 w-12 place-items-center rounded-md border border-spring-line text-spring-ink transition hover:bg-spring-ink hover:text-white"
              aria-label="سرویس قبلی"
            >
              <ChevronRight size={20} />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              className="grid h-12 w-12 place-items-center rounded-md border border-spring-line text-spring-ink transition hover:bg-spring-ink hover:text-white"
              aria-label="سرویس بعدی"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
