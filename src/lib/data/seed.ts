import type {
  Artist,
  Banner,
  Category,
  Collection,
  EducationItem,
  HeroContent,
  HomeSection,
  Pattern,
  Portfolio,
  Product,
  SeoMeta,
  SiteContent,
  Space,
  Story,
} from "../types";

const L = (fa: string, en: string) => ({ fa, en });

/* ------------------------------------------------------------------ */
/* Categories (Styles) — manageable from Admin                          */
/* ------------------------------------------------------------------ */
export const categories: Category[] = [
  { id: "cat-minimal", slug: "minimal", name: L("مینیمال", "Minimal"), description: L("خطوط آرام، فضای خالی، جزئیات ظریف.", "Quiet lines, open space, fine detail."), image: "/images/collections/s06.jpg", featured: true, order: 1 },
  { id: "cat-botanical", slug: "botanical", name: L("گیاهی", "Botanical"), description: L("برگ، سرخس و باغ‌های نقاشی‌شده.", "Leaves, ferns and painted gardens."), image: "/images/collections/s01.jpg", featured: true, order: 2 },
  { id: "cat-geometric", slug: "geometric", name: L("هندسی", "Geometric"), description: L("ریتم، تقارن و ساختار.", "Rhythm, symmetry and structure."), image: "/images/collections/s02.jpg", featured: true, order: 3 },
  { id: "cat-floral", slug: "floral", name: L("گل‌دار", "Floral"), description: L("گل‌های آبرنگی در مقیاس بزرگ.", "Large-scale watercolour blooms."), image: "/images/collections/s03.jpg", featured: true, order: 4 },
  { id: "cat-abstract", slug: "abstract", name: L("انتزاعی", "Abstract"), description: L("فرم‌های آزاد و بافت دست.", "Free forms and hand texture."), image: "/images/collections/s05.jpg", featured: true, order: 5 },
  { id: "cat-persian", slug: "persian-inspired", name: L("ایرانی", "Persian Inspired"), description: L("اسلیمی، بته‌جقه و کاشی؛ بازخوانی معاصر.", "Eslimi, boteh and tile — reinterpreted."), image: "/images/collections/s04.jpg", featured: true, order: 6 },
  { id: "cat-luxury", slug: "luxury", name: L("لوکس", "Luxury"), description: L("داماسک، فلز و عمق.", "Damask, metal and depth."), image: "/images/collections/s08.jpg", featured: true, order: 7 },
  { id: "cat-kids", slug: "kids", name: L("کودک", "Kids"), description: L("ماه، ابر و بالن‌های کوچک.", "Moons, clouds and little balloons."), image: "/images/collections/s07.jpg", featured: true, order: 8 },
  { id: "cat-nature", slug: "nature", name: L("طبیعت", "Nature"), description: L("الهام از زمین، سنگ و آب.", "Earth, stone and water."), image: "/images/collections/s01.jpg", featured: false, order: 9 },
  { id: "cat-contemporary", slug: "contemporary", name: L("معاصر", "Contemporary"), description: L("زبان امروز طراحی سطح.", "Today's language of surface design."), image: "/images/collections/s05.jpg", featured: false, order: 10 },
];

export const spaces: Space[] = [
  { id: "space-living-room", slug: "living-room", name: L("نشیمن", "Living room"), image: "/images/hero/hero-main.jpg", order: 1 },
  { id: "space-bedroom", slug: "bedroom", name: L("اتاق خواب", "Bedroom"), image: "/images/portfolios/pf06.jpg", order: 2 },
  { id: "space-kids-room", slug: "kids-room", name: L("اتاق کودک", "Kids room"), image: "/images/portfolios/pf03.jpg", order: 3 },
  { id: "space-office", slug: "office", name: L("دفتر کار", "Office"), image: "/images/portfolios/pf05.jpg", order: 4 },
  { id: "space-hospitality", slug: "hospitality", name: L("هتل و رستوران", "Hospitality"), image: "/images/portfolios/pf01.jpg", order: 5 },
  { id: "space-cafe", slug: "cafe", name: L("کافه", "Café"), image: "/images/portfolios/pf02.jpg", order: 6 },
];

/* ------------------------------------------------------------------ */
/* Artists                                                              */
/* ------------------------------------------------------------------ */
export const artists: Artist[] = [
  {
    id: "artist-niloufar-rad", slug: "niloufar-rad",
    name: L("نیلوفر راد", "Niloufar Rad"),
    profession: L("طراح سطح و پارچه", "Surface & textile designer"),
    bio: L("نیلوفر با گواش و مرکب کار می‌کند؛ باغ‌های نقاشی‌شده‌اش در بیش از چهل پروژه مسکونی اجرا شده‌اند.", "Niloufar works in gouache and ink; her painted gardens have been installed in over forty residential projects."),
    avatar: "/images/collections/s01.jpg", cover: "/images/hero/hero-main.jpg",
    location: L("تهران", "Tehran"),
    social: { instagram: "niloufar.rad", behance: "niloufarrad" },
    featured: true, followers: 12800, rating: 4.9, reviewsCount: 143,
  },
  {
    id: "artist-arman-kian", slug: "arman-kian",
    name: L("آرمان کیان", "Arman Kian"),
    profession: L("طراح گرافیک و هندسه", "Graphic & geometric designer"),
    bio: L("آرمان با ساختار، تکرار و خط نازک کار می‌کند. الگوهایش برای هتل‌ها و فضاهای کاری طراحی شده‌اند.", "Arman works with structure, repetition and the thin line. His patterns are designed for hotels and workplaces."),
    avatar: "/images/collections/s02.jpg", cover: "/images/portfolios/pf01.jpg",
    location: L("اصفهان", "Isfahan"),
    social: { instagram: "arman.kian", website: "armankian.studio" },
    featured: true, followers: 8400, rating: 4.8, reviewsCount: 96,
  },
  {
    id: "artist-sara-mehr", slug: "sara-mehr",
    name: L("سارا مهر", "Sara Mehr"),
    profession: L("تصویرگر و طراح الگو", "Illustrator & pattern designer"),
    bio: L("سارا داستان‌های کوچک را در الگوهای کودک و آبرنگ گل روایت می‌کند؛ نرم، صمیمی و دقیق.", "Sara tells small stories through kids' patterns and floral watercolours — soft, warm and precise."),
    avatar: "/images/collections/s03.jpg", cover: "/images/portfolios/pf06.jpg",
    location: L("شیراز", "Shiraz"),
    social: { instagram: "sara.mehr.art" },
    featured: true, followers: 15200, rating: 4.9, reviewsCount: 211,
  },
  {
    id: "artist-hossein-tabrizi", slug: "hossein-tabrizi",
    name: L("حسین تبریزی", "Hossein Tabrizi"),
    profession: L("استاد نقش سنتی و کاشی", "Master of traditional ornament & tile"),
    bio: L("حسین چهار دهه در نقش سنتی کار کرده و امروز اسلیمی را برای فضاهای معاصر بازخوانی می‌کند.", "Hossein has worked four decades in traditional ornament and today reinterprets eslimi for contemporary spaces."),
    avatar: "/images/collections/s04.jpg", cover: "/images/portfolios/pf02.jpg",
    location: L("تبریز", "Tabriz"),
    social: { website: "tabrizi-atelier.ir" },
    featured: true, followers: 6100, rating: 5, reviewsCount: 58,
  },
];

