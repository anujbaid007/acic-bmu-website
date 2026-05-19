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

const teamMembers = [
  {
    name: "Davinder Singh",
    role: "CEO",
    photo: "/images/team/davinder-singh.jpg",
    linkedin: "https://www.linkedin.com/in/davindertaru",
    imageClass: "object-top",
  },
  {
    name: "Siraj Khan",
    role: "Program Manager",
    photo: "/images/team/siraj-khan.png",
    linkedin: "https://www.linkedin.com/in/siraj-khan-b7a04213b",
    imageClass: "",
  },
  {
    name: "Divya Saini",
    role: "Manager, Incubation",
    photo: "/images/team/divya-saini.jpg",
    linkedin: "https://www.linkedin.com/in/divya-saini5",
    imageClass: "",
  },
  {
    name: "Neha Grover",
    role: "Executive",
    photo: "/images/team/neha.png",
    linkedin: "https://www.linkedin.com/in/neha-grover-566a841a4",
    imageClass: "",
  },
  {
    name: "Ramanuj Jajoo",
    role: "Sr. Account Executive",
    photo: "/images/team/ramanuj-jajoo.jpg",
    linkedin: "",
    imageClass: "object-top",
  },
  {
    name: "Prashant Kourav",
    role: "Management Trainee",
    photo: "/images/team/prashant-kourav.jpg",
    linkedin: "https://www.linkedin.com/in/prashant-kourav-94715b351",
    imageClass: "",
  },
  {
    name: "Chaitanya Pathania",
    role: "Management Trainee",
    photo: "/images/team/chaitanya-pathania.jpeg",
    linkedin: "https://www.linkedin.com/in/chaitanyafin",
    imageClass: "",
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

      {/* Team Grid */}
      <section className="py-12 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="group h-full text-center p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20">
                  <div className="relative w-32 h-32 mx-auto mb-5 rounded-full overflow-hidden aspect-square ring-3 ring-transparent group-hover:ring-primary transition-all duration-300">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={128}
                      height={128}
                      className={`w-full h-full object-cover ${member.imageClass}`}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-text-muted">{member.role}</p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex w-9 h-9 bg-section-alt rounded-full items-center justify-center hover:bg-primary hover:text-white transition-colors text-primary"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
