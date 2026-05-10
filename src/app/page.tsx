"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Lightbulb,
  Rocket,
  Users,
  TrendingUp,
  GraduationCap,
  Building2,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Spotlight } from "@/components/ui/spotlight";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns";
import StartupLogoCluster from "@/components/ui/StartupLogoCluster";

const testimonials = [
  {
    text: "ACIC-BMU's incubation support helped us scale our lithium-ion recycling technology from lab to market. The mentorship and industry connections were invaluable.",
    image: "/images/startups/agaamin-technologies-private-limited.png",
    name: "BatX Energies",
    role: "Incubated Startup",
  },
  {
    text: "The Yuva Udyami program opened my eyes to entrepreneurship. From ideation workshops to real investor pitches, it was a transformative experience.",
    image: "/images/logos/bmu-logo.png",
    name: "Student Innovator",
    role: "Yuva Udyami Participant",
  },
  {
    text: "Mera Business gave me the confidence and skills to start my own tailoring unit. The financial support and mentoring changed my family's future.",
    image: "/images/logos/acic-logo.png",
    name: "Women Entrepreneur",
    role: "Mera Business Beneficiary",
  },
  {
    text: "The infrastructure and ecosystem at ACIC-BMU is world-class. Having access to prototyping labs and expert mentors accelerated our product development.",
    image: "/images/startups/vayuguard-climate-tech-private-limited.svg",
    name: "Vayuguard Climate Tech",
    role: "Incubated Startup",
  },
  {
    text: "ACIC-BMU Foundation connected us with the right investors and industry partners at the right time. Their network is truly powerful.",
    image: "/images/startups/femzo-india-private-limited.jpg",
    name: "Femzo India",
    role: "Incubated Startup",
  },
  {
    text: "The hackathons and ideathons organized by ACIC are some of the best in the region. They truly nurture innovation among young minds.",
    image: "/images/logos/bmu-logo.png",
    name: "Faculty Member",
    role: "BML Munjal University",
  },
];

const programs = [
  {
    title: "Startup Incubation",
    description:
      "From idea stage to growth stage — we provide structured incubation and acceleration with mentoring, infrastructure, funding access, and industry connections.",
    icon: Rocket,
    href: "/programs/incubation",
    image: "/images/programs/mera-business/dsc00991.jpg",
    stats: "110+ Startups Supported",
  },
  {
    title: "Yuva Udyami",
    description:
      "A youth-focused initiative cultivating entrepreneurial thinking through training, mentorship, hackathons, and real-world exposure for the next generation of changemakers.",
    icon: GraduationCap,
    href: "/programs/yuva-udyami",
    image: "/images/events/fpae.jpg",
    stats: "1000+ Youth Impacted",
  },
  {
    title: "Mera Business",
    description:
      "Empowering women in rural and peri-urban areas to launch micro-businesses through structured training, mentorship, and financial support.",
    icon: Users,
    href: "/programs/mera-business",
    image: "/images/programs/mera-business/hero.jpg",
    stats: "500+ Women Trained",
  },
];

const startups = [
  {
    name: "BatX Energies",
    description: "Lithium-ion battery recycling with Zero Waste-Zero Emission technology",
    logo: "/images/startups/batx-energies.svg",
  },
  {
    name: "Vayuguard Climate Tech",
    description: "Advanced air purification solutions for healthier environments",
    logo: "/images/startups/vayuguard-climate-tech-private-limited.svg",
  },
  {
    name: "Femzo India",
    description: "Electric mobility solutions for sustainable transportation",
    logo: "/images/startups/femzo-india-private-limited.jpg",
  },
  {
    name: "Kagaku Technology",
    description: "Innovative technology solutions for modern challenges",
    logo: "/images/startups/kagaku-technology-private-limited.webp",
  },
  {
    name: "Inconel Technologies",
    description: "IoT-based real-time safety compliance monitoring systems",
    logo: "/images/startups/inconel-technologies-private-limited.png",
  },
  {
    name: "Itx Care (Dr at Home)",
    description: "Healthcare solutions bringing doctors to your doorstep",
    logo: "/images/startups/itx-care-private-limited.png",
  },
];

