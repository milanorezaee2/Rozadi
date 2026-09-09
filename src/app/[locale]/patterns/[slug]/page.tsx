import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, FileDown, Shield } from "lucide-react";
import { Gallery } from "@/components/product/Gallery";
import { PatternBuyBox } from "@/components/product/PatternBuyBox";
import { PatternCard } from "@/components/cards/PatternCard";
import { ProductCard } from "@/components/cards/ProductCard";
import { Badge, Sku } from "@/components/ui/Badge";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { enrichPattern, enrichProduct, getSite } from "@/lib/data/queries";
import { dictionaries } from "@/lib/i18n/dictionary";
import { LOCALES, type Locale } from "@/lib/i18n/types";
import { faNum, href, t } from "@/lib/utils";

type Props = { params: Promise<{ locale: Locale; slug: string }> };

export async function generateStaticParams() {
  const site = await getSite();
  return LOCALES.flatMap((locale) => site.patterns.map((pattern) => ({ locale, slug: pattern.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const site = await getSite();
  const p = site.patterns.find((x) => x.slug === slug);
  return p ? { title: t(p.title, locale), description: t(p.description, locale) } : {};
}

export default async function PatternPage({ params }: Props) {
  const { locale, slug } = await params;
  const site = await getSite();
  const raw = site.patterns.find((x) => x.slug === slug);
  if (!raw) notFound();
  const d = dictionaries[locale];
  const p = enrichPattern(site, raw);
  const related = site.patterns.filter((x) => x.id !== p.id && (x.categoryId === p.categoryId || x.artistId === p.artistId)).slice(0, 4).map((x) => enrichPattern(site, x));
  const products = site.products.filter((x) => x.patternId === p.id).map((x) => enrichProduct(site, x));
  const spaces = site.spaces.filter((s) => p.spaceIds.includes(s.id));

  return (
    <article className="pt-[calc(var(--header-h)+1.5rem)]">
      <div className="container-x">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-caption text-foreground-secondary">
          <Link href={href(locale, "/patterns")} className="hover:text-foreground">{d.nav.patterns}</Link>
          <span>/</span>
          {p.category && <><Link href={href(locale, `/styles/${p.category.slug}`)} className="hover:text-foreground">{t(p.category.name, locale)}</Link><span>/</span></>}
          <span className="text-foreground">{t(p.title, locale)}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7"><Gallery images={p.gallery} alt={t(p.title, locale)} /></div>

          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-[calc(var(--header-h-compact)+1.5rem)]">
              <div className="flex flex-wrap items-center gap-2">
                <Sku value={p.sku} />
                {p.category && <Badge>{t(p.category.name, locale)}</Badge>}
                {p.isNew && <Badge tone="accent">{d.common.new}</Badge>}
                {p.trending && <Badge tone="blue">{d.common.trending}</Badge>}
                {!p.artistId && <Badge tone="accent">{d.common.sitePattern}</Badge>}
              </div>
              <h1 className="mt-4 font-display text-h1 text-balance">{t(p.title, locale)}</h1>
              {p.artist ? (
                <Link href={href(locale, `/artists/${p.artist.slug}`)} className="mt-4 inline-flex items-center gap-3 group">
                  <span className="relative h-10 w-10 overflow-hidden rounded-full"><Image src={p.artist.avatar} alt="" fill sizes="40px" className="object-cover" /></span>
                  <span>
                    <span className="block text-sm font-medium text-foreground group-hover:text-accent">{t(p.artist.name, locale)}</span>
                    <span className="block text-caption text-foreground-secondary">{t(p.artist.profession, locale)}</span>
                  </span>
                </Link>
              ) : (
                <p className="mt-3 text-sm text-foreground-secondary">{d.brand}</p>
              )}
              <p className="mt-6 text-body text-foreground-secondary">{t(p.description, locale)}</p>

              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-border py-6 text-sm">
                <Spec k={d.common.repeat} v={t(p.specs.repeat, locale)} />
                <Spec k={d.common.dpi} v={p.specs.dpi} />
                <Spec k={d.common.formats} v={p.specs.formats} />
                <Spec k={d.common.colors} v={locale === "fa" ? faNum(p.specs.colors) : String(p.specs.colors)} />
                <Spec k={d.common.size} v={t(p.specs.scale, locale)} />
                <div>
                  <dt className="text-caption text-muted">{d.common.colors}</dt>
                  <dd className="mt-1.5 flex gap-1.5">{p.palette.map((c) => <span key={c} className="h-5 w-5 rounded-full ring-1 ring-border" style={{ background: c }} title={c} />)}</dd>
                </div>
              </dl>

              <PatternBuyBox pattern={p} />

              <ul className="mt-6 space-y-2 text-caption text-foreground-secondary">
                <li className="flex items-center gap-2"><Shield className="h-3.5 w-3.5 text-accent" />{d.common.licenseNote}</li>
                <li className="flex items-center gap-2"><FileDown className="h-3.5 w-3.5 text-accent" />{p.specs.formats} · {p.specs.dpi}</li>
                <li className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-accent" />{locale === "fa" ? "دسترسی آنی پس از خرید" : "Instant access after purchase"}</li>
              </ul>

              {spaces.length > 0 && (
                <div className="mt-8">
                  <p className="text-label text-muted">{d.nav.spaces}</p>
                  <div className="mt-3 flex flex-wrap gap-2">{spaces.map((s) => <Link key={s.id} href={href(locale, `/spaces/${s.slug}`)} className="rounded-full border border-border px-3 py-1.5 text-caption hover:border-foreground">{t(s.name, locale)}</Link>)}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {products.length > 0 && (
        <section className="bg-background-secondary"><div className="container-x section-y">
          <SectionHeader eyebrow={d.nav.products} title={d.common.relatedProducts} href={href(locale, "/shop")} hrefLabel={d.nav.viewAll} />
          <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4">{products.map((pr) => <ProductCard key={pr.id} product={pr} />)}</div>
        </div></section>
      )}

      <section className="container-x section-y">
        <SectionHeader eyebrow={d.nav.patterns} title={d.common.relatedPatterns} href={href(locale, "/patterns")} hrefLabel={d.nav.viewAll} />
        <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4">{related.map((x, i) => <Reveal key={x.id} delay={i * 60}><PatternCard pattern={x} /></Reveal>)}</div>
        <div className="mt-10 text-center">
          <Link href={href(locale, "/patterns")} className="inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-0.5">{d.nav.startExploring}<ArrowUpRight className="h-4 w-4 rtl-flip" /></Link>
        </div>
      </section>
    </article>
  );
}

function Spec({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-caption text-muted">{k}</dt>
      <dd className="mt-1 font-medium text-foreground" dir="auto">{v}</dd>
    </div>
  );
}
