"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

export interface BannerSlide {
  /** Banner artwork. Leave empty to render a placeholder slot. */
  image?: string;
  alt?: string;
}

/**
 * Full-width homepage banner carousel. Slides render as empty placeholders
 * until final banner artwork is supplied — set `image` on each slide to fill it.
 * No headline/overlay text is rendered; the banner artwork carries its own content.
 */
export default function BannerSlider({ slides }: { slides: BannerSlide[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selected, setSelected] = useState(0);
  const multiple = slides.length > 1;

  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="relative flex-[0_0_100%] h-[60vh] min-h-[400px] sm:h-[70vh]"
            >
              {slide.image ? (
                <Image
                  src={slide.image}
                  alt={slide.alt ?? ""}
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-section-alt via-warm to-warm-dark">
                  <div className="flex flex-col items-center gap-2 text-text-muted/40">
                    <ImageIcon className="w-10 h-10" strokeWidth={1.5} />
                    <span className="text-xs font-medium uppercase tracking-[0.2em]">
                      Banner {i + 1}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {multiple && (
        <>
          <button
            onClick={scrollPrev}
            aria-label="Previous banner"
            className="hidden sm:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-black/5 hover:bg-black/15 backdrop-blur-sm border border-black/10 items-center justify-center text-foreground/60 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next banner"
            className="hidden sm:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-black/5 hover:bg-black/15 backdrop-blur-sm border border-black/10 items-center justify-center text-foreground/60 transition-colors"
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>

          <div className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-10 flex gap-2.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Go to banner ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  selected === i
                    ? "w-8 bg-primary"
                    : "w-2 bg-foreground/20 hover:bg-foreground/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
