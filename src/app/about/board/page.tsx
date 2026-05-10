"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const boardMembers = [
  {
    name: "Mr Akshay Munjal",
    designation: "Founder and CEO, Hero Vired",
    photo: "/images/board/akshay-munjal.jpg",
    linkedin: "#",
    imageClass: "object-top",
  },
  {
    name: "Ms Swati Munjal",
    designation: "President, BML Munjal University",
    photo: "/images/board/swati-munjal.jpg",
    linkedin: "#",
    imageClass: "object-[60%_center]",
  },
  {
    name: "Prof Shyam Menon",
    designation: "Vice President, BML Munjal University",
    photo: "/images/board/shyam-menon.jpg",
    linkedin: "#",
    imageClass: "",
  },
  {
    name: "Mr Ravi Pahuja",
    designation: "CEO, Raman Kant Munjal Foundation",
    photo: "/images/board/ravi-pahuja.jfif",
    linkedin: "#",
    imageClass: "",
  },
  {
    name: "Dr Prem Kumar",
    designation: "Executive Director, Munjal BCU Centre of Innovation",
    photo: "/images/board/prem-kumar.png",
    linkedin: "#",
    imageClass: "object-top",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
};

export default function BoardPage() {
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
            label="Leadership"
            title="Board Members"
            description="The visionary leaders guiding ACIC-BMU Foundation's mission to nurture innovation and entrepreneurship across India."
          />
        </div>
      </section>

      {/* Board Members Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.slice(0, 3).map((member, i) => (
              <motion.div
                key={member.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="group text-center p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20">
                  <div className="relative w-32 h-32 mx-auto mb-5 rounded-full overflow-hidden aspect-square">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={128}
                      height={128}
                      className={`w-full h-full object-cover ${member.imageClass}`}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-text-muted">
                    {member.designation}
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex w-9 h-9 bg-section-alt rounded-full items-center justify-center hover:bg-primary hover:text-white transition-colors text-primary"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {boardMembers.slice(3).map((member, i) => (
              <motion.div
                key={member.name}
                custom={i + 3}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
              >
                <div className="group text-center p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20">
                  <div className="relative w-32 h-32 mx-auto mb-5 rounded-full overflow-hidden aspect-square">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={128}
                      height={128}
                      className={`w-full h-full object-cover ${member.imageClass}`}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-text-muted">
                    {member.designation}
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex w-9 h-9 bg-section-alt rounded-full items-center justify-center hover:bg-primary hover:text-white transition-colors text-primary"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
