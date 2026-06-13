import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowLeft, Menu, X, Plus } from "lucide-react";
import { navGroups, topLinks } from "../../data/siteData.js";
import OrderButton from "../OrderButton.jsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(null);
  const headerRef = useRef(null);

  const toggleMega = (label) => {
    setMega((current) => (current === label ? null : label));
  };

  useEffect(() => {
    if (!mega) return undefined;

    const handleOutsideClick = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        setMega(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [mega]);

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50">
      <div className="w-full px-10">
        <nav className="mt-2 flex h-16 items-center justify-between gap-2 rounded-md border border-spring-line bg-white px-3 text-spring-ink shadow-spring backdrop-blur-xl sm:mt-4 sm:h-20 sm:px-4">
          <div className="flex min-w-0 items-center gap-2 sm:gap-5">
            <button
              className="grid h-10 w-10 shrink-0 place-items-center rounded-md lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="باز کردن منو"
            >
              <Menu size={22} />
            </button>
            <Link to="/" className="block min-w-0">
              <span className="truncate text-lg font-extrabold tracking-tight text-spring-ink sm:text-2xl">
                BIOSHAPE3D
              </span>
            </Link>
          </div>

          <div className="hidden flex-1 items-center justify-center gap-8 lg:flex">
            <Link
              to="/materials"
              className="rounded-md px-5 py-2 text-sm font-extrabold uppercase tracking-wide text-[#1A8EF9] transition hover:text-[#046ECF]"
            >
              مواد
            </Link>
            {navGroups.map((group) => {
              const isOpen = mega === group.label;

              return (
                <button
                  key={group.label}
                  type="button"
                  onClick={() => toggleMega(group.label)}
                  className="flex items-center gap-1 py-8 text-sm font-medium text-spring-ink/85 transition hover:text-black"
                  aria-expanded={isOpen}
                >
                  <span>{group.label}</span>
                  <span
                    className="grid h-6 w-6 place-items-center rounded-md text-[#1A8EF9] transition hover:text-[#046ECF]"
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <X size={15} strokeWidth={2.3} />
                    ) : (
                      <Plus size={15} strokeWidth={2.3} />
                    )}
                  </span>
                </button>
              );
            })}
            {topLinks.map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                className="text-sm font-medium text-spring-ink/85 transition hover:text-black"
              >
                {label}
              </NavLink>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <OrderButton className="!px-3 !text-xs sm:!px-4 sm:!text-sm" />
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <OrderButton className="h-12 min-h-12 w-32 px-6" />
            <Link
              to="/contact"
              className="inline-grid h-12 min-h-12 w-32 place-items-center rounded-md border border-spring-ink/30 px-6 text-sm font-semibold text-spring-ink transition hover:bg-spring-ink hover:text-white"
            >
              تماس با ما
            </Link>
          </div>
        </nav>
      </div>

      {mega && (
        <div className="hidden lg:block">
          <div className="mx-10 mt-2 rounded-md bg-white p-8 text-spring-ink shadow-spring animate-reveal">
            <div className="grid grid-cols-3 gap-x-10 gap-y-5">
              {navGroups
                .find((group) => group.label === mega)
                ?.items.map(([label, path]) => (
                  <Link
                    key={label}
                    to={path}
                    onClick={() => setMega(null)}
                    className="group inline-flex w-fit flex-row-reverse items-center px-10 py-1 text-spring-ink transition duration-300 hover:text-[#1A8EF9]"
                  >
                    <span className="text-base font-bold transition-transform duration-700 group-hover:-translate-x-3 sm:text-lg">
                      {label}
                    </span>
                    <ArrowLeft
                      size={17}
                      className="translate-x-8 text-[#1A8EF9] opacity-0 group-hover:animate-dropdownArrow"
                    />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      )}

      {open && (
        <div
          className="fixed inset-0 z-[80] bg-black/55 lg:hidden"
          onClick={() => setOpen(false)}
        >
          <aside
            className="mr-auto flex h-full w-[min(88vw,20rem)] max-w-sm flex-col overflow-y-auto bg-spring-ink p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] text-white shadow-spring sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                BIOSHAPE3D
              </span>
              <button
                className="grid h-11 w-11 place-items-center rounded-md"
                onClick={() => setOpen(false)}
                aria-label="بستن منو"
              >
                <X />
              </button>
            </div>
            <div className="mt-8 flex-1 space-y-5 overflow-y-auto sm:mt-10 sm:space-y-6">
              {[
                ...navGroups,
                { label: "مواد", path: "/materials", items: [] },
              ].map((group) => (
                <details
                  key={group.label}
                  className="border-b border-white/10 pb-4"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold sm:text-xl">
                    <Link to={group.path} onClick={() => setOpen(false)}>
                      {group.label}
                    </Link>
                    {group.items.length > 0 && (
                      <Plus size={18} className="text-spring-blue" />
                    )}
                  </summary>
                  <div className="mt-4 grid gap-3 text-white/70">
                    {group.items.map(([label, path]) => (
                      <Link
                        key={label}
                        to={path}
                        onClick={() => setOpen(false)}
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </details>
              ))}
              {topLinks.map(([label, path]) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setOpen(false)}
                  className="block text-lg font-semibold sm:text-xl"
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block w-full rounded-md border border-white/25 py-3 text-center text-sm font-semibold"
              >
                تماس با ما
              </Link>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
