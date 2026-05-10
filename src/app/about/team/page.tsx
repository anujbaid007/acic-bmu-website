"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

const teamMembers = [
  {
    name: "Mr. Akshay Munjal",
    designation: "Founder & CEO, Hero Vired",
    photo: "/images/team/akshay-munjal.jpg",
    imageClass: "object-top",
  },
  {
    name: "Mrs. Swati Munjal",
    designation: "President, BML Munjal University",
    photo: "/images/team/swati-munjal.jpg",
  },
  {
    name: "Prof. Shyam Menon",
    designation: "Vice President, BML Munjal University",
    photo: "/images/team/shyam-menon.jpg",
  },
  {
    name: "Prof. Davinder Singh",
    designation: "Director",
    photo: "/images/team/davinder-singh.jpg",
    imageClass: "object-top",
  },
  {
    name: "Mr. Ramanuj Jajoo",
    designation: "Executive Officer",
    photo: "/images/team/ramanuj-jajoo.jpg",
    imageClass: "object-top",
  },
  {
    name: "Siraj Khan",
    designation: "Program Manager",
    photo: "/images/team/siraj-khan.png",
  },
  {
    name: "Divya Saini",
    designation: "Program Associate",
    photo: "/images/team/divya-saini.jpg",
  },
  {
    name: "Neha",
    designation: "Program Associate",
    photo: "/images/team/neha.png",
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

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-br from-white via-section-alt to-primary/5">
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

      {/* Team Members Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="group text-center p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20">
                  <div className="relative w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden aspect-square border-4 border-section-alt group-hover:border-primary/20 transition-colors">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={112}
                      height={112}
                      className={`w-full h-full object-cover ${(member as any).imageClass || ""}`}
                    />
                  </div>
                  <h3 className="text-base font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-text-muted">
                    {member.designation}
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
