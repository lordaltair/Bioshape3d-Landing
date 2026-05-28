import { sectors } from '../data/siteData.js';
import SectionTitle from '../components/SectionTitle.jsx';

export default function Sectors() {
  return (
    <section className="pt-36 pb-20">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <SectionTitle eyebrow="صنایع" title="راهکارهای تولید افزایشی برای" muted="بازارهای تخصصی" />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map(([title, desc, image]) => (
            <article key={title} className="group overflow-hidden rounded-lg bg-spring-ink text-white">
              <img src={image} alt={title} loading="lazy" className="h-72 w-full object-cover opacity-75 transition duration-700 group-hover:scale-105" />
              <div className="p-7">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-4 leading-8 text-white/70">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
