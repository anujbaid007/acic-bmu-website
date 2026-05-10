"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

interface GalleryImage {
  src: string;
  alt: string;
  span?: string; // for grid spanning
}

const galleryImages: GalleryImage[] = [
  {
    src: "/images/events/fpae.jpg",
    alt: "Faculty Program on Applied Entrepreneurship",
    span: "md:col-span-2",
  },
  {
    src: "/images/infrastructure/1.png",
    alt: "ACIC Infrastructure",
  },
  {
    src: "/images/infrastructure/2.png",
    alt: "Workspace",
  },
  {
    src: "/images/events/ideathon.jpg",
    alt: "Ideathon",
    span: "md:col-span-2",
  },
  {
    src: "/images/infrastructure/3.png",
    alt: "Collaborative Space",
  },
  {
    src: "/images/events/hackathon.jpg",
    alt: "Hackathon",
  },
  {
    src: "/images/infrastructure/4.png",
    alt: "Innovation Lab",
  },
  {
    src: "/images/events/hult-prize.jpg",
    alt: "Hult Prize",
    span: "md:col-span-2",
  },
  {
    src: "/images/infrastructure/5.png",
    alt: "Meeting Room",
  },
  {
    src: "/images/events/entrepreneurship-game.jpg",
    alt: "Entrepreneurship Game",
  },
  {
    src: "/images/infrastructure/6.png",
    alt: "Incubation Center",
    span: "md:col-span-2",
  },
  {
    src: "/images/infrastructure/7.png",
    alt: "Event Hall",
  },
  {
    src: "/images/events/problem-worth-solving.jpg",
    alt: "Problem Worth Solving",
  },
  {
    src: "/images/infrastructure/8.png",
    alt: "Startup Bay",
  },
  {
    src: "/images/events/atl-student-innovator.jpg",
    alt: "ATL Student Innovator Program",
    span: "md:col-span-2",
  },
  {
    src: "/images/infrastructure/9.png",
    alt: "Co-working Area",
  },
  {
    src: "/images/infrastructure/10.png",
    alt: "Campus View",
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      {/* ========== HERO ========== */}
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
              Moments from our journey — events, programs, workshops, and
              celebrations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========== GALLERY GRID ========== */}
      <section className="py-12 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Snapshots"
            title="Capturing Our Journey"
            description="A visual story of innovation, collaboration, and growth at ACIC-BMU Foundation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, i) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`relative group cursor-pointer rounded-2xl overflow-hidden ${
                  image.span || ""
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-bottom transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/60 transition-colors duration-300 flex items-end justify-start p-5">
                    <span className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                      {image.alt}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== LIGHTBOX MODAL ========== */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-5xl w-full max-h-[85vh] rounded-2xl overflow-hidden bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[70vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain bg-gray-50"
                  sizes="90vw"
                  priority
                />
              </div>

              <div className="p-5 flex items-center justify-between bg-white border-t border-gray-100">
                <p className="font-medium text-foreground">
                  {selectedImage.alt}
                </p>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close lightbox"
                >
                  <X className="w-5 h-5 text-text-muted" />
                </button>
              </div>
            </motion.div>

            {/* Close button (top right) */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
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