const allPartners = [
  "/images/partners/investors/survam-partner.png",
  "/images/partners/investors/indian-angel-network.png",
  "/images/partners/investors/ah!-ventures.png",
  "/images/partners/investors/campus-fund.png",
  "/images/partners/investors/yournest-vc.png",
  "/images/partners/enablers/startup-india.png",
  "/images/partners/enablers/atal-innovation-mission.jpg",
  "/images/partners/enablers/tie-delhi-ncr.png",
  "/images/partners/enablers/wadhwani-foundation.png",
  "/images/partners/enablers/meity-startup-hub.png",
  "/images/partners/industry/hero-motocorp.png",
  "/images/partners/industry/hsbc.png",
  "/images/partners/industry/cii.png",
  "/images/partners/industry/hdfc-bank.png",
  "/images/partners/industry/bpcl.png",
  "/images/partners/industry/aima.png",
];

const events = [
  {
    title: "Foundation Program for Aspiring Entrepreneurs",
    description:
      "12-week pre-incubation program empowering early-stage student innovators from Government Polytechnic Colleges in Haryana.",
    image: "/images/events/fpae.jpg",
  },
  {
    title: "HackBMU Hackathon",
    description:
      "24-hour innovation marathon bringing together student teams to develop tech-driven solutions under 'Disrupt the Norm.'",
    image: "/images/events/hackathon.jpg",
  },
  {
    title: "HULT Prize",
    description:
      "Social entrepreneurship competition encouraging students to address critical global issues aligned with the UN SDGs.",
    image: "/images/events/hult-prize.jpg",
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

const bannerWords = "We Are Open to Meet Innovators / Startups and Help Them Succeed in Their Entrepreneurial Journey".split(" ");

function InnovatorsBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax layers at different speeds
  const headingY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const subtextY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const ctaY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const orb1X = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const orb2X = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#1a1a2e] py-14 lg:py-36">
      {/* Parallax background orbs — big visible glows */}
      <motion.div style={{ y: orb1Y, x: orb1X }} className="absolute -top-32 right-1/4 w-[700px] h-[700px] bg-gradient-to-bl from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <motion.div style={{ y: orb2Y, x: orb2X }} className="absolute -bottom-32 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#c9a84c]/15 via-[#c9a84c]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/8 rounded-full blur-[150px] pointer-events-none" />

      {/* Parallax grid lines */}
      <motion.div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ y: gridY }}>
        <div className="absolute inset-[-50%] w-[200%] h-[200%]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </motion.div>

      {/* Sweeping light beam */}
      <motion.div
        className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent skew-x-[-20deg] pointer-events-none"
        initial={{ x: "-100%" }}
        whileInView={{ x: "400%" }}
        viewport={{ once: true }}
        transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Parallax heading layer */}
        <motion.div style={{ y: headingY }}>
          <h2 className="text-xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight uppercase" style={{ fontVariant: "small-caps" }}>
            {bannerWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="inline-block text-[#c9a84c] mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </h2>

          {/* Animated divider */}
          <motion.div
            className="mt-6 mx-auto h-0.5 bg-gradient-to-r from-transparent via-[#c9a84c]/60 to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>

        {/* Parallax subtext layer — moves slower */}
        <motion.p
          className="mt-6 text-lg text-white/50 max-w-2xl mx-auto"
          style={{ y: subtextY }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Whether you&apos;re at idea stage or scaling up — our doors are always open for innovators ready to make an impact.
        </motion.p>

        {/* Parallax CTA layer — moves slowest */}
        <motion.div
          className="mt-8"
          style={{ y: ctaY }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary/30 transition-all shadow-lg shadow-primary/25">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-section-alt to-primary/5 min-h-[70vh] lg:min-h-screen flex items-center pt-24">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#e67e22" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-[11px] sm:text-sm font-medium text-primary whitespace-nowrap">
                  Supported by Atal Innovation Mission, NITI Aayog
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                Innovating Ideas,{" "}
                <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">Transforming</span>{" "}
                <span className="relative inline-block">
                  Ventures
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 8C40 2 80 2 100 6C120 10 160 4 198 4" stroke="#e67e22" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
                  </svg>
                </span>
              </h1>

              <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-text-muted leading-relaxed max-w-lg">
                We provide resources, mentorship, and community to transform
                ideas into market-ready ventures — empowering innovators from
                students to women entrepreneurs across India.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
                <Link href="/programs" className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 text-sm sm:text-base bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary/30 transition-all shadow-lg shadow-primary/25">
                  Explore Programs <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/about" className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 text-sm sm:text-base border-2 border-foreground/15 text-foreground font-semibold rounded-full hover:border-primary hover:text-primary transition-colors">
                  Learn More
                </Link>
              </div>

              {/* Supported By Logos */}
              <div className="mt-6 sm:mt-10 pt-6 sm:pt-8 border-t border-border/50">
                <p className="text-xs font-medium text-text-muted uppercase tracking-widest mb-4">Supported By</p>
                <div className="flex items-center justify-start gap-4 sm:gap-6">
                  <Image src="/images/logos/niti-aayog.webp" alt="NITI Aayog" width={200} height={64} className="h-10 sm:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity mix-blend-multiply" />
                  <Image src="/images/logos/acic-bmu-propel.webp" alt="ACIC BMU Propel" width={260} height={80} className="h-12 sm:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity -ml-3" />
                </div>
              </div>
            </motion.div>

            {/* 3D Startup Logo Cluster */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <StartupLogoCluster />

              {/* Floating stat cards - positioned outside the grid */}
              <div className="grid grid-cols-3 gap-5 mt-5 px-2">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6 }} className="bg-white rounded-2xl p-3.5 shadow-lg border border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-foreground">&#8377;850 Cr+</p>
                      <p className="text-[10px] text-text-muted">Portfolio Valuation</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.7 }} className="bg-white rounded-2xl p-3.5 shadow-lg border border-border/50">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Users className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-foreground">500+</p>
                      <p className="text-[10px] text-text-muted">Women Empowered</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8 }} className="bg-white rounded-2xl p-3.5 shadow-lg border border-border/50">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Rocket className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-foreground">110+</p>
                      <p className="text-[10px] text-text-muted">Startups Incubated</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== OPEN FOR INNOVATORS BANNER ========== */}
      <InnovatorsBanner />

      {/* ========== PROPEL PITCHFEST ========== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f1b3d] via-[#162550] to-[#1a2d5e] py-12 lg:py-24">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border border-white/20 rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 border border-white/10 rounded-full" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Image src="/images/logos/propel-logo.png" alt="Propel" width={100} height={32} className="h-8 w-auto brightness-0 invert" />
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Propel <span className="text-[#c9a84c]">Pitchfest</span>
              </h2>
              <div className="flex items-center gap-3 mt-3">
                <span className="text-lg text-white/60 font-light tracking-widest">&infin; Opportunities</span>
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-[#c9a84c] font-semibold text-sm uppercase tracking-wider mb-3">Six Focus Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Women Founded", "Smart Manufacturing", "Deep Tech", "Med Tech", "Mobility", "Sustainability"].map((area) => (
                      <span key={area} className="px-3 py-1.5 text-xs font-medium bg-white/5 text-white/70 rounded-full border border-white/10">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[#c9a84c] font-semibold text-sm uppercase tracking-wider mb-3">Two Tracks</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full" />
                      Revenue Startups
                    </div>
                    <div className="flex items-center gap-2 text-white/70 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full" />
                      Pre-Revenue Startups
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h4 className="text-[#c9a84c] font-semibold text-sm uppercase tracking-wider mb-4">Funding Opportunities</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center shrink-0">
                      <span className="text-2xl font-bold text-[#c9a84c]">$1</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">USD 1 Mn Fund Chest</p>
                      <p className="text-white/50 text-sm">From top investors</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-xl font-bold text-primary">&#8377;50L</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Upto &#8377;50 Lakhs</p>
                      <p className="text-white/50 text-sm">Under Startup India Seed Fund (SISFS)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center shrink-0">
                  <Rocket className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">Supporting Partner: <span className="font-semibold text-white">F6S</span></p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== STARTUP INDIA SEED FUND ========== */}
      <section className="relative py-0 overflow-hidden">
        {/* Top blue banner bar */}
        <div className="bg-gradient-to-r from-[#1a237e] via-[#1565c0] to-[#1a237e] py-5 sm:py-6">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-nowrap items-center justify-between gap-2 sm:gap-4">
              {[
                { src: "/images/logos/acic-logo.png", alt: "ACIC-BMU Foundation", cls: "h-5 sm:h-8" },
                { src: "/images/logos/bmu-logo-alt.png", alt: "BML Munjal University", cls: "h-12 sm:h-20" },
                { src: "/images/logos/propel-logo.png", alt: "Propel Incubator", cls: "h-5 sm:h-8" },
                { src: "/images/partners/enablers/atal-innovation-mission.jpg", alt: "Atal Innovation Mission", cls: "h-5 sm:h-8" },
              ].map((logo, i) => (
                <div key={i} className="flex-1 flex items-center justify-center bg-white rounded-lg h-10 sm:h-14 px-2 sm:px-4 overflow-hidden">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={180}
                    height={56}
                    className={`${logo.cls} w-auto object-contain`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="bg-gradient-to-br from-white via-blue-50/50 to-white py-10 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left — text content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-[#1a237e] leading-tight uppercase">
                  ACIC-BMU Invites You to Apply for{" "}
                  <span className="text-primary">Startup India Seed Fund</span>
                </h2>
                <div className="mt-3 w-16 h-1 bg-[#1a237e]" />
                <p className="mt-4 sm:mt-5 text-sm sm:text-base text-text-muted leading-relaxed">
                  Startup India Seed Fund Scheme (SISFS) provides financial assistance to startups for proof of concept, prototype development, product trials, market-entry, and commercialization.
                </p>

                {/* Seed fund callout */}
                <div className="mt-8">
                  <div className="inline-block px-5 py-2 bg-[#1a237e] text-white text-sm font-semibold rounded-full mb-4">
                    Seed Fund to an eligible startup is:
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <div className="w-10 h-10 bg-[#1a237e] rounded-full flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1a237e]">Up to Rs. 20 Lakhs</h4>
                        <p className="text-xs text-text-muted mt-0.5">as grant for validation of Proof of Concept, or prototype development, or product trials.</p>
                      </div>
                    </div>
                    <div className="flex gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <div className="w-10 h-10 bg-[#1a237e] rounded-full flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary">Up to Rs. 50 Lakhs</h4>
                        <p className="text-xs text-text-muted mt-0.5">of investment for market entry, commercialization, or scaling up through convertible debentures or debt-linked instruments.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="https://seedfund.startupindia.gov.in/home" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#1a237e] to-[#1565c0] text-white font-bold rounded-full hover:shadow-xl hover:shadow-blue-500/30 transition-all shadow-lg shadow-blue-500/20">
                    <Rocket className="w-4 h-4" /> Apply Now <ArrowRight className="w-4 h-4" />
                  </a>
                  <a href="https://seedfund.startupindia.gov.in/about" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[#1a237e]/20 text-[#1a237e] font-semibold rounded-full hover:border-[#1a237e] transition-colors">
                    Check Eligibility
                  </a>
                </div>
              </motion.div>

              {/* Right — Seed Fund card + eligibility */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="/images/seed-fund-scheme.png" alt="Startup India Seed Fund Scheme" width={600} height={700} className="w-full h-auto object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== IMPACT NUMBERS ========== */}
      <section className="py-10 lg:py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { end: 110, suffix: "+", label: "Startups Supported" },
              { end: 850, suffix: " Cr+", prefix: "\u20B9", label: "Combined Valuation" },
              { end: 500, suffix: "+", label: "Women Empowered" },
              { end: 50, suffix: "+", label: "Industry Experts" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} prefix={stat.prefix} label={stat.label} light />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ABOUT SNIPPET ========== */}
      <section className="py-12 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden"><Image src="/images/events/hackathon.jpg" alt="Hackathon" width={300} height={400} className="w-full h-56 object-cover object-bottom" /></div>
                  <div className="rounded-2xl overflow-hidden"><Image src="/images/events/fpae.jpg" alt="FPAE Program" width={300} height={250} className="w-full h-44 object-cover object-bottom" /></div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-2xl overflow-hidden"><Image src="/images/events/ideathon.jpg" alt="Ideathon" width={300} height={250} className="w-full h-44 object-cover object-bottom" /></div>
                  <div className="rounded-2xl overflow-hidden"><Image src="/images/events/entrepreneurship-game.jpg" alt="Entrepreneurship Workshop" width={300} height={400} className="w-full h-56 object-cover object-bottom" /></div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary rounded-full mb-4">About Us</span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mb-4 sm:mb-6">
                Nurturing Entrepreneurs Who Create <span className="relative inline-block text-primary">Impact<svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none"><path d="M2 8C40 2 80 2 100 6C120 10 160 4 198 4" stroke="#e67e22" strokeWidth="3" strokeLinecap="round" opacity="0.4" /></svg></span>
              </h2>
              <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-4 sm:mb-6">
                ACIC-BMU Foundation has been set up by BML Munjal University along with the support of Atal Innovation Mission (AIM), NITI Aayog to promote and support innovation and entrepreneurship. We focus on encouraging innovators within the university and the community around it.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: Lightbulb, title: "Innovation First", desc: "Programs, courses, and events to ignite the spirit of innovation among students, faculty, and community." },
                  { icon: Users, title: "Strong Network", desc: "Entrepreneurs, mentors, experts, investors, and service providers — all under one ecosystem." },
                  { icon: Building2, title: "Industry Connect", desc: "Active engagement of industry in innovation activities with real-world pilot opportunities." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                Learn more about us <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== PROGRAMS ========== */}
      <section className="py-12 lg:py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="max-w-2xl mx-auto text-center mb-12">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary rounded-full mb-4">Our Programs</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Three Verticals, One <span className="relative inline-block">Mission<svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none"><path d="M2 8C40 2 80 2 100 6C120 10 160 4 198 4" stroke="#e67e22" strokeWidth="3" strokeLinecap="round" opacity="0.4" /></svg></span></h2>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">We drive impact through three focused verticals — supporting startups, empowering youth, and uplifting grassroots women entrepreneurs.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <motion.div key={program.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Link href={program.href} className="group block">
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 h-full">
                    <GlowingEffect spread={40} glow proximity={64} disabled={false} borderWidth={2} />
                    <div className="relative h-52 overflow-hidden">
                      <Image src={program.image} alt={program.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-white/90 text-xs font-semibold rounded-full text-primary">{program.stats}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                          <program.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{program.title}</h3>
                      </div>
                      <p className="text-sm text-text-muted leading-relaxed">{program.description}</p>
                      <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary">
                        Know More <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STARTUPS ========== */}
      <section className="py-12 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="max-w-2xl mx-auto text-center mb-12">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary rounded-full mb-4">Success Stories</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground"><span className="relative inline-block">Startups<svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none"><path d="M2 8C40 2 80 2 100 6C120 10 160 4 198 4" stroke="#e67e22" strokeWidth="3" strokeLinecap="round" opacity="0.4" /></svg></span> We&apos;ve Nurtured</h2>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">From idea to market — our incubated startups are solving real-world problems across healthcare, climate tech, mobility, and more.</p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {startups.map((startup, i) => (
              <motion.div key={startup.name} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group">
                <div className="bg-section-alt rounded-2xl p-6 h-full flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary/20">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <Image src={startup.logo} alt={startup.name} width={64} height={64} className="w-full h-full object-contain" />
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">{startup.name}</h4>
                  <p className="text-xs text-text-muted leading-relaxed">{startup.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/startups" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all">
              View All Startups <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="py-12 lg:py-24 bg-gradient-to-b from-section-alt to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Testimonials" title="Voices from Our Ecosystem" description="Hear from the startups, entrepreneurs, and changemakers who are part of the ACIC-BMU journey." />
        </div>
        <div className="flex justify-center gap-6 mt-10 max-h-[500px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <TestimonialsColumn testimonials={testimonials.slice(0, 3)} duration={18} className="hidden md:block" />
          <TestimonialsColumn testimonials={testimonials.slice(3, 6)} duration={22} />
          <TestimonialsColumn testimonials={[...testimonials.slice(2, 5)]} duration={20} className="hidden lg:block" />
        </div>
      </section>

      {/* ========== EVENTS ========== */}
      <section className="py-12 lg:py-24 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Events" title="Shaping the Future, One Event at a Time" description="Hackathons, ideathons, bootcamps, and more — our events bring innovators together to solve real problems." />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {events.map((event, i) => (
              <motion.div key={event.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-border/50 h-full">
                  <div className="relative h-28 md:h-48 overflow-hidden">
                    <Image src={event.image} alt={event.title} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover object-bottom hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-3 md:p-6">
                    <h3 className="text-sm md:text-lg font-bold text-foreground mb-1 md:mb-2">{event.title}</h3>
                    <p className="text-xs md:text-sm text-text-muted leading-relaxed line-clamp-3 md:line-clamp-none">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/events" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              View All Events <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== PARTNERS SLIDER ========== */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Our Network" title="Partners & Collaborators" description="Backed by leading investors, government bodies, corporate partners, and service providers." />
        </div>
        <div className="relative overflow-hidden mt-8">
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />
          <div className="flex animate-scroll-left">
            {[...allPartners, ...allPartners].map((src, i) => (
              <div key={i} className="flex-shrink-0 mx-3 sm:mx-8 flex items-center justify-center">
                <Image src={src} alt="Partner" width={180} height={80} className="h-10 w-24 sm:h-20 sm:w-44 object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-10">
          <Link href="/partners" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            View All Partners <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ========== INFRASTRUCTURE ========== */}
      <section className="py-12 lg:py-24 bg-gradient-to-b from-white to-section-alt overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary rounded-full mb-4">Infrastructure</span>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground mb-4 sm:mb-6">
                World-Class Facilities for <span className="relative inline-block text-primary">Innovation<svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none"><path d="M2 8C40 2 80 2 100 6C120 10 160 4 198 4" stroke="#e67e22" strokeWidth="3" strokeLinecap="round" opacity="0.4" /></svg></span>
              </h2>
              <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-4 sm:mb-6">
                The incubator hub at BML Munjal University campus provides contemporary facilities required by innovators and startups. From co-working spaces to prototyping labs, our infrastructure is designed to accelerate your journey.
              </p>
              <ul className="space-y-3 text-text-muted">
                {["Co-working spaces & private cabins", "Prototyping & testing labs", "Conference & meeting rooms", "High-speed internet & IT infrastructure", "Mentorship & networking zones"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-2 gap-4">
              {[6, 7, 8, 9].map((n) => (
                <div key={n} className="rounded-2xl overflow-hidden shadow-md">
                  <Image src={`/images/infrastructure/${n}.png`} alt={`Facility ${n}`} width={300} height={220} className="w-full h-44 object-cover object-bottom hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="pt-12 pb-8 lg:pt-24 bg-[#1a1a2e] text-white relative">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Ready to Turn Your Idea Into a Venture?</h2>
            <p className="text-sm sm:text-lg text-white/60 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Whether you&apos;re a student with a bold idea, a woman entrepreneur looking to scale, or an innovator seeking incubation support — we&apos;re here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-full hover:shadow-xl hover:shadow-primary/30 transition-all shadow-lg shadow-primary/25">
                Get In Touch <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/programs" className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
                Explore Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
