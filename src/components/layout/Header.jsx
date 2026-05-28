import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronLeft } from 'lucide-react';
import { navGroups, topLinks } from '../../data/siteData.js';
import OrderButton from '../OrderButton.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(null);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-[1380px] px-4 md:px-8">
        <nav className="mt-4 flex h-20 items-center justify-between rounded-none border border-spring-line bg-white px-4 text-spring-ink shadow-spring backdrop-blur-xl">
          <div className="flex items-center gap-5">
            <button className="grid h-11 w-11 place-items-center lg:hidden" onClick={() => setOpen(true)} aria-label="باز کردن منو">
              <Menu />
            </button>
            <Link to="/" className="block">
              <span className="text-2xl font-extrabold tracking-tight text-spring-ink">BioShape۳D</span>
            </Link>
          </div>

          <div className="hidden flex-1 items-center justify-center gap-8 lg:flex">
            <Link to="/materials" className="rounded-full border border-spring-ink/25 px-5 py-2 text-sm font-semibold text-spring-ink transition hover:bg-spring-ink hover:text-white">مواد</Link>
            {navGroups.map((group) => (
              <div key={group.label} className="py-8" onMouseEnter={() => setMega(group.label)}>
                <NavLink to={group.path} className="flex items-center gap-1 text-sm font-medium text-spring-ink/85 transition hover:text-black">
                  {group.label}
                  <ChevronDown size={14} />
                </NavLink>
              </div>
            ))}
            {topLinks.map(([label, path]) => (
              <NavLink key={path} to={path} className="text-sm font-medium text-spring-ink/85 transition hover:text-black">{label}</NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <OrderButton />
            <Link to="/contact" className="border border-spring-ink/30 px-5 py-3 text-sm font-semibold text-spring-ink transition hover:bg-spring-ink hover:text-white">تماس با ما</Link>
          </div>
        </nav>
      </div>

      {mega && (
        <div onMouseLeave={() => setMega(null)} className="hidden lg:block">
          <div className="mx-auto mt-2 max-w-[1180px] bg-white p-8 text-spring-ink shadow-spring animate-reveal">
            <div className="grid grid-cols-[260px_1fr] gap-10">
              <div>
                <p className="text-sm text-spring-muted">منوی {mega}</p>
                <h3 className="mt-2 text-3xl font-semibold">انتخاب سریع</h3>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {navGroups.find((group) => group.label === mega)?.items.map(([label, path]) => (
                  <Link key={label} to={path} onClick={() => setMega(null)} className="group flex items-center justify-between border border-spring-line p-4 text-sm transition hover:border-spring-blue hover:bg-spring-paper">
                    {label}
                    <ChevronLeft size={16} className="text-spring-blue transition group-hover:-translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {open && (
        <div className="fixed inset-0 z-[80] bg-black/55 lg:hidden" onClick={() => setOpen(false)}>
          <aside className="mr-auto h-full w-[88vw] max-w-sm bg-spring-ink p-6 text-white shadow-spring" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-extrabold tracking-tight text-white">BioShape۳D</span>
              <button className="grid h-11 w-11 place-items-center" onClick={() => setOpen(false)} aria-label="بستن منو"><X /></button>
            </div>
            <div className="mt-10 space-y-6">
              {[...navGroups, { label: 'مواد', path: '/materials', items: [] }].map((group) => (
                <details key={group.label} className="border-b border-white/10 pb-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-xl font-semibold">
                    <Link to={group.path} onClick={() => setOpen(false)}>{group.label}</Link>
                    {group.items.length > 0 && <ChevronDown size={18} />}
                  </summary>
                  <div className="mt-4 grid gap-3 text-white/70">
                    {group.items.map(([label, path]) => <Link key={label} to={path} onClick={() => setOpen(false)}>{label}</Link>)}
                  </div>
                </details>
              ))}
              <OrderButton className="w-full" />
              {topLinks.map(([label, path]) => <Link key={path} to={path} onClick={() => setOpen(false)} className="block text-xl font-semibold">{label}</Link>)}
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
