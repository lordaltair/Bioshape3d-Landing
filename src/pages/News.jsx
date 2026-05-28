import { news } from '../data/siteData.js';
import SectionTitle from '../components/SectionTitle.jsx';

export default function News() {
  return (
    <section className="pt-36 pb-20">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <SectionTitle eyebrow="اخبار" title="آخرین نوآوری ها و مطالعات موردی" />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {news.map(([title, desc, image]) => (
            <article key={title}>
              <img src={image} alt={title} className="h-64 w-full rounded-lg object-cover" />
              <h3 className="mt-6 text-2xl font-semibold">{title}</h3>
              <p className="mt-3 leading-8 text-spring-charcoal/70">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
