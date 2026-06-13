import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDownRight, ArrowUpLeft, Boxes, Component, Cpu, Layers3, Sparkles } from 'lucide-react';
import { applications, technologies } from '../../data/siteData.js';
import SectionTitle from '../SectionTitle.jsx';
import ArrowButton from '../ArrowButton.jsx';
import { toPersianDigits } from '../../utils/persianDigits.js';

const icons = [Boxes, Layers3, Sparkles, Component, Cpu, Boxes, Layers3];

const getVisibleCount = () => {
  if (typeof window === 'undefined') return 4;
  if (window.matchMedia('(min-width: 1024px)').matches) return 4;
  if (window.matchMedia('(min-width: 640px)').matches) return 2;
  return 1;
};

export default function TechnologyPanel() {
  const [active, setActive] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);
  const [touchStart, setTouchStart] = useState(null);
  const maxActive = Math.max(0, technologies.length - visibleCount);
  const progress = ((active + 1) / (maxActive + 1)) * 100;

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (active > maxActive) setActive(maxActive);
  }, [active, maxActive]);

  const goTo = (index) => {
    setActive(Math.min(Math.max(index, 0), maxActive));
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
    <>
      <section className="bg-spring-ink py-12 text-white sm:py-20 md:py-28">
        <div className="px-10">
          <div className="flex flex-col gap-6 sm:gap-8 lg:grid lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionTitle dark eyebrow="فناوری ها" title="پیشرفته ترین فناوری های" muted="چاپ سه بعدی و نمونه سازی سریع" />
            <ArrowButton to="/technologies" variant="black" className="w-full sm:w-auto">همه فناوری ها</ArrowButton>
          </div>

          <div
            className="mt-8 overflow-hidden pb-2 sm:mt-14"
            onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex will-change-transform transition-transform duration-[1100ms] ease-[cubic-bezier(.22,1,.36,1)] [--step:100%] sm:[--step:50%] lg:[--step:25%]"
              style={{ '--active': active, transform: 'translateX(calc(var(--active) * var(--step)))' }}
            >
              {technologies.map(([name, label, desc], index) => {
                const Icon = icons[index] || Boxes;

                return (
                  <div key={name} className="w-full shrink-0 px-2 sm:w-1/2 lg:w-1/4">
                    <article className="group flex min-h-[310px] flex-col items-center justify-between rounded-lg bg-[#303033] p-5 text-center transition hover:-translate-y-1 hover:bg-white hover:text-spring-ink sm:min-h-[350px] sm:p-7">
                      <Icon className="text-spring-blue group-hover:text-spring-blue" size={36} />
                      <div className="w-full">
                        <h3 className="text-2xl font-semibold sm:text-3xl">{name}</h3>
                        <p className="mt-2 text-sm text-current/70">{label}</p>
                        <p className="mt-5 leading-7 text-current/70">{desc}</p>
                      </div>
                      <Link
                        to="/technologies"
                        className="mt-7 inline-grid min-h-14 w-full max-w-[224px] place-items-center rounded-md border border-white/25 px-6 text-sm font-semibold text-white transition hover:border-[#1A8EF9] hover:bg-[#1A8EF9] group-hover:border-spring-ink/25 group-hover:text-spring-ink group-hover:hover:border-[#1A8EF9] group-hover:hover:text-white"
                      >
                        بیشتر بدانید
                      </Link>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-8 sm:mt-10">
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={() => goTo(active - 1)}
                disabled={active === 0}
                className="grid min-h-11 w-11 place-items-center rounded-md border border-white/15 bg-black text-white transition hover:bg-spring-charcoal disabled:pointer-events-none disabled:opacity-45 sm:min-h-12 sm:w-12"
                aria-label="فناوری قبلی"
              >
                <ArrowDownRight size={18} strokeWidth={1.8} />
              </button>
              <button
                type="button"
                onClick={() => goTo(active + 1)}
                disabled={active === maxActive}
                className="grid min-h-11 w-11 place-items-center rounded-md border border-white/15 bg-black text-white transition hover:bg-spring-charcoal disabled:pointer-events-none disabled:opacity-45 sm:min-h-12 sm:w-12"
                aria-label="فناوری بعدی"
              >
                <ArrowUpLeft size={18} strokeWidth={1.8} />
              </button>
            </div>

            <div className="relative h-[2px] flex-1 overflow-hidden bg-white/20" aria-hidden="true">
              <div
                className="absolute inset-y-0 right-0 bg-white transition-[width] duration-[1100ms] ease-[cubic-bezier(.22,1,.36,1)]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20">
        <div className="px-10">
          <div className="mb-8 max-w-5xl sm:mb-14">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[.22em] text-spring-muted">کاربردها</p>
            <SectionTitle title="طراحی و تولید را با دقت و انعطاف" muted="دگرگون کنید" />
          </div>
          <div className="mt-8 grid gap-8 text-center sm:mt-14 sm:gap-10 md:grid-cols-3">
            {applications.map(([title, desc], index) => (
              <div key={title} className="animate-reveal">
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-spring-line text-spring-blue">
                  {toPersianDigits(index + 1)}
                </div>
                <h5 className="mt-6 text-xl font-semibold">{title}</h5>
                <p className="mt-3 leading-8 text-spring-charcoal/70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
