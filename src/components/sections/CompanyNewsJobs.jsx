import { news } from "../../data/siteData.js";
import ArrowButton from "../ArrowButton.jsx";
import SectionTitle from "../SectionTitle.jsx";

export default function CompanyNewsJobs() {
  return (
    <>
      <section className="bg-white py-12 sm:py-20">
        <div className="px-10">
          <div
            data-reveal
            className="mb-8 flex flex-col gap-4 sm:mb-12 sm:gap-6 md:flex-row md:items-end md:justify-between"
          >
            <SectionTitle title="آخرین مطالب بلاگ" />
            <ArrowButton to="/blog">بیشتر</ArrowButton>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map(([title, desc, image], index) => (
              <article
                key={title}
                data-reveal
                style={{ "--reveal-delay": `${index * 120}ms` }}
                className="group"
              >
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="h-56 w-full rounded-lg object-cover"
                />
                <p className="mt-5 text-xs font-semibold text-spring-muted">
                  بلاگ
                </p>
                <h4 className="mt-2 text-xl font-semibold leading-8 group-hover:text-spring-blue">
                  {title}
                </h4>
                <p className="mt-3 leading-7 text-spring-charcoal/70">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
