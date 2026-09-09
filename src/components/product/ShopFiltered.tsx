"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { FilterBar } from "@/components/product/FilterBar";
import { ProductGrid } from "@/components/product/Grids";
import { GridSkeleton } from "@/components/ui/States";
import { filterProducts } from "@/lib/data/filters";
import { enrichProduct } from "@/lib/data/enrich";
import type { Locale } from "@/lib/i18n/types";
import type { FilterOption } from "@/components/product/FilterBar";
import type { SiteContent } from "@/lib/types";

interface Props {
  site: SiteContent;
  locale: Locale;
  categories: FilterOption[];
  sorts: FilterOption[];
  extra: { key: string; label: string; options: FilterOption[] }[];
}

function FilteredContent({ site, categories, sorts, extra }: Props) {
  const sp = useSearchParams();

  const spRecord: Record<string, string | undefined> = {};
  sp.forEach((value, key) => {
    spRecord[key] = value;
  });

  const catMap = Object.fromEntries(site.categories.map((c) => [c.slug, c.id]));
  const list = filterProducts(site.products, spRecord, catMap).map((p) => enrichProduct(site, p));

  return (
    <>
      <FilterBar
        total={list.length}
        categories={categories}
        sorts={sorts}
        extra={extra}
      />
      <div className="mt-8">
        <ProductGrid products={list} />
      </div>
    </>
  );
}

export function ShopFiltered(props: Props) {
  return (
    <Suspense fallback={<GridSkeleton ratio="aspect-square" />}>
      <FilteredContent {...props} />
    </Suspense>
  );
}
