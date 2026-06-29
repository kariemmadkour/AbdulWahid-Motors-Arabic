/* ═══════════════════════════════════════════
   ABDULWAHID MOTORS — BILINGUAL MAIN SCRIPT
   ═══════════════════════════════════════════ */

// ── TRANSLATIONS ──
const T = {
  en: {
    'meta.title':        'AbdulWahid Motors — New & Luxury Automobiles',
    'brand.name':        'AbdulWahid',
    'brand.suffix':      'Motors',
    'brand.full':        'ABDULWAHID MOTORS',
    'brand.slogan':      'New & Luxury Automobiles',
    'loader.tagline':    'Preparing your experience',
    'nav.vehicles':      'Vehicles',
    'nav.arrivals':      'New Arrivals',
    'nav.compare':       'Compare',
    'nav.financing':     'Financing',
    'nav.service':       'Service',
    'nav.contact':       'Contact',
    'nav.cta':           'Book a Test Drive',
    'hero.eyebrow':      'Premium Automotive Experience',
    'hero.title1':       'Drive the',
    'hero.title2':       'Extraordinary',
    'hero.sub':          'Curated luxury vehicles. Unmatched performance. The AbdulWahid Motors difference.',
    'hero.cta1':         'Explore Lineup',
    'hero.cta2':         'Book a Test Drive',
    'hero.stat1':        'Premium Vehicles',
    'hero.stat2':        'Years of Trust',
    'hero.stat3':        'Customer Satisfaction',
    'hero.scroll':       'Scroll',
    'vehicles.eyebrow':  'Our Collection',
    'vehicles.title':    'Featured <em>Vehicles</em>',
    'vehicles.sub':      'Each vehicle hand-selected for performance, elegance, and prestige.',
    'filter.all':        'All',
    'filter.sedan':      'Sedans',
    'filter.suv':        'SUVs',
    'filter.sport':      'Sports',
    'badge.featured':    'Featured',
    'badge.new':         'New',
    'badge.deal':        'Hot Deal',
    'badge.exclusive':   'Exclusive',
    'card.enquire':      'Enquire Now',
    'card.details':      'Details',
    'car1.name':         'S-Class Sedan',
    'car2.name':         '7 Series xDrive',
    'car3.name':         'Panamera Turbo S',
    'car4.name':         'LX 600 Ultra Luxury',
    'car5.name':         'Q8 e-tron Sportback',
    'car6.name':         'SV Autobiography',
    'fuel.hybrid':       'Hybrid',
    'fuel.petrol':       'Petrol',
    'fuel.electric':     'Electric',
    'arrivals.eyebrow':  'Fresh from the Factory',
    'arrivals.title':    'New <em>Arrivals</em>',
    'arrivals.sub':      'The latest models — straight to our showroom floor. Be the first to experience them.',
    'arrivals.cta':      'Reserve Yours',
    'arrivals.badge':    'New Models<br/>in Stock',
    'arrival1':          '2025 Ferrari Roma Spider',
    'arrival2':          '2025 Lamborghini Urus SE',
    'arrival3':          '2025 Bentley Bentayga EWB',
    'arrival4':          '2025 Rolls-Royce Ghost Black Badge',
    'arrival5':          '2025 Porsche Cayenne Turbo GT',
    'compare.eyebrow':   'Side by Side',
    'compare.title':     'Vehicle <em>Comparison</em>',
    'compare.feature':   'Feature',
    'spec.engine':       'Engine',
    'spec.hp':           'Horsepower',
    'spec.sprint':       '0–100 km/h',
    'spec.topspeed':     'Top Speed',
    'spec.trans':        'Transmission',
    'spec.drive':        'Drive',
    'spec.price':        'Starting Price',
    'cinema.quote':      '"The road is yours.<br/><em>Choose it wisely.</em>"',
    'cinema.cta':        'Schedule a Test Drive',
    'financing.eyebrow': 'Flexible Plans',
    'financing.title':   'Smart <em>Financing</em>',
    'financing.sub':     'Own your dream vehicle with payment options tailored to your lifestyle.',
    'fin1.title':        'Personal Finance',
    'fin1.desc':         'Competitive interest rates from 2.99% APR with flexible terms from 12 to 84 months.',
    'fin1.f1':           'Up to AED 5M financing',
    'fin1.f2':           'No early settlement fees',
    'fin1.f3':           'Same-day approval',
    'fin1.cta':          'Apply Now',
    'fin2.badge':        'Most Popular',
    'fin2.title':        'Premium Lease',
    'fin2.desc':         'Drive more car for less. Our signature lease program with full manufacturer warranty.',
    'fin2.f1':           '0% down payment options',
    'fin2.f2':           'Inclusive maintenance',
    'fin2.f3':           'Upgrade every 2 years',
    'fin2.cta':          'Get Started',
    'fin3.title':        'Trade-In Finance',
    'fin3.desc':         'Trade your current vehicle and apply its value directly to your next luxury purchase.',
    'fin3.f1':           'Instant valuation',
    'fin3.f2':           'Above-market prices',
    'fin3.f3':           'Seamless transfer',
    'fin3.cta':          'Value My Car',
    'tradein.eyebrow':   'Upgrade Effortlessly',
    'tradein.title':     'Trade <em>In</em>',
    'tradein.desc':      'Get the best value for your current vehicle in three simple steps. We accept all makes, all models, any condition.',
    'tradein.badge1':    'Instant',
    'tradein.badge2':    'Online Valuation',
    'tradein.step1':     'Submit your vehicle details online',
    'tradein.step2':     'Receive an instant market valuation',
    'tradein.step3':     'Apply the value to your new vehicle',
    'tradein.cta':       'Get My Valuation',
    'service.eyebrow':   'Expert Care',
    'service.title':     'Service <em>Center</em>',
    'service.sub':       'Factory-trained technicians. Genuine parts. Your vehicle deserves nothing less.',
    'srv1.title':        'Routine Maintenance',
    'srv1.desc':         'Oil changes, inspections, fluid top-ups — keeping your vehicle in peak condition.',
    'srv2.title':        'Tyre & Alignment',
    'srv2.desc':         'Premium tyre brands, laser alignment, and balancing for optimal performance.',
    'srv3.title':        'Diagnostics & Repairs',
    'srv3.desc':         'Advanced diagnostic tools and certified technicians for complex repairs.',
    'srv4.title':        'Detailing & Protection',
    'srv4.desc':         "Ceramic coating, PPF, interior detailing — preserve your vehicle's showroom finish.",
    'srv5.title':        'Warranty & Insurance',
    'srv5.desc':         'Extended warranty packages and comprehensive insurance solutions.',
    'srv6.title':        'Courtesy Vehicles',
    'srv6.desc':         'Drive a premium loaner while your vehicle is being serviced.',
    'reviews.eyebrow':   'Client Stories',
    'reviews.title':     'What Our Clients <em>Say</em>',
    'rev1.text':         '"AbdulWahid Motors delivered an experience that matched the prestige of the vehicle itself. Exceptional service from start to finish."',
    'rev1.name':         'Khalid Al-Rashidi',
    'rev1.car':          'Rolls-Royce Ghost Owner',
    'rev1.initials':     'KA',
    'rev2.text':         '"The financing team structured a deal that worked perfectly for me. Transparent, professional, and genuinely helpful throughout."',
    'rev2.name':         'Sara Al-Mansouri',
    'rev2.car':          'Porsche Cayenne Owner',
    'rev2.initials':     'SA',
    'rev3.text':         '"My third purchase from AbdulWahid Motors. The service centre team are meticulous — my S-Class runs as if it just left Stuttgart."',
    'rev3.name':         'Faisal Mohammed',
    'rev3.car':          'Mercedes-Benz S-Class Owner',
    'rev3.initials':     'FM',
    'contact.eyebrow':   'Get in Touch',
    'contact.title':     'Book a <em>Test Drive</em>',
    'contact.sub':       'Visit our showroom or let us bring the experience to you. Our specialists are ready.',
    'contact.showroom':  'Showroom',
    'contact.address':   'Sheikh Zayed Road, Dubai, UAE',
    'contact.phone':     'Phone',
    'contact.hours':     'Hours',
    'contact.hoursval':  'Sat–Thu: 9AM–9PM · Fri: 2PM–9PM',
    'form.fname':        'First Name',
    'form.lname':        'Last Name',
    'form.email':        'Email Address',
    'form.phone':        'Phone Number',
    'form.vehicle':      'Vehicle of Interest',
    'form.vehicleDefault': 'Select a vehicle...',
    'form.other':        'Other / Not sure yet',
    'form.message':      'Message (Optional)',
    'form.submit':       'Submit Request',
    'form.note':         "We'll contact you within 2 business hours.",
    'form.success':      "✓ Request Received — We'll be in touch shortly",
    'footer.tagline':    'Redefining the luxury automotive experience since 2009.',
    'footer.col1':       'Vehicles',
    'footer.featured':   'Featured',
    'footer.col2':       'Services',
    'footer.tradein':    'Trade-In',
    'footer.service':    'Service Centre',
    'footer.col3':       'Company',
    'footer.reviews':    'Reviews',
    'footer.privacy':    'Privacy Policy',
    'footer.copy':       '© 2024 AbdulWahid Motors. All rights reserved.',
    'footer.built':      'Built with precision. Driven by excellence.',
  },

  ar: {
    'meta.title':        'عبدالواحد موتورز — سيارات جديدة وفاخرة',
    'brand.name':        'عبدالواحد',
    'brand.suffix':      'موتورز',
    'brand.full':        'عبدالواحد موتورز',
    'brand.slogan':      'سيارات جديدة وفاخرة',
    'loader.tagline':    'جاري تحضير تجربتك',
    'nav.vehicles':      'السيارات',
    'nav.arrivals':      'الوصول الجديد',
    'nav.compare':       'المقارنة',
    'nav.financing':     'التمويل',
    'nav.service':       'الخدمة',
    'nav.contact':       'تواصل معنا',
    'nav.cta':           'احجز تجربة قيادة',
    'hero.eyebrow':      'تجربة السيارات الفاخرة',
    'hero.title1':       'اقُد ما هو',
    'hero.title2':       'استثنائي',
    'hero.sub':          'مركبات فاخرة مختارة بعناية. أداء لا مثيل له. الفرق الذي يصنعه معرض عبد الواحد للسيارات.',
    'hero.cta1':         'استكشف طرازاتنا',
    'hero.cta2':         'احجز تجربة قيادة',
    'hero.stat1':        'مركبة فاخرة',
    'hero.stat2':        'سنة من الثقة',
    'hero.stat3':        'رضا العملاء',
    'hero.scroll':       'تمرير',
    'vehicles.eyebrow':  'مجموعتنا',
    'vehicles.title':    'السيارات <em>المميزة</em>',
    'vehicles.sub':      'كل مركبة مختارة بعناية للأداء والأناقة والمكانة.',
    'filter.all':        'الكل',
    'filter.sedan':      'سيدان',
    'filter.suv':        'دفع رباعي',
    'filter.sport':      'رياضية',
    'badge.featured':    'مميز',
    'badge.new':         'جديد',
    'badge.deal':        'عرض ساخن',
    'badge.exclusive':   'حصري',
    'card.enquire':      'استفسر الآن',
    'card.details':      'التفاصيل',
    'car1.name':         'سيدان الفئة S',
    'car2.name':         'الفئة 7 xDrive',
    'car3.name':         'باناميرا توربو S',
    'car4.name':         'LX 600 الفائق الفخامة',
    'car5.name':         'Q8 e-tron سبورت باك',
    'car6.name':         'SV أوتوبيوغرافي',
    'fuel.hybrid':       'هجين',
    'fuel.petrol':       'بنزين',
    'fuel.electric':     'كهربائي',
    'arrivals.eyebrow':  'مباشرة من المصنع',
    'arrivals.title':    'وصول <em>جديد</em>',
    'arrivals.sub':      'أحدث الطرازات — مباشرة إلى صالة عرضنا. كن أول من يختبرها.',
    'arrivals.cta':      'احجز مركبتك',
    'arrivals.badge':    'طراز جديد<br/>في المعرض',
    'arrival1':          '2025 فيراري روما سبايدر',
    'arrival2':          '2025 لامبورغيني أوروس SE',
    'arrival3':          '2025 بنتلي بنتايغا EWB',
    'arrival4':          '2025 رولز رويس غوست بلاك باج',
    'arrival5':          '2025 بورش كايين توربو GT',
    'compare.eyebrow':   'مقارنة جنباً إلى جنب',
    'compare.title':     'مقارنة <em>السيارات</em>',
    'compare.feature':   'الميزة',
    'spec.engine':       'المحرك',
    'spec.hp':           'القدرة الحصانية',
    'spec.sprint':       '0–100 كم/س',
    'spec.topspeed':     'السرعة القصوى',
    'spec.trans':        'ناقل الحركة',
    'spec.drive':        'نظام الدفع',
    'spec.price':        'السعر الابتدائي',
    'cinema.quote':      '"الطريق لك.<br/><em>اختره بحكمة.</em>"',
    'cinema.cta':        'جدول تجربة قيادة',
    'financing.eyebrow': 'خطط مرنة',
    'financing.title':   'التمويل <em>الذكي</em>',
    'financing.sub':     'امتلك مركبة أحلامك مع خيارات دفع تناسب أسلوب حياتك.',
    'fin1.title':        'التمويل الشخصي',
    'fin1.desc':         'معدلات فائدة تنافسية تبدأ من 2.99% مع شروط مرنة من 12 إلى 84 شهراً.',
    'fin1.f1':           'تمويل يصل إلى 5 مليون درهم',
    'fin1.f2':           'بدون رسوم تسوية مبكرة',
    'fin1.f3':           'موافقة في نفس اليوم',
    'fin1.cta':          'تقدم الآن',
    'fin2.badge':        'الأكثر شعبية',
    'fin2.title':        'الإيجار المميز',
    'fin2.desc':         'قُد سيارة أفضل بتكلفة أقل. برنامج الإيجار المميز مع ضمان الشركة المصنعة.',
    'fin2.f1':           'خيارات بدون دفعة مقدمة',
    'fin2.f2':           'صيانة شاملة',
    'fin2.f3':           'ترقية كل سنتين',
    'fin2.cta':          'ابدأ الآن',
    'fin3.title':        'تمويل المقايضة',
    'fin3.desc':         'قايض مركبتك الحالية وطبّق قيمتها مباشرة على مشترياتك الفاخرة التالية.',
    'fin3.f1':           'تقييم فوري',
    'fin3.f2':           'أسعار فوق السوق',
    'fin3.f3':           'تحويل سلس',
    'fin3.cta':          'قيّم سيارتي',
    'tradein.eyebrow':   'ارقَ بسهولة',
    'tradein.title':     'خدمة <em>المقايضة</em>',
    'tradein.desc':      'احصل على أفضل قيمة لمركبتك الحالية في ثلاث خطوات بسيطة. نقبل جميع الماركات وجميع الطرازات وأي حالة.',
    'tradein.badge1':    'تقييم فوري',
    'tradein.badge2':    'عبر الإنترنت',
    'tradein.step1':     'أرسل تفاصيل مركبتك عبر الإنترنت',
    'tradein.step2':     'احصل على تقييم سوقي فوري',
    'tradein.step3':     'طبّق القيمة على مركبتك الجديدة',
    'tradein.cta':       'احصل على تقييمي',
    'service.eyebrow':   'رعاية متخصصة',
    'service.title':     'مركز <em>الخدمة</em>',
    'service.sub':       'فنيون مدربون في المصنع. قطع غيار أصلية. مركبتك تستحق لا شيء أقل من ذلك.',
    'srv1.title':        'الصيانة الدورية',
    'srv1.desc':         'تغيير الزيت والفحص وإعادة تعبئة السوائل — للحفاظ على مركبتك بأفضل حال.',
    'srv2.title':        'الإطارات والمحاذاة',
    'srv2.desc':         'ماركات إطارات فاخرة ومحاذاة بالليزر وموازنة لأداء مثالي.',
    'srv3.title':        'التشخيص والإصلاح',
    'srv3.desc':         'أدوات تشخيص متطورة وفنيون معتمدون للإصلاحات المعقدة.',
    'srv4.title':        'التلميع والحماية',
    'srv4.desc':         'طلاء سيراميك وحماية الطلاء وتلميع داخلي — احتفظ بلمسة صالة العرض.',
    'srv5.title':        'الضمان والتأمين',
    'srv5.desc':         'باقات ضمان ممتد وحلول تأمين شاملة.',
    'srv6.title':        'مركبات الاستعارة',
    'srv6.desc':         'قُد سيارة فاخرة بديلة أثناء صيانة مركبتك.',
    'reviews.eyebrow':   'قصص عملائنا',
    'reviews.title':     'ما يقوله <em>عملاؤنا</em>',
    'rev1.text':         '"قدّم معرض عبد الواحد للسيارات تجربة تتناسب مع مكانة المركبة ذاتها. خدمة استثنائية من البداية إلى النهاية."',
    'rev1.name':         'خالد الراشدي',
    'rev1.car':          'مالك رولز رويس غوست',
    'rev1.initials':     'خ ر',
    'rev2.text':         '"صمّم فريق التمويل صفقة تناسبني تماماً. شفافون ومحترفون ومتعاونون بصدق طوال العملية."',
    'rev2.name':         'سارة المنصوري',
    'rev2.car':          'مالكة بورش كايين',
    'rev2.initials':     'س م',
    'rev3.text':         '"عملية الشراء الثالثة من معرض عبد الواحد. فريق مركز الخدمة دقيق للغاية — سيارتي تعمل كأنها خرجت من شتوتغارت للتو."',
    'rev3.name':         'فيصل محمد',
    'rev3.car':          'مالك مرسيدس بنز الفئة S',
    'rev3.initials':     'ف م',
    'contact.eyebrow':   'تواصل معنا',
    'contact.title':     'احجز <em>تجربة قيادة</em>',
    'contact.sub':       'زر صالة عرضنا أو دعنا نوصل التجربة إليك. متخصصونا مستعدون.',
    'contact.showroom':  'صالة العرض',
    'contact.address':   'شارع الشيخ زايد، دبي، الإمارات',
    'contact.phone':     'الهاتف',
    'contact.hours':     'أوقات العمل',
    'contact.hoursval':  'السبت–الخميس: 9ص–9م · الجمعة: 2م–9م',
    'form.fname':        'الاسم الأول',
    'form.lname':        'اسم العائلة',
    'form.email':        'البريد الإلكتروني',
    'form.phone':        'رقم الهاتف',
    'form.vehicle':      'السيارة المطلوبة',
    'form.vehicleDefault': 'اختر سيارة...',
    'form.other':        'أخرى / لست متأكداً بعد',
    'form.message':      'الرسالة (اختياري)',
    'form.submit':       'إرسال الطلب',
    'form.note':         'سنتواصل معك خلال ساعتين من أوقات العمل.',
    'form.success':      '✓ تم استلام طلبك — سنتواصل معك قريباً',
    'footer.tagline':    'نعيد تعريف تجربة السيارات الفاخرة منذ عام 2009.',
    'footer.col1':       'السيارات',
    'footer.featured':   'المميزة',
    'footer.col2':       'الخدمات',
    'footer.tradein':    'المقايضة',
    'footer.service':    'مركز الخدمة',
    'footer.col3':       'الشركة',
    'footer.reviews':    'التقييمات',
    'footer.privacy':    'سياسة الخصوصية',
    'footer.copy':       '© 2024 معرض عبد الواحد للسيارات. جميع الحقوق محفوظة.',
    'footer.built':      'مبنية بدقة. مدفوعة بالتميز.',
  }
};

