"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Search, Rocket, TrendingUp, IndianRupee, Building2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Spotlight } from "@/components/ui/spotlight";

const startups = [
  { name: "BatX Energies Pvt. Ltd.", year: 2021, founder: "Utkarsh Singh & Vikrant Singh", desc: "Lithium-ion battery recycling with Zero Waste-Zero Emission technology", logo: "/images/startups/batx-energies.svg", category: "SISF" },
  { name: "Femzo India (Fery)", year: 2023, founder: "Ajay Kumar & Vindhya Mehrotra", desc: "Electric mobility solutions", logo: "/images/startups/femzo-india-private-limited.png", category: "SISF" },
  { name: "Vayuguard Climate Tech", year: 2023, founder: "Kapil Kapoor", desc: "Air purification solutions", logo: "/images/startups/vayuguard-climate-tech-private-limited.svg", category: "SISF" },
  { name: "Agaamin Technologies", year: 2023, founder: "T. Peethambaran", desc: "Digital identity solutions", logo: "/images/startups/agaamin-technologies-private-limited.png", category: "SAMRIDH" },
  { name: "ITX Care (Dr at Home)", year: 2024, founder: "Shalendra Sinha & Venkata Pulipati", desc: "Healthcare at your doorstep", logo: "/images/startups/itx-care-private-limited.png", category: "SAMRIDH" },
  { name: "Inconel Technologies", year: 2025, founder: "Prashant Rana", desc: "IoT-based safety compliance monitoring", logo: "/images/startups/inconel-technologies-private-limited.png", category: "SAMRIDH" },
  { name: "Emiant Innovations", year: 2024, founder: "Akshay Kumar", desc: "Innovation solutions", logo: "/images/startups/emiant-innovations-private-limited.png", category: "Genesis" },
  { name: "Kagaku Technology", year: 2024, founder: "Unknown", desc: "Technology solutions", logo: "/images/startups/kagaku-technology-private-limited.webp", category: "Genesis" },
  { name: "LEAP10X Training", year: 2024, founder: "Harshit and Ankur", desc: "Frontline workforce management", logo: "/images/startups/leap10x-training-private-limited.svg", category: "SAMRIDH" },
  { name: "Grepbio Datalab", year: 2025, founder: "Kalaivani", desc: "Graphical data analysis for biologists", logo: "/images/startups/grepbio-datalab-private-limited.svg", category: "Genesis" },
  { name: "Fexo GenAI Technologies", year: 2024, founder: "Unknown", desc: "Generative AI solutions", logo: "/images/startups/fexo-genai-technologies-private-limited.png", category: "Genesis" },
  { name: "Road Pilot Technologies", year: 2023, founder: "Nitin Kumar Sharma", desc: "Road transportation solutions", category: "SISF" },
  { name: "Contriver Autonomous Systems", year: 2023, founder: "Utkarsh Ahuja", desc: "Aviation and aerospace components", category: "SISF" },
  { name: "FarmOR Agri Solutions", year: 2023, founder: "Venkata Sai Teja", desc: "Agri inputs supply chain", category: "SAMRIDH" },
  { name: "Vendorboat", year: 2023, founder: "Vivek Mittal", desc: "B2B manufacturing & supply chain", category: "SAMRIDH" },
  { name: "Flylab Solutions", year: 2024, founder: "Atharva Naik", desc: "Drone aggregator platform", category: "Genesis" },
  { name: "Raptee Energy", year: 2025, founder: "Dinesh Ramkumar", desc: "High-voltage electric motorcycles", logo: "/images/samridh/raptee-energy-private-limited.svg", category: "Genesis" },
  { name: "TORUS Robotics", year: 2025, founder: "Vibhakar Senthil Kumar", desc: "Axial flux motors: 50% lighter, 15% more efficient", logo: "/images/samridh/torus-robotics-pvt-ltd.png", category: "Genesis" },
  { name: "Spaceman Craft", year: 2025, founder: "Praveen Kumar N", desc: "Electric thrusters for satellite propulsion", logo: "/images/samridh/spaceman-craft-private-limited.png", category: "Genesis" },
  { name: "Blurgs AI", year: 2025, founder: "Roshan Raj", desc: "Maritime and defence data analytics", logo: "/images/samridh/blurgs-innovations-private-limited.avif", category: "Genesis" },
  { name: "BLINC Smart Homes", year: 2025, founder: "Ishwariya Senthilnathan", desc: "IoT smart switches with Thread & Matter", category: "Genesis" },
  { name: "Gadget Guruz", year: 2025, founder: "Prateek Sharma", desc: "Nationwide gadget repair and recycling", logo: "/images/samridh/gadget-guruz.webp", category: "Genesis" },
  { name: "Uneverse", year: 2025, founder: "Manohar Bethapudi", desc: "Sodium-ion battery technology", logo: "/images/samridh/uneverse.webp", category: "Genesis" },
];

const categories = ["All", "SISF Startups", "SAMRIDH Startups", "Genesis Startups"];

const stats = [
  { icon: Rocket, value: "110+", label: "Startups Incubated" },
  { icon: IndianRupee, value: "₹110 Cr+", label: "Funding Raised" },
  { icon: TrendingUp, value: "₹850 Cr+", label: "Combined Valuation" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function StartupsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = startups.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.founder.toLowerCase().includes(search.toLowerCase()) ||
      s.desc.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All" ||
      (activeCategory === "SISF Startups" && s.category === "SISF") ||
      (activeCategory === "SAMRIDH Startups" && s.category === "SAMRIDH") ||
      (activeCategory === "Genesis Startups" && s.category === "Genesis");

    return matchesSearch && matchesCategory;
  });

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
              Our Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Startups We&apos;ve Nurtured
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-12">
              From bold ideas to thriving ventures — discover the startups building the future with our support.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <stat.icon className="w-8 h-8 text-primary-light mx-auto mb-3" />
                <p className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-white/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-10 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10"
          >
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input
                type="text"
                placeholder="Search startups by name, founder, or sector..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-border bg-section-alt focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-md"
                      : "bg-section-alt text-text-muted hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Results count */}
          <p className="text-sm text-text-muted mb-6">
            Showing {filtered.length} startup{filtered.length !== 1 ? "s" : ""}
          </p>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((startup, i) => (
                <motion.div
                  key={startup.name}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.3, delay: i * 0.03 }}
                  layout
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-6 h-full border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                    {/* Logo */}
                    <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-xl bg-section-alt overflow-hidden">
                      {startup.logo ? (
                        <Image
                          src={startup.logo}
                          alt={startup.name}
                          width={56}
                          height={56}
                          className="w-full h-full object-contain p-1"
                        />
                      ) : (
                        <Building2 className="w-6 h-6 text-primary/50" />
                      )}
                    </div>

                    {/* Info */}
                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                      {startup.name}
                    </h3>
                    <p className="text-xs text-text-muted mb-2">
                      {startup.founder} &middot; {startup.year}
                    </p>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {startup.desc}
                    </p>

                    {/* Badge */}
                    <div className="mt-4">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {startup.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-muted text-lg">No startups found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-20 bg-section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            label="Join Our Ecosystem"
            title="Have an Innovative Idea?"
            description="Apply to our incubation program and get access to mentorship, funding, infrastructure, and a thriving community of innovators."
          />
          <motion.a
            href="/programs/incubation"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
          >
            Apply for Incubation <Rocket className="w-4 h-4" />
          </motion.a>
        </div>
      </section>
    </>
  );
}