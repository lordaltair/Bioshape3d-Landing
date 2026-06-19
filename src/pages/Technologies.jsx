import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { ArrowDownRight, ArrowUpLeft, X } from "lucide-react";
import { assets, technologies } from "../data/siteData.js";
import SectionTitle from "../components/SectionTitle.jsx";

const technologyImagePaths = {
  DMLS: [assets.services.cnc, assets.sectors.electronics, assets.components],
  FDM: [assets.components, assets.services.additive, assets.sectors.automation],
  MJF: [assets.services.additive, assets.components, assets.sectors.automotive],
  BINDERJET: [
    assets.sectors.consumer,
    assets.services.preseries,
    assets.components,
  ],
  POLYJET: [
    assets.services.preseries,
    assets.sectors.design,
    assets.components,
  ],
  SLA: [
    assets.services.silicone,
    assets.services.preseries,
    assets.sectors.medical,
  ],
  SLS: [
    assets.services.finishing,
    assets.services.additive,
    assets.sectors.aerospace,
  ],
};

const technologyDetails = {
  FDM: {
    bestFor: [
      "قطعات بزرگ و کاربردی",
      "نمونه های مقاوم",
      "جیگ و فیکسچر",
      "تست فرم و مونتاژ",
    ],
    materials:
      "ترموپلاستیک های مهندسی مانند ABS، PLA، PETG و مواد تقویت شده برای کاربردهای صنعتی.",
    text: "FDM گزینه ای سریع و اقتصادی برای ساخت قطعات کاربردی است. این فرایند برای زمانی مناسب است که دوام، اندازه قطعه و سرعت تحویل مهم تر از جزئیات بسیار ظریف سطح باشد.",
  },
  MJF: {
    bestFor: [
      "تولید کوتاه مدت",
      "قطعات با جزئیات دقیق",
      "مکانیزم های کاربردی",
      "قطعات نایلونی مقاوم",
    ],
    materials: "پودرهای صنعتی مانند PA12 و مواد مشابه با خواص مکانیکی پایدار.",
    text: "MJF برای تولید قطعات دقیق و مقاوم با کیفیت یکنواخت عالی است. این فناوری برای سری های کوچک و متوسط، قطعات کاربردی و هندسه های پیچیده انتخاب بسیار مناسبی محسوب می شود.",
  },
  SLS: {
    bestFor: [
      "هندسه های پیچیده",
      "قطعات بدون ساپورت",
      "نمونه های عملکردی",
      "قطعات سبک و مقاوم",
    ],
    materials: "پودرهای پلیمری مانند نایلون و ترکیبات مقاوم برای تست و تولید.",
    text: "SLS قطعاتی مقاوم و دقیق تولید می کند و به دلیل نیاز نداشتن به ساپورت، آزادی طراحی بالایی می دهد. این روش برای قطعات پیچیده، کانال های داخلی و مجموعه های کاربردی بسیار مفید است.",
  },
  SLA: {
    bestFor: ["مدل های ظریف", "سطح صاف", "قطعات نمایشی", "نمونه های دقیق"],
    materials: "رزین های مهندسی، شفاف، مقاوم یا نمایشی بر اساس نیاز پروژه.",
    text: "SLA برای زمانی مناسب است که کیفیت سطح، جزئیات ظریف و دقت ظاهری اهمیت زیادی دارد. این فناوری در مدل های نمایشی، نمونه های دقیق و قطعات کوچک با جزئیات بالا می درخشد.",
  },
  POLYJET: {
    bestFor: [
      "مدل های واقع گرایانه",
      "نمونه های چند ماده ای",
      "بافت و رنگ",
      "قطعات نمایشی دقیق",
    ],
    materials:
      "رزین های فوتوپلیمری با امکان ترکیب سختی، رنگ و بافت های متفاوت.",
    text: "PolyJet برای ساخت نمونه هایی با ظاهر نزدیک به محصول نهایی مناسب است. امکان ترکیب چند ماده، جزئیات بالا و کیفیت سطح خوب، آن را برای ارائه محصول و اعتبارسنجی طراحی ارزشمند می کند.",
  },
  BINDERJET: {
    bestFor: [
      "مدل های پیچیده",
      "تولید سریع",
      "قطعات با آزادی طراحی بالا",
      "نمونه های حجمی",
    ],
    materials:
      "پودرهای پایه با عامل اتصال، بسته به کاربرد و پرداخت نهایی مورد نیاز.",
    text: "BinderJet با اتصال لایه های پودر، امکان تولید سریع قطعات و مدل های پیچیده را فراهم می کند. این فناوری برای پروژه هایی مناسب است که سرعت، مقیاس پذیری و آزادی فرم اهمیت دارند.",
  },
  DMLS: {
    bestFor: [
      "قطعات فلزی پیچیده",
      "کاربردهای صنعتی",
      "هندسه های سبک سازی شده",
      "قطعات مقاوم حرارتی",
    ],
    materials:
      "فلزات صنعتی مانند آلومینیوم، فولاد، تیتانیوم یا آلیاژهای ویژه بر اساس پروژه.",
    text: "DMLS برای تولید قطعات فلزی با هندسه های پیشرفته استفاده می شود. این فناوری برای کاربردهایی مناسب است که مقاومت مکانیکی، عملکرد صنعتی و آزادی طراحی فلزی مورد نیاز است.",
  },
};