/* ------------------------------------------------------------------ */
/* Patterns                                                             */
/* ------------------------------------------------------------------ */
const spec = (repeatFa: string, repeatEn: string, colors: number, scaleFa: string, scaleEn: string) => ({
  repeat: L(repeatFa, repeatEn), dpi: "300 DPI", formats: "AI · PDF · TIFF", colors, scale: L(scaleFa, scaleEn),
});

export const patterns: Pattern[] = [
  { id: "pattern-quiet-garden", sku: "RA-PT-0101", slug: "quiet-garden", title: L("باغ آرام", "Quiet Garden"), description: L("برگ‌های سرخس و سایه‌های گواشی روی زمینه‌ی عاجی؛ الگویی برای نشیمن‌های روشن.", "Fern fronds and gouache shadows on ivory — a pattern for bright living rooms."), image: "/images/patterns/p01.jpg", gallery: ["/images/patterns/p01.jpg", "/images/hero/hero-main.jpg"], categoryId: "cat-botanical", spaceIds: ["space-living-room", "space-bedroom"], artistId: "artist-niloufar-rad", price: { fa: 1850000, en: 49 }, specs: spec("۶۴ سانتی‌متر", "64 cm", 5, "بزرگ", "Large"), palette: ["#5b6f8a", "#8fa08e", "#efe9dd"], tags: ["botanical", "calm"], featured: true, trending: true, bestSeller: true, isNew: false, createdAt: "2026-05-02", likes: 1240 },
  { id: "pattern-arc-lattice", sku: "RA-PT-0102", slug: "arc-lattice", title: L("شبکه‌ی کمان", "Arc Lattice"), description: L("شش‌ضلعی‌ها و کمان‌های مسی روی سرمه‌ای؛ ریتم آرت‌دکو برای فضاهای عمومی.", "Hexagons and copper arcs on navy — an art-deco rhythm for public spaces."), image: "/images/patterns/p02.jpg", gallery: ["/images/patterns/p02.jpg", "/images/portfolios/pf01.jpg"], categoryId: "cat-geometric", spaceIds: ["space-hospitality", "space-office"], artistId: "artist-arman-kian", price: { fa: 2100000, en: 55 }, specs: spec("۳۲ سانتی‌متر", "32 cm", 3, "متوسط", "Medium"), palette: ["#1b2e4b", "#b5713a", "#f4f1ea"], tags: ["geometric", "deco"], featured: true, trending: true, bestSeller: false, isNew: false, createdAt: "2026-04-11", likes: 980 },
  { id: "pattern-dusty-bloom", sku: "RA-PT-0103", slug: "dusty-bloom", title: L("شکوفه‌ی غبارآلود", "Dusty Bloom"), description: L("گل‌های صدتومانی آبرنگی در مقیاس بزرگ؛ نرم و سینمایی.", "Large-scale watercolour peonies — soft and cinematic."), image: "/images/patterns/p03.jpg", gallery: ["/images/patterns/p03.jpg", "/images/portfolios/pf06.jpg"], categoryId: "cat-floral", spaceIds: ["space-bedroom", "space-living-room"], artistId: "artist-sara-mehr", price: { fa: 1950000, en: 52 }, specs: spec("۹۶ سانتی‌متر", "96 cm", 6, "بزرگ", "Large"), palette: ["#c99a92", "#b86b4b", "#6b7280"], tags: ["floral", "watercolour"], featured: true, trending: false, bestSeller: true, isNew: false, createdAt: "2026-03-20", likes: 2130 },
  { id: "pattern-lapis-eslimi", sku: "RA-PT-0104", slug: "lapis-eslimi", title: L("اسلیمی لاجورد", "Lapis Eslimi"), description: L("بازخوانی مینیمال نقش کاشی ایرانی با لاجورد و طلای کهنه.", "A minimal reinterpretation of Persian tile ornament in lapis and antique gold."), image: "/images/patterns/p04.jpg", gallery: ["/images/patterns/p04.jpg", "/images/portfolios/pf02.jpg"], categoryId: "cat-persian", spaceIds: ["space-cafe", "space-hospitality"], artistId: "artist-hossein-tabrizi", price: { fa: 2400000, en: 64 }, specs: spec("۴۸ سانتی‌متر", "48 cm", 4, "متوسط", "Medium"), palette: ["#1f3a8a", "#c8a24a", "#f2ede2"], tags: ["persian", "tile"], featured: true, trending: true, bestSeller: true, isNew: false, createdAt: "2026-02-14", likes: 1760 },
  { id: "pattern-torn-paper", sku: "RA-PT-0105", slug: "torn-paper", title: L("کاغذ پاره", "Torn Paper"), description: L("فرم‌های آزاد قلم‌مو و کاغذ پاره؛ حس گالری معاصر.", "Free brush forms and torn paper — a contemporary gallery feel."), image: "/images/patterns/p05.jpg", gallery: ["/images/patterns/p05.jpg"], categoryId: "cat-abstract", spaceIds: ["space-office", "space-living-room"], artistId: null, price: { fa: 1650000, en: 44 }, specs: spec("۶۴ سانتی‌متر", "64 cm", 4, "بزرگ", "Large"), palette: ["#2b2b2b", "#d9c7ad", "#b5713a"], tags: ["abstract"], featured: false, trending: false, bestSeller: false, isNew: true, createdAt: "2026-08-12", likes: 310 },
  { id: "pattern-hairline-grid", sku: "RA-PT-0106", slug: "hairline-grid", title: L("شبکه‌ی مویی", "Hairline Grid"), description: L("نقطه‌های ریز و شبکه‌ی نازک خاکستری روی سفید؛ نهایت مینیمالیسم.", "Fine dots and a thin grey grid on white — minimalism at its edge."), image: "/images/patterns/p06.jpg", gallery: ["/images/patterns/p06.jpg", "/images/portfolios/pf05.jpg"], categoryId: "cat-minimal", spaceIds: ["space-office", "space-bedroom"], artistId: null, price: { fa: 1200000, en: 32 }, specs: spec("۱۶ سانتی‌متر", "16 cm", 2, "کوچک", "Small"), palette: ["#9aa0a6", "#ffffff"], tags: ["minimal", "grid"], featured: false, trending: false, bestSeller: true, isNew: true, createdAt: "2026-08-20", likes: 540 },
  { id: "pattern-little-moons", sku: "RA-PT-0107", slug: "little-moons", title: L("ماه‌های کوچک", "Little Moons"), description: L("ماه، ستاره و بالن‌های کوچک؛ برای خواب‌های آرام.", "Moons, stars and little balloons — for quiet sleep."), image: "/images/patterns/p07.jpg", gallery: ["/images/patterns/p07.jpg", "/images/portfolios/pf03.jpg"], categoryId: "cat-kids", spaceIds: ["space-kids-room"], artistId: "artist-sara-mehr", price: { fa: 1450000, en: 39 }, specs: spec("۳۲ سانتی‌متر", "32 cm", 5, "متوسط", "Medium"), palette: ["#a9c1d9", "#d9a441", "#f3d9d2"], tags: ["kids"], featured: true, trending: true, bestSeller: false, isNew: true, createdAt: "2026-08-01", likes: 890 },
  { id: "pattern-copper-damask", sku: "RA-PT-0108", slug: "copper-damask", title: L("داماسک مسی", "Copper Damask"), description: L("نقش داماسک با مس براق روی سنگ‌آبی تیره؛ برای فضاهای شبانه.", "Damask in burnished copper on deep slate — for evening spaces."), image: "/images/patterns/p08.jpg", gallery: ["/images/patterns/p08.jpg", "/images/portfolios/pf04.jpg"], categoryId: "cat-luxury", spaceIds: ["space-hospitality"], artistId: "artist-arman-kian", price: { fa: 2800000, en: 74 }, specs: spec("۶۴ سانتی‌متر", "64 cm", 3, "بزرگ", "Large"), palette: ["#1c1f26", "#b5713a", "#3b4658"], tags: ["luxury", "damask"], featured: true, trending: false, bestSeller: true, isNew: false, createdAt: "2026-01-30", likes: 1420 },
];

