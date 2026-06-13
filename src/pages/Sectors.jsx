import { sectors } from '../data/siteData.js';
import SectionTitle from '../components/SectionTitle.jsx';

export default function Sectors() {
  return (
    <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20">
      <div className="px-10">
        <SectionTitle eyebrow="صنایع" title="راهکارهای تولید افزایشی برای" muted="بازارهای تخصصی" />
        <div className="mt-8 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {sectors.map(([title, desc, image]) => (
            <article key={title} className="group overflow-hidden rounded-lg bg-spring-ink text-white">
              <img src={image} alt={title} loading="lazy" className="h-52 w-full object-cover opacity-75 transition duration-700 group-hover:scale-105 sm:h-64 md:h-72" />
              <div className="p-5 sm:p-7">
                <h3 className="text-xl font-semibold sm:text-2xl">{title}</h3>
                <p className="mt-4 leading-8 text-white/70">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
