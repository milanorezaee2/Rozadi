"use client";

import { Heart } from "lucide-react";
import { useState } from "react";
import { useFavorites, useLocale } from "@/components/providers/AppProviders";
import { cn, formatPrice, href, t } from "@/lib/utils";
import type { PatternCardData } from "@/components/cards/PatternCard";
import { AddToCartButton } from "./Actions";

const LICENSES = [
  { id: "personal", fa: "شخصی", en: "Personal", mult: 1 },
  { id: "commercial", fa: "تجاری", en: "Commercial", mult: 2.4 },
  { id: "extended", fa: "گسترده", en: "Extended", mult: 4 },
];

export function PatternBuyBox({ pattern }: { pattern: PatternCardData }) {
  const { locale, dict } = useLocale();
  const { has, toggle } = useFavorites();
  const [lic, setLic] = useState(LICENSES[1]);
  const price = { fa: Math.round((pattern.price.fa * lic.mult) / 10000) * 10000, en: Math.round(pattern.price.en * lic.mult) };
  const fav = has(pattern.id);
  return (
    <div className="mt-6">
      <p className="text-label text-muted">{dict.common.license}</p>
      <div role="radiogroup" className="mt-3 grid grid-cols-3 gap-2">
        {LICENSES.map((l) => (
          <button key={l.id} role="radio" aria-checked={lic.id === l.id} onClick={() => setLic(l)} className={cn("rounded-md border px-3 py-2.5 text-start transition-colors", lic.id === l.id ? "border-foreground bg-background-secondary" : "border-border hover:border-foreground/50")}>
            <span className="block text-sm font-medium">{locale === "fa" ? l.fa : l.en}</span>
            <span className="block text-caption text-foreground-secondary tabular">{formatPrice({ fa: Math.round((pattern.price.fa * l.mult) / 10000) * 10000, en: Math.round(pattern.price.en * l.mult) }, locale)}</span>
          </button>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-3">
        <span className="text-h2 font-semibold tabular">{formatPrice(price, locale)}</span>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <AddToCartButton variant="wide" line={{ kind: "pattern", id: pattern.id, sku: pattern.sku, title: `${t(pattern.title, locale)} — ${locale === "fa" ? lic.fa : lic.en}`, image: pattern.image, price, href: href(locale, `/patterns/${pattern.slug}`), colorName: locale === "fa" ? lic.fa : lic.en }} />
        <button type="button" aria-pressed={fav} aria-label={dict.common.favorite} onClick={() => toggle(pattern.id)} className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-md border transition-colors", fav ? "border-accent text-accent" : "border-border hover:border-foreground")}>
          <Heart className={cn("h-5 w-5", fav && "fill-current")} />
        </button>
      </div>
    </div>
  );
}
