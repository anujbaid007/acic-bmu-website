"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

const mentors = [
  {
    name: "Anmol Sehgal",
    designation: "iDEX: Innovation for Defence Excellence",
    photo: "/images/mentors/anmol-sehgal.jpg",
  },
  {
    name: "Dr. Deepak Pandit",
    designation: "BML Munjal University",
    photo: "/images/mentors/prof.-deepak-pandit.jpg",
  },
  {
    name: "Dr. Shweta Singh",
    designation: "Founder, Ennoble IP",
    photo: "/images/mentors/dr.-shweta-singh.jpg",
  },
  {
    name: "Gitanjali Puri",
    designation: "Board Advisor, Venture Partner at Ah! Ventures",
    photo: "/images/mentors/gitanjali-puri.jpg",
  },
  {
    name: "Mr Abhinav Grover",
    designation: "M&A Head, Hero Moto Corp",
    photo: "/images/mentors/abhinav-grover.jpg",
  },
  {
    name: "Mr. Anurag Jain",
    designation: "Ex Co-founder, Milkbasket.com",
    photo: "/images/mentors/anurag-jain.jpg",
  },
  {
    name: "Mr. Manish Johari",
    designation: "Maple Capital Advisor",
    photo: "/images/mentors/manish-johari.jpg",
  },
  {
    name: "Mr. Pankaj Agarwal",
    designation: "Founder, JustOrganik",
    photo: "/images/mentors/pankaj-agarwal.jpg",
  },
  {
    name: "Mr. Rajive Gulati",
    designation: "Hartron, UN Technology Innovation Labs",
    photo: "/images/mentors/rajive-gulati.jpg",
  },
  {
    name: "Mr. Vikas Gupta",
    designation: "9.9 Media",
    photo: "/images/mentors/vikas-gupta.jpg",
  },
  {
    name: "Ms Hanisha Vaswani",
    designation: "Majority Fund",
    photo: "/images/mentors/hanisha-vaswani.jpg",
  },
  {
    name: "Ms Naveena Reddy",
    designation: "Lead Angels",
    photo: "/images/mentors/naveena-reddy.jpg",
  },
  {
    name: "Ms. Ariba Khan",
    designation: "Founder, JumpingMinds",
    photo: "/images/mentors/ariba-khan.jpg",
  },
  {
    name: "Prof Anita Lal",
    designation: "FORE School of Management",
    photo: "/images/mentors/prof.-anita-tripathy-lal.jpg",
  },
  {
    name: "Prof Devanjali Relan",
    designation: "MHRD AICTE Innovation Council",
    photo: "/images/mentors/prof-devanjali-relan.jpg",
  },
  {
    name: "Prof Kulbir Lamba",
    designation: "Ex CEO, IIT Jodhpur TISC",
    photo: "/images/mentors/prof-kulbir-lamba.webp",
  },
  {
    name: "Prof. Vinay Nangia",
    designation: "BMU & NSUT",
    photo: "/images/mentors/prof.-vinay-nangia.jpg",
  },
  {
    name: "Rakesh Sharma",
    designation: "Product Dev & Manufacturing Expert",
    photo: "/images/mentors/rakesh-sharma.jpg",
  },
  {
    name: "Rohit Gupta",
    designation: "Program Director, Atal Innovation Mission",
    photo: "/images/mentors/rohit-gupta.jpg",
  },
  {
    name: "Sajid Raza",
    designation: "MeitY Startup Hub",
    photo: "/images/mentors/sajid-raza.jpg",
  },
  {
    name: "Sameer Gupta",
    designation: "Director, Haldivita",
    photo: "/images/mentors/sameer-gupta.jpg",
  },
  {
    name: "Sanghamitra Bahsin",
    designation: "Wadhwani Foundation",
    photo: "/images/mentors/sanghamitra-bahsin.jpg",
  },
  {
    name: "Sanjay Nagi",
    designation: "Global Consultant, Angel Investor",
    photo: "/images/mentors/sanjay-nagi.jpg",
  },
  {
    name: "Shailendra Awasthi",
    designation: "Serial Entrepreneur",
    photo: "/images/mentors/shailendra-awasthi.jpg",
  },
  {
    name: "Shashwat Pathak",
    designation: "CEO, AIC GNITS Hyderabad",
    photo: "/images/mentors/shashwat-pathak.jpg",
  },
  {
    name: "Vibhuti Agarwal",
    designation: "General Partner, Realtime Angel Fund",
    photo: "/images/mentors/vibhuti-agarwal.jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4 },
  }),
};

export default function MentorsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 pb-12 lg:pt-32 lg:pb-24 bg-gradient-to-br from-white via-section-alt to-primary/5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <SectionHeading
            label="Expertise"
            title="Our Mentors"
            description="A diverse network of industry veterans, investors, and domain experts dedicated to guiding startups through every stage of their journey."
          />
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="py-12 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {mentors.map((mentor, i) => (
              <motion.div
                key={mentor.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="group text-center p-4 rounded-xl bg-white hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/20">
                  <div className="relative w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden aspect-square border-3 border-section-alt group-hover:border-primary/20 transition-colors">
                    <Image
                      src={mentor.photo}
                      alt={mentor.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-foreground leading-tight">
                    {mentor.name}
                  </h3>
                  <p className="mt-1 text-xs text-text-muted leading-snug">
                    {mentor.designation}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
