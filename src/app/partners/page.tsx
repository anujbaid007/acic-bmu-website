"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Spotlight } from "@/components/ui/spotlight";
import { LogoCloud } from "@/components/ui/logo-cloud";

interface PartnerCategory {
  title: string;
  description: string;
  logos: { src: string; alt: string }[];
}

const categories: PartnerCategory[] = [
  {
    title: "Investor Partners",
    description: "Venture capitalists and angel investors fueling our startups' growth.",
    logos: [
      { src: "/images/partners/investors/survam-partner.png", alt: "Survam Partners" },
      { src: "/images/partners/investors/lead-angels-network.jpg", alt: "Lead Angels Network" },
      { src: "/images/partners/investors/indian-angel-network.png", alt: "Indian Angel Network" },
      { src: "/images/partners/investors/sanchi-connect.png", alt: "Sanchi Connect" },
      { src: "/images/partners/investors/campus-fund.png", alt: "Campus Fund" },
      { src: "/images/partners/investors/ah!-ventures.png", alt: "Ah! Ventures" },
      { src: "/images/partners/investors/-we-founder-circle.png", alt: "We Founder Circle" },
      { src: "/images/partners/investors/real-time-angel-fund.png", alt: "Real Time Angel Fund" },
      { src: "/images/partners/investors/fluid-ventures.png", alt: "Fluid Ventures" },
      { src: "/images/partners/investors/yournest-vc.png", alt: "YourNest VC" },
      { src: "/images/partners/investors/pontaq-vc.jpg", alt: "Pontaq VC" },
      { src: "/images/partners/investors/100x.vc.svg", alt: "100x.VC" },
    ],
  },
  {
    title: "Ecosystem Enablers",
    description: "Government bodies and ecosystem enablers supporting innovation.",
    logos: [
      { src: "/images/partners/enablers/startup-india.png", alt: "Startup India" },
      { src: "/images/partners/enablers/india-ai-mission.png", alt: "India AI Mission" },
      { src: "/images/partners/enablers/atal-innovation-mission.jpg", alt: "Atal Innovation Mission" },
      { src: "/images/partners/enablers/tie-delhi-ncr.png", alt: "TiE Delhi NCR" },
      { src: "/images/partners/enablers/isba.png", alt: "ISBA" },
      { src: "/images/partners/enablers/wadhwani-foundation.png", alt: "Wadhwani Foundation" },
      { src: "/images/partners/enablers/arthayan.png", alt: "Arthayan" },
      { src: "/images/partners/enablers/manthan-by-psa.jpg", alt: "Manthan by PSA" },
      { src: "/images/partners/enablers/startup-haryana.jpg", alt: "Startup Haryana" },
      { src: "/images/partners/enablers/meity-startup-hub.png", alt: "MeitY Startup Hub" },
    ],
  },
  {
    title: "Service Providers",
    description: "Technology and service partners empowering our startups.",
    logos: [
      { src: "/images/partners/service-providers/zoho-for-startups.png", alt: "ZOHO For Startups" },
      { src: "/images/partners/service-providers/-aws.png", alt: "AWS" },
      { src: "/images/partners/service-providers/wivitan-solution.webp", alt: "Wivitan Solution" },
      { src: "/images/partners/service-providers/cunomial-accubate.webp", alt: "Cunomial (Accubate)" },
      { src: "/images/partners/service-providers/openweaver.jpg", alt: "OpenWeaver" },
      { src: "/images/partners/service-providers/google.png", alt: "Google" },
      { src: "/images/partners/service-providers/ancrew-global.jpg", alt: "Ancrew Global" },
      { src: "/images/partners/service-providers/ezylegal.png", alt: "Ezylegal" },
    ],
  },
  {
    title: "Industry Partners",
    description: "Corporate partners providing market access and collaboration opportunities.",
    logos: [
      { src: "/images/partners/industry/hero-motocorp.png", alt: "Hero Motocorp" },
      { src: "/images/partners/industry/hsbc.png", alt: "HSBC" },
      { src: "/images/partners/industry/cii.png", alt: "CII" },
      { src: "/images/partners/industry/rane-group.png", alt: "Rane Group" },
      { src: "/images/partners/industry/aima.png", alt: "AIMA" },
      { src: "/images/partners/industry/hdfc-bank.png", alt: "HDFC Bank" },
      { src: "/images/partners/industry/idfc-bank.png", alt: "IDFC Bank" },
      { src: "/images/partners/industry/sbi-bank.jpg", alt: "SBI Bank" },
      { src: "/images/partners/industry/bpcl.png", alt: "BPCL" },
      { src: "/images/partners/industry/icici-bank.svg", alt: "ICICI Bank" },
    ],
  },
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light pt-32 pb-24 lg:pt-40 lg:pb-32">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#e67e22" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-white/10 text-white/80 rounded-full mb-4">
              Our Network
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Partners &amp; Collaborators
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              A strong ecosystem of investors, enablers, corporates, and service providers — all working together to fuel innovation and entrepreneurship.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto mt-12"
          >
            {[
              { value: "12+", label: "Investor Partners" },
              { value: "10+", label: "Ecosystem Enablers" },
              { value: "8+", label: "Service Providers" },
              { value: "10+", label: "Industry Partners" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-white/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partner Categories */}
      {categories.map((category, idx) => (
        <section
          key={category.title}
          className={idx % 2 === 0 ? "py-10 lg:py-20 bg-white" : "py-10 lg:py-20 bg-section-alt"}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-3">
                {category.title}
              </h2>
              <p className="text-text-muted max-w-xl mx-auto">
                {category.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <LogoCloud logos={category.logos} />
            </motion.div>
          </div>
        </section>
      ))}

      {/* Become a Partner CTA */}
      <section className="py-12 lg:py-20 bg-section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            label="Collaborate With Us"
            title="Become a Partner"
            description="Whether you're an investor, corporate, or service provider — partner with ACIC-BMU Foundation to support the next generation of innovators."
          />
          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
          >
            Partner With Us
          </motion.a>
        </div>
      </section>
    </>
  );
}
