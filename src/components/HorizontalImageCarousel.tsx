"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

interface HorizontalImageCarouselProps {
  images: readonly string[];
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  onImageClick?: () => void;
}

export function HorizontalImageCarousel({
  images,
  alt,
  className = "relative h-52 sm:h-56",
  imageClassName = "object-cover",
  sizes = "(max-width: 768px) 100vw, 33vw",
  onImageClick,
}: HorizontalImageCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const slides = images.length > 0 ? images : [];
  if (slides.length === 0) return null;

  const scrollTo = useCallback(
    (next: number) => {
      const el = scrollRef.current;
      if (!el) return;
      const clamped = (next + slides.length) % slides.length;
      const w = el.clientWidth;
      el.scrollTo({ left: clamped * w, behavior: "smooth" });
      setIndex(clamped);
    },
    [slides.length],
  );

  function onScroll() {
    const el = scrollRef.current;
    if (!el || el.clientWidth === 0) return;
    setIndex(Math.round(el.scrollLeft / el.clientWidth));
  }

  return (
    <div className={className}>
      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="flex h-full snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative h-full w-full shrink-0 snap-center"
            onClick={onImageClick}
            onKeyDown={undefined}
            role={onImageClick ? "button" : undefined}
            tabIndex={onImageClick ? 0 : undefined}
          >
            <Image src={src} alt={i === 0 ? alt : ""} fill className={imageClassName} sizes={sizes} />
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              scrollTo(index - 1);
            }}
            className="absolute left-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              scrollTo(index + 1);
            }}
            className="absolute right-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
          >
            ›
          </button>
          <div className="absolute bottom-14 left-0 right-0 z-20 flex justify-center gap-1.5">
            {slides.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-4 bg-white" : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
