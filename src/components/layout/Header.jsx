import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowLeft, Menu, X, Plus } from "lucide-react";
import { navGroups, topLinks } from "../../data/siteData.js";
import OrderButton from "../OrderButton.jsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [panelVisible, setPanelVisible] = useState(false);
  const [mega, setMega] = useState(null);
  const headerRef = useRef(null);
  const closeTimerRef = useRef(null);
  const openFrameRef = useRef(null);

  const toggleMega = (label) => {
    setMega((current) => (current === label ? null : label));
  };

  const openMobileMenu = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    if (openFrameRef.current) {
      cancelAnimationFrame(openFrameRef.current);
      openFrameRef.current = null;
    }

    setOpen(true);
    setPanelVisible(false);
    openFrameRef.current = requestAnimationFrame(() => {
      openFrameRef.current = requestAnimationFrame(() => {
        setPanelVisible(true);
        openFrameRef.current = null;
      });
    });
  };

  const closeMobileMenu = () => {
    if (!open || !panelVisible) return;

    setPanelVisible(false);
    closeTimerRef.current = setTimeout(() => {
      setOpen(false);
      closeTimerRef.current = null;
    }, 720);
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

  useEffect(
    () => () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
      if (openFrameRef.current) cancelAnimationFrame(openFrameRef.current);
    },
    [],
  );

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50">
      <div className="w-full px-0 sm:px-5 xl:px-10">
        <nav className="relative mt-0 grid h-14 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 rounded-none border border-spring-line bg-white px-2 text-spring-ink shadow-spring backdrop-blur-xl sm:mt-4 sm:h-16 sm:rounded-md sm:px-3 xl:flex xl:h-20 xl:justify-between xl:px-4">
          <div className="contents xl:flex xl:min-w-0 xl:items-center xl:gap-5">
            <button
              className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-md xl:hidden"
              onClick={openMobileMenu}
              aria-label="باز کردن منو"
            >
              <Menu size={21} />
            </button>
            <Link
              to="/"
              className="absolute left-1/2 top-1/2 flex min-w-0 -translate-x-1/2 -translate-y-1/2 items-center gap-2 xl:static xl:translate-x-0 xl:translate-y-0"
            >
              <img
                src="/bioshape3d-logo.png"
                alt=""
                className="h-8 w-8 shrink-0 object-contain sm:h-10 sm:w-10 xl:h-12 xl:w-12"
                aria-hidden="true"
              />
              <span className="block max-w-[52vw] truncate text-sm font-extrabold tracking-tight text-[#1f6170] min-[360px]:text-base min-[430px]:text-lg sm:max-w-none sm:text-2xl">
                BIOSHAPE3D
              </span>
            </Link>
          </div>

          <div className="hidden flex-1 items-center justify-center gap-6 xl:flex 2xl:gap-8">
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
                    className="relative grid h-6 w-6 place-items-center rounded-md text-[#1f6170] transition hover:text-[#174b57]"
                    aria-hidden="true"
                  >
                    <Plus
                      size={15}
                      strokeWidth={2.3}
                      className={`absolute transition-all duration-300 ${isOpen ? "rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
                    />
                    <X
                      size={15}
                      strokeWidth={2.3}
                      className={`absolute transition-all duration-300 ${isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-75 opacity-0"}`}
                    />
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

          <div className="hidden min-w-0 shrink-0 items-center justify-end gap-2 xl:hidden">
            <OrderButton className="hidden h-10 !min-h-10 !px-3 !text-xs min-[390px]:inline-grid sm:h-11 sm:!min-h-11 sm:!px-4 sm:!text-sm" />
          </div>

          <div className="hidden items-center gap-3 xl:flex">
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
        <div className="hidden xl:block">
          <div className="mx-10 mt-2 rounded-md bg-white p-8 text-spring-ink shadow-spring animate-reveal">
            <div className="grid grid-cols-3 gap-x-10 gap-y-5">
              {navGroups
                .find((group) => group.label === mega)
                ?.items.map(([label, path]) => (
                  <Link
                    key={label}
                    to={path}
                    onClick={() => setMega(null)}
                    className="group inline-flex w-fit flex-row-reverse items-center px-10 py-1 text-spring-ink transition duration-300 hover:text-[#1f6170]"
                  >
                    <span className="text-base font-bold transition-transform duration-700 group-hover:-translate-x-3 sm:text-lg">
                      {label}
                    </span>
                    <ArrowLeft
                      size={17}
                      className="translate-x-8 text-[#1f6170] opacity-0 group-hover:animate-dropdownArrow"
                    />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      )}

      {open && (
        <div
          className={`fixed inset-0 z-[80] bg-black/55 transition-opacity duration-700 ease-out xl:hidden ${panelVisible ? "opacity-100" : "opacity-0"}`}
          onClick={closeMobileMenu}
        >
          <aside
            className={`fixed inset-y-0 right-0 flex h-full w-[min(92vw,22rem)] max-w-sm flex-col overflow-y-auto bg-spring-ink p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] text-white shadow-spring transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] [direction:ltr] sm:p-6 ${panelVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between [direction:rtl]">
              <div className="flex items-center gap-2">
                <img
                  src="/bioshape3d-logo.png"
                  alt=""
                  className="h-10 w-10 shrink-0 object-contain"
                  aria-hidden="true"
                />
                <span className="text-xl font-extrabold tracking-tight text-[#6ca7b6] sm:text-2xl">
                  BIOSHAPE3D
                </span>
              </div>
              <button
                className="grid h-11 w-11 place-items-center rounded-md"
                onClick={closeMobileMenu}
                aria-label="بستن منو"
              >
                <X />
              </button>
            </div>
            <div className="mt-8 flex-1 space-y-5 sm:mt-10 sm:space-y-6 [direction:rtl]">
              {navGroups.map((group) => (
                <details
                  key={group.label}
                  className="border-b border-white/10 pb-4"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold sm:text-xl">
                    <Link to={group.path} onClick={closeMobileMenu}>
                      {group.label}
                    </Link>
                    {group.items.length > 0 && (
                      <Plus size={18} className="text-spring-blue" />
                    )}
                  </summary>
                  <div className="mt-4 grid gap-3 text-white/70">
                    {group.items.map(([label, path]) => (
                      <Link key={label} to={path} onClick={closeMobileMenu}>
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
                  onClick={closeMobileMenu}
                  className="block text-lg font-semibold sm:text-xl"
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={closeMobileMenu}
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
