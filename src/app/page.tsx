"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Lightbulb,
  Rocket,
  Users,
  GraduationCap,
  Building2,
  ChevronRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns";
import BannerSlider, { type BannerSlide } from "@/components/ui/BannerSlider";

const testimonials = [
  {
    text: "ACIC-BMU's incubation support helped us scale our lithium-ion recycling technology from lab to market. The mentorship and industry connections were invaluable.",
    image: "/images/startups/batx-energies.svg",
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
    image: "/images/startups/femzo-india-private-limited.png",
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
    title: "Mera Business",
    description:
      "Empowering rural and peri-urban women to launch micro-businesses through structured training, mentorship, and seed funding support.",
    icon: Users,
    href: "/programs/mera-business",
    image: "/images/programs/mera-business/hero.jpg",
    stats: "600+ Women Trained",
  },
  {
    title: "Yuva Udyami",
    description:
      "A youth-focused initiative building entrepreneurial skills through hands-on training, mentorship, hackathons, and real-world exposure.",
    icon: GraduationCap,
    href: "/programs/yuva-udyami",
    image: "/images/programs/udaan.webp",
    stats: "1000+ Youth Impacted",
  },
  {
    title: "Startup Incubation",
    description:
      "Supporting startups from idea stage to growth stage with mentoring, infrastructure, funding access, and strong industry connections.",
    icon: Rocket,
    href: "/programs/incubation",
    image: "/images/programs/bosch/bosch-2.jpg",
    stats: "110+ Startups Supported",
  },
  {
    title: "Corporate Innovation",
    description:
      "Partnering with industry on innovation challenges and CSR-driven programs that connect startups with corporates for pilots and scale.",
    icon: Building2,
    href: "/programs/corporate-innovation",
    image: "/images/programs/bosch/bosch-1.png",
    stats: "Industry Partnerships",
  },
];