// ── CURRENT LANG ──
let currentLang = localStorage.getItem('aw-lang') || 'en';

// ── APPLY LANGUAGE ──
function applyLang(lang) {
  const html = document.documentElement;
  const isAr = lang === 'ar';

  // Direction + lang attribute
  html.lang = lang;
  html.dir  = isAr ? 'rtl' : 'ltr';
  document.title = T[lang]['meta.title'];

  // Text nodes: data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (T[lang][key] !== undefined) el.textContent = T[lang][key];
  });

  // HTML nodes: data-i18n-html (contains <em> etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (T[lang][key] !== undefined) el.innerHTML = T[lang][key];
  });

  // Placeholders
  document.querySelectorAll('[data-placeholder-en]').forEach(el => {
    el.placeholder = isAr ? el.dataset.placeholderAr : el.dataset.placeholderEn;
  });

  // Alt text on images
  document.querySelectorAll('[data-alt-en]').forEach(el => {
    el.alt = isAr ? el.dataset.altAr : el.dataset.altEn;
  });

  // Swappable image src (arrivals back image, etc.)
  document.querySelectorAll('[data-src-en]').forEach(el => {
    el.src = isAr ? el.dataset.srcAr : el.dataset.srcEn;
  });

  // Background images (hero bg, cinema strip)
  document.querySelectorAll('[data-bg-en]').forEach(el => {
    el.style.backgroundImage = `url('${isAr ? el.dataset.bgAr : el.dataset.bgEn}')`;
  });

  // Lang toggle buttons — all sets (nav + mobile)
  document.querySelectorAll('.lang-pill__btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Save
  localStorage.setItem('aw-lang', lang);
  currentLang = lang;
}

