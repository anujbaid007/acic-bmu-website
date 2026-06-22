"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Image as ImageIcon, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export interface BannerSlide {
  /** Banner artwork. Leave empty to render a placeholder slot. */
  image?: string;
  alt?: string;
  /** Background colour used to blend the letterbox area around the banner. */
  bg?: string;
  /** Vertical anchor for the banner within the slide ("top" | "center"). */
  position?: "top" | "center";
}

/**
 * Full-width homepage banner carousel. Banners are shown in full (never cropped)
 * and open in a lightbox popup on click. Slides render as empty placeholders
 * until final banner artwork is supplied — set `image` on each slide to fill it.
 */
export default function BannerSlider({ slides }: { slides: BannerSlide[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selected, setSelected] = useState(0);
  const [popup, setPopup] = useState<BannerSlide | null>(null);
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

  // Close popup on Escape + lock background scroll while open
  useEffect(() => {
    if (!popup) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPopup(null);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [popup]);

  return (
    <section className="relative bg-white">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, i) => (
            <div
              key={i}
              style={{ backgroundColor: slide.bg ?? "#ffffff" }}
              className="relative flex-[0_0_100%] aspect-[2/1] max-h-[88vh] min-h-[240px]"
            >
              {slide.image ? (
                <button
                  type="button"
                  onClick={() => setPopup(slide)}
                  aria-label={slide.alt ? `View banner: ${slide.alt}` : `View banner ${i + 1}`}
                  className="absolute inset-0 h-full w-full cursor-zoom-in"
                >
                  <Image
                    src={slide.image}
                    alt={slide.alt ?? ""}
                    fill
                    priority={i === 0}
                    sizes="100vw"
                    className={`object-contain ${slide.position === "top" ? "object-top" : "object-center"}`}
                  />
                </button>
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

      {/* Lightbox popup */}
      <AnimatePresence>
        {popup?.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8"
            onClick={() => setPopup(null)}
          >
            <button
              onClick={() => setPopup(null)}
              aria-label="Close banner preview"
              className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={popup.image}
                alt={popup.alt ?? ""}
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