/* ------------------------------------------------------------------ */
/* Products — site-owned (artistId null) + artist products              */
/* ------------------------------------------------------------------ */
const color = (id: string, fa: string, en: string, hex: string, image: string, stock = 12) => ({ id, name: L(fa, en), hex, image, stock });

export const products: Product[] = [
  {
    id: "product-atelier-cushion-quiet-garden", sku: "RA-SH-2001", slug: "atelier-cushion-quiet-garden",
    title: L("کوسن آتلیه — باغ آرام", "Atelier Cushion — Quiet Garden"),
    description: L("کوسن کتان با چاپ پیگمنت الگوی باغ آرام؛ دوخت دستی، پر الیاف طبیعی.", "Linen cushion with pigment print of Quiet Garden; hand-finished seams, natural fibre fill."),
    categoryId: "cat-botanical", patternId: "pattern-quiet-garden", artistId: null,
    price: { fa: 890000, en: 42 }, compareAt: { fa: 990000, en: 48 },
    colors: [color("ivory", "عاجی", "Ivory", "#efe9dd", "/images/products/cushion-0.jpg"), color("slate", "سنگ‌آبی", "Slate", "#5b6f8a", "/images/products/cushion-1.jpg", 4), color("sage", "سبز مریم", "Sage", "#8fa08e", "/images/products/cushion-2.jpg")],
    sizes: [L("۴۵×۴۵", "45×45"), L("۵۰×۵۰", "50×50")],
    specs: [{ label: L("جنس", "Fabric"), value: L("کتان ۱۰۰٪", "100% linen") }, { label: L("چاپ", "Print"), value: L("پیگمنت", "Pigment") }, { label: L("پر", "Fill"), value: L("الیاف طبیعی", "Natural fibre") }],
    materials: L("کتان اروپایی، زیپ نامرئی، پر الیاف طبیعی", "European linen, invisible zip, natural fibre fill"),
    featured: true, bestSeller: true, isNew: false, order: 1,
  },
  {
    id: "product-atelier-throw-dusty-bloom", sku: "RA-SH-2002", slug: "atelier-throw-dusty-bloom",
    title: L("شال مبل — شکوفه‌ی غبارآلود", "Atelier Throw — Dusty Bloom"),
    description: L("شال بافت پنبه‌ای با طرح شکوفه؛ سبک، نرم و دورو.", "Woven cotton throw with the Dusty Bloom motif — light, soft and double-sided."),
    categoryId: "cat-floral", patternId: "pattern-dusty-bloom", artistId: null,
    price: { fa: 1650000, en: 78 },
    colors: [color("rose", "رز غبارآلود", "Dusty rose", "#c99a92", "/images/products/throw-0.jpg"), color("terracotta", "تراکوتا", "Terracotta", "#b86b4b", "/images/products/throw-1.jpg", 6), color("grey", "خاکستری", "Grey", "#8a8f98", "/images/products/throw-2.jpg", 0)],
    sizes: [L("۱۳۰×۱۷۰", "130×170")],
    specs: [{ label: L("جنس", "Fabric"), value: L("پنبه بافته", "Woven cotton") }, { label: L("وزن", "Weight"), value: L("۹۰۰ گرم", "900 g") }, { label: L("شست‌وشو", "Care"), value: L("۳۰ درجه", "30°C wash") }],
    materials: L("پنبه ارگانیک بافت ژاکارد", "Organic jacquard-woven cotton"),
    featured: true, bestSeller: false, isNew: true, order: 2,
  },
  {
    id: "product-art-print-arc-lattice", sku: "RA-SH-2003", slug: "art-print-arc-lattice",
    title: L("پوستر هنری — شبکه‌ی کمان", "Art Print — Arc Lattice"),
    description: L("چاپ ژیکله روی کاغذ کتان ۳۱۰ گرم؛ شماره‌دار و امضاشده.", "Giclée print on 310 gsm cotton rag — numbered and signed."),
    categoryId: "cat-geometric", patternId: "pattern-arc-lattice", artistId: "artist-arman-kian",
    price: { fa: 1250000, en: 60 },
    colors: [color("navy", "سرمه‌ای", "Navy", "#1b2e4b", "/images/products/poster-0.jpg"), color("copper", "مسی", "Copper", "#b5713a", "/images/products/poster-1.jpg"), color("ivory", "عاجی", "Ivory", "#f4f1ea", "/images/products/poster-2.jpg", 3)],
    sizes: [L("۵۰×۷۰", "50×70"), L("۷۰×۱۰۰", "70×100")],
    specs: [{ label: L("کاغذ", "Paper"), value: L("کتان ۳۱۰ گرم", "310 gsm cotton rag") }, { label: L("چاپ", "Print"), value: L("ژیکله ۱۲ رنگ", "12-ink giclée") }, { label: L("تیراژ", "Edition"), value: L("۵۰ نسخه", "Edition of 50") }],
    materials: L("کاغذ موزه‌ای بدون اسید", "Acid-free museum paper"),
    featured: true, bestSeller: true, isNew: false, order: 3,
  },
  {
    id: "product-atelier-tray-torn-paper", sku: "RA-SH-2004", slug: "atelier-tray-torn-paper",
    title: L("سینی چوبی — کاغذ پاره", "Atelier Tray — Torn Paper"),
    description: L("سینی راش با روکش لمینت الگوی کاغذ پاره؛ لبه‌ی گرد و روغن طبیعی.", "Beech tray laminated with the Torn Paper pattern; rounded edge, natural oil finish."),
    categoryId: "cat-abstract", patternId: "pattern-torn-paper", artistId: null,
    price: { fa: 740000, en: 36 },
    colors: [color("charcoal", "زغالی", "Charcoal", "#2b2b2b", "/images/products/tray-0.jpg"), color("sand", "شنی", "Sand", "#d9c7ad", "/images/products/tray-1.jpg"), color("copper", "مسی", "Copper", "#b5713a", "/images/products/tray-2.jpg", 2)],
    sizes: [L("۳۰×۴۵", "30×45")],
    specs: [{ label: L("چوب", "Wood"), value: L("راش", "Beech") }, { label: L("پوشش", "Finish"), value: L("روغن طبیعی", "Natural oil") }, { label: L("ضخامت", "Thickness"), value: L("۱۸ میلی‌متر", "18 mm") }],
    materials: L("راش، لمینت مات، روغن گیاهی", "Beech, matte laminate, plant oil"),
    featured: true, bestSeller: false, isNew: true, order: 4,
  },
  {
    id: "product-atelier-lamp-copper-damask", sku: "RA-SH-2005", slug: "atelier-lamp-copper-damask",
    title: L("آباژور — داماسک مسی", "Atelier Lamp — Copper Damask"),
    description: L("آباژور رومیزی با کلاهک پارچه‌ای داماسک؛ پایه‌ی برنجی مات.", "Table lamp with a damask fabric shade; matte brass base."),
    categoryId: "cat-luxury", patternId: "pattern-copper-damask", artistId: null,
    price: { fa: 3200000, en: 145 },
    colors: [color("slate", "سنگ‌آبی", "Slate", "#3b4658", "/images/products/lamp-0.jpg"), color("black", "مشکی", "Black", "#1c1f26", "/images/products/lamp-1.jpg", 5), color("copper", "مسی", "Copper", "#b5713a", "/images/products/lamp-2.jpg")],
    sizes: [L("۴۵ سانتی‌متر", "45 cm")],
    specs: [{ label: L("پایه", "Base"), value: L("برنج مات", "Matte brass") }, { label: L("سرپیچ", "Socket"), value: L("E27", "E27") }, { label: L("کابل", "Cord"), value: L("۱٫۸ متر پارچه‌ای", "1.8 m fabric") }],
    materials: L("برنج، پارچه پلی‌کتان، کابل پارچه‌ای", "Brass, poly-linen, fabric cord"),
    featured: true, bestSeller: true, isNew: false, order: 5,
  },
  {
    id: "product-rug-lapis-eslimi", sku: "RA-SH-2006", slug: "rug-lapis-eslimi",
    title: L("فرش کوچک — اسلیمی لاجورد", "Small Rug — Lapis Eslimi"),
    description: L("فرش تافتینگ پشم و پنبه با نقش اسلیمی؛ طراحی حسین تبریزی.", "Tufted wool-cotton rug with the eslimi motif; designed by Hossein Tabrizi."),
    categoryId: "cat-persian", patternId: "pattern-lapis-eslimi", artistId: "artist-hossein-tabrizi",
    price: { fa: 6800000, en: 320 },
    colors: [color("lapis", "لاجورد", "Lapis", "#1f3a8a", "/images/products/rug-0.jpg"), color("gold", "طلای کهنه", "Antique gold", "#c8a24a", "/images/products/rug-1.jpg", 2), color("ivory", "عاجی", "Ivory", "#f2ede2", "/images/products/rug-2.jpg")],
    sizes: [L("۱۲۰×۱۸۰", "120×180"), L("۱۶۰×۲۳۰", "160×230")],
    specs: [{ label: L("جنس", "Material"), value: L("پشم ۸۰٪ / پنبه ۲۰٪", "80% wool / 20% cotton") }, { label: L("پرز", "Pile"), value: L("۱۲ میلی‌متر", "12 mm") }, { label: L("ساخت", "Made in"), value: L("تبریز", "Tabriz") }],
    materials: L("پشم دستریس، پنبه، زیره‌ی نمدی", "Hand-spun wool, cotton, felt backing"),
    featured: true, bestSeller: false, isNew: false, order: 6,
  },
];

