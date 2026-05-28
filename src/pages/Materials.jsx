import { assets } from '../data/siteData.js';
import ArrowButton from '../components/ArrowButton.jsx';

export default function Materials() {
  return (
    <section className="pt-36 pb-20">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-spring-muted">مواد</p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">انتخاب ماده مناسب برای هر پروژه</h1>
          <p className="mt-6 leading-9 text-spring-charcoal/75">مواد بر اساس استحکام، وزن، انعطاف، مقاومت حرارتی، ظاهر و الزامات صنعت انتخاب می شوند. این صفحه نسخه فارسی همان مفهوم configurator مواد در سایت اصلی است.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {['PA۱۲', 'TPU', 'رزین شفاف', 'آلومینیوم', 'پلیمر تقویت شده', 'فولاد و فلزات'].map((mat) => <div key={mat} className="border border-spring-line p-4">{mat}</div>)}
          </div>
          <ArrowButton to="/quote" icon="config" className="mt-8">شروع پیکربندی</ArrowButton>
        </div>
        <img src={assets.components} alt="مواد و قطعات" className="rounded-lg" />
      </div>
    </section>
  );
}
