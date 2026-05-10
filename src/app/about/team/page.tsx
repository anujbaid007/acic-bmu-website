"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import TeamShowcase from "@/components/ui/team-showcase";
import type { TeamMember } from "@/components/ui/team-showcase";

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Mr. Akshay Munjal",
    role: "Founder & CEO, Hero Vired",
    image: "/images/team/akshay-munjal.jpg",
    imageClass: "object-top",
    social: { linkedin: "https://in.linkedin.com/in/akshay-munjal-5316467a" },
  },
  {
    id: "2",
    name: "Mrs. Swati Munjal",
    role: "President, BML Munjal University",
    image: "/images/team/swati-munjal.jpg",
    social: { linkedin: "https://www.linkedin.com/in/swati-munjal-3a5752" },
  },
  {
    id: "3",
    name: "Prof. Shyam Menon",
    role: "Vice President, BML Munjal University",
    image: "/images/team/shyam-menon.jpg",
    social: { linkedin: "https://www.linkedin.com/in/prof-shyam-menon-43655224b" },
  },
  {
    id: "4",
    name: "Prof. Davinder Singh",
    role: "Director",
    image: "/images/team/davinder-singh.jpg",
    imageClass: "object-top",
  },
  {
    id: "5",
    name: "Mr. Ramanuj Jajoo",
    role: "Executive Officer",
    image: "/images/team/ramanuj-jajoo.jpg",
    imageClass: "object-top",
  },
  {
    id: "6",
    name: "Siraj Khan",
    role: "Program Manager",
    image: "/images/team/siraj-khan.png",
  },
  {
    id: "7",
    name: "Divya Saini",
    role: "Program Associate",
    image: "/images/team/divya-saini.jpg",
  },
  {
    id: "8",
    name: "Neha",
    role: "Program Associate",
    image: "/images/team/neha.png",
  },
];

export default function TeamPage() {
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
            label="People"
            title="Our Team"
            description="The dedicated professionals driving ACIC-BMU Foundation's day-to-day operations and nurturing the innovation ecosystem."
          />
        </div>
      </section>

      {/* Team Showcase */}
      <section className="py-12 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TeamShowcase members={teamMembers} />
          </motion.div>
        </div>
      </section>
    </>
  );
}
