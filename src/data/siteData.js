const origin = 'https://www.spring-italia.com';

export const assets = {
  logo: `${origin}/images/spring_logo.svg`,
  logoWhite: `${origin}/images/spring_logo_w.svg`,
  heroVideo: `${origin}/images/video_home.mp4`,
  services: {
    additive: `${origin}/templates/yootheme/cache/5f/manifattura-additiva-5f3f760d.jpeg`,
    carbon: `${origin}/templates/yootheme/cache/ad/rinforzi-strutturali-ade31629.jpeg`,
    cnc: `${origin}/templates/yootheme/cache/37/lavorazione-cnc-37faddb2.jpeg`,
    preseries: `${origin}/templates/yootheme/cache/04/preserie-042280c3.jpeg`,
    silicone: `${origin}/templates/yootheme/cache/82/stampi-silicone-820f2b17.jpeg`,
    carbonTools: `${origin}/templates/yootheme/cache/aa/attrezzature-aa87fe9a.jpeg`,
    design: `${origin}/templates/yootheme/cache/1c/progettazione-1ce387fc.jpeg`,
    reverse: `${origin}/templates/yootheme/cache/50/reverse-engineering-5054d63d.jpeg`,
    finishing: `${origin}/templates/yootheme/cache/ab/finiture-ab79da83.jpeg`,
  },
  sectors: {
    aerospace: `${origin}/templates/yootheme/cache/eb/aerospace-technology-innovation-eb8bef84.jpeg`,
    racing: `${origin}/templates/yootheme/cache/8f/racing-new-3-8ff2384d.jpeg`,
    automotive: `${origin}/templates/yootheme/cache/0e/Settore-Automotive-e-Motocicli-0ea7511e.jpeg`,
    automation: `${origin}/templates/yootheme/cache/07/Automazione-07dbd701.png`,
    medical: `${origin}/templates/yootheme/cache/07/Settore-Medicale-0718b9d7.jpeg`,
    consumer: `${origin}/templates/yootheme/cache/f3/Settore-Beni-di-consumo-f38558cc.jpeg`,
    electronics: `${origin}/templates/yootheme/cache/09/Elettronica-0978e8d1.jpeg`,
    design: `${origin}/templates/yootheme/cache/2a/design-2ac4c966.png`,
    rail: `${origin}/templates/yootheme/cache/8a/Rail-8ad0a61e.jpeg`,
  },
  components: `${origin}/templates/yootheme/cache/46/components-homepage-46806741.png`,
  company: `${origin}/images/company-homepage.jpg`,
  newsSpace: `${origin}/templates/yootheme/cache/bf/GRANDI-PROGETTI-Spring-srl-porta-all%E2%80%99industria-spaziale-20-anni-di-competenze-nella-manifattura-additiva-1-bf8656bd.jpeg`,
  newsTpu: `${origin}/templates/yootheme/cache/8e/BASF-Ultrasint-%C2%AE-TPU01-Disponibile-in-Spring-srl-8e732320.png`,
  newsCarbon: `${origin}/images/news/Mandrini-solubili-e-rimovibili-per-la-lavorazione-della-fibra-di-carbonio-Spring-srl-1.png`,
  footerBadge: `${origin}/templates/yootheme/cache/da/banner-por-da465497.jpeg`,
  footerLogos: `${origin}/templates/yootheme/cache/7b/loghi_footer-7b4182a9.jpeg`,
};