/* ------------------------------------------------------------------ */
/* Portfolios                                                           */
/* ------------------------------------------------------------------ */
export const portfolios: Portfolio[] = [
  {
    id: "portfolio-penthouse-elaheye",
    slug: "penthouse-elaheye",
    title: L("پنت‌هاوس الهیه؛ روایت مس روی اسلیت", "Elahieh Penthouse — Copper on Slate"),
    subtitle: L("الگوی گیاهی با خطوط مسی برای پنجره‌های قوسی", "A botanical with copper linework for arched windows"),
    intro: L("برای این پنت‌هاوس ۲۸۰ متری، یک الگوی گیاهی با خطوط مسی روی زمینه‌ی اسلیت طراحی شد تا نور صبحگاهی پنجره‌های قوسی را بازتاب دهد.", "For this 280 m² penthouse, a bespoke botanical with copper linework on a slate ground was colour-matched to the morning light of the arched windows."),
    story: [
      { type: "text", text: L("رنگ‌بندی اختصاصی در سه مرحله نمونه‌گیری نهایی شد تا با نور طبیعی پنجره‌های قوسی هماهنگ شود.", "The custom colourway was finalised across three sampling rounds to harmonise with the natural light of the arched windows.") },
      { type: "image", image: "/images/portfolios/pf-penthouse.jpg", caption: L("نمای کلی فضا پس از نصب", "Space overview after installation") },
      { type: "quote", text: L("الگو نباید فریاد بزند؛ باید مثل نور صبح وارد فضا شود.", "A pattern shouldn't shout — it should enter the room like morning light.") },
      { type: "text", text: L("متریال نان‌وون پریمیوم ۲۰۰ گرم انتخاب شد و نصب در ۱۸ روز به پایان رسید.", "A 200 gsm premium non-woven substrate was chosen; installation was completed in 18 days.") },
    ],
    cover: "/images/portfolios/pf-penthouse.jpg",
    gallery: ["/images/portfolios/pf-penthouse.jpg", "/images/patterns/p01.jpg"],
    artistId: "artist-niloufar-rad", patternIds: ["pattern-quiet-garden"], productIds: [],
    client: L("خصوصی", "Private"), location: L("تهران، الهیه", "Tehran, Elahieh"), year: 2025,
    scope: L("طراحی اختصاصی، تولید، نصب", "Bespoke design, production, installation"),
    categoryId: "cat-persian", featured: true, isProject: true, size: "hero",
  },
  {
    id: "portfolio-hotel-narenjestan",
    slug: "hotel-narenjestan",
    title: L("هتل بوتیک نارنجستان؛ لابی شب‌رنگ", "Narenjestan Boutique Hotel — Lobby"),
    subtitle: L("الگوی مشبک هندسی ایرانی با خطوط مسی روی اسلیت تیره", "Persian lattice in copper line on deep slate"),
    intro: L("لابی هتل با یک الگوی مشبک هندسی ایرانی با خطوط مسی روی اسلیت تیره پوشیده شد؛ ترکیبی که در نور آویزها عمق پیدا می‌کند.", "The hotel lobby was clad in a Persian lattice in copper line on deep slate — a combination that gains depth under pendant light."),
    story: [
      { type: "image", image: "/images/portfolios/pf-hotel.jpg", caption: L("لابی پس از نصب", "Lobby after installation") },
      { type: "text", text: L("الگو با مخمل آبی مبلمان گفت‌وگو می‌کند و عمق شب‌رنگ فضا را تکمیل می‌کند.", "The pattern converses with the blue velvet seating and completes the nocturnal depth of the space.") },
      { type: "pair", images: ["/images/patterns/p08.jpg", "/images/portfolios/pf-hotel.jpg"], caption: L("الگو در کنار فضای نهایی", "Pattern beside the finished space") },
      { type: "text", text: L("متریال وینیل تجاری ضدخش کلاس B1 در ۱۴۰ متر مربع در ۲۶ روز نصب شد.", "Class B1 commercial anti-scratch vinyl — 140 m² installed in 26 days.") },
    ],
    cover: "/images/portfolios/pf-hotel.jpg",
    gallery: ["/images/portfolios/pf-hotel.jpg", "/images/patterns/p08.jpg"],
    artistId: "artist-arman-kian", patternIds: ["pattern-copper-damask"], productIds: ["product-atelier-lamp-copper-damask"],
    client: L("هتل بوتیک نارنجستان", "Narenjestan Boutique Hotel"), location: L("تهران", "Tehran"), year: 2025,
    scope: L("طراحی الگو، کاغذ دیواری تجاری، نصب", "Pattern design, commercial wallcovering, installation"),
    categoryId: "cat-luxury", featured: true, isProject: true, size: "tall",
  },
  {
    id: "portfolio-villa-lavasan",
    slug: "villa-lavasan",
    title: L("ویلای لواسان؛ آرامش گل و برگ", "Lavasan Villa — Master Bedroom"),
    subtitle: L("الگوی آبرنگی گل‌های صدتومانی روی زمینه‌ی عاجی گرم", "Watercolour peonies on warm ivory"),
    intro: L("دیوار تاج تخت با الگوی آبرنگی از گل‌های صدتومانی و برگ‌های مریم‌گلی اجرا شد؛ مقیاس طوری تنظیم شد که از فاصله‌ی تخت، آرام و بی‌تکرار دیده شود.", "The headboard wall was executed with a watercolour peony and sage botanical — scaled so the repeat disappears from the bed's viewpoint."),
    story: [
      { type: "image", image: "/images/portfolios/pf-bedroom.jpg" },
      { type: "text", text: L("متریال کاغذ بافت‌دار مات با تکرار ۹۶ سانتی‌متر در ۲۲ متر مربع اجرا شد.", "Textured matte paper with a 96 cm repeat — 22 m² installed in 5 days.") },
    ],
    cover: "/images/portfolios/pf-bedroom.jpg",
    gallery: ["/images/portfolios/pf-bedroom.jpg", "/images/patterns/p03.jpg"],
    artistId: "artist-sara-mehr", patternIds: ["pattern-dusty-bloom"], productIds: ["product-atelier-throw-dusty-bloom"],
    client: L("خصوصی", "Private"), location: L("لواسان", "Lavasan"), year: 2024,
    scope: L("کاغذ دیواری سفارشی", "Bespoke wallpaper"),
    categoryId: "cat-floral", featured: true, isProject: false, size: "square",
  },
  {
    id: "portfolio-cafe-sangfarsh",
    slug: "cafe-sangfarsh",
    title: L("کافه‌ی سنگ‌فرش؛ انتزاع ترازو", "Sangfarsh Café — Terrazzo Abstract"),
    subtitle: L("دیوار شاخص، خودش اثر هنری است", "The feature wall becomes the artwork itself"),
    intro: L("برای فضای صنعتی-مینیمال کافه، یک الگوی انتزاعی با ضربه‌قلم‌های مشکی، شنی و مسی در ابعاد بزرگ طراحی شد.", "For the industrial-minimal café, a large-scale brushstroke abstraction in black, sand and copper was designed."),
    story: [
      { type: "image", image: "/images/portfolios/pf-cafe.jpg" },
      { type: "text", text: L("وینیل مات ضدلک بدون تکرار به‌صورت پانل سفارشی در ۱۸ متر مربع در ۳ روز نصب شد.", "Matte anti-stain vinyl with no repeat — custom panel, 18 m² in 3 days.") },
    ],
    cover: "/images/portfolios/pf-cafe.jpg",
    gallery: ["/images/portfolios/pf-cafe.jpg", "/images/patterns/p05.jpg"],
    artistId: null, patternIds: ["pattern-torn-paper"], productIds: [],
    client: L("کافه سنگ‌فرش", "Sangfarsh Café"), location: L("کرج", "Karaj"), year: 2024,
    scope: L("طراحی الگو، چاپ پانل سفارشی", "Pattern design, custom panel print"),
    categoryId: "cat-abstract", featured: true, isProject: true, size: "wide",
  },
  {
    id: "portfolio-nursery-moon-cloud",
    slug: "nursery-moon-cloud",
    title: L("اتاق نوزاد؛ ماه، ابر و بالن", "Nursery — Moon, Cloud & Balloon"),
    subtitle: L("چاپ با جوهر پایه‌آب، مناسب اتاق نوزاد", "Printed with odourless water-based inks"),
    intro: L("الگوی پاستلی با ماه‌های خواب‌آلود، ابر و بالن‌های کوچک در کرم، آبی پودری و خردلی؛ چاپ با جوهر پایه‌آب بدون بو.", "A pastel nursery pattern with sleepy moons, clouds and little balloons in cream, powder blue and mustard — printed with odourless water-based inks."),
    story: [
      { type: "image", image: "/images/portfolios/pf-kids.jpg" },
      { type: "text", text: L("نان‌وون بدون PVC با جوهر گرین‌گارد، مناسب اتاق نوزاد؛ ۱۴ متر مربع در ۲ روز.", "PVC-free non-woven with GreenGuard ink — 14 m² in 2 days.") },
    ],
    cover: "/images/portfolios/pf-kids.jpg",
    gallery: ["/images/portfolios/pf-kids.jpg", "/images/patterns/p07.jpg"],
    artistId: "artist-sara-mehr", patternIds: ["pattern-little-moons"], productIds: [],
    client: L("خصوصی", "Private"), location: L("تهران", "Tehran"), year: 2025,
    scope: L("کاغذ دیواری کودک", "Kids wallpaper"),
    categoryId: "cat-kids", featured: true, isProject: false, size: "square",
  },
  {
    id: "portfolio-studio-minimal-office",
    slug: "studio-minimal-office",
    title: L("استودیوی مینیمال؛ دفتر معماری", "Minimal Office — Architecture Studio"),
    subtitle: L("دفتری که تقریباً سفید است", "An office that is almost white"),
    intro: L("برای یک استودیوی معماری، شبکه‌ی ظریف روی تنها دیوار اصلی نصب شد؛ بقیه سفید ماند.", "For an architecture studio, a fine hairline grid was applied to the single main wall — the rest stayed white."),
    story: [
      { type: "image", image: "/images/portfolios/pf-office.jpg" },
      { type: "text", text: L("کاغذ دیواری مینیمال در دفتر کار؛ نظم بصری بدون شلوغی.", "Minimal wallpaper in the workplace — visual order without noise.") },
    ],
    cover: "/images/portfolios/pf-office.jpg",
    gallery: ["/images/portfolios/pf-office.jpg", "/images/patterns/p06.jpg"],
    artistId: "artist-arman-kian", patternIds: ["pattern-hairline-grid"], productIds: [],
    client: L("خصوصی", "Private"), location: L("تهران", "Tehran"), year: 2025,
    scope: L("کاغذ دیواری", "Wallpaper"),
    categoryId: "cat-minimal", featured: false, isProject: true, size: "square",
  },
];

