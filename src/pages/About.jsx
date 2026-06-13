import { history } from '../data/siteData.js';
import SectionTitle from '../components/SectionTitle.jsx';

export default function About() {
  return (
    <>
      <section className="bg-spring-ink pt-28 pb-12 text-white sm:pt-32 sm:pb-16 md:pt-36 md:pb-20">
        <div className="px-10">
          <SectionTitle dark eyebrow="شرکت" title="BIOSHAPE3D از ۱۹۹۸ تا امروز" muted="تجربه در خدمت مشتری" />
          <p id="who" className="mt-6 max-w-4xl text-base leading-8 text-white/75 sm:mt-10 sm:text-lg sm:leading-9 md:text-xl md:leading-10">BIOSHAPE3D از تجربه طراحی محصول، قالب و نمونه سازی متولد شد. قلب شرکت، تیم مهندسی است که با آموزش مداوم و فناوری های پیشرفته، پروژه های صنعتی را از ایده تا تولید همراهی می کند.</p>
        </div>
      </section>
      <section id="history" className="py-12 sm:py-20">
        <div className="px-10">
          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">تاریخچه</h2>
          <div className="mt-8 grid gap-5 sm:mt-12 sm:gap-6">
            {history.map(([year, title, desc]) => (
              <article key={`${year}-${title}`} className="grid gap-3 border-t border-spring-line pt-5 sm:gap-4 sm:pt-6 md:grid-cols-[100px_1fr] lg:grid-cols-[120px_1fr]">
                <span className="text-2xl font-semibold text-spring-blue sm:text-3xl">{year}</span>
                <div>
                  <h3 className="text-xl font-semibold sm:text-2xl">{title}</h3>
                  <p className="mt-2 leading-8 text-spring-charcoal/70">{desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-spring-paper py-12 sm:py-20">
        <div className="grid gap-5 px-10 sm:gap-8 md:grid-cols-3">
          {['ماموریت', 'سیستم کیفیت', 'مسئولیت محیط زیست'].map((title, index) => (
            <article id={index === 0 ? 'mission' : index === 1 ? 'quality' : 'environment'} key={title} className="bg-white p-6 sm:p-8">
              <h3 className="text-xl font-semibold sm:text-2xl">{title}</h3>
              <p className="mt-4 leading-8 text-spring-charcoal/70">کیفیت، محرمانگی، پایداری و پاسخ سریع در تمام فرایندهای طراحی، تولید و تحویل پروژه رعایت می شود.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
