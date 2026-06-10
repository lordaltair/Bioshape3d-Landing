export default function SectionTitle({ eyebrow, title, muted, dark = false, center = false }) {
  return (
    <div className={`${center ? 'text-center mx-auto' : ''} max-w-5xl animate-reveal`}>
      {eyebrow && <p className={`mb-5 text-xs font-semibold uppercase tracking-[.22em] ${dark ? 'text-white/60' : 'text-spring-muted'}`}>{eyebrow}</p>}
      <h2 className={`text-2xl font-semibold leading-tight sm:text-3xl md:text-5xl ${dark ? 'text-white' : 'text-spring-ink'}`}>
        {title} {muted && <span className={dark ? 'text-white/45' : 'text-spring-muted'}>{muted}</span>}
      </h2>
    </div>
  );
}