/* ------------------------------------------------------------------ */
/* Education                                                            */
/* ------------------------------------------------------------------ */
const body = (fa: string, en: string) => L(fa, en);
export const education: EducationItem[] = [
  { id: "edu-pattern-design-foundations", slug: "pattern-design-foundations", type: "course", title: L("مبانی طراحی الگو", "Pattern Design Foundations"), excerpt: L("از موتیف تا تکرار بی‌درز؛ دوره‌ی جامع برای شروع حرفه‌ای.", "From motif to seamless repeat — the complete course to start professionally."), body: body("در این دوره یاد می‌گیرید چطور یک موتیف را طراحی، پالت را انتخاب و تکرار بی‌درز بسازید. هر درس با تمرین عملی همراه است.\n\nفصل اول به مشاهده و اسکیس می‌پردازد. فصل دوم به ساختار تکرار: بلوک، نیم‌افت و آجری. فصل سوم درباره‌ی رنگ و مقیاس برای کاغذ دیواری و پارچه است.", "In this course you learn to design a motif, choose a palette and build a seamless repeat. Every lesson comes with a practical exercise.\n\nChapter one covers observation and sketching. Chapter two covers repeat structures: block, half-drop and brick. Chapter three covers colour and scale for wallpaper and textile."), image: "/images/education/e01.jpg", authorId: "artist-niloufar-rad", difficulty: "beginner", durationMin: 420, lessons: 18, categoryId: "cat-botanical", patternIds: ["pattern-quiet-garden", "pattern-dusty-bloom"], productIds: ["product-atelier-cushion-quiet-garden"], featured: true, popular: true, publishedAt: "2026-06-01" },
  { id: "edu-gouache-botanicals", slug: "gouache-botanicals", type: "tutorial", title: L("گیاهان با گواش", "Botanicals in Gouache"), excerpt: L("یک برگ سرخس را از اسکیس تا اسکن آماده‌ی چاپ دنبال کنید.", "Follow a single fern frond from sketch to print-ready scan."), body: body("در این آموزش کوتاه، نیلوفر راد فرآیند نقاشی یک برگ را با گواش نشان می‌دهد و نکات اسکن و تمیزکاری دیجیتال را می‌گوید.", "In this short tutorial, Niloufar Rad shows the process of painting a single leaf in gouache and shares scanning and digital clean-up tips."), image: "/images/education/e02.jpg", authorId: "artist-niloufar-rad", difficulty: "intermediate", durationMin: 35, lessons: 1, categoryId: "cat-botanical", patternIds: ["pattern-quiet-garden"], productIds: [], featured: true, popular: true, publishedAt: "2026-07-14" },
  { id: "edu-geometry-and-rhythm", slug: "geometry-and-rhythm", type: "course", title: L("هندسه و ریتم", "Geometry & Rhythm"), excerpt: L("ساخت الگوهای هندسی دقیق با شبکه و تقارن.", "Building precise geometric patterns with grids and symmetry."), body: body("آرمان کیان روش کارش با شبکه‌های شش‌ضلعی و تقارن‌های ۱۷گانه را آموزش می‌دهد.", "Arman Kian teaches his method with hexagonal grids and the 17 wallpaper symmetry groups."), image: "/images/education/e03.jpg", authorId: "artist-arman-kian", difficulty: "advanced", durationMin: 300, lessons: 12, categoryId: "cat-geometric", patternIds: ["pattern-arc-lattice", "pattern-hairline-grid"], productIds: ["product-art-print-arc-lattice"], featured: true, popular: false, publishedAt: "2026-05-20" },
  { id: "edu-reading-persian-ornament", slug: "reading-persian-ornament", type: "article", title: L("خواندن نقش ایرانی", "Reading Persian Ornament"), excerpt: L("اسلیمی، ختایی و بته‌جقه؛ واژه‌نامه‌ای تصویری برای طراح امروز.", "Eslimi, khatai and boteh — a visual vocabulary for today's designer."), body: body("این مقاله سه خانواده‌ی اصلی نقش ایرانی را معرفی می‌کند و نشان می‌دهد چطور می‌توان آن‌ها را برای فضاهای معاصر ساده کرد.", "This article introduces the three main families of Persian ornament and shows how to simplify them for contemporary spaces."), image: "/images/education/e04.jpg", authorId: "artist-hossein-tabrizi", difficulty: "beginner", durationMin: 12, lessons: 1, categoryId: "cat-persian", patternIds: ["pattern-lapis-eslimi"], productIds: ["product-rug-lapis-eslimi"], featured: false, popular: true, publishedAt: "2026-04-02" },
  { id: "edu-path-surface-designer", slug: "path-surface-designer", type: "path", title: L("مسیر: طراح سطح حرفه‌ای", "Path: Professional Surface Designer"), excerpt: L("مسیر یادگیری چهارمرحله‌ای از مبانی تا عرضه در مارکت‌پلیس.", "A four-stage learning path from foundations to marketplace launch."), body: body("مرحله ۱: مبانی. مرحله ۲: تکنیک. مرحله ۳: تولید و فایل نهایی. مرحله ۴: لایسنس، قیمت‌گذاری و انتشار در رزی آتلیه.", "Stage 1: foundations. Stage 2: technique. Stage 3: production files. Stage 4: licensing, pricing and publishing on Rosie Atelier."), image: "/images/education/e05.jpg", authorId: "artist-niloufar-rad", difficulty: "beginner", durationMin: 1200, lessons: 46, categoryId: "cat-contemporary", patternIds: [], productIds: [], featured: true, popular: false, publishedAt: "2026-03-10" },
  { id: "edu-colour-for-interiors", slug: "colour-for-interiors", type: "tutorial", title: L("رنگ برای فضای داخلی", "Colour for Interiors"), excerpt: L("چطور پالت الگو را با نور و متریال فضا هماهنگ کنیم.", "How to tune a pattern's palette to a room's light and materials."), body: body("سارا مهر با مثال‌های واقعی توضیح می‌دهد چطور یک پالت را برای نور شمالی یا جنوبی تنظیم کند.", "Sara Mehr explains with real examples how to adjust a palette for north- or south-facing light."), image: "/images/education/e06.jpg", authorId: "artist-sara-mehr", difficulty: "intermediate", durationMin: 48, lessons: 1, categoryId: "cat-floral", patternIds: ["pattern-dusty-bloom", "pattern-little-moons"], productIds: ["product-atelier-throw-dusty-bloom"], featured: false, popular: true, publishedAt: "2026-08-05" },
];

