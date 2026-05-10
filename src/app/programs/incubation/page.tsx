"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Lightbulb,
  Target,
  Users,
  TrendingUp,
  Rocket,
  Banknote,
  CheckCircle2,
  Building2,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const supportAreas = [
  "Idea validation and product development",
  "Business model refinement and go-to-market strategy",
  "Mentorship from industry and domain experts",
  "Investor and corporate connect opportunities",
  "Pilot opportunities and market access support",
];

const investmentPrograms = [
  {
    title: "Startup India Seed Fund Scheme (SISF)",
    description:
      "Supports early-stage startups with financial assistance to help them achieve proof of concept, prototype development, product trials, and market entry.",
    highlights: [
      "Upto \u20B920 lakhs grant",
      "Upto \u20B950 lakhs convertible debt",
      "\u20B95 Crore funds managed",
      "20+ startups supported",
      "10+ products commercialized",
    ],
    icon: Banknote,
  },
  {
    title: "MeitY Startup Hub (MSH) \u2014 GENESIS",
    description:
      "Supports tech-driven startups through tiered funding and mentorship to take innovations from ideation to market scale.",
    highlights: [
      "EiR: \u20B910 lakhs",
      "Pilot: \u20B940 lakhs",
      "Investment: \u20B950 lakhs",
    ],
    icon: Rocket,
  },
  {
    title: "SAMRIDH",
    description:
      "Accelerating high-potential startups through catalytic funding, mentorship, and market access to help them scale and create lasting impact.",
    highlights: ["Upto \u20B950 lakhs funding"],
    icon: TrendingUp,
  },
];

const corporatePrograms = [
  {
    title: "HDFC Bank Parivartan CSR",
    description:
      "A CSR-driven partnership with HDFC Bank focused on community development, skilling, and entrepreneurship promotion through targeted interventions.",
    icon: Building2,
  },
  {
    title: "Bosch Sustainable Mobility",
    description:
      "Collaboration with Bosch India Foundation to support innovations in sustainable and inclusive mobility, road safety, and green transportation.",
    icon: Target,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function IncubationPage() {
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
                Programs
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight">
                Startup Incubation &{" "}
                Acceleration
              </h1>
              <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-lg">
                We support startups from idea stage to growth stage through
                structured incubation and acceleration programs that focus on
                product development, market readiness, and business scaling.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary font-semibold rounded-full hover:bg-gray-50 transition-colors shadow-lg"
                >
                  Apply Now <ArrowRight className="w-4 h-4" />
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
                  src="/images/programs/mera-business/dsc00874-(1).jpg"
                  alt="Startup Incubation Hub"
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

      {/* Key Numbers */}
      <section className="py-10 lg:py-16 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { end: 110, suffix: "+", label: "Startups Supported" },
              { end: 110, suffix: " Cr+", prefix: "\u20B9", label: "Fund Raised" },
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

      {/* Key Support Areas */}
      <section className="py-12 lg:py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                label="What We Offer"
                title="Key Support Areas"
                align="left"
                description="Our incubation program provides end-to-end support to help startups navigate every challenge from ideation to market scale."
              />
              <ul className="space-y-4 mt-2">
                {supportAreas.map((area, i) => (
                  <motion.li
                    key={area}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-text-muted leading-relaxed">
                      {area}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[2, 3, 4, 5].map((n) => (
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

      {/* Investment & Programs */}
      <section className="py-12 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Funding Support"
            title="Investment & Programs"
            description="We channel government and institutional funding to deserving startups through multiple schemes designed for different stages of growth."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-4">
            {investmentPrograms.map((program, i) => (
              <motion.div
                key={program.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-section-alt rounded-2xl p-8 border border-border/50 hover:shadow-lg transition-all duration-300 h-full flex flex-col"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <program.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {program.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed mb-5 flex-1">
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Programs */}
      <section className="py-12 lg:py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Corporate Partnerships"
            title="Corporate Programs"
            description="We partner with leading corporates to drive innovation through CSR initiatives and collaborative programs."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-4 max-w-4xl mx-auto">
            {corporatePrograms.map((program, i) => (
              <motion.div
                key={program.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
                  <program.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {program.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {program.description}
                </p>
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
              Have an Idea Worth Building?
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Apply to our incubation program and get access to mentorship,
              funding, infrastructure, and a thriving startup community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-50 transition-colors shadow-lg"
              >
                Apply for Incubation <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/startups"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                View Our Startups
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
