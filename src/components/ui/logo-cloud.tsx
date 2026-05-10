import { PlusIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  scale?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ logos, className, ...props }: LogoCloudProps) {
  // Pad logos to fill complete rows of 4
  const remainder = logos.length % 4;
  const paddedLogos: (Logo | null)[] = [
    ...logos,
    ...Array(remainder === 0 ? 0 : 4 - remainder).fill(null),
  ];
  const totalRows = paddedLogos.length / 4;

  return (
    <div
      className={cn(
        "relative grid grid-cols-2 md:grid-cols-4 border border-border/60 rounded-xl overflow-hidden",
        className
      )}
      {...props}
    >
      {paddedLogos.map((logo, i) => {
        const row = Math.floor(i / 4);
        const col = i % 4;
        const isLastRow = row === totalRows - 1;
        const isLastCol = col === 3;

        // Checkerboard
        const hasBg = (row + col) % 2 === 0;

        // Plus icon at intersection (bottom-right corner of cell)
        // Only show if not last row AND not last col (i.e., there's a cell below and to the right)
        const showPlus = !isLastRow && !isLastCol && col % 2 === 0;

        return (
          <div
            key={i}
            className={cn(
              "relative flex items-center justify-center px-4 py-8 md:p-10",
              hasBg ? "bg-muted/40" : "bg-background",
              // Right border for all except last column
              !isLastCol && "border-r border-border/60",
              // Bottom border for all except last row
              !isLastRow && "border-b border-border/60",
            )}
          >
            {logo ? (
              <Image
                alt={logo.alt}
                className="pointer-events-none h-8 w-auto max-w-[100px] select-none object-contain md:h-10 md:max-w-[140px]"
                height={40}
                src={logo.src}
                width={140}
                sizes="140px"
                loading="lazy"
                style={logo.scale ? { transform: `scale(${logo.scale})` } : undefined}
              />
            ) : (
              <div className="h-8 md:h-10" />
            )}

            {showPlus && (
              <PlusIcon
                className="absolute -right-[12.5px] -bottom-[12.5px] z-10 size-6 text-muted-foreground/30 hidden md:block"
                strokeWidth={1}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
