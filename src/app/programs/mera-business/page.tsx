"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  BookOpen,
  Users,
  TrendingUp,
  CheckCircle2,
  Handshake,
  GraduationCap,
  ShoppingBag,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const programStructure = [
  {
    phase: "Phase 1",
    title: "Training",
    duration: "6 weeks, twice weekly",
    icon: BookOpen,
    topics: [
      "Business fundamentals",
      "Marketing and sales strategies",
      "Digital marketing essentials",
      "Accounting basics",
      "Financial literacy and planning",
    ],
  },
  {
    phase: "Phase 2",
    title: "Mentorship",
    duration: "3-6 months",
    icon: GraduationCap,
    topics: [
      "Operationalizing businesses",
      "Regulatory compliance",
      "Supply chain management",
      "Growth and scaling strategies",
      "Market access support",
    ],
  },
];

const impactLevels = [
  {
    level: "Level 1",
    title: "Started New Business",
    description:
      "Women who had no prior business now run their own micro-enterprises, achieving financial independence for the first time.",
    icon: ShoppingBag,
  },
  {
    level: "Level 2",
    title: "Went Online",
    description:
      "Existing business owners who expanded their reach by taking their businesses online through digital platforms and social media.",
    icon: TrendingUp,
  },
  {
    level: "Level 3",
    title: "Expanded Product Line",
    description:
      "Entrepreneurs who diversified their offerings, added new product lines, and scaled their operations to serve larger markets.",
    icon: Heart,
  },
];

const partnerships = [
  {
    name: "RKMF",
    description:
      "Rajiv Kumar Memorial Foundation supporting grassroots women entrepreneurship development.",
  },
  {
    name: "Hinduja Foundation",
    description:
      "\u20B98.5L CSR funding supporting training and mentorship for aspiring women entrepreneurs.",
  },
  {
    name: "HDFC Bank",
    description:
      "\u20B960L CSR investment across 5 batches, training 170+ women with 100 receiving seed funding for their businesses.",
  },
  {
    name: "SEWA Uttarakhand",
    description:
      "Self Employed Women\u2019s Association partnership for empowering women in the Uttarakhand region.",
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

export default function MeraBusinessPage() {
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
                Women Empowerment
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight">
                Mera Business{" "}
                Program
              </h1>
              <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-lg">
                Empowering women to launch micro-businesses — fostering
                innovation at the grassroots level, supporting women in rural
                areas facing social challenges, and helping them achieve
                financial independence through entrepreneurship.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary font-semibold rounded-full hover:bg-gray-50 transition-colors shadow-lg"
                >
                  Join the Program <ArrowRight className="w-4 h-4" />
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
                  src="/images/programs/mera-business/hero.jpg"
                  alt="Mera Business Program"
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

      {/* Impact Numbers */}
      <section className="py-10 lg:py-16 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { end: 500, suffix: "+", label: "Women Participated" },
              { end: 260, suffix: "+", label: "Micro Businesses Established" },
              { end: 14, suffix: "", label: "Cohorts Completed" },
              { end: 20, suffix: "k", prefix: "\u20B95-", label: "Avg Monthly Turnover" },
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

      {/* Program Structure */}
      <section className="py-12 lg:py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="How It Works"
            title="Program Structure"
            description="A carefully designed two-phase approach that takes women from learning fundamentals to running their own businesses."
          />

          <div className="grid md:grid-cols-2 gap-8 mt-4 max-w-5xl mx-auto">
            {programStructure.map((phase, i) => (
              <motion.div
                key={phase.phase}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <phase.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {phase.phase}
                    </span>
                    <h3 className="text-xl font-bold text-foreground">
                      {phase.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-text-muted mb-5 font-medium">
                  Duration: {phase.duration}
                </p>
                <ul className="space-y-3">
                  {phase.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-text-muted">{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Levels */}
      <section className="py-12 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Measuring Success"
            title="Three Levels of Impact"
            description="Our program creates lasting change at multiple levels — from sparking first-time entrepreneurship to helping existing businesses scale."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-4">
            {impactLevels.map((level, i) => (
              <motion.div
                key={level.level}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <level.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                  {level.level}
                </span>
                <h3 className="text-lg font-bold text-foreground mt-2 mb-3">
                  {level.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {level.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 lg:py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="In Action"
            title="Glimpses from Our Program"
            description="See the energy, determination, and joy of women entrepreneurs building their dreams through Mera Business."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {[
              "dsc00874-(1).jpg",
              "dsc00976.jpg",
              "dsc00991.jpg",
              "dsc02116-(1).jpg",
              "dsc05522.jpg",
              "dsc_0098.jpg",
            ].map((img, i) => (
              <motion.div
                key={img}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden"
              >
                <Image
                  src={`/images/programs/mera-business/${img}`}
                  alt="Mera Business Program"
                  width={400}
                  height={300}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-12 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Partners"
            title="Partnerships & Support"
            description="Mera Business is made possible through the generous support and collaboration of leading organizations committed to women empowerment."
          />

          <div className="grid md:grid-cols-2 gap-6 mt-4 max-w-4xl mx-auto">
            {partnerships.map((partner, i) => (
              <motion.div
                key={partner.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-section-alt rounded-2xl p-6 border border-border/50 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <Handshake className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">
                      {partner.name}
                    </h4>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Note */}
      <section className="py-10 lg:py-16 bg-section-alt border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Users className="w-7 h-7 text-accent" />
            </div>
            <p className="text-text-muted leading-relaxed text-lg">
              Since its launch in <span className="font-semibold text-foreground">June 2022</span>, the
              Mera Business program has completed{" "}
              <span className="font-semibold text-foreground">14 cohorts</span>,
              transforming the lives of over 500 women across rural and
              peri-urban areas through structured entrepreneurship training and
              sustained mentorship support.
            </p>
          </motion.div>
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
              Empower a Woman, Empower a Community
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Partner with us or join the program to help more women build
              sustainable micro-businesses and achieve financial independence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-50 transition-colors shadow-lg"
              >
                Partner With Us <ArrowRight className="w-4 h-4" />
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