export const navGroups = [
  {
    label: 'خدمات',
    path: '/services',
    items: [
      ['همه خدمات', '/services'],
      ['ساخت افزایشی', '/services/additive-manufacturing'],
      ['ماشین کاری CNC', '/services/cnc-machining'],
      ['پیش تولید', '/services/pre-series'],
      ['قالب سیلیکونی', '/services/silicone-molds'],
      ['ابزار کامپوزیت کربن', '/services/carbon-tools'],
      ['طراحی مهندسی', '/services/design-engineering'],
      ['مهندسی معکوس', '/services/reverse-engineering'],
      ['پرداخت و فینیشینگ', '/services/finishing'],
      ['تقویت سازه ای کربن', '/services/carbon-reinforcement'],
    ],
  },
  {
    label: 'فناوری ها',
    path: '/technologies',
    items: [['FDM', '/technologies'], ['MJF', '/technologies'], ['SLS', '/technologies'], ['SLA', '/technologies'], ['PolyJet', '/technologies'], ['DMLS', '/technologies'], ['CFIP', '/technologies']],
  },
  {
    label: 'صنایع',
    path: '/sectors',
    items: [['هوافضا', '/sectors'], ['مسابقات و موتوراسپرت', '/sectors'], ['خودرو و موتورسیکلت', '/sectors'], ['اتوماسیون صنعتی', '/sectors'], ['پزشکی', '/sectors'], ['کالاهای مصرفی', '/sectors'], ['الکترونیک', '/sectors'], ['طراحی', '/sectors'], ['ریل', '/sectors']],
  },
  {
    label: 'شرکت',
    path: '/about',
    items: [['درباره ما', '/about#who'], ['تاریخچه', '/about#history'], ['ماموریت', '/about#mission'], ['محرمانگی', '/about#confidentiality'], ['سیستم کیفیت', '/about#quality'], ['محیط زیست', '/about#environment'], ['گواهی ها', '/about#certificates']],
  },
];

export const topLinks = [
  ['اخبار', '/news'],
  ['فرصت های شغلی', '/careers'],
  ['درخواست قیمت', '/quote'],
  ['تماس', '/contact'],
];

