"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const mentors = [
  {
    name: "Anmol Sehgal",
    designation: "iDEX: Innovation for Defence Excellence",
    photo: "/images/mentors/anmol-sehgal.jpg",
    linkedin: "https://www.linkedin.com/in/anmol-sehgal-965256128/",
  },
  {
    name: "Dr. Deepak Pandit",
    designation: "BML Munjal University",
    photo: "/images/mentors/prof.-deepak-pandit.jpg",
    linkedin: "https://www.linkedin.com/in/deepakpandit/",
  },
  {
    name: "Dr. Shweta Singh",
    designation: "Founder, Ennoble IP",
    photo: "/images/mentors/dr.-shweta-singh.jpg",
    linkedin: "https://www.linkedin.com/in/dr-shweta-singh-925a6b48/",
  },
  {
    name: "Gitanjali Puri",
    designation: "Board Advisor, Venture Partner at Ah! Ventures",
    photo: "/images/mentors/gitanjali-puri.jpg",
    linkedin: "https://www.linkedin.com/in/gitanjalipuri/",
  },
  {
    name: "Mr Abhinav Grover",
    designation: "M&A Head, Hero Moto Corp",
    photo: "/images/mentors/abhinav-grover.jpg",
    linkedin: "https://www.linkedin.com/in/abhinav-grover/",
  },
  {
    name: "Mr. Anurag Jain",
    designation: "Ex Co-founder, Milkbasket.com",
    photo: "/images/mentors/anurag-jain.jpg",
    linkedin: "https://www.linkedin.com/in/anuragja/",
  },
  {
    name: "Mr. Manish Johari",
    designation: "Maple Capital Advisor",
    photo: "/images/mentors/manish-johari.jpg",
    linkedin: "https://www.linkedin.com/in/johari/",
  },
  {
    name: "Mr. Pankaj Agarwal",
    designation: "Founder, JustOrganik",
    photo: "/images/mentors/pankaj-agarwal.jpg",
    linkedin: "https://www.linkedin.com/in/pankaj-agarwal-5b55601/",
  },
  {
    name: "Mr. Rajive Gulati",
    designation: "Hartron, UN Technology Innovation Labs",
    photo: "/images/mentors/rajive-gulati.jpg",
    linkedin: "https://www.linkedin.com/in/rajive-gulati-510b8814/",
  },
  {
    name: "Mr. Vikas Gupta",
    designation: "9.9 Media",
    photo: "/images/mentors/vikas-gupta.jpg",
    linkedin: "https://www.linkedin.com/in/vikas-gupta-7b95537/",
  },
  {
    name: "Ms Hanisha Vaswani",
    designation: "Majority Fund",
    photo: "/images/mentors/hanisha-vaswani.jpg",
    linkedin: "https://www.linkedin.com/in/hanishavaswani/",
  },
  {
    name: "Ms Naveena Reddy",
    designation: "Lead Angels",
    photo: "/images/mentors/naveena-reddy.jpg",
    linkedin: "https://www.linkedin.com/in/naveena-reddy-bb294a141/",
  },
  {
    name: "Ms. Ariba Khan",
    designation: "Founder, JumpingMinds",
    photo: "/images/mentors/ariba-khan.jpg",
    linkedin: "https://www.linkedin.com/in/ariba-khan-ab8a2944/",
  },
  {
    name: "Prof Anita Lal",
    designation: "FORE School of Management",
    photo: "/images/mentors/prof.-anita-tripathy-lal.jpg",
    linkedin: "https://www.linkedin.com/in/anita-tripathy-lal-3169624/",
  },
  {
    name: "Prof Devanjali Relan",
    designation: "MHRD AICTE Innovation Council",
    photo: "/images/mentors/prof-devanjali-relan.jpg",
    linkedin: "https://www.linkedin.com/in/devanjali-relan-2160a258/",
  },
  {
    name: "Prof Kulbir Lamba",
    designation: "Ex CEO, IIT Jodhpur TISC",
    photo: "/images/mentors/prof-kulbir-lamba.webp",
    linkedin: "https://www.linkedin.com/in/kulbirlamba/",
  },
  {
    name: "Prof. Vinay Nangia",
    designation: "BMU & NSUT",
    photo: "/images/mentors/prof.-vinay-nangia.jpg",
    linkedin: "https://www.linkedin.com/in/prof-vinay-nangia-760a6360/",
  },
  {
    name: "Rakesh Sharma",
    designation: "Product Dev & Manufacturing Expert",
    photo: "/images/mentors/rakesh-sharma.jpg",
    linkedin: "https://www.linkedin.com/in/SharmaRakesh55/",
  },
  {
    name: "Rohit Gupta",
    designation: "Program Director, Atal Innovation Mission",
    photo: "/images/mentors/rohit-gupta.jpg",
    linkedin: "https://www.linkedin.com/in/rohit-gupta-55824219/",
  },
  {
    name: "Sajid Raza",
    designation: "MeitY Startup Hub",
    photo: "/images/mentors/sajid-raza.jpg",
    linkedin: "https://www.linkedin.com/in/sajid-raza-9a9958141/",
  },
  {
    name: "Sameer Gupta",
    designation: "Director, Haldivita",
    photo: "/images/mentors/sameer-gupta.jpg",
    linkedin: "https://www.linkedin.com/in/sameer-gupta-0477431a3",
  },
  {
    name: "Sanghamitra Bahsin",
    designation: "Wadhwani Foundation",
    photo: "/images/mentors/sanghamitra-bahsin.jpg",
    linkedin: "https://www.linkedin.com/in/sanghamitra-dutta-bhasin-5945055/",
  },
  {
    name: "Sanjay Nagi",
    designation: "Global Consultant, Angel Investor",
    photo: "/images/mentors/sanjay-nagi.jpg",
    linkedin: "https://www.linkedin.com/in/sanjay-nagi-1b4508/",
  },
  {
    name: "Shailendra Awasthi",
    designation: "Serial Entrepreneur",
    photo: "/images/mentors/shailendra-awasthi.jpg",
    linkedin: "https://www.linkedin.com/in/shailendra-awasthi/",
  },
  {
    name: "Shashwat Pathak",
    designation: "CEO, AIC GNITS Hyderabad",
    photo: "/images/mentors/shashwat-pathak.jpg",
    linkedin: "https://www.linkedin.com/in/dr-shashwat-pathak-2b062069/",
  },
  {
    name: "Vibhuti Agarwal",
    designation: "General Partner, Realtime Angel Fund",
    photo: "/images/mentors/vibhuti-agarwal.jpg",
    linkedin: "https://www.linkedin.com/in/dr-vibhuti-aggarwal-5b54b211/",
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
                  <div className="relative w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden aspect-square ring-2 ring-transparent group-hover:ring-primary transition-all duration-300">
                    <Image
                      src={mentor.photo}
                      alt={mentor.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                    {mentor.name}
                  </h3>
                  <p className="mt-1 text-xs text-text-muted leading-snug">
                    {mentor.designation}
                  </p>
                  {mentor.linkedin && (
                    <a
                      href={mentor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-7 h-7 mt-2 rounded-full bg-[#0077B5]/10 text-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-colors"
                      aria-label={`${mentor.name} LinkedIn`}
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Mentor Pool CTA */}
      <section className="py-12 lg:py-20 bg-section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            label="Get Involved"
            title="Become a Mentor"
            description="Share your expertise with the next generation of innovators and entrepreneurs. Join our growing mentor network."
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="https://acicbmu.accubate.app/ext/survey/73/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25 text-lg"
            >
              To join our mentor pool, Click Here! <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
