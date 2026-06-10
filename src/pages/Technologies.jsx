import { technologies } from '../data/siteData.js';
import SectionTitle from '../components/SectionTitle.jsx';

export default function Technologies() {
  return (
    <section className="bg-spring-ink pt-28 pb-12 text-white sm:pt-32 sm:pb-16 md:pt-36 md:pb-20">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-5 md:px-8">
        <SectionTitle dark eyebrow="فناوری ها" title="چاپ سه بعدی، نمونه سازی و تولید" muted="در سطح صنعتی" />
        <div className="mt-8 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {technologies.map(([name, label, desc]) => (
            <article key={name} className="min-h-[200px] bg-[#303033] p-5 transition hover:bg-white hover:text-spring-ink sm:min-h-[250px] sm:p-8">
              <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">{name}</h2>
              <p className="mt-3 text-lg sm:mt-4 sm:text-xl">{label}</p>
              <p className="mt-5 leading-8 text-current/70">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