// ── LOADER ──
const loader = document.getElementById('loader');
window.addEventListener('load', () => {
  // Apply saved language before loader disappears
  applyLang(currentLang);

  setTimeout(() => {
    loader.classList.add('done');
    setTimeout(() => loader.remove(), 800);
    document.querySelectorAll('.reveal-hero').forEach(el => el.classList.add('visible'));
    startCounters();
  }, 1900);
});

// ── CURSOR GLOW ──
const cursorGlow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', e => {
  cursorGlow.style.left    = e.clientX + 'px';
  cursorGlow.style.top     = e.clientY + 'px';
  cursorGlow.style.opacity = '1';
});
document.addEventListener('mouseleave', () => { cursorGlow.style.opacity = '0'; });

// ── NAV SCROLL + PARALLAX ──
const navbar = document.getElementById('navbar');
function onScroll() {
  const y = window.scrollY;
  navbar.classList.toggle('scrolled', y > 60);
  const bg    = document.querySelector('.parallax-bg');
  const car   = document.querySelector('.parallax-car');
  const strip = document.querySelector('.parallax-strip');
  if (bg)    bg.style.transform    = `translateY(${y * 0.22}px)`;
  if (car)   car.style.transform   = `translateY(${y * 0.14}px)`;
  if (strip) {
    const offset = strip.closest('.cinema-strip').offsetTop;
    strip.style.transform = `translateY(${(y - offset) * 0.2}px)`;
  }
}
window.addEventListener('scroll', onScroll, { passive: true });

