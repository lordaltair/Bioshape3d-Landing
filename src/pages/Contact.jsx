import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="pt-36 pb-20">
      <div className="mx-auto grid max-w-[1320px] gap-12 px-5 md:px-8 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-spring-muted">
            تماس
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
            تیم BioShape۳D در کنار پروژه شماست
          </h1>
          <div className="mt-10 space-y-5 text-spring-charcoal/75">
            {/* <p className="flex items-center gap-3"><Phone size={20} /> +۳۹ ۰۴۴۴ ۵۵۷۵۷۰</p> */}
            <p className="flex items-center gap-3">
              <Mail size={20} /> info@bioshape۳d.com
            </p>
            <p className="flex items-center gap-3">
              <MapPin size={20} /> Via del Carpino Nero, ۱۴ - Monteviale,
              Vicenza
            </p>
          </div>
        </div>
        <form className="grid gap-5 rounded-lg bg-spring-paper p-6 md:p-10">
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
            className="bg-spring-ink px-8 py-4 font-semibold text-white transition hover:bg-spring-blue"
          >
            ارسال
          </button>
        </form>
      </div>
    </section>
  );
}
