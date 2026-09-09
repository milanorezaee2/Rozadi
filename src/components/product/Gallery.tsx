"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

/** Product/pattern gallery: large stage + thumbnail rail, keyboard accessible. */
export function Gallery({ images, alt, className, ratio = "aspect-[4/5]" }: { images: string[]; alt: string; className?: string; ratio?: string }) {
  const [i, setI] = useState(0);
  const list = images.length ? images : ["/images/patterns/p06.jpg"];
  return (
    <div className={cn("grid gap-3", className)}>
      <div className={cn("relative overflow-hidden rounded-lg bg-background-secondary", ratio)}>
        {list.map((src, idx) => (
          <Image key={src + idx} src={src} alt={alt} fill priority={idx === 0} sizes="(max-width:1024px) 100vw, 55vw" className={cn("object-cover transition-[opacity,transform] duration-700 ease-[var(--ease-out)]", idx === i ? "opacity-100 scale-100" : "opacity-0 scale-[1.03]")} />
        ))}
      </div>
      {list.length > 1 && (
        <div role="tablist" className="no-scrollbar flex gap-2 overflow-x-auto">
          {list.map((src, idx) => (
            <button key={src + idx} role="tab" aria-selected={idx === i} aria-label={`${alt} ${idx + 1}`} onClick={() => setI(idx)} className={cn("relative h-20 w-16 shrink-0 overflow-hidden rounded-md ring-offset-2 ring-offset-background transition-[box-shadow,opacity]", idx === i ? "ring-2 ring-foreground" : "opacity-70 hover:opacity-100")}>
              <Image src={src} alt="" fill sizes="64px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
