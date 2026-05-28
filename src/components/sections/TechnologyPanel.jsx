import { Boxes, Component, Cpu, Layers3, Sparkles } from 'lucide-react';
import { applications, technologies } from '../../data/siteData.js';
import SectionTitle from '../SectionTitle.jsx';
import ArrowButton from '../ArrowButton.jsx';
import { toPersianDigits } from '../../utils/persianDigits.js';

const icons = [Boxes, Layers3, Sparkles, Component, Cpu, Boxes, Layers3];

export default function TechnologyPanel() {
  return (
    <>
      <section className="bg-spring-ink py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionTitle dark eyebrow="فناوری ها" title="پیشرفته ترین فناوری های" muted="چاپ سه بعدی و نمونه سازی سریع" />
            <ArrowButton to="/technologies" variant="light">همه فناوری ها</ArrowButton>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map(([name, label, desc], index) => {
              const Icon = icons[index];
              return (
                <article key={name} className="group flex min-h-[260px] flex-col justify-between rounded-lg bg-[#303033] p-7 transition hover:-translate-y-1 hover:bg-white hover:text-spring-ink">
                  <Icon className="text-spring-blue group-hover:text-spring-blue" size={42} />
                  <div>
                    <h3 className="text-3xl font-semibold">{name}</h3>
                    <p className="mt-2 text-sm text-current/70">{label}</p>
                    <p className="mt-5 leading-7 text-current/70">{desc}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8">
          <div className="mb-14 max-w-5xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[.22em] text-spring-muted">کاربردها</p>
            <SectionTitle title="طراحی و تولید را با دقت و انعطاف" muted="دگرگون کنید" />
          </div>
          <div className="mt-14 grid gap-10 text-center md:grid-cols-3">
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
