"use client";

import { SlidersHorizontal, X } from "lucide-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback, useTransition } from "react";
import { useLocale } from "@/components/providers/AppProviders";
import { Chips } from "@/components/ui/Tabs";
import { cn } from "@/lib/utils";

export interface FilterOption { id: string; label: string }

interface Props {
  categories: FilterOption[];
  sorts: FilterOption[];
  extra?: { key: string; label: string; options: FilterOption[] }[];
  total: number;
  className?: string;
}

/** URL-driven filter bar (shareable, SSR friendly). */
export function FilterBar({ categories, sorts, extra = [], total, className }: Props) {
  const { dict, locale } = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();
  const [pending, start] = useTransition();

  const set = useCallback(
    (key: string, value: string) => {
      const next = new URLSearchParams(sp.toString());
      if (!value || value === "all") next.delete(key);
      else next.set(key, value);
      start(() => router.replace(`${pathname}${next.toString() ? `?${next}` : ""}`, { scroll: false }));
    },
    [sp, router, pathname],
  );
  const hasFilters = Array.from(sp.keys()).length > 0;

  return (
    <div className={cn("sticky top-[var(--header-h-compact)] z-30 -mx-4 border-y border-border bg-background/85 px-4 py-3 backdrop-blur-md md:mx-0 md:rounded-lg md:border md:px-4", className)} aria-busy={pending}>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <SlidersHorizontal className="hidden h-4 w-4 shrink-0 text-muted md:block" />
          <Chips items={categories} value={sp.get("category") ?? "all"} onChange={(v) => set("category", v)} allLabel={dict.common.all} />
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {extra.map((ex) => (
            <select key={ex.key} aria-label={ex.label} value={sp.get(ex.key) ?? "all"} onChange={(e) => set(ex.key, e.target.value)} className="h-9 rounded-full border border-border bg-surface px-3 text-[13px] text-foreground focus:outline-none focus:border-foreground">
              <option value="all">{ex.label}: {dict.common.all}</option>
              {ex.options.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
            </select>
          ))}
          <select aria-label={dict.common.sort} value={sp.get("sort") ?? "all"} onChange={(e) => set("sort", e.target.value)} className="h-9 rounded-full border border-border bg-surface px-3 text-[13px] text-foreground focus:outline-none focus:border-foreground">
            <option value="all">{dict.common.sort}</option>
            {sorts.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
          </select>
          {hasFilters && (
            <button type="button" onClick={() => start(() => router.replace(pathname, { scroll: false }))} className="inline-flex h-9 items-center gap-1 rounded-full px-3 text-[13px] text-foreground-secondary hover:text-foreground">
              <X className="h-3.5 w-3.5" />{dict.common.clear}
            </button>
          )}
          <span className="hidden text-caption text-muted tabular md:inline">{locale === "fa" ? total.toLocaleString("fa-IR") : total} {dict.common.results}</span>
        </div>
      </div>
    </div>
  );
}
