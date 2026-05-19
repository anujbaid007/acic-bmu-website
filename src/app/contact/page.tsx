"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    detail:
      "ACIC-BMU Foundation, 2nd Floor, Gateway-B, BML Munjal University, 67 KM-Stone, Sidhrawali, Haryana - 122413",
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: "acic@bmu.edu.in",
    href: "mailto:acic@bmu.edu.in",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+91 8501235021",
    href: "tel:+918501235021",
  },
];

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const socialLinks = [
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/acicbmu" },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/acic-bmu-foundation/",
  },
];

const inputClass =
  "w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors";

export default function ContactPage() {
  return (
    <>
      {/* ========== COMPACT HERO ========== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light pt-28 pb-10 lg:pt-32 lg:pb-14">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-white/10 text-white/80 rounded-full mb-3">
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Contact Us
            </h1>
            <p className="mt-3 text-sm sm:text-base text-white/70 max-w-xl mx-auto">
              Have a question, idea, or partnership opportunity? We&apos;d love to
              hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========== FORM + INFO ========== */}
      <section className="py-10 lg:py-14 bg-section-alt">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3 bg-white rounded-2xl border border-border/60 p-6 sm:p-8"
            >
              <h2 className="text-xl font-bold text-foreground">
                Send Us a Message
              </h2>
              <p className="text-sm text-text-muted mt-1 mb-5">
                We&apos;ll get back to you as soon as we can.
              </p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXXXXXXX"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="What's this about?"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us more..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 space-y-4"
            >
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3.5 bg-white rounded-2xl border border-border/60 p-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {item.title}
                    </h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-text-muted hover:text-primary transition-colors"
                      >
                        {item.detail}
                      </a>
                    ) : (
                      <p className="text-sm text-text-muted leading-relaxed">
                        {item.detail}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              <div className="bg-white rounded-2xl border border-border/60 p-4">
                <h3 className="text-sm font-semibold text-foreground mb-3">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 rounded-xl bg-section-alt flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-border/60 p-4">
                <h3 className="text-sm font-semibold text-foreground mb-1.5">
                  Office Hours
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Monday – Friday: 9:00 AM – 6:00 PM
                  <br />
                  Saturday: 10:00 AM – 2:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== MAP ========== */}
      <section className="py-10 lg:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-foreground">
            Find Us on the Map
          </h2>
          <p className="text-sm text-text-muted mt-1 mb-5">
            BML Munjal University, 67 KM-Stone, NH-8, Sidhrawali, Gurugram,
            Haryana
          </p>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <iframe
              src="https://www.google.com/maps?q=BML%20Munjal%20University%2C%20Sidhrawali%2C%20Gurugram%2C%20Haryana%20122413&output=embed"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BML Munjal University Location"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
