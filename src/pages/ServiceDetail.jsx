import { useParams, Link } from 'react-router-dom';
import { services, technologies } from '../data/siteData.js';
import ArrowButton from '../components/ArrowButton.jsx';
import OrderButton from '../components/OrderButton.jsx';

export default function ServiceDetail({ forcedSlug }) {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === (forcedSlug || slug)) || services[0];

  return (
    <>
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-spring-ink pt-36 text-white">
        <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover opacity-65" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto w-full max-w-[1320px] px-5 pb-16 md:px-8">
          <div className="mb-7 flex gap-2 text-sm text-white/65">
            <Link to="/">خانه</Link><span>/</span><Link to="/services">خدمات</Link>
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">{service.title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-white/82">{service.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <OrderButton variant="light" />
            <ArrowButton to="/contact" variant="light">درخواست مشاوره</ArrowButton>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-5 md:px-8 lg:grid-cols-[1fr_420px]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.22em] text-spring-muted">{service.title}</p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">چیست و چگونه انجام می شود</h2>
            <p className="mt-7 text-lg leading-9 text-spring-charcoal/75">{service.body}</p>
            <ul className="mt-8 grid gap-3">
              {service.benefits.map((benefit) => <li key={benefit} className="border-r-2 border-spring-blue pr-4 text-spring-charcoal/80">{benefit}</li>)}
            </ul>
          </div>
          <aside className="rounded-lg bg-spring-paper p-8">
            <h3 className="text-2xl font-semibold">فناوری های مرتبط</h3>
            <div className="mt-6 grid gap-3">
              {technologies.slice(0, 5).map(([name, label]) => (
                <Link key={name} to="/technologies" className="flex items-center justify-between border border-spring-line bg-white p-4 transition hover:border-spring-blue">
                  <span>{name}</span>
                  <span className="text-sm text-spring-muted">{label}</span>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
