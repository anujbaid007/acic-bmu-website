"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Spotlight } from "@/components/ui/spotlight";

interface EventItem {
  title: string;
  description: string;
  image?: string;
}

const events: EventItem[] = [
  {
    title: "Foundation Program for Aspiring Entrepreneurs",
    description:
      "12-week pre-incubation program for Government Polytechnic students in Haryana, building entrepreneurial foundations from the ground up.",
    image: "/images/events/fpae.jpg",
  },
  {
    title: "Ideathon",
    description:
      "A platform where innovation and entrepreneurship converge — participants pitch ideas, collaborate, and receive expert feedback.",
    image: "/images/events/ideathon.jpg",
  },
  {
    title: "HULT Prize",
    description:
      "Social entrepreneurship competition aligned with UN Sustainable Development Goals, challenging students to solve global issues.",
    image: "/images/events/hult-prize.jpg",
  },
  {
    title: "HackBMU Hackathon",
    description:
      "24-hour innovation marathon for student teams to develop tech-driven solutions under the theme 'Disrupt the Norm.'",
    image: "/images/events/hackathon.jpg",
  },
  {
    title: "Entrepreneurship Game",
    description:
      "A fast-paced idea challenge designed to ignite entrepreneurial thinking and rapid problem-solving skills.",
    image: "/images/events/entrepreneurship-game.jpg",
  },
  {
    title: "Problem Worth Solving",
    description:
      "An interactive program encouraging problem-first thinking — helping participants identify real challenges before building solutions.",
    image: "/images/events/problem-worth-solving.jpg",
  },
  {
    title: "ATL Student Innovator Program",
    description:
      "Designed for school students up to 12th grade to brainstorm creative solutions and develop an innovation mindset.",
    image: "/images/events/atl-student-innovator.jpg",
  },
  {
    title: "Graduation Ceremony (Mera Business)",
    description:
      "14th batch graduation ceremony where 38 women entrepreneurs graduated in August 2025, marking a milestone in women empowerment.",
  },
  {
    title: "BOSCH-BMU Innovation Challenge Bootcamp",
    description:
      "A 2-day intensive bootcamp for 8 selected startups focused on road safety and sustainable mobility solutions.",
    image: "/images/programs/bosch-bmu.png",
  },
  {
    title: "UDAAN",
    description:
      "A 2-day entrepreneurship bootcamp empowering 29 students from Uttar Pradesh with business skills and innovation thinking.",
    image: "/images/programs/udaan.webp",
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

export default function EventsPage() {
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
              Events &amp; Programs
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Where Ideas Come Alive
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Hackathons, ideathons, bootcamps, and more — our events bring innovators together to solve real problems and build the future.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mt-12"
          >
            {[
              { value: "10+", label: "Events per Year" },
              { value: "2000+", label: "Participants" },
              { value: "50+", label: "Expert Mentors" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-5 border border-white/10">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-white/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Events"
            title="Programs That Drive Impact"
            description="From student hackathons to women empowerment ceremonies — each event is designed to ignite innovation and create lasting change."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 h-full flex flex-col">
                  {/* Image or Placeholder */}
                  <div className="relative h-52 overflow-hidden">
                    {event.image ? (
                      <>
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary-light/15 to-accent/10 flex items-center justify-center">
                        <Calendar className="w-12 h-12 text-primary/40" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                      {event.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed flex-1">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-20 bg-section-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            label="Get Involved"
            title="Want to Participate or Collaborate?"
            description="Stay updated on upcoming events or partner with us to co-create impactful programs for students and entrepreneurs."
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/programs"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all"
            >
              Explore Programs
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
