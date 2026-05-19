"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Eye, Rocket, Users, Building2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Spotlight } from "@/components/ui/spotlight";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const missionPoints = [
  {
    icon: Rocket,
    text: "Conduct programs, courses, events, challenges, and other engagements to ignite spirit of innovation and entrepreneurship among students, faculty and community.",
  },
  {
    icon: Users,
    text: "Build a network with entrepreneurs, mentors, experts, investors and service providers to be leveraged for the benefit of the innovators, and start-ups.",
  },
  {
    icon: Building2,
    text: "Drive active engagement of industry in the innovation activities.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light min-h-[50vh] flex items-center pt-24">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#e67e22" />
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
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white max-w-4xl mx-auto">
              Empowering Innovators, Building{" "}
              Ventures
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              ACIC-BMU Foundation nurtures entrepreneurs who are innovative,
              tenacious, ethical, and driven to create economic value and
              societal impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========== OVERVIEW ========== */}
      <section className="py-12 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      src="/images/programs/mera-business/hero.jpg"
                      alt="Mera Business Program"
                      width={300}
                      height={400}
                      className="w-full h-56 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      src="/images/programs/yuva/fpae-1.jpg"
                      alt="Yuva Udyami Program"
                      width={300}
                      height={250}
                      className="w-full h-44 object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      src="/images/programs/udaan.webp"
                      alt="UDAAN — Corporate Innovation Program"
                      width={300}
                      height={250}
                      className="w-full h-44 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      src="/images/programs/bosch/bosch-3.jpg"
                      alt="BOSCH-BMU Innovation Challenge"
                      width={300}
                      height={400}
                      className="w-full h-56 object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                label="Who We Are"
                title="ACIC-BMU Foundation"
                align="left"
              />
              <p className="text-text-muted leading-relaxed text-lg -mt-6">
                ACIC-BMU Foundation (ACIC-BMU) has been set up by BML Munjal
                University (BMU) along with the support of Atal Innovation
                Mission (AIM), NITI Aayog to promote and support innovation and
                entrepreneurship. It focuses on encouraging innovators within the
                university and the community around the university.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== VISION & MISSION ========== */}
      <section className="py-12 lg:py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Purpose"
            title="Vision & Mission"
            description="The guiding principles that drive everything we do at ACIC-BMU Foundation."
          />

          <div className="grid lg:grid-cols-2 gap-10 mt-4">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-border/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-text-muted leading-relaxed text-lg">
                  Create an ecosystem to nurture &lsquo;ENTREPRENEURS&rsquo; who
                  are innovative, tenacious, ethical, and have a great zeal to
                  create economic value and societal impact through their
                  ventures.
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-border/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <ul className="space-y-4">
                  {missionPoints.map((point, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                        <point.icon className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-text-muted leading-relaxed">
                        {point.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== ABOUT BML MUNJAL UNIVERSITY ========== */}
      <section className="py-12 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                label="Our University"
                title="About BML Munjal University"
                align="left"
              />
              <p className="text-text-muted leading-relaxed text-lg -mt-6">
                BML Munjal University is engaged in creating, preserving and
                imparting internationally benchmarked knowledge and skills to a
                diverse community of students from across the world. BMU&apos;s
                aim is to nurture ethical leaders who are skilled, knowledgeable
                and have the life skills needed to lead organisations to success.
                BMU seeks to transform higher education in India by creating a
                world-class and innovative teaching, learning and research
                environment. BMU is founded by the Hero Group. The incubator hub
                at the campus provides contemporary facilities required by
                innovators and the startups.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/bmu/campus.webp"
                  alt="BML Munjal University campus"
                  width={2560}
                  height={1440}
                  className="w-full h-[300px] lg:h-[420px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== INFRASTRUCTURE GALLERY ========== */}
      <section className="py-12 lg:py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Facilities"
            title="World-Class Infrastructure"
            description="Contemporary facilities designed to support innovators and startups at every stage of their journey."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n, i) => (
              <motion.div
                key={n}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden group"
              >
                <Image
                  src={`/images/infrastructure/${n}.png`}
                  alt={`Infrastructure ${n}`}
                  width={300}
                  height={220}
                  className="w-full h-40 object-cover object-bottom group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
