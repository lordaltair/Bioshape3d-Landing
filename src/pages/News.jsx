import { news } from '../data/siteData.js';
import SectionTitle from '../components/SectionTitle.jsx';

export default function News() {
  return (
    <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-5 md:px-8">
        <SectionTitle eyebrow="اخبار" title="آخرین نوآوری ها و مطالعات موردی" />
        <div className="mt-8 grid gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {news.map(([title, desc, image]) => (
            <article key={title}>
              <img src={image} alt={title} className="h-48 w-full rounded-lg object-cover sm:h-56 md:h-64" />
              <h3 className="mt-4 text-xl font-semibold sm:mt-6 sm:text-2xl">{title}</h3>
              <p className="mt-3 leading-8 text-spring-charcoal/70">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
