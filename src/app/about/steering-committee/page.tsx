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

interface CommitteeMember {
  name: string;
  designation: string;
  company: string;
  photo?: string;
  initials?: string;
  former?: boolean;
  imageClass?: string;
  linkedin?: string;
}

const committeeMembers: CommitteeMember[] = [
  {
    name: "Dr George Goh",
    designation: "Founder",
    company: "OSSIA — Singapore",
    photo: "/images/steering/george-goh.jpg",
    imageClass: "object-[70%_top]",
    former: true,
    linkedin: "https://www.linkedin.com/in/georgegohchingwah",
  },
  {
    name: "Mr. Sunil Munjal",
    designation: "Chairman",
    company: "HERO Enterprises",
    photo: "/images/steering/sunil-munjal.jpg",
    imageClass: "object-top",
    linkedin: "https://www.linkedin.com/in/sunil-kant-munjal-555994199",
  },
  {
    name: "Ms. Padmaja Ruparel",
    designation: "Founder",
    company: "IAN",
    photo: "/images/steering/padmaja-ruparel.jpg",
    linkedin: "https://www.linkedin.com/in/padmajaruparel",
  },
  {
    name: "Mr. Rahul Garg",
    designation: "Founder",
    company: "Moglix",
    photo: "/images/steering/rahul-garg.jpg",
    former: true,
    linkedin: "https://www.linkedin.com/in/rahulgarg",
  },
  {
    name: "Dr. Gerry George",
    designation: "Former Dean",
    company: "Singapore Management University",
    photo: "/images/steering/gerry-george.jpg",
    imageClass: "object-[70%_top]",
    linkedin: "https://www.linkedin.com/in/gerry-george-a713505",
  },
  {
    name: "Mr. Kris Gopalakrishnan",
    designation: "Chairman",
    company: "Axillor Ventures",
    photo: "/images/steering/kris-gopalakrishnan.jpg",
    former: true,
    linkedin: "https://www.linkedin.com/in/kris-gopalakrishnan-10b49950",
  },
  {
    name: "Ms. Poyni Bhat",
    designation: "Former CEO",
    company: "SINE",
    photo: "/images/steering/poyni-bhat.jpg",
    linkedin: "https://www.linkedin.com/in/poyni-bhatt-972b932",
  },
  {
    name: "Dr. Neharika Vohra",
    designation: "Board Member",
    company: "CIIE",
    photo: "/images/steering/neharika-vohra.jpg",
    linkedin: "https://www.linkedin.com/in/neharika-vohra-b185537",
  },
  {
    name: "Mr. Vineet Rai",
    designation: "Chairman",
    company: "Aavishkaar Group",
    photo: "/images/steering/vineet-rai.jpg",
    linkedin: "https://www.linkedin.com/in/vineet-rai-536160",
  },
  {
    name: "Mr. Srinivas Rao",
    designation: "Former CEO",
    company: "T-Hub",
    photo: "/images/steering/srinivas-rao.jpg",
    linkedin: "https://www.linkedin.com/in/srinivas-rao-mahankali-767b77175",
  },
  {
    name: "Mr. Kanwaljit Singh",
    designation: "Managing Partner",
    company: "Fireside Ventures",
    photo: "/images/steering/kanwaljit-singh.jpg",
    former: true,
    linkedin: "https://www.linkedin.com/in/singhkanwaljit",
  },
  {
    name: "Dr. Sankalp Chaturvedi",
    designation: "Associate Dean",
    company: "Imperial College",
    photo: "/images/steering/sankalp-chaturvedi.jpg",
    linkedin: "https://www.linkedin.com/in/sankalp-chaturvedi-7486441",
  },
  {
    name: "Dr Dinesh Dua",
    designation: "Managing Partner",
    company: "DRIPK Enterprises",
    photo: "/images/steering/dinesh-dua.jpg",
    linkedin: "https://www.linkedin.com/in/dr-dinesh-dua-2585163",
  },
  {
    name: "Ms Swati Munjal",
    designation: "President",
    company: "BML Munjal University",
    photo: "/images/board/swati-munjal.jpg",
    imageClass: "object-[60%_center]",
    linkedin: "https://www.linkedin.com/in/swati-munjal-3a5752",
  },
  {
    name: "Mr Akshay Munjal",
    designation: "Founder and CEO",
    company: "Hero Vired",
    photo: "/images/board/akshay-munjal.jpg",
    imageClass: "object-top",
    linkedin: "https://in.linkedin.com/in/akshay-munjal-5316467a",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export default function SteeringCommitteePage() {
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
            label="Governance"
            title="Steering Committee"
            description="Distinguished industry leaders and academicians who provide strategic direction and oversight to ACIC-BMU Foundation."
          />
        </div>
      </section>

      {/* Committee Members Grid */}
      <section className="py-12 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {committeeMembers.map((member, i) => (
              <motion.div
                key={`${member.name}-${i}`}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="group h-full text-center p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20 relative">
                  {member.former && (
                    <span className="absolute top-3 right-3 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-text-muted/10 text-text-muted rounded-full">
                      Former Member
                    </span>
                  )}
                  <div className="relative w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden aspect-square border-4 border-section-alt group-hover:border-primary/20 transition-colors">
                    {member.photo ? (
                      <Image
                        src={member.photo}
                        alt={member.name}
                        width={112}
                        height={112}
                        className={`w-full h-full object-cover ${member.imageClass || ""}`}
                      />
                    ) : (
                      <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">
                          {member.initials}
                        </span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-base font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-primary font-medium">
                    {member.designation}
                  </p>
                  <p className="mt-0.5 text-xs text-text-muted">
                    {member.company}
                  </p>
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
