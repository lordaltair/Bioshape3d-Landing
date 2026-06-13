import { assets, jobs, news } from "../../data/siteData.js";
import ArrowButton from "../ArrowButton.jsx";
import SectionTitle from "../SectionTitle.jsx";

export default function CompanyNewsJobs() {
  return (
    <>
      <section className="bg-white py-12 sm:py-20">
        <div className="grid gap-8 px-10 sm:gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.22em] text-spring-muted">
              جستجوی مواد
            </p>
            <h3 className="mt-4 text-2xl font-semibold leading-tight sm:mt-5 sm:text-3xl md:text-5xl">
              طیف گسترده ای از مواد برای مشخصات فنی پروژه شما
            </h3>
            <p className="mt-6 leading-8 text-spring-charcoal/70">
              مواد پلیمری، رزینی، فلزی، کامپوزیتی و الاستومری را بر اساس ویژگی
              های مکانیکی، ظاهری و عملکردی انتخاب کنید.
            </p>
            <ArrowButton to="/materials" icon="config" className="mt-8">
              پیکربندی کنید
            </ArrowButton>
          </div>
          <img
            src={assets.components}
            alt="قطعات صنعتی"
            loading="lazy"
            className="rounded-lg object-cover"
          />
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div
          className="min-h-[240px] bg-cover bg-center sm:min-h-[320px] md:min-h-[420px]"
          style={{ backgroundImage: `url(${assets.company})` }}
        />
        <div className="flex items-center bg-white p-6 sm:p-8 md:p-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.22em] text-spring-muted">
              شرکت
            </p>
            <h3 className="mt-4 text-2xl font-semibold leading-tight sm:mt-5 sm:text-3xl md:text-5xl">
              بایوشیپ با عشق به فناوری، مواد پیشرفته، تحقیق و نوآوری
            </h3>
            <p className="mt-6 leading-8 text-spring-charcoal/70">
              BIOSHAPE3D در سال ۱۹۹۸ با تکیه بر تجربه بنیان گذاران در طراحی
              محصول، قالب و نمونه سازی شکل گرفت. قلب شرکت، تیم مهندسی و تولیدی
              است که پیوسته به روز می شود.
            </p>
            <ArrowButton to="/about" className="mt-8">
              کشف BIOSHAPE3D
            </ArrowButton>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-20">
        <div className="px-10">
          <div className="mb-8 flex flex-col gap-4 sm:mb-12 sm:gap-6 md:flex-row md:items-end md:justify-between">
            <SectionTitle title="آخرین خبرها" />
            <ArrowButton to="/news">بیشتر</ArrowButton>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map(([title, desc, image]) => (
              <article key={title} className="group">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="h-56 w-full rounded-lg object-cover"
                />
                <p className="mt-5 text-xs font-semibold text-spring-muted">
                  خبر
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

      <section className="bg-spring-ink py-12 text-white sm:py-20">
        <div className="px-10">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[minmax(0,360px)_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[.22em] text-white/50">
                در حال جذب
              </p>
              <h2 className="mt-4 text-2xl font-semibold leading-tight sm:mt-5 sm:text-3xl md:text-4xl">
                به ما بپیوندید تا آینده را با هم بسازیم
              </h2>
              <ArrowButton to="/careers" variant="light" className="mt-8">
                موقعیت های باز
              </ArrowButton>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              {jobs.map(([title, loc]) => (
                <article
                  key={title}
                  className="flex min-h-[160px] flex-col justify-between bg-[#303033] p-5 sm:min-h-[190px] sm:p-7"
                >
                  <div>
                    <h4 className="text-lg font-semibold sm:text-xl">{title}</h4>
                    <p className="mt-3 text-white/60">{loc}</p>
                  </div>
                  <button className="mt-6 rounded-md border border-white/20 px-5 py-3 text-sm transition hover:bg-white hover:text-spring-ink">
                    اکنون اقدام کنید
                  </button>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
