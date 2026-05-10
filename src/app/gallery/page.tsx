"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryImage {
  src: string;
  title: string;
  desc: string;
}

const galleryImages: GalleryImage[] = [
  { src: "/images/events/fpae.jpg", title: "Faculty Program on Applied Entrepreneurship", desc: "Empowering educators with entrepreneurial skills" },
  { src: "/images/infrastructure/1.png", title: "ACIC Infrastructure", desc: "State-of-the-art innovation facilities" },
  { src: "/images/infrastructure/2.png", title: "Workspace", desc: "Modern co-working environment" },
  { src: "/images/events/ideathon.jpg", title: "Ideathon", desc: "Where ideas take shape" },
  { src: "/images/infrastructure/3.png", title: "Collaborative Space", desc: "Designed for teamwork and creativity" },
  { src: "/images/events/hackathon.jpg", title: "Hackathon", desc: "48 hours of building and learning" },
  { src: "/images/infrastructure/4.png", title: "Innovation Lab", desc: "Prototyping and testing ground" },
  { src: "/images/events/hult-prize.jpg", title: "Hult Prize", desc: "Global social entrepreneurship competition" },
  { src: "/images/infrastructure/5.png", title: "Meeting Room", desc: "Private meeting and mentoring spaces" },
  { src: "/images/events/entrepreneurship-game.jpg", title: "Entrepreneurship Game", desc: "Learning entrepreneurship through play" },
  { src: "/images/infrastructure/6.png", title: "Incubation Center", desc: "Where startups find their footing" },
  { src: "/images/infrastructure/7.png", title: "Event Hall", desc: "Hosting workshops and conferences" },
  { src: "/images/events/problem-worth-solving.jpg", title: "Problem Worth Solving", desc: "Identifying real-world challenges" },
  { src: "/images/infrastructure/8.png", title: "Startup Bay", desc: "Dedicated space for startup teams" },
  { src: "/images/events/atl-student-innovator.jpg", title: "ATL Student Innovator Program", desc: "Nurturing young innovators from ATL schools" },
  { src: "/images/infrastructure/9.png", title: "Co-working Area", desc: "Open desks for early-stage founders" },
  { src: "/images/infrastructure/10.png", title: "Campus View", desc: "BMU campus innovation ecosystem" },
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  );
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setSlideCount(emblaApi.scrollSnapList().length);
    const onSelect = () => setCurrentSlide(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") setSelectedIndex((prev) => prev !== null ? (prev + 1) % galleryImages.length : null);
      if (e.key === "ArrowLeft") setSelectedIndex((prev) => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light min-h-[50vh] flex items-center pt-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-white/10 text-white/80 rounded-full mb-6">
              Our Moments
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white max-w-4xl mx-auto">
              Gallery
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Moments from our journey — events, programs, workshops, and celebrations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-12 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Capturing Our Journey
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-muted">
              A visual story of innovation, collaboration, and growth at ACIC-BMU Foundation.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
              <div className="flex">
                {galleryImages.map((image, i) => (
                  <div
                    key={i}
                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-2"
                  >
                    <div
                      className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
                      onClick={() => setSelectedIndex(i)}
                    >
                      <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        className="object-cover object-bottom transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <h3 className="text-sm font-bold text-white">{image.title}</h3>
                        <p className="text-xs text-white/70 mt-0.5">{image.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nav Buttons */}
            <button
              onClick={scrollPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-1.5 mt-6">
            {Array.from({ length: slideCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentSlide ? "w-6 bg-primary" : "w-2 bg-foreground/20"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black">
                <Image
                  src={galleryImages[selectedIndex].src}
                  alt={galleryImages[selectedIndex].title}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="text-white font-bold text-lg">{galleryImages[selectedIndex].title}</h3>
                <p className="text-white/60 text-sm">{galleryImages[selectedIndex].desc}</p>
              </div>

              {/* Lightbox nav */}
              <button
                onClick={() => setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={() => setSelectedIndex((selectedIndex + 1) % galleryImages.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </motion.div>

            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
