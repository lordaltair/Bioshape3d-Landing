import { history } from '../data/siteData.js';
import SectionTitle from '../components/SectionTitle.jsx';

export default function About() {
  return (
    <>
      <section className="bg-spring-ink pt-36 pb-20 text-white">
        <div className="mx-auto max-w-[1320px] px-5 md:px-8">
          <SectionTitle dark eyebrow="شرکت" title="BioShape۳D از ۱۹۹۸ تا امروز" muted="تجربه در خدمت مشتری" />
          <p id="who" className="mt-10 max-w-4xl text-xl leading-10 text-white/75">BioShape۳D از تجربه طراحی محصول، قالب و نمونه سازی متولد شد. قلب شرکت، تیم مهندسی است که با آموزش مداوم و فناوری های پیشرفته، پروژه های صنعتی را از ایده تا تولید همراهی می کند.</p>
        </div>
      </section>
      <section id="history" className="py-20">
        <div className="mx-auto max-w-[1120px] px-5 md:px-8">
          <h2 className="text-4xl font-semibold">تاریخچه</h2>
          <div className="mt-12 grid gap-6">
            {history.map(([year, title, desc]) => (
              <article key={`${year}-${title}`} className="grid gap-4 border-t border-spring-line pt-6 md:grid-cols-[120px_1fr]">
                <span className="text-3xl font-semibold text-spring-blue">{year}</span>
                <div>
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  <p className="mt-2 leading-8 text-spring-charcoal/70">{desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-spring-paper py-20">
        <div className="mx-auto grid max-w-[1120px] gap-8 px-5 md:grid-cols-3 md:px-8">
          {['ماموریت', 'سیستم کیفیت', 'مسئولیت محیط زیست'].map((title, index) => (
            <article id={index === 0 ? 'mission' : index === 1 ? 'quality' : 'environment'} key={title} className="bg-white p-8">
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="mt-4 leading-8 text-spring-charcoal/70">کیفیت، محرمانگی، پایداری و پاسخ سریع در تمام فرایندهای طراحی، تولید و تحویل پروژه رعایت می شود.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
