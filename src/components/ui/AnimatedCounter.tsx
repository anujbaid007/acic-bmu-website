"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  light?: boolean;
}

export default function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  label,
  duration = 2,
  light = false,
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className={`text-3xl sm:text-5xl font-bold whitespace-nowrap ${light ? "text-white" : "text-primary"}`}>
        {prefix}
        {count}
        {suffix}
      </div>
      <p className={`mt-2 text-sm font-medium ${light ? "text-white/70" : "text-text-muted"}`}>{label}</p>
    </motion.div>
  );
}