export const services = [
  {
    slug: 'additive-manufacturing',
    title: 'ساخت افزایشی',
    image: assets.services.additive,
    intro: 'تبدیل مدل سه بعدی دیجیتال به قطعات واقعی، لایه به لایه، با سرعت بالا و آزادی کامل در هندسه.',
    body: 'ساخت افزایشی امکان تولید قطعات پیچیده، نمونه های عملکردی، ابزارهای کمکی، مدل های ارائه و حتی محصولات نهایی را فراهم می کند. رویکرد ما میان طراحی و تولید قرار می گیرد و با مواد صنعتی، دقت فرایندی و کنترل کیفیت، مسیر توسعه محصول را کوتاه تر می کند.',
    benefits: ['نمونه سازی سریع', 'مواد صنعتی متنوع', 'تولید هندسه های پیچیده', 'کاهش زمان توسعه محصول'],
  },
  {
    slug: 'carbon-reinforcement',
    title: 'تقویت سازه ای کربن',
    image: assets.services.carbon,
    intro: 'تقویت قطعات چاپ سه بعدی با فیبر بلند کربن برای مقاومت مکانیکی بسیار بالاتر.',
    body: 'با فناوری CFIP قطعات تولید افزایشی پس از ساخت با مسیرهای فیبر کربن تقویت می شوند. نتیجه، قطعه ای سبک، دقیق و مقاوم است که برای کاربردهای صنعتی و مسابقه ای آماده می شود.',
    benefits: ['افزایش مقاومت', 'وزن کمتر', 'امکان بهینه سازی موضعی', 'مناسب قطعات عملکردی'],
  },
  {
    slug: 'cnc-machining',
    title: 'ماشین کاری CNC',
    image: assets.services.cnc,
    intro: 'ساخت نمونه و قطعات فنی از پلاستیک، رزین، آلومینیوم و فلزات با دقت کلاسیک CNC.',
    body: 'مرکزهای ماشین کاری CNC برای ساخت سریع نمونه، قطعه تک، جیگ، ابزار و سری محدود استفاده می شوند. فینیش های استاندارد و تکمیلی مانند پرداخت، پولیش و مونتاژ بر اساس نیاز پروژه ارائه می شود.',
    benefits: ['دقت ابعادی بالا', 'سازگاری با فلز و پلیمر', 'کیفیت سطح قابل کنترل', 'مناسب نمونه و تولید محدود'],
  },
  {
    slug: 'pre-series',
    title: 'پیش تولید',
    image: assets.services.preseries,
    intro: 'طراحی و ساخت سری اولیه قطعات برای آزمون بازار، اعتبارسنجی فنی و آماده سازی تولید.',
    body: 'از طراحی محصول تا نمونه سازی، قالب، ابزار و تولید محدود همراه پروژه می مانیم. هدف، ساخت سری اولیه ای است که مشخصات فنی، هزینه، زمان و کیفیت را به شکل هم زمان کنترل کند.',
    benefits: ['اعتبارسنجی قبل از تولید انبوه', 'کنترل هزینه', 'انعطاف در مواد', 'تحویل سریع تر'],
  },
  {
    slug: 'silicone-molds',
    title: 'قالب سیلیکونی',
    image: assets.services.silicone,
    intro: 'تولید قطعات پیش سری با مواد انعطاف پذیر، شفاف یا سخت، نزدیک به محصول نهایی.',
    body: 'ابتدا قطعه مرجع با چاپ سه بعدی ساخته می شود، سپس قالب سیلیکونی از آن تهیه می گردد و در پایان قطعات نهایی یا آزمایشی در تعداد محدود تولید می شوند.',
    benefits: ['کیفیت نمایشی عالی', 'مناسب تست عملکرد', 'گزینه های متنوع مواد', 'هزینه پایین تر برای سری کم'],
  },
  {
    slug: 'carbon-tools',
    title: 'ابزار کامپوزیت کربن',
    image: assets.services.carbonTools,
    intro: 'ابزارها، قالب ها و مندرل های حل شونده برای ساخت قطعات فیبر کربن با هندسه پیچیده.',
    body: 'ترکیب سرعت نمونه سازی و تجربه کامپوزیت، امکان ساخت ابزارهای تولید، قالب های لمینیشن، مندرل و تجهیزات کنترلی را برای قطعات کربنی فراهم می کند.',
    benefits: ['هندسه پیچیده', 'کاهش زمان ساخت ابزار', 'مناسب کامپوزیت', 'پشتیبانی از R&D'],
  },
  {
    slug: 'design-engineering',
    title: 'طراحی مهندسی',
    image: assets.services.design,
    intro: 'طراحی محصول، قالب، ابزار تولید و راهکارهای صنعتی برای تیم های توسعه محصول.',
    body: 'تیم مهندسی با ابزارهای CAD/CAM/CAE روی چند خط پروژه کار می کند و از طراحی قطعه تا آماده سازی فایل تولید، تحلیل ساخت پذیری و اصلاح مدل همراه مشتری است.',
    benefits: ['طراحی محصول', 'طراحی قالب', 'بهینه سازی ساخت', 'پشتیبانی فنی سریع'],
  },
  {
    slug: 'reverse-engineering',
    title: 'مهندسی معکوس',
    image: assets.services.reverse,
    intro: 'اسکن سه بعدی و بازسازی مدل CAD برای قطعات موجود، نمونه های تاریخی یا قطعات بدون نقشه.',
    body: 'فرایند شامل برداشت هندسه با اسکنر، پاکسازی داده، مدل سازی و خروجی در قالب های STL، IGES یا STEP است. این خدمت برای خودرو، هوافضا، نگهداری و مرمت کاربرد گسترده دارد.',
    benefits: ['اسکن دقیق', 'خروجی CAD', 'بازسازی قطعات فرسوده', 'کاهش زمان اندازه برداری'],
  },
  {
    slug: 'finishing',
    title: 'پرداخت و فینیشینگ',
    image: assets.services.finishing,
    intro: 'فینیش سطحی، سنباده کاری، رنگ، چسب کاری، پولیش، شفاف سازی و نصب اینسرت فلزی.',
    body: 'برای نزدیک کردن نمونه به محصول نهایی، طیفی از عملیات پس از تولید ارائه می شود؛ از آماده سازی سطح و رنگ تا vapor smoothing و مونتاژ جزئیات فلزی.',
    benefits: ['ظاهر نزدیک به محصول', 'بهبود سطح', 'رنگ و پوشش', 'مونتاژ تکمیلی'],
  },
  {
    slug: 'security-services',
    title: 'خدمات امنیتی صنعتی',
    image: assets.sectors.automation,
    intro: 'صفحه تکمیلی مطابق درخواست شما برای خدمات امنیت دیجیتال، با همان زبان بصری سایت اصلی.',
    body: 'در این نسخه فارسی، این مسیر به عنوان یک خدمت مشاوره ای برای امن سازی زیرساخت تولید، مدیریت دسترسی، پشتیبان گیری و پایش سیستم های صنعتی طراحی شده است.',
    benefits: ['ممیزی امنیتی', 'مدیریت دسترسی', 'پایش رخداد', 'مستندسازی فارسی'],
  },
  {
    slug: 'web-hosting',
    title: 'میزبانی وب شرکتی',
    image: assets.components,
    intro: 'صفحه تکمیلی مطابق درخواست، برای میزبانی سریع، امن و مناسب کسب و کارهای صنعتی.',
    body: 'ساختار صفحه با خدمات اصلی هماهنگ است و روی پایداری، سرعت، بکاپ، SSL و آماده سازی محیط تولید برای سایت های شرکتی تمرکز دارد.',
    benefits: ['زیرساخت پایدار', 'SSL و بکاپ', 'مانیتورینگ', 'تحویل مستند'],
  },
  {
    slug: 'corporate-networks',
    title: 'شبکه های سازمانی',
    image: assets.sectors.electronics,
    intro: 'طراحی، بازبینی و بهینه سازی شبکه داخلی شرکت ها با تجربه صنعتی و مستندسازی دقیق.',
    body: 'این مسیر تکمیلی برای نیازهای مطرح شده در پرامپت اضافه شده و شامل طراحی توپولوژی، امنیت، VLAN، Wi-Fi سازمانی و پایش عملکرد می شود.',
    benefits: ['طراحی شبکه', 'تفکیک ترافیک', 'پایداری عملیاتی', 'پشتیبانی فنی'],
  },
];

