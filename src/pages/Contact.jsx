import { Mail, MapPin, Phone } from "lucide-react";

const mapQuery =
  "تهران شهرک اکباتان خیابان نفیسی پلاک 15 مجتمع آرین طبقه 3 واحد 11";
const mapCenter = "35.70206380632644,51.31608686109227";
const mapUrl = `https://www.google.com/maps?q=loc:${mapCenter}&hl=fa&z=18&output=embed`;
const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

export default function Contact() {
  return (
    <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20">
      <div className="px-10">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="text-base font-semibold uppercase tracking-[.22em] text-spring-muted">
              تماس
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-tight sm:mt-5 sm:text-4xl md:text-6xl">
              تیم BIOSHAPE3D در کنار پروژه شماست
            </h1>
            <div className="mt-8 space-y-4 text-sm text-spring-charcoal/75 sm:mt-10 sm:space-y-5 sm:text-base">
              <p className="flex items-start gap-3 sm:items-center">
                <Phone size={20} className="shrink-0" /> ۰۲۱-۴۴۶۳۳۲۳۵
              </p>
              <p className="flex items-start gap-3 break-all sm:items-center">
                <Mail size={20} className="shrink-0" /> info@BIOSHAPE3D.com
              </p>
              <p className="flex items-start gap-3 sm:items-center">
                <MapPin size={20} className="shrink-0" /> تهران- شهرک اکباتان -
                خیابان نفیسی - پلاک ۱۵ (مجتمع آرین) - طبقه ۳ - واحد ۱۱
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-lg border border-spring-line bg-spring-paper sm:mt-10">
              <iframe
                title="BIOSHAPE3D Google Maps location"
                src={mapUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[300px] w-full border-0 sm:h-[370px]"
                allowFullScreen
              />
              <div className="p-4 sm:p-5">
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-[#1f6170] px-5 text-sm font-semibold text-white transition hover:bg-[#174b57] sm:w-auto"
                >
                  مشاهده در Google Maps
                </a>
              </div>
            </div>
          </div>

          <form className="grid gap-4 rounded-lg bg-spring-paper p-5 sm:gap-5 sm:p-6 md:p-10">
            {["نام و نام خانوادگی", "تلفن", "ایمیل", "شرکت"].map((label) => (
              <input
                key={label}
                aria-label={label}
                placeholder={label}
                className="border border-spring-line bg-white px-5 py-4 outline-none transition focus:border-spring-blue"
              />
            ))}
            <select
              aria-label="نوع درخواست"
              className="border border-spring-line bg-white px-5 py-4 outline-none transition focus:border-spring-blue"
            >
              <option>نوع درخواست</option>
              <option>مشاوره فنی</option>
              <option>همکاری</option>
            </select>
            <textarea
              rows="6"
              placeholder="درخواست خود را توضیح دهید"
              className="border border-spring-line bg-white px-5 py-4 outline-none transition focus:border-spring-blue"
            />
            <label className="flex items-center gap-3 text-sm">
              <input type="checkbox" /> شرایط و حریم خصوصی را می پذیرم
            </label>
            <button
              type="button"
              className="rounded-md bg-spring-ink px-8 py-4 font-semibold text-white transition hover:bg-spring-blue"
            >
              ارسال
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