export const stories: Story[] = [
  { id: "story-niloufar-rad-morning-light", slug: "niloufar-rad-morning-light", artistId: "artist-niloufar-rad", title: L("نور صبح در استودیوی نیلوفر", "Morning light in Niloufar's studio"), excerpt: L("درباره‌ی گواش، صبر و اینکه چرا هر الگو با یک برگ شروع می‌شود.", "On gouache, patience and why every pattern starts with one leaf."), body: L("«من همیشه با یک برگ شروع می‌کنم…»", '"I always begin with a single leaf\u2026"'), image: "/images/hero/hero-main.jpg", publishedAt: "2026-07-01" },
  { id: "story-hossein-tabrizi-forty-years", slug: "hossein-tabrizi-forty-years", artistId: "artist-hossein-tabrizi", title: L("چهل سال با نقش", "Forty years with ornament"), excerpt: L("حسین تبریزی از کارگاه کاشی تا مارکت‌پلیس دیجیتال.", "Hossein Tabrizi from the tile workshop to a digital marketplace."), body: L("«نقش زبان است؛ فقط باید امروز حرفش را بزنی.»", '"Ornament is a language; you just have to speak it today."'), image: "/images/portfolios/pf02.jpg", publishedAt: "2026-06-12" },
  { id: "story-sara-mehr-small-stories", slug: "sara-mehr-small-stories", artistId: "artist-sara-mehr", title: L("داستان‌های کوچک سارا", "Sara's small stories"), excerpt: L("چطور یک اتاق کودک می‌تواند یک کتاب تصویری باشد.", "How a nursery can be a picture book."), body: L("«الگوی کودک باید مثل لالایی باشد.»", '"A kids\' pattern should feel like a lullaby."'), image: "/images/portfolios/pf03.jpg", publishedAt: "2026-05-22" },
];

