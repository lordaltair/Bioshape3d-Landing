import { sectors } from '../../data/siteData.js';
import ArrowButton from '../ArrowButton.jsx';

export default function SectorSlider() {
  return (
    <section className="bg-white py-4">
      <div className="snap-x snap-mandatory overflow-x-auto">
        <div className="flex">
          {sectors.map(([title, desc, image]) => (
            <article key={title} className="relative h-[72vh] min-h-[520px] w-[92vw] shrink-0 snap-start overflow-hidden md:w-[72vw] lg:w-[52vw]">
              <img src={image} alt={title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-black/55" />
              <div className="relative z-10 flex h-full max-w-[520px] flex-col justify-between p-8 text-white md:p-12">
                <p className="text-xs font-semibold uppercase tracking-[.22em] text-white/60">صنایع</p>
                <div>
                  <h3 className="text-4xl font-semibold">{title}</h3>
                  <p className="mt-5 leading-8 text-white/78">{desc}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <ArrowButton to="/sectors" variant="light">بیشتر بدانید</ArrowButton>
                    <ArrowButton to="/sectors" variant="light">همه صنایع</ArrowButton>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