// ── MOBILE NAV ──
const hamburger   = document.getElementById('hamburger');
const mobileNav   = document.getElementById('mobileNav');
const mobileClose = document.getElementById('mobileClose');
hamburger.addEventListener('click',   () => mobileNav.classList.add('open'));
mobileClose.addEventListener('click', () => mobileNav.classList.remove('open'));
mobileNav.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => mobileNav.classList.remove('open'))
);

// ── LANGUAGE TOGGLE ──
document.querySelectorAll('.lang-pill__btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.dataset.lang !== currentLang) applyLang(btn.dataset.lang);
  });
});

// ── SCROLL REVEAL ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal, .reveal-up').forEach(el => observer.observe(el));

// ── ANIMATED COUNTERS ──
function startCounters() {
  document.querySelectorAll('.counter').forEach(el => {
    const target   = +el.dataset.target;
    const duration = 1800;
    const start    = performance.now();
    const update   = (now) => {
      const p = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target);
      if (p < 1) requestAnimationFrame(update);
      else el.textContent = target;
    };
    requestAnimationFrame(update);
  });
}

// ── VEHICLE FILTER TABS ──
document.querySelectorAll('.vtab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.vtab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.dataset.filter;
    document.querySelectorAll('.vehicle-card').forEach(card => {
      const match = filter === 'all' || card.dataset.cat === filter;
      card.style.display = match ? '' : 'none';
      if (match) {
        card.classList.remove('visible');
        void card.offsetWidth;
        setTimeout(() => card.classList.add('visible'), 30);
      }
    });
  });
});

// ── SMOOTH ANCHOR ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.offsetTop - navbar.offsetHeight - 24, behavior: 'smooth' });
  });
});

// ── CONTACT FORM ──
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('[type="submit"]');
  btn.textContent  = T[currentLang]['form.success'];
  btn.style.background = '#1a6b3a';
  btn.style.color  = '#fff';
  btn.disabled     = true;
  setTimeout(() => {
    btn.textContent  = T[currentLang]['form.submit'];
    btn.style.background = '';
    btn.style.color  = '';
    btn.disabled     = false;
    e.target.reset();
  }, 4500);
});
