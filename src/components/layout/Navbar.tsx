"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavLink {
  label: string;
  href: string;
  dropdown?: { label: string; href: string; description?: string }[];
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    dropdown: [
      { label: "Overview", href: "/about", description: "Our vision, mission & story" },
      { label: "Board Members", href: "/about/board", description: "Leadership team" },
      { label: "Steering Committee", href: "/about/steering-committee", description: "Advisory board" },
      { label: "Mentors", href: "/about/mentors", description: "Our expert mentors" },
      { label: "Our Team", href: "/about/team", description: "The people behind ACIC" },
    ],
  },
  {
    label: "Programs",
    href: "/programs",
    dropdown: [
      { label: "Startup Incubation", href: "/programs/incubation", description: "Idea to growth stage" },
      { label: "Yuva Udyami", href: "/programs/yuva-udyami", description: "Youth entrepreneurship" },
      { label: "Mera Business", href: "/programs/mera-business", description: "Women empowerment" },
      { label: "Corporate Innovation", href: "/programs/corporate-innovation", description: "Industry partnerships" },
    ],
  },
  { label: "Partners", href: "/partners" },
  { label: "Startups", href: "/startups" },
  {
    label: "News & Events",
    href: "/events",
    dropdown: [
      { label: "Events", href: "/events", description: "Hackathons, ideathons & more" },
      { label: "Gallery", href: "/gallery", description: "Photos & moments" },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled ? "w-[90%] max-w-5xl" : "w-[95%] max-w-6xl"
        }`}
      >
        <div
          className={`relative rounded-full border border-border/40 bg-white/80 backdrop-blur-xl shadow-lg transition-all duration-300 ${
            isScrolled ? "shadow-xl shadow-black/5" : ""
          }`}
        >
          <div className="flex items-center justify-between px-5 py-2.5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image
                src="/images/logos/acic-logo.png"
                alt="ACIC-BMU Foundation"
                width={180}
                height={54}
                className="h-11 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <div key={link.label} className="relative">
                  {link.dropdown ? (
                    <div
                      onMouseEnter={() => setActiveDropdown(link.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors rounded-full hover:bg-primary/5">
                        {link.label}
                        <motion.span
                          animate={{ rotate: activeDropdown === link.label ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-3.5 h-3.5" />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.97 }}
                            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute top-full left-0 mt-2 w-64 rounded-2xl border border-border/40 bg-white/95 backdrop-blur-xl shadow-xl overflow-hidden"
                          >
                            <div className="absolute -top-1.5 left-8 w-3 h-3 rotate-45 bg-white border-l border-t border-border/40" />
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setActiveDropdown(null)}
                                className="block px-4 py-3 hover:bg-primary/5 transition-colors border-b border-border/10 last:border-b-0"
                              >
                                <div className="font-medium text-sm text-foreground">
                                  {item.label}
                                </div>
                                {item.description && (
                                  <div className="text-xs text-text-muted mt-0.5">
                                    {item.description}
                                  </div>
                                )}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="block px-3.5 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors rounded-full hover:bg-primary/5"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA + Mobile */}
            <div className="flex items-center gap-2">
              <Button
                asChild
                className="hidden lg:inline-flex rounded-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white shadow-lg shadow-primary/25 px-5"
              >
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link href="/contact">Contact Us</Link>
                </motion.div>
              </Button>

              <motion.button
                className="lg:hidden p-2 rounded-full hover:bg-primary/5 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.9 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-20 left-4 right-4 rounded-3xl border border-border/40 bg-white/95 backdrop-blur-xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.dropdown ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(link.label)}
                          className="flex items-center justify-between w-full px-4 py-3 text-left font-medium rounded-xl hover:bg-primary/5 transition-colors"
                        >
                          {link.label}
                          <motion.div
                            animate={{ rotate: activeDropdown === link.label ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {activeDropdown === link.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 space-y-0.5 mt-1">
                                {link.dropdown.map((item) => (
                                  <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block px-4 py-2.5 text-sm rounded-lg hover:bg-primary/5 transition-colors"
                                  >
                                    <div className="font-medium">{item.label}</div>
                                    {item.description && (
                                      <div className="text-xs text-text-muted">
                                        {item.description}
                                      </div>
                                    )}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-3 font-medium rounded-xl hover:bg-primary/5 transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-3">
                  <Button
                    asChild
                    className="w-full rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/25"
                    size="lg"
                  >
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