const startups = [
  {
    name: "BatX Energies",
    description: "Lithium-ion battery recycling with Zero Waste-Zero Emission technology",
    logo: "/images/startups/batx-energies.svg",
    website: "https://batxenergies.com/",
  },
  {
    name: "Vayuguard Climate Tech",
    description: "Advanced air purification solutions for healthier environments",
    logo: "/images/startups/vayuguard-climate-tech-private-limited.svg",
    website: "https://vayuguard.com/",
  },
  {
    name: "Femzo India",
    description: "Electric mobility solutions for sustainable transportation",
    logo: "/images/startups/femzo-india-private-limited.png",
    website: "https://feryrides.co.in/",
  },
  {
    name: "Kagaku Technology",
    description: "Innovative technology solutions for modern challenges",
    logo: "/images/startups/kagaku-technology-private-limited.webp",
    website: "https://scitechindustries.com/",
  },
  {
    name: "Inconel Technologies",
    description: "IoT-based real-time safety compliance monitoring systems",
    logo: "/images/startups/inconel-technologies-private-limited.png",
    website: "https://inconel.tech/",
  },
  {
    name: "Itx Care (Dr at Home)",
    description: "Healthcare solutions bringing doctors to your doorstep",
    logo: "/images/startups/itx-care-private-limited.png",
    website: "https://www.doctorathome.in/",
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

// Empty banner placeholders — set `image` on each slide once final banner artwork is ready.
const bannerSlides: BannerSlide[] = [{}, {}, {}];

function StartupScrollSection({ startups }: { startups: { name: string; description: string; logo: string; website: string }[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const activeCardRef = useRef(0);
  const [activeCard, setActiveCard] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["50vw", "-140vw"]);

  useMotionValueEvent(scrollYProgress, "change", () => {
    const viewportCenter = window.innerWidth / 2;
    let closestIndex = activeCardRef.current;
    let closestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const { left, width } = card.getBoundingClientRect();
      const cardCenter = left + width / 2;
      const distanceFromCenter = Math.abs(cardCenter - viewportCenter);

      if (distanceFromCenter < closestDistance) {
        closestDistance = distanceFromCenter;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeCardRef.current) {
      activeCardRef.current = closestIndex;
      setActiveCard(closestIndex);
    }
  });

  return (
    <section className="bg-white">
      {/* Desktop: Horizontal scroll pinned */}
      <div ref={sectionRef} className="hidden md:block h-[400vh] relative">
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
          {/* Heading inside sticky frame */}
          <div className="max-w-2xl mx-auto text-center mb-14 px-4 flex-shrink-0">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary rounded-full mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
              <span className="relative inline-block">
                Startups
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C40 2 80 2 100 6C120 10 160 4 198 4" stroke="#e67e22" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
                </svg>
              </span>{" "}
              We&apos;ve Nurtured
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">
              From idea to market — our incubated startups are solving real-world problems across healthcare, climate tech, mobility, and more.
            </p>
          </div>

          {/* Horizontal sliding cards */}
          <motion.div style={{ x }} className="flex gap-8 pl-[10vw]">
            {startups.map((startup, i) => {
              const isActive = activeCard === i;
              return (
                <a
                  key={startup.name}
                  href={startup.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${startup.name} website in a new tab`}
                  ref={(node) => {
                    cardRefs.current[i] = node;
                  }}
                  className={`min-w-[50vw] lg:min-w-[30vw] h-[40vh] rounded-3xl overflow-hidden relative bg-section-alt border transition-all duration-300 ease-out flex flex-col items-center justify-center text-center p-8 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
                    isActive ? "border-primary/45 shadow-[0_18px_45px_rgba(17,24,39,0.10)] scale-[1.015]" : "border-border/50 shadow-none scale-100"
                  }`}
                >
                  <div className={`absolute inset-x-10 top-0 h-1 rounded-b-full bg-primary transition-opacity duration-300 pointer-events-none ${isActive ? "opacity-90" : "opacity-0"}`} />
                  <div className={`absolute inset-0 rounded-3xl ring-1 ring-inset ring-primary/10 transition-opacity duration-300 pointer-events-none ${isActive ? "opacity-100" : "opacity-0"}`} />
                  <div className="relative w-32 h-32 mb-5 flex items-center justify-center">
                    <Image src={startup.logo} alt={startup.name} width={128} height={128} className={`w-full h-full object-contain mix-blend-multiply transition-transform duration-300 ease-out ${isActive ? "scale-105" : "scale-100"}`} />
                  </div>
                  <h4 className={`text-lg font-bold transition-colors duration-300 mb-2 ${isActive ? "text-primary" : "text-foreground"}`}>{startup.name}</h4>
                  <p className="text-sm text-text-muted leading-relaxed max-w-xs">{startup.description}</p>
                </a>
              );
            })}
            {/* CTA card */}
            <div className="min-w-[50vw] lg:min-w-[30vw] h-[40vh] rounded-3xl overflow-hidden relative flex flex-col items-center justify-center text-center p-8 bg-primary/5 border-2 border-dashed border-primary/30">
              <h4 className="text-xl font-bold text-foreground mb-2">And Many More...</h4>
              <p className="text-sm text-text-muted mb-6">110+ startups incubated across multiple sectors</p>
              <Link href="/startups" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all">
                View All Startups <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile: Vertical stack with animations */}
      <div className="md:hidden px-4 sm:px-6 py-12">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary rounded-full mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Startups We&apos;ve Nurtured
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">
            From idea to market — solving real-world problems across multiple sectors.
          </p>
        </div>
        <div className="space-y-4">
          {startups.map((startup, i) => (
            <motion.div
              key={startup.name}
              className="bg-section-alt rounded-2xl p-5 flex items-center gap-4 border border-border/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center">
                <Image src={startup.logo} alt={startup.name} width={56} height={56} className="w-full h-full object-contain" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">{startup.name}</h4>
                <p className="text-xs text-text-muted leading-relaxed mt-1">{startup.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/startups" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all">
            View All Startups <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ========== BANNER ========== */}
      <BannerSlider slides={bannerSlides} />

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
                  <div className="rounded-2xl overflow-hidden"><Image src="/images/programs/mera-business/dsc_0098.jpg" alt="ACIC-BMU program participants" width={300} height={400} className="w-full h-36 sm:h-56 object-cover object-center" /></div>
                  <div className="rounded-2xl overflow-hidden"><Image src="/images/programs/yuva/fpae-1.jpg" alt="Yuva Udyami program" width={300} height={250} className="w-full h-28 sm:h-44 object-cover object-center" /></div>
                </div>
                <div className="space-y-4 pt-4 sm:pt-8">
                  <div className="rounded-2xl overflow-hidden"><Image src="/images/programs/bosch/bosch-1.png" alt="BOSCH-BMU Innovation Challenge" width={300} height={250} className="w-full h-28 sm:h-44 object-cover object-center" /></div>
                  <div className="rounded-2xl overflow-hidden"><Image src="/images/programs/udaan.webp" alt="Innovators at an ACIC-BMU program" width={300} height={400} className="w-full h-36 sm:h-56 object-cover object-center" /></div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mb-4">
                About <span className="relative inline-block text-primary">Us<svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none"><path d="M2 8C40 2 80 2 100 6C120 10 160 4 198 4" stroke="#e67e22" strokeWidth="3" strokeLinecap="round" opacity="0.4" /></svg></span>
              </h2>
              <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-6">
                ACIC-BMU Foundation has been set up by BML Munjal University along with the support of Atal Innovation Mission (AIM), NITI Aayog to promote and support innovation and entrepreneurship — encouraging innovators within the university and the community around it.
              </p>

              {/* Vision */}
              <div className="rounded-2xl border border-primary/15 bg-primary/5 p-4 sm:p-5 mb-6">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-1.5">Our Vision</h3>
                <p className="text-sm sm:text-[15px] text-foreground/80 leading-relaxed">
                  To create an ecosystem that nurtures entrepreneurs who are innovative, tenacious, and ethical — with the zeal to create economic value and societal impact through their ventures.
                </p>
              </div>

              {/* Mission */}
              <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Our Mission</h3>
              <div className="space-y-3.5 mb-6">
                {[
                  { icon: Lightbulb, title: "Ignite Innovation", desc: "Programs, courses, and events that spark innovation among students, faculty, and community." },
                  { icon: Users, title: "Build a Network", desc: "Connecting entrepreneurs, mentors, experts, investors, and service providers in one ecosystem." },
                  { icon: Building2, title: "Engage Industry", desc: "Driving active industry participation in innovation with real-world pilot opportunities." },
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

              {/* Facilities */}
              <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Facilities at ACIC-BMU</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Co-working spaces", "Prototyping & testing labs", "Conference rooms", "High-speed IT infrastructure", "Mentorship & networking zones"].map((facility) => (
                  <span key={facility} className="px-3 py-1.5 text-xs font-medium bg-section-alt border border-border rounded-full text-foreground/70">
                    {facility}
                  </span>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground"><span className="relative inline-block">Programs<svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none"><path d="M2 8C40 2 80 2 100 6C120 10 160 4 198 4" stroke="#e67e22" strokeWidth="3" strokeLinecap="round" opacity="0.4" /></svg></span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {programs.map((program, i) => (
              <motion.div key={program.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Link href={program.href} className="group block">
                  <div className="relative flex h-full flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50">
                    <GlowingEffect spread={40} glow proximity={64} disabled={false} borderWidth={2} />
                    <div className="relative h-52 shrink-0 overflow-hidden">
                      <Image src={program.image} alt={program.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-white/90 text-xs font-semibold rounded-full text-primary">{program.stats}</span>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                        <program.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">{program.title}</h3>
                      <p className="text-sm text-text-muted leading-relaxed">{program.description}</p>
                      <div className="mt-auto pt-4 flex items-center gap-1 text-sm font-semibold text-primary">
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

      {/* ========== STARTUPS — Horizontal Scroll Reveal ========== */}
      <StartupScrollSection startups={startups} />

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
        <div className="text-center mt-10">
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary/30 transition-all shadow-lg shadow-primary/25">
            Apply to Become a Part of the Program <ArrowRight className="w-4 h-4" />
          </Link>
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
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-text-muted">
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
                  <Image src={`/images/infrastructure/${n}.png`} alt={`Facility ${n}`} width={300} height={220} className="w-full h-32 sm:h-44 object-cover object-bottom hover:scale-105 transition-transform duration-500" />
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