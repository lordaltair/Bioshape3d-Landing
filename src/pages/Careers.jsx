import { jobs } from '../data/siteData.js';
import SectionTitle from '../components/SectionTitle.jsx';

export default function Careers() {
  return (
    <section className="bg-spring-ink pt-28 pb-12 text-white sm:pt-32 sm:pb-16 md:pt-36 md:pb-20">
      <div className="px-10">
        <SectionTitle dark eyebrow="فرصت های شغلی" title="به تیم BIOSHAPE3D بپیوندید" muted="و آینده تولید را بسازید" />
        <div id="positions" className="mt-8 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5">
          {jobs.map(([title, loc]) => (
            <article key={title} className="bg-[#303033] p-5 sm:p-8">
              <h3 className="text-xl font-semibold sm:text-2xl">{title}</h3>
              <p className="mt-2 text-sm text-white/60 sm:mt-3 sm:text-base">{loc}</p>
              <button type="button" className="mt-6 w-full rounded-md border border-white/20 px-6 py-3 text-sm transition hover:bg-white hover:text-spring-ink sm:mt-8 sm:w-auto">ارسال درخواست</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
