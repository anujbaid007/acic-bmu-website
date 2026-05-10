"use client";

import { motion } from "framer-motion";
import InteractiveImageBentoGallery from "@/components/ui/bento-gallery";
import type { ImageItem } from "@/components/ui/bento-gallery";

const galleryImages: ImageItem[] = [
  {
    id: 1,
    title: "Faculty Program on Applied Entrepreneurship",
    desc: "Empowering educators with entrepreneurial skills",
    url: "/images/events/fpae.jpg",
    span: "row-span-2",
  },
  {
    id: 2,
    title: "ACIC Infrastructure",
    desc: "State-of-the-art innovation facilities",
    url: "/images/infrastructure/1.png",
    span: "",
  },
  {
    id: 3,
    title: "Workspace",
    desc: "Modern co-working environment",
    url: "/images/infrastructure/2.png",
    span: "",
  },
  {
    id: 4,
    title: "Ideathon",
    desc: "Where ideas take shape",
    url: "/images/events/ideathon.jpg",
    span: "row-span-2",
  },
  {
    id: 5,
    title: "Collaborative Space",
    desc: "Designed for teamwork and creativity",
    url: "/images/infrastructure/3.png",
    span: "",
  },
  {
    id: 6,
    title: "Hackathon",
    desc: "48 hours of building and learning",
    url: "/images/events/hackathon.jpg",
    span: "",
  },
  {
    id: 7,
    title: "Innovation Lab",
    desc: "Prototyping and testing ground",
    url: "/images/infrastructure/4.png",
    span: "",
  },
  {
    id: 8,
    title: "Hult Prize",
    desc: "Global social entrepreneurship competition",
    url: "/images/events/hult-prize.jpg",
    span: "row-span-2",
  },
  {
    id: 9,
    title: "Meeting Room",
    desc: "Private meeting and mentoring spaces",
    url: "/images/infrastructure/5.png",
    span: "",
  },
  {
    id: 10,
    title: "Entrepreneurship Game",
    desc: "Learning entrepreneurship through play",
    url: "/images/events/entrepreneurship-game.jpg",
    span: "",
  },
  {
    id: 11,
    title: "Incubation Center",
    desc: "Where startups find their footing",
    url: "/images/infrastructure/6.png",
    span: "row-span-2",
  },
  {
    id: 12,
    title: "Event Hall",
    desc: "Hosting workshops and conferences",
    url: "/images/infrastructure/7.png",
    span: "",
  },
  {
    id: 13,
    title: "Problem Worth Solving",
    desc: "Identifying real-world challenges",
    url: "/images/events/problem-worth-solving.jpg",
    span: "",
  },
  {
    id: 14,
    title: "Startup Bay",
    desc: "Dedicated space for startup teams",
    url: "/images/infrastructure/8.png",
    span: "",
  },
  {
    id: 15,
    title: "ATL Student Innovator Program",
    desc: "Nurturing young innovators from ATL schools",
    url: "/images/events/atl-student-innovator.jpg",
    span: "row-span-2",
  },
  {
    id: 16,
    title: "Co-working Area",
    desc: "Open desks for early-stage founders",
    url: "/images/infrastructure/9.png",
    span: "",
  },
  {
    id: 17,
    title: "Campus View",
    desc: "BMU campus innovation ecosystem",
    url: "/images/infrastructure/10.png",
    span: "",
  },
];

export default function GalleryPage() {
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
              Moments from our journey — events, programs, workshops, and
              celebrations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bento Gallery */}
      <InteractiveImageBentoGallery
        imageItems={galleryImages}
        title="Capturing Our Journey"
        description="A visual story of innovation, collaboration, and growth at ACIC-BMU Foundation."
      />
    </>
  );
}
