"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Shield,
  Cpu,
  Leaf,
  Accessibility,
  Car,
  Lock,
  Users,
  Lightbulb,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const subPrograms = [
  {
    title: "UDAAN \u2014 Idea to Impact",
    description:
      "A 2-day entrepreneurship bootcamp designed to take participants from raw ideas to actionable impact. Covered design thinking, MVP development, prototyping, and pitching.",
    highlights: [
      "29 students from 6 UP districts",
      "Hands-on design thinking workshops",
      "MVP development and prototyping",
      "Pitching and feedback sessions",
    ],
    icon: Zap,
    image: "/images/programs/udaan.webp",
  },
  {
    title: "BOSCH-BMU Innovation Challenge",
    description:
      "In collaboration with Bosch India Foundation, this innovation challenge focuses on Road Safety and Sustainable/Inclusive Mobility. 8 innovators were selected for the first cohort.",
    highlights: [
      "8 innovators selected for first cohort",
      "Focus: Road Safety & Sustainable Mobility",
      "2-day bootcamp: March 26\u201327, 2026",
      "Held at BMU campus, Gurugram",
    ],
    icon: Car,
    image: "/images/programs/bosch-bmu.png",
  },
];

const focusAreas = [
  { name: "ADAS (Advanced Driver Assistance)", icon: Car },
  { name: "Electric Mobility", icon: Zap },
  { name: "Green Energy", icon: Leaf },
  { name: "Assistive Mobility", icon: Accessibility },
  { name: "Cybersecurity", icon: Lock },
  { name: "Sustainable Transport", icon: Shield },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function CorporateInnovationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light min-h-[50vh] flex items-center pt-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-white/10 text-white/80 rounded-full mb-6">
                Corporate Partnership
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight">
                Corporate Innovation{" "}
                Program
              </h1>
              <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-lg">
                Fostering creativity, accelerating problem-solving, and driving
                strategic growth. We enable employees, startup partners, and
                industry experts to collaborate on solving complex innovation
                challenges together.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary font-semibold rounded-full hover:bg-gray-50 transition-colors shadow-lg"
                >
                  Partner With Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/programs/mera-business/dsc02116-(1).jpg"
                  alt="Corporate Innovation"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Where Corporates Meet{" "}
                <span className="text-primary">Innovation</span>
              </h2>
              <p className="text-text-muted leading-relaxed text-lg">
                Our Corporate Innovation Program bridges the gap between
                established industries and emerging startups. By creating
                structured collaboration opportunities, we help corporates solve
                strategic challenges while giving innovators access to real-world
                problems, resources, and scale.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sub-Programs */}
      <section className="py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Initiatives"
            title="Innovation Programs"
            description="Structured programs that bring together corporates, startups, and students to drive meaningful innovation."
          />

          <div className="space-y-12 mt-8">
            {subPrograms.map((program, i) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
                  </div>
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <program.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        {program.title}
                      </h3>
                    </div>
                    <p className="text-text-muted leading-relaxed mb-6">
                      {program.description}
                    </p>
                    <ul className="space-y-2">
                      {program.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                          <span className="text-foreground font-medium">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Innovation Themes"
            title="Focus Areas"
            description="Our corporate innovation programs target high-impact sectors where technology and sustainability converge."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4 max-w-4xl mx-auto">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-section-alt rounded-2xl p-6 text-center border border-border/50 hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <area.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-sm font-semibold text-foreground">
                  {area.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Model */}
      <section className="py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                label="How We Work"
                title="Our Collaboration Model"
                align="left"
                description="We create structured frameworks that allow corporates to tap into grassroots innovation while providing innovators with the resources they need to scale."
              />
              <div className="space-y-4 mt-2">
                {[
                  {
                    icon: Users,
                    title: "Talent Sourcing",
                    desc: "Identify and onboard high-potential innovators aligned with corporate problem statements.",
                  },
                  {
                    icon: Lightbulb,
                    title: "Bootcamp & Mentorship",
                    desc: "Intensive workshops covering design thinking, prototyping, MVP development, and business modeling.",
                  },
                  {
                    icon: Zap,
                    title: "Pilot & Scale",
                    desc: "Connect validated solutions with corporate partners for real-world pilot opportunities and market access.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-sm text-text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[7, 8, 9, 10].map((n) => (
                <div key={n} className="rounded-2xl overflow-hidden">
                  <Image
                    src={`/images/infrastructure/${n}.png`}
                    alt={`Innovation Space ${n}`}
                    width={300}
                    height={220}
                    className="w-full h-44 object-cover object-bottom hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary-dark to-[#8b4513] text-white relative overflow-hidden">
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
              Let&apos;s Innovate Together
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Whether you&apos;re a corporate looking to drive innovation or an
              innovator seeking industry challenges — our Corporate Innovation
              Program is designed for meaningful collaboration.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-50 transition-colors shadow-lg"
              >
                Get In Touch <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                All Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
