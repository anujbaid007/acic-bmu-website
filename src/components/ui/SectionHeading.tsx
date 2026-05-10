"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`max-w-2xl mb-12 ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      {label && (
        <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary rounded-full mb-4">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-bold tracking-tight ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-white/70" : "text-text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