export default function Technologies() {
  const detailRef = useRef(null);
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const initialTechnology = searchParams.get("tech")?.toUpperCase();
  const technologyNames = useMemo(() => technologies.map(([name]) => name), []);
  const [selectedTechnology, setSelectedTechnology] = useState(
    technologyNames.includes(initialTechnology)
      ? initialTechnology
      : technologyNames[0],
  );
  const [activeImage, setActiveImage] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const selected =
    technologies.find(([name]) => name === selectedTechnology) ??
    technologies[0];
  const [name, label, desc] = selected;
  const detail = technologyDetails[name];
  const imagePaths = technologyImagePaths[name.toUpperCase()];
  const maxActiveImage = Math.max(0, imagePaths.length - 2);
  const visibleImages = [activeImage, activeImage + 1].filter(
    (imageIndex) => imageIndex < imagePaths.length,
  );
  const imageProgress = ((activeImage + 1) / (maxActiveImage + 1)) * 100;

  const scrollToDetail = () => {
    detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (technologyNames.includes(initialTechnology)) {
      setSelectedTechnology(initialTechnology);
      setActiveImage(0);
    }
  }, [initialTechnology, technologyNames]);

  useEffect(() => {
    if (location.hash === "#technology-detail" || initialTechnology) {
      requestAnimationFrame(scrollToDetail);
    }
  }, [location.hash, initialTechnology]);

  useEffect(() => {
    if (!selectedImage) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedImage]);

  const selectTechnology = (techName) => {
    setSelectedTechnology(techName);
    setActiveImage(0);
    requestAnimationFrame(scrollToDetail);
  };

  const changeImage = (direction) => {
    setActiveImage(
      (current) => Math.min(Math.max(current + direction, 0), maxActiveImage),
    );
  };

  const openImage = (imageIndex) => {
    setSelectedImage({
      src: imagePaths[imageIndex],
      alt: `${name} نمونه کار ${imageIndex + 1}`,
    });
  };

  return (
    <section
      id="technology-detail"
      ref={detailRef}
      className="bg-white pt-28 pb-12 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24"
    >
      <div className="px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle
            eyebrow="فناوری"
            title="اطلاعات بیشتر درباره فناوری ها"
          />
          <div className="flex flex-wrap gap-2">
            {technologies.map(([techName]) => (
              <button
                key={techName}
                type="button"
                onClick={() => selectTechnology(techName)}
                className={`rounded-md border px-4 py-3 text-sm font-semibold transition ${
                  selectedTechnology === techName
                    ? "border-spring-ink bg-spring-ink text-white"
                    : "border-spring-line bg-white text-spring-ink hover:border-[#1f6170] hover:text-[#1f6170]"
                }`}
              >
                {techName}
              </button>
            ))}
          </div>
        </div>

        <article className="mt-8 grid gap-8 rounded-lg bg-spring-paper p-5 sm:mt-12 sm:p-8 lg:grid-cols-[minmax(0,420px)_1fr] lg:p-10">
          <div className="h-fit rounded-lg bg-spring-ink p-8 text-white">
            <h2 className="text-3xl font-semibold md:text-4xl">{name}</h2>
            <p className="mt-3 text-base text-white/80 sm:text-lg">{label}</p>
            <p className="mt-4 leading-7 text-white/70">{desc}</p>
          </div>

          <div className="flex flex-col">
            <div>
              <h3 className="text-2xl font-semibold text-spring-ink sm:text-3xl">
                کاربرد و مزیت ها
              </h3>
              <p className="mt-5 leading-9 text-spring-charcoal/75">
                {detail.text}
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {detail.bestFor.map((item) => (
                  <div
                    key={item}
                    className="rounded-md border border-spring-line bg-white p-4 font-medium text-spring-ink"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-md border border-spring-line bg-white p-5">
              <h4 className="text-lg font-semibold text-spring-ink">
                مواد و خروجی مناسب
              </h4>
              <p className="mt-3 leading-8 text-spring-charcoal/70">
                {detail.materials}
              </p>
            </div>

            <div className="mt-8 rounded-md bg-[#303033] p-2">
              <div className="grid grid-cols-2 gap-2">
                {visibleImages.map((imageIndex) => (
                  <button
                    key={`${name}-${imageIndex}`}
                    type="button"
                    onClick={() => openImage(imageIndex)}
                    className="relative min-h-[220px] overflow-hidden rounded-md sm:min-h-[300px]"
                    aria-label={`${name} نمونه کار ${imageIndex + 1}`}
                  >
                    <img
                      src={imagePaths[imageIndex]}
                      alt={`${name} نمونه کار ${imageIndex + 1}`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
                  </button>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-8">
                <div className="flex shrink-0 items-center gap-2">
                  <button
                    type="button"
                    onClick={() => changeImage(-1)}
                    disabled={activeImage === 0}
                    className="group grid h-11 w-11 place-items-center rounded-md border border-white/15 bg-black text-white transition hover:bg-spring-charcoal disabled:pointer-events-none disabled:opacity-45"
                    aria-label="تصویر قبلی"
                  >
                    <ArrowDownRight className="transition-transform duration-300 group-hover:-rotate-45 group-hover:scale-125" size={18} strokeWidth={1.8} />
                  </button>
                  <button
                    type="button"
                    onClick={() => changeImage(1)}
                    disabled={activeImage === maxActiveImage}
                    className="group grid h-11 w-11 place-items-center rounded-md border border-white/15 bg-black text-white transition hover:bg-spring-charcoal disabled:pointer-events-none disabled:opacity-45"
                    aria-label="تصویر بعدی"
                  >
                    <ArrowUpLeft className="transition-transform duration-300 group-hover:-rotate-45 group-hover:scale-125" size={18} strokeWidth={1.8} />
                  </button>
                </div>

                <div
                  className="relative h-[2px] flex-1 overflow-hidden bg-white/20"
                  aria-hidden="true"
                >
                  <div
                    className="absolute inset-y-0 right-0 bg-white transition-[width] duration-[700ms] ease-[cubic-bezier(.22,1,.36,1)]"
                    style={{ width: `${imageProgress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </article>

        {selectedImage && (
          <div
            className="fixed inset-0 z-[100] grid place-items-center bg-black/85 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-md bg-white text-spring-ink transition hover:bg-spring-line"
              aria-label="بستن تصویر"
            >
              <X size={22} />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[86vh] max-w-[92vw] rounded-lg object-contain shadow-spring"
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
}
