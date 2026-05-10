"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Rocket,
  Users,
  GraduationCap,
  Building2,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Spotlight } from "@/components/ui/spotlight";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const programs = [
  {
    title: "Startup Incubation",
    description:
      "From idea stage to growth stage — we provide structured incubation and acceleration with mentoring, infrastructure, funding access, and industry connections to build market-ready ventures.",
    icon: Rocket,
    href: "/programs/incubation",
    image: "/images/programs/mera-business/dsc00991.jpg",
    stats: "110+ Startups Supported",
  },
  {
    title: "Yuva Udyami",
    description:
      "A youth-focused initiative cultivating entrepreneurial thinking through training, mentorship, hackathons, ideathons, and real-world exposure for the next generation of changemakers.",
    icon: GraduationCap,
    href: "/programs/yuva-udyami",
    image: "/images/events/fpae.jpg",
    stats: "1000+ Youth Impacted",
  },
  {
    title: "Mera Business",
    description:
      "Empowering women in rural and peri-urban areas to launch micro-businesses through structured training in business fundamentals, mentorship, and financial support for independence.",
    icon: Users,
    href: "/programs/mera-business",
    image: "/images/programs/mera-business/hero.jpg",
    stats: "500+ Women Empowered",
  },
  {
    title: "Corporate Innovation",
    description:
      "Fostering creativity, accelerating problem-solving, and driving strategic growth by enabling employees, startup partners, and industry experts to collaborate on innovation challenges.",
    icon: Building2,
    href: "/programs/corporate-innovation",
    image: "/images/programs/mera-business/dsc02116-(1).jpg",
    stats: "Multiple Corporate Partners",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export default function ProgramsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light min-h-[50vh] flex items-center pt-24">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#e67e22" />
        <div className="absolute inset-0 pointer-events-none">
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
              What We Do
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Our Programs
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
              We drive impact through focused verticals — supporting startups at
              every stage, empowering youth with entrepreneurial skills, uplifting
              grassroots women entrepreneurs, and fostering corporate innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-10 lg:py-16 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { end: 110, suffix: "+", label: "Startups Supported" },
              { end: 110, suffix: " Cr+", prefix: "\u20B9", label: "Funds Raised" },
              { end: 500, suffix: "+", label: "Women Empowered" },
              { end: 850, suffix: " Cr+", prefix: "\u20B9", label: "Combined Valuation" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <AnimatedCounter
                  end={stat.end}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  label={stat.label}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-12 lg:py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Verticals"
            title="Programs That Create Real Impact"
            description="Each vertical is designed to address a unique segment of the innovation ecosystem — from early-stage student entrepreneurs to corporate partnerships."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-4">
            {programs.map((program, i) => (
              <motion.div
                key={program.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link href={program.href} className="group block h-full">
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 h-full flex flex-col">
                    <GlowingEffect spread={40} glow proximity={64} disabled={false} borderWidth={2} />
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <span className="px-3 py-1.5 bg-white/90 text-xs font-semibold rounded-full text-primary">
                          {program.stats}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <program.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {program.title}
                        </h3>
                      </div>
                      <p className="text-text-muted leading-relaxed flex-1">
                        {program.description}
                      </p>
                      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
                        Learn More{" "}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-24 bg-gradient-to-br from-primary via-primary-dark to-[#8b4513] text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Be Part of the Change?
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Whether you&apos;re a startup founder, an aspiring youth
              entrepreneur, or a corporate looking to innovate — there&apos;s a
              program designed for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-50 transition-colors shadow-lg"
              >
                Get In Touch <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
