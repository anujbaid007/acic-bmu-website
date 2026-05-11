"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const allLogos: { src: string; name: string; website: string; large?: boolean }[] = [
  { src: "/images/startups/batx-energies.svg", name: "BatX Energies", website: "https://batxenergies.com/" },
  { src: "/images/startups/agaamin-technologies-private-limited.png", name: "Agaamin", website: "https://www.agaamin.in/" },
  { src: "/images/startups/vayuguard-climate-tech-private-limited.svg", name: "Vayuguard", website: "https://vayuguard.com/" },
  { src: "/images/startups/femzo-india-private-limited.png", name: "Femzo India", website: "https://feryrides.co.in/" },
  { src: "/images/startups/inconel-technologies-private-limited.png", name: "Inconel Tech", website: "https://inconel.tech/" },
  { src: "/images/startups/itx-care-private-limited.png", name: "Dr At Home", website: "https://www.doctorathome.in/" },
  { src: "/images/startups/kagaku-technology-private-limited.webp", name: "Kagaku Tech", website: "https://scitechindustries.com/" },
  { src: "/images/startups/leap10x-training-private-limited.svg", name: "Leap10x", website: "https://www.leap10x.in/" },
  { src: "/images/startups/emiant-innovations-private-limited.png", name: "Emiant", website: "https://www.emiant.in/" },
  { src: "/images/startups/grepbio-datalab-private-limited.svg", name: "Grepbio", website: "https://grepbio.com/" },
  { src: "/images/startups/fexo-genai-technologies-private-limited.png", name: "Fexo GenAI", website: "https://fexo.io/" },
  { src: "/images/samridh/raptee-energy-private-limited.svg", name: "Raptee Energy", website: "https://www.rapteehv.com/" },
  { src: "/images/samridh/torus-robotics-pvt-ltd.png", name: "TORUS Robotics", website: "https://www.third-derivative.org/portfolio/torus-robotics" },
  { src: "/images/samridh/spaceman-craft-private-limited.png", name: "Spaceman Craft", website: "https://spacemancraft.in/", large: true },
  { src: "/images/samridh/gadget-guruz.webp", name: "Gadget Guruz", website: "https://gadgetguruz.com/" },
  { src: "/images/samridh/uneverse.webp", name: "Uneverse", website: "https://www.uneverse.co/" },
  { src: "/images/samridh/blurgs-innovations-private-limited.avif", name: "Blurgs AI", website: "https://www.blurgs.com/" },
];

const GRID_SIZE = 9;

function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setTilt({
        x: (y - 0.5) * -20, // rotateX: ±10deg
        y: (x - 0.5) * 20,  // rotateY: ±10deg
      });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "600px",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="w-full h-full transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? 1.05 : 1})`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Glow/reflection layer */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none z-10"
          style={{
            opacity: isHovered ? 0.15 : 0,
            background: `radial-gradient(circle at ${(tilt.y + 10) / 20 * 100}% ${(tilt.x + 10) / 20 * 100}%, rgba(230,126,34,0.6), transparent 60%)`,
          }}
        />
        {children}
      </div>
    </div>
  );
}

export default function StartupLogoCluster() {
  const [cells, setCells] = useState<number[]>(() =>
    Array.from({ length: GRID_SIZE }, (_, i) => i)
  );
  const poolRef = useRef(GRID_SIZE);

  const swapCell = useCallback(() => {
    setCells((prev) => {
      const cellToSwap = Math.floor(Math.random() * GRID_SIZE);
      const newCells = [...prev];
      let candidate = poolRef.current % allLogos.length;
      let attempts = 0;
      while (prev.includes(candidate) && attempts < allLogos.length) {
        candidate = (candidate + 1) % allLogos.length;
        attempts++;
      }
      newCells[cellToSwap] = candidate;
      poolRef.current = (candidate + 1) % allLogos.length;
      return newCells;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(swapCell, 2200);
    return () => clearInterval(interval);
  }, [swapCell]);

  return (
    <div className="relative w-full">
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-80 h-80 bg-primary/8 rounded-full blur-[100px]" />
      </div>

      <div className="grid grid-cols-3 gap-5 p-2">
        {cells.map((logoIdx, cellIdx) => {
          const logo = allLogos[logoIdx];

          return (
            <a
              key={cellIdx}
              href={logo.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${logo.name} website in a new tab`}
              className="group block relative aspect-square rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            >
              <TiltCard className="relative h-full w-full cursor-pointer">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${cellIdx}-${logoIdx}`}
                    initial={{ opacity: 0, scale: 0.85, rotateY: -60 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.85, rotateY: 60 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-border/30 p-5 flex flex-col items-center justify-center gap-3 transition-all duration-300 group-hover:border-primary/35 group-hover:shadow-[0_12px_34px_rgba(230,126,34,0.20)]"
                  >
                    <GlowingEffect
                      spread={40}
                      glow
                      proximity={64}
                      disabled={false}
                      borderWidth={2}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition-all duration-300 group-hover:ring-primary/20" />
                    <div className="relative z-10 w-full flex-1 flex items-center justify-center min-h-0">
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        width={logo.large ? 180 : 100}
                        height={logo.large ? 180 : 100}
                        className={`object-contain ${logo.large ? "w-full h-full" : "w-auto h-auto max-w-[80%] max-h-[80%]"}`}
                      />
                    </div>
                    <p className="relative z-10 text-xs font-semibold text-foreground/60 text-center leading-tight truncate w-full shrink-0">
                      {logo.name}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </TiltCard>
            </a>
          );
        })}
      </div>
    </div>
  );
}