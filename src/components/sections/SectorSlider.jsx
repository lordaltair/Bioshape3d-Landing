import { sectors } from "../../data/siteData.js";
import ArrowButton from "../ArrowButton.jsx";

export default function SectorSlider() {
  return (
    <section className="bg-white px-10 py-8 sm:py-12">
      <div
        data-reveal
        className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between"
      >
        <h2 className="text-2xl font-semibold text-spring-ink sm:text-3xl md:text-5xl">
          صنایع
        </h2>
        <ArrowButton to="/sectors" variant="black" className="w-full sm:w-auto">
          همه صنایع
        </ArrowButton>
      </div>
      <div
        data-reveal
        style={{ "--reveal-delay": "140ms" }}
        className="snap-x snap-mandatory overflow-x-auto"
      >
        <div className="flex">
          {sectors.map(([title, desc, image]) => (
            <article
              key={title}
              className="relative h-[58vh] min-h-[360px] w-[88vw] shrink-0 snap-start overflow-hidden sm:min-h-[440px] sm:w-[92vw] md:h-[65vh] md:min-h-[480px] md:w-[72vw] lg:w-[52vw]"
            >
              <img
                src={image}
                alt={title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/55" />
              <div className="relative z-10 flex h-full max-w-[520px] flex-col justify-between p-5 text-white sm:p-8 md:p-12">
                <span aria-hidden="true" />
                <div>
                  <h3 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/78 sm:mt-5 sm:text-base sm:leading-8">
                    {desc}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
