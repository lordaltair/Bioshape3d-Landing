import ArrowButton from './ArrowButton.jsx';

export default function MediaCard({ item }) {
  return (
    <article className="grid gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center xl:grid-cols-[minmax(0,1.05fr)_minmax(360px,.95fr)]">
      <div data-reveal className="overflow-hidden rounded-lg bg-spring-paper">
        <img src={item.image} alt={item.title} loading="lazy" className="h-[220px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[300px] md:h-[360px] lg:h-[520px]" />
      </div>
      <div data-reveal style={{ "--reveal-delay": "120ms" }} className="lg:pr-8">
        <h3 className="text-2xl font-semibold text-spring-ink sm:text-3xl">{item.title}</h3>
        <p className="mt-4 text-sm leading-8 text-spring-charcoal/80 sm:mt-5 sm:text-base">{item.intro}</p>
        <p className="mt-3 text-sm leading-8 text-spring-charcoal/70 sm:mt-4 sm:text-base">{item.body}</p>
        <ArrowButton to={`/services/${item.slug}`} className="mt-8">بیشتر بدانید</ArrowButton>
      </div>
    </article>
  );
}
