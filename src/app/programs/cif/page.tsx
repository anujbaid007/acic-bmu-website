"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Wallet,
  GraduationCap,
  Sprout,
  Users,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const support = [
  {
    icon: Building2,
    title: "Infrastructural Support",
    desc: "Access to workspace, prototyping resources, and the ecosystem needed to build and test community-driven solutions.",
  },
  {
    icon: Wallet,
    title: "Financial Support",
    desc: "Funding assistance to help candidates ideate, develop, and deploy novel solutions for their communities.",
  },
  {
    icon: GraduationCap,
    title: "Learning Support",
    desc: "Structured mentorship and learning that equips candidates to design sustainable, scalable solutions.",
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

export default function CIFProgrammePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light min-h-[50vh] flex items-center pt-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-white/10 text-white/80 rounded-full mb-6">
                Community Innovation
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight">
                CIF Programme
              </h1>
              <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-lg">
                The CIF Programme is designed to solve the problems faced by
                communities with the help of technology — giving people
                equitable opportunities to ideate and design novel solutions for
                the upliftment and sustainable transformation of their
                community.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary font-semibold rounded-full hover:bg-gray-50 transition-colors shadow-lg"
                >
                  Get Involved <ArrowRight className="w-4 h-4" />
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
                  src="/images/programs/cif/cif-arpit-maurya.jpg"
                  alt="CIF Programme — recognising community innovators"
                  width={600}
                  height={450}
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
      <section className="py-12 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sprout className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Innovation for{" "}
                <span className="text-primary">Community Impact</span>
              </h2>
              <p className="text-text-muted leading-relaxed text-lg">
                CIF empowers grassroots innovators to tackle real challenges
                faced by their communities. By providing infrastructural,
                financial, and learning support, the programme helps candidates
                turn ideas into solutions that drive meaningful, sustainable
                change at the grassroots level.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-12 lg:py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What We Provide"
            title="Support for Every Idea"
            description="We give community innovators the resources they need to ideate, build, and scale solutions for lasting impact."
          />
          <div className="grid sm:grid-cols-3 gap-6 mt-4">
            {support.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidate Story */}
      <section className="py-12 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Candidate Spotlight"
            title="Stories of Grassroots Change"
          />
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mt-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/programs/cif/cif-arpit-maurya.jpg"
                alt="Arpit Maurya, CIF candidate, being recognised at ACIC-BMU"
                width={700}
                height={525}
                className="w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Arpit Maurya
                </h3>
              </div>
              <p className="text-text-muted leading-relaxed text-lg">
                A CIF candidate, Arpit is tackling transportation gaps by
                bridging the last-mile connection between villages and main roads
                with affordable e-rickshaws — making mobility more accessible
                while creating local employment by engaging drivers from the same
                villages.
              </p>
              <p className="mt-4 text-text-muted leading-relaxed text-lg">
                His initiative is helping connect people to essential services,
                education, and economic opportunities — driving meaningful change
                at the grassroots level.
              </p>
            </motion.div>
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
              Have an Idea for Your Community?
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              If you&apos;re working on a solution that can uplift and transform
              your community, the CIF Programme is here to support your journey.
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
                All Programmes
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