export const collections: Collection[] = [
  { id: "col-atelier-exclusive", slug: "atelier-exclusive", title: L("کالکشن اختصاصی آتلیه", "Atelier Exclusive"), description: L("محصولات طراحی و تولیدشده توسط رزی آتلیه.", "Products designed and produced by Rosie Atelier."), cover: "/images/products/lamp-0.jpg", patternIds: ["pattern-torn-paper", "pattern-hairline-grid"], productIds: ["product-atelier-cushion-quiet-garden", "product-atelier-throw-dusty-bloom", "product-atelier-tray-torn-paper", "product-atelier-lamp-copper-damask"] },
  { id: "col-quiet-interiors", slug: "quiet-interiors", title: L("فضاهای آرام", "Quiet Interiors"), description: L("مینیمال، گیاهی و آرام برای خانه‌های روشن.", "Minimal, botanical and calm for bright homes."), cover: "/images/patterns/p01.jpg", patternIds: ["pattern-quiet-garden", "pattern-hairline-grid", "pattern-dusty-bloom"], productIds: ["product-atelier-cushion-quiet-garden"] },
  { id: "col-evening-spaces", slug: "evening-spaces", title: L("فضاهای شبانه", "Evening Spaces"), description: L("عمق، فلز و نور کم.", "Depth, metal and low light."), cover: "/images/patterns/p08.jpg", patternIds: ["pattern-copper-damask", "pattern-arc-lattice", "pattern-lapis-eslimi"], productIds: ["product-atelier-lamp-copper-damask", "product-art-print-arc-lattice"] },
];

