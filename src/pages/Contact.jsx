import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20">
      <div className="grid gap-8 px-10 sm:gap-12 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-spring-muted">
            تماس
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight sm:mt-5 sm:text-4xl md:text-6xl">
            تیم BIOSHAPE3D در کنار پروژه شماست
          </h1>
          <div className="mt-8 space-y-4 text-sm text-spring-charcoal/75 sm:mt-10 sm:space-y-5 sm:text-base">
            {/* <p className="flex items-start gap-3 sm:items-center"><Phone size={20} className="shrink-0" /> +۳۹ ۰۴۴۴ ۵۵۷۵۷۰</p> */}
            <p className="flex items-start gap-3 break-all sm:items-center">
              <Mail size={20} className="shrink-0" /> info@BIOSHAPE3D.com
            </p>
            <p className="flex items-start gap-3 sm:items-center">
              <MapPin size={20} className="shrink-0" /> Via del Carpino Nero, ۱۴ - Monteviale,
              Vicenza
            </p>
          </div>
        </div>
        <form className="grid gap-4 rounded-lg bg-spring-paper p-5 sm:gap-5 sm:p-6 md:p-10">
          {["نام و نام خانوادگی", "تلفن", "ایمیل", "شرکت"].map((label) => (
            <input
              key={label}
              aria-label={label}
              placeholder={label}
              className="border border-spring-line bg-white px-5 py-4 outline-none focus:border-spring-blue"
            />
          ))}
          <select
            aria-label="نوع درخواست"
            className="border border-spring-line bg-white px-5 py-4 outline-none focus:border-spring-blue"
          >
            <option>نوع درخواست</option>
            <option>مشاوره فنی</option>
            <option>درخواست قیمت</option>
            <option>همکاری</option>
          </select>
          <textarea
            rows="6"
            placeholder="درخواست خود را توضیح دهید"
            className="border border-spring-line bg-white px-5 py-4 outline-none focus:border-spring-blue"
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
    </section>
  );
}
