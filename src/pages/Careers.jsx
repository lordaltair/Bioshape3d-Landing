import { jobs } from '../data/siteData.js';
import SectionTitle from '../components/SectionTitle.jsx';

export default function Careers() {
  return (
    <section className="bg-spring-ink pt-36 pb-20 text-white">
      <div className="mx-auto max-w-[1120px] px-5 md:px-8">
        <SectionTitle dark eyebrow="فرصت های شغلی" title="به تیم BioShape۳D بپیوندید" muted="و آینده تولید را بسازید" />
        <div id="positions" className="mt-14 grid gap-5 md:grid-cols-2">
          {jobs.map(([title, loc]) => (
            <article key={title} className="bg-[#303033] p-8">
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-3 text-white/60">{loc}</p>
              <button className="mt-8 border border-white/20 px-6 py-3 hover:bg-white hover:text-spring-ink">ارسال درخواست</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
