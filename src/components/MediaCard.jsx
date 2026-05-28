import ArrowButton from './ArrowButton.jsx';

export default function MediaCard({ item }) {
  return (
    <article className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,.95fr)] lg:items-center">
      <div className="overflow-hidden rounded-lg bg-spring-paper">
        <img src={item.image} alt={item.title} loading="lazy" className="h-[360px] w-full object-cover transition duration-700 hover:scale-105 lg:h-[520px]" />
      </div>
      <div className="lg:pr-8">
        <h3 className="text-3xl font-semibold text-spring-ink">{item.title}</h3>
        <p className="mt-5 leading-8 text-spring-charcoal/80">{item.intro}</p>
        <p className="mt-4 leading-8 text-spring-charcoal/70">{item.body}</p>
        <ArrowButton to={`/services/${item.slug}`} className="mt-8">بیشتر بدانید</ArrowButton>
      </div>
    </article>
  );
}
