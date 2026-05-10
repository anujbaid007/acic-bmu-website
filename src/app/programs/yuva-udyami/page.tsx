"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Target, Eye } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const subPrograms = [
  {
    title: "Foundation Program for Aspiring Entrepreneurs (FPAE)",
    description:
      "A 12-week pre-incubation program designed for students of Government Polytechnic Colleges, helping them develop entrepreneurial skills and turn ideas into viable projects.",
    image: "/images/events/fpae.jpg",
  },
  {
    title: "Ideathon",
    description:
      "A platform for innovation convergence — bringing together students, mentors, and industry leaders to brainstorm, ideate, and develop solutions for real-world challenges.",
    image: "/images/events/ideathon.jpg",
  },
  {
    title: "HULT Prize",
    description:
      "A global social entrepreneurship competition encouraging students to address critical global issues aligned with the UN Sustainable Development Goals (SDGs).",
    image: "/images/events/hult-prize.jpg",
  },
  {
    title: "HackBMU",
    description:
      "A 24-hour innovation marathon bringing together student teams from across the country to develop tech-driven solutions under the theme 'Disrupt the Norm.'",
    image: "/images/events/hackathon.jpg",
  },
  {
    title: "Entrepreneurship Game",
    description:
      "A fast-paced idea challenge that simulates entrepreneurial decision-making, helping participants understand business dynamics in a competitive, gamified environment.",
    image: "/images/events/entrepreneurship-game.jpg",
  },
  {
    title: "Problem Worth Solving",
    description:
      "A problem-first thinking program that trains students to identify genuine pain points in society and develop solutions that address root causes, not symptoms.",
    image: "/images/events/problem-worth-solving.jpg",
  },
  {
    title: "ATL Student Innovator Program",
    description:
      "Designed for school students up to class 12th, this program nurtures early innovation skills through hands-on tinkering, prototyping, and mentorship support.",
    image: "/images/events/atl-student-innovator.jpg",
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

export default function YuvaUdyamiPage() {
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
                Youth Program
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tight">
                Yuva Udyami —{" "}
                Young Entrepreneur Program
              </h1>
              <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-lg">
                A youth-focused initiative to cultivate entrepreneurial thinking
                through training, mentorship, and real-world exposure — building
                the next generation of innovators and changemakers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/events/fpae.jpg"
                  alt="Yuva Udyami Program"
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

      {/* Vision & Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-section-alt rounded-2xl p-8 border border-border/50"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-text-muted leading-relaxed">
                To develop self-reliant, skilled youth who transform ideas into
                micro-enterprises — creating a generation of job creators rather
                than job seekers who drive sustainable economic growth in their
                communities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-section-alt rounded-2xl p-8 border border-border/50"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-text-muted leading-relaxed">
                To provide mentorship and training to educated and skilled youth
                to establish sustainable MSMEs — equipping them with the
                practical knowledge, business acumen, and confidence needed to
                launch successful enterprises.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sub-Programs */}
      <section className="py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Initiatives"
            title="Our Sub-Programs"
            description="A diverse portfolio of programs designed to ignite innovation, build entrepreneurial skills, and give youth real-world experience."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {subPrograms.map((program, i) => (
              <motion.div
                key={program.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed flex-1">
                      {program.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
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
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Building Tomorrow&apos;s Entrepreneurs,{" "}
                <span className="text-primary">Today</span>
              </h2>
              <p className="text-text-muted leading-relaxed text-lg">
                Through our Yuva Udyami vertical, we reach thousands of young
                people across Haryana and beyond — from school students in ATL
                labs to polytechnic graduates building their first prototypes.
                Every program is designed to move participants one step closer to
                becoming confident, capable entrepreneurs.
              </p>
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
              Ready to Start Your Entrepreneurial Journey?
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Join our next cohort of young innovators. Whether you&apos;re a
              school student or a polytechnic graduate, we have a program
              designed for your stage.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-50 transition-colors shadow-lg"
              >
                Join a Program <ArrowRight className="w-4 h-4" />
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