export const technologies = [
  ['FDM', 'مدلسازی رسوب ذوب شده', 'مناسب قطعات بزرگ، عملکردی و مواد مهندسی.'],
  ['MJF', 'Multi Jet Fusion', 'سرعت بالا، کیفیت یکنواخت و انتخابی عالی برای تولید کوتاه مدت.'],
  ['SLS', 'زینترینگ لیزری انتخابی', 'قطعات مقاوم بدون نیاز به ساپورت، مناسب هندسه های پیچیده.'],
  ['CFIP', 'تزریق پیوسته فیبر', 'افزایش استحکام موضعی قطعات چاپ سه بعدی با فیبر کربن.'],
  ['SLA', 'استریولیتوگرافی', 'دقت بالا، سطح صاف و مناسب مدل های ظریف و نمایشی.'],
  ['POLYJET', 'چاپ چند ماده ای', 'جزئیات دقیق، رنگ و بافت برای مدل های واقع گرایانه.'],
  ['DMLS', 'زینترینگ لیزری فلزات', 'تولید قطعات فلزی پیچیده با عملکرد صنعتی.'],
];

export const applications = [
  ['نمونه سازی سریع', 'کاهش زمان توسعه با نمونه های عملکردی و دقیق برای تصمیم گیری مهندسی.'],
  ['مدل های کانسپت', 'تبدیل ایده به مدل فیزیکی با کیفیت بالا برای ارائه، بررسی و تست.'],
  ['تولید', 'ساخت قطعات نهایی سفارشی با انعطاف بالا و کنترل کیفیت صنعتی.'],
];

