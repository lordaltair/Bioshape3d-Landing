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
      <div className="mx-auto max-w-[1380px] px-3 sm:px-4 md:px-8">
        <nav className="mt-2 flex h-16 items-center justify-between gap-2 rounded-none border border-spring-line bg-white px-3 text-spring-ink shadow-spring backdrop-blur-xl sm:mt-4 sm:h-20 sm:px-4">
          <div className="flex min-w-0 items-center gap-2 sm:gap-5">
            <button className="grid h-10 w-10 shrink-0 place-items-center rounded-md lg:hidden" onClick={() => setOpen(true)} aria-label="باز کردن منو">
              <Menu size={22} />
            </button>
            <Link to="/" className="block min-w-0">
              <span className="truncate text-lg font-extrabold tracking-tight text-spring-ink sm:text-2xl">BIOSHAPE3D</span>
            </Link>
          </div>

          <div className="hidden flex-1 items-center justify-center gap-8 lg:flex">
            <Link to="/materials" className="rounded-md border border-spring-ink/25 px-5 py-2 text-sm font-semibold text-spring-ink transition hover:bg-spring-ink hover:text-white">مواد</Link>
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

          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <OrderButton className="!px-3 !text-xs sm:!px-4 sm:!text-sm" />
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <OrderButton className="h-12 min-h-12 w-32 px-6" />
            <Link to="/contact" className="inline-grid h-12 min-h-12 w-32 place-items-center rounded-md border border-spring-ink/30 px-6 text-sm font-semibold text-spring-ink transition hover:bg-spring-ink hover:text-white">تماس با ما</Link>
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
                  <Link key={label} to={path} onClick={() => setMega(null)} className="group flex items-center justify-between rounded-md border border-spring-line p-4 text-sm transition hover:border-spring-blue hover:bg-spring-paper">
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
          <aside className="mr-auto flex h-full w-[min(88vw,20rem)] max-w-sm flex-col overflow-y-auto bg-spring-ink p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] text-white shadow-spring sm:p-6" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between">
              <span className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">BIOSHAPE3D</span>
              <button className="grid h-11 w-11 place-items-center rounded-md" onClick={() => setOpen(false)} aria-label="بستن منو"><X /></button>
            </div>
            <div className="mt-8 flex-1 space-y-5 overflow-y-auto sm:mt-10 sm:space-y-6">
              {[...navGroups, { label: 'مواد', path: '/materials', items: [] }].map((group) => (
                <details key={group.label} className="border-b border-white/10 pb-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold sm:text-xl">
                    <Link to={group.path} onClick={() => setOpen(false)}>{group.label}</Link>
                    {group.items.length > 0 && <ChevronDown size={18} />}
                  </summary>
                  <div className="mt-4 grid gap-3 text-white/70">
                    {group.items.map(([label, path]) => <Link key={label} to={path} onClick={() => setOpen(false)}>{label}</Link>)}
                  </div>
                </details>
              ))}
              {topLinks.map(([label, path]) => <Link key={path} to={path} onClick={() => setOpen(false)} className="block text-lg font-semibold sm:text-xl">{label}</Link>)}
              <Link to="/contact" onClick={() => setOpen(false)} className="block w-full rounded-md border border-white/25 py-3 text-center text-sm font-semibold">تماس با ما</Link>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
