import { PlusIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ logos, className, ...props }: LogoCloudProps) {
  const totalRows = Math.ceil(logos.length / 4);

  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x md:grid-cols-4 overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-full border-t" />

      {logos.map((logo, i) => {
        const rowIndex = Math.floor(i / 4);
        const colInRow = i % 4;
        const colInMobileRow = i % 2;
        const mobileRowIndex = Math.floor(i / 2);
        const totalMobileRows = Math.ceil(logos.length / 2);

        // Alternating bg pattern (checkerboard)
        const isEvenRow = rowIndex % 2 === 0;
        const hasBg = isEvenRow ? colInRow % 2 === 0 : colInRow % 2 === 1;

        const isLastDesktopRow = rowIndex === totalRows - 1;
        const isLastMobileRow = mobileRowIndex === totalMobileRows - 1;

        return (
          <LogoCard
            key={i}
            className={cn(
              "relative",
              // Right borders
              colInMobileRow === 0 && "border-r",
              // Bottom borders: always on mobile unless last mobile row, on desktop unless last desktop row
              !isLastMobileRow && "border-b",
              isLastMobileRow && !isLastDesktopRow && "md:border-b",
              // Alternating background
              hasBg && "bg-secondary"
            )}
            logo={logo}
          >
            {/* Plus icons at grid intersections */}
            {colInRow === 0 && !isLastDesktopRow && (
              <PlusIcon
                className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-muted-foreground/40"
                strokeWidth={1}
              />
            )}
            {colInRow === 2 && !isLastDesktopRow && (
              <>
                <PlusIcon
                  className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 hidden md:block text-muted-foreground/40"
                  strokeWidth={1}
                />
                <PlusIcon
                  className="-left-[12.5px] -bottom-[12.5px] absolute z-10 hidden size-6 md:block text-muted-foreground/40"
                  strokeWidth={1}
                />
              </>
            )}
          </LogoCard>
        );
      })}

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-full border-b" />
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
};

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-background px-4 py-8 md:p-8",
        className
      )}
      {...props}
    >
      <Image
        alt={logo.alt}
        className="pointer-events-none h-8 w-auto max-w-[100px] select-none object-contain md:h-10 md:max-w-[140px]"
        height={40}
        src={logo.src}
        width={140}
        sizes="140px"
        loading="lazy"
      />
      {children}
    </div>
  );
}
