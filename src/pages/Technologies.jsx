import { technologies } from '../data/siteData.js';
import SectionTitle from '../components/SectionTitle.jsx';

export default function Technologies() {
  return (
    <section className="bg-spring-ink pt-36 pb-20 text-white">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <SectionTitle dark eyebrow="فناوری ها" title="چاپ سه بعدی، نمونه سازی و تولید" muted="در سطح صنعتی" />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map(([name, label, desc]) => (
            <article key={name} className="min-h-[250px] bg-[#303033] p-8 transition hover:bg-white hover:text-spring-ink">
              <h2 className="text-5xl font-semibold">{name}</h2>
              <p className="mt-4 text-xl">{label}</p>
              <p className="mt-5 leading-8 text-current/70">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