export const homeSections: HomeSection[] = [
  "hero", "discovery", "trending", "bestSellers", "newPatterns", "artists", "portfolios", "styles", "spaces", "exclusive", "projects", "education", "b2b", "custom", "stories", "newsletter",
].map((key, i) => ({ key: key as HomeSection["key"], enabled: true, order: i + 1 }));

export const banners: Banner[] = [
  { id: "banner-free-shipping", title: L("ارسال رایگان", "Free shipping"), text: L("برای سفارش‌های کالکشن اختصاصی بالای ۲ میلیون تومان", "On exclusive collection orders over $120"), href: "/shop", enabled: true, placement: "shop" },
];

export const seo: SeoMeta[] = [
  { path: "/", title: L("رزی آتلیه — الگو، طراحی، خلاقیت", "Rosie Atelier — Pattern, Design, Creativity"), description: L("پلتفرم کشف الگو، محصولات دکوراتیو و همکاری با طراحان مستقل.", "A platform for pattern discovery, decorative products and independent designers.") },
  { path: "/patterns", title: L("الگوها — رزی آتلیه", "Patterns — Rosie Atelier"), description: L("کتابخانه‌ی الگوهای اورجینال با لایسنس تجاری.", "A library of original patterns with commercial licenses.") },
  { path: "/shop", title: L("فروشگاه — رزی آتلیه", "Shop — Rosie Atelier"), description: L("کالکشن اختصاصی و محصولات هنرمندان.", "Exclusive collection and artist products.") },
  { path: "/portfolio", title: L("پورتفولیو — رزی آتلیه", "Portfolio — Rosie Atelier"), description: L("گالری دیجیتال پروژه‌های اجراشده.", "A digital gallery of realised projects.") },
  { path: "/academy", title: L("آکادمی — رزی آتلیه", "Academy — Rosie Atelier"), description: L("آموزش طراحی الگو از مبانی تا انتشار.", "Pattern design education from foundations to publishing.") },
];

export const hero: HeroContent = {
  eyebrow: L("استودیوی الگو و طراحی · از ۱۴۰۲", "Pattern & design studio · est. 2023"),
  titleA: L("الگوهایی که", "Patterns that"),
  titleB: L("فضا را روایت می‌کنند.", "tell the story of a space."),
  description: L("رزی آتلیه پلتفرم کشف الگو، محصولات دکوراتیو و همکاری با طراحان مستقل است — از سطح تا سبک زندگی.", "Rosie Atelier is a platform for discovering patterns, decorative products and collaborating with independent designers — from surface to lifestyle."),
  image: "/images/hero/hero-main.jpg",
  images: [
    "/images/hero/hero-main.jpg",
    "/images/portfolios/pf01.jpg",
    "/images/hero/hero-clock1.jpg",
    "/images/hero/hero-clock.jpg",
  ],
  ctaHref: "/patterns",
  cta2Href: "/portfolio",
  featuredPatternIds: ["pattern-quiet-garden", "pattern-lapis-eslimi", "pattern-copper-damask", "pattern-dusty-bloom"],
};

export const seedContent: SiteContent = {
  categories, spaces, artists, patterns, products, portfolios, education, stories, collections, homeSections, banners, seo, hero,
};
