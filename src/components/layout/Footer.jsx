import { Link } from "react-router-dom";
import { Facebook, Linkedin, Youtube, ArrowUp } from "lucide-react";
import { assets, navGroups } from "../../data/siteData.js";
import ArrowButton from "../ArrowButton.jsx";

export default function Footer() {
  return (
    <footer className="bg-spring-ink text-white">
      <div className="px-10 py-12 sm:py-16">
        <div className="flex flex-col items-center gap-8 border-b border-white/10 pb-12 text-center md:flex-row md:justify-between md:text-right">
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
          >
            BIOSHAPE3D
          </Link>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex w-fit items-center gap-3 text-sm text-white/75 transition hover:text-white"
          >
            <span className="grid h-12 w-12 place-items-center rounded-full border border-white/20">
              <ArrowUp size={18} />
            </span>
            بازگشت به بالا
          </button>
        </div>

        <div className="grid gap-10 py-10 text-center sm:gap-12 sm:py-14 lg:grid-cols-[minmax(0,360px)_1fr] lg:text-right">
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-2xl font-semibold leading-snug sm:text-3xl">
              تیم BIOSHAPE3D آماده است تا تمام اطلاعات مورد نیاز پروژه شما را
              ارائه کند
            </h3>
            <ArrowButton to="/contact" variant="light" className="mt-8">
              تماس با ما
            </ArrowButton>
            <div className="mt-8 flex justify-center gap-3 lg:justify-start">
              {[Facebook, Youtube, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white/80 transition hover:bg-white hover:text-spring-ink"
                  aria-label="social"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            {/* <div className="mt-16 flex items-end justify-center gap-4 opacity-80 sm:mt-20 lg:mt-28 lg:justify-start"> */}
            {/* <img
                src={assets.footerBadge}
                alt="POR"
                className="h-20 w-20 rounded object-cover"
              /> */}
            {/* <img
                src={assets.footerLogos}
                alt="گواهی ها"
                className="max-h-16 object-contain"
              /> */}
            {/* </div> */}
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {navGroups.slice(0, 3).map((group) => (
              <div key={group.label}>
                <h5 className="mb-5 text-lg font-semibold">{group.label}</h5>
                <ul className="space-y-3 text-sm text-white/65">
                  {group.items.map(([label, path]) => (
                    <li key={label}>
                      <Link to={path} className="transition hover:text-white">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-center text-sm text-white/50 sm:gap-4 sm:pt-8 md:flex-row md:justify-between md:text-right">
          <p className="break-all">
            {/* <a href="tel:+390444557570" className="underline">+۳۹ ۰۴۴۴ ۵۵۷۵۷۰</a> */}
            <span>info@BIOSHAPE3D.com</span>
          </p>
          <p>Copyright ۲۰۲۶ BIOSHAPE3D</p>
        </div>
      </div>
    </footer>
  );
}