export const sectors = [
  ['هوافضا', 'شریک فنی برای شرکت های پیشرو در صنایع هوافضا و هوانوردی.', assets.sectors.aerospace],
  ['مسابقات و موتوراسپرت', 'سال ها همکاری با تیم های MotoGP، F۱ و فرمول های کوچک تر.', assets.sectors.racing],
  ['خودرو و موتورسیکلت', 'پاسخ سریع به نیازهای قطعات سری، نمونه و ابزارهای توسعه.', assets.sectors.automotive],
  ['اتوماسیون صنعتی', 'کاهش زمان و هزینه ساخت قطعات اتوماسیون بدون افت کیفیت.', assets.sectors.automation],
  ['پزشکی', 'نمونه سازی تجهیزات پزشکی، راهنماهای جراحی و ابزارهای کمک درمان.', assets.sectors.medical],
  ['کالاهای مصرفی', 'تبدیل پروژه های محصول محور به نمونه و تولید کوتاه مدت.', assets.sectors.consumer],
  ['الکترونیک', 'قطعات فنی برای بخش های الکتریکی و الکترونیکی.', assets.sectors.electronics],
  ['طراحی', 'چاپ سه بعدی در خدمت طراحان صنعتی، مد و معماری.', assets.sectors.design],
  ['ریل', 'قطعات سبک و مقاوم برای حمل و نقل ریلی و تولید بر اساس تقاضا.', assets.sectors.rail],
];

export const history = [
  ['۲۰۲۵', 'افزایش ظرفیت MJF', 'افزودن سومین سیستم HP MJF و ارتقای ماشین های موجود.'],
  ['۲۰۲۵', 'ورود فناوری CFIP', 'همکاری با Reinforce۳D و ورود به تقویت پیشرفته قطعات افزایشی.'],
  ['۲۰۲۴', 'کنترل مدیریت', 'پیاده سازی CRM، MES و پلتفرم مدیریت کیفیت.'],
  ['۲۰۲۳', '۲۵ سال نوآوری', 'جشن ۲۵ سالگی و تثبیت جایگاه در ساخت افزایشی صنعتی.'],
  ['۲۰۲۳', 'تقویت بخش کیفیت', 'افزودن اسکنر لیزری و تجهیزات آزمون مواد.'],
  ['۲۰۲۲', 'توجه به فینیشینگ', 'راه اندازی سیستم رنگ داخلی و توسعه عملیات پس از تولید.'],
  ['۲۰۲۱', 'سایت تولید جدید', 'افزایش فضای تولید و توسعه دفتر کیفیت و مترولوژی.'],
  ['۱۹۹۸', 'شروع BioShape۳D', 'تولد شرکت بر پایه تجربه طراحی محصول، قالب و نمونه سازی.'],
];

export const news = [
  ['پروژه های بزرگ در صنعت فضا', 'BioShape۳D دانش بیست ساله ساخت افزایشی را وارد پروژه های فضایی می کند.', assets.newsSpace],
  ['BASF Ultrasint TPU۰۱', 'متریال TPU صنعتی اکنون در سبد تولید BioShape۳D در دسترس است.', assets.newsTpu],
  ['مندرل های فیبر کربن', 'راهکارهای حل شونده برای ساخت قطعات کامپوزیتی پیچیده.', assets.newsCarbon],
];

export const jobs = [
  ['فروش فنی داخلی جونیور', 'Monteviale, Veneto, Italia'],
  ['اپراتور تایید شده چاپ سه بعدی', 'Monteviale, Veneto, Italia'],
  ['کارشناس کنترل کیفیت', 'Monteviale, Veneto, Italia'],
  ['کارشناس اداری', 'Monteviale, Veneto, Italia'],
];
