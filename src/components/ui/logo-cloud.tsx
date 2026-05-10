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
  const desktopRows = Math.ceil(logos.length / 4);

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
        const dRow = Math.floor(i / 4);
        const dCol = i % 4;
        const mRow = Math.floor(i / 2);
        const mCol = i % 2;
        const totalMobileRows = Math.ceil(logos.length / 2);

        const isLastDesktopRow = dRow === desktopRows - 1;
        const isLastMobileRow = mRow === totalMobileRows - 1;

        // Checkerboard: (row + col) % 2 === 0
        const desktopBg = (dRow + dCol) % 2 === 0;

        // Border right: on mobile every left col, on desktop every col except last in row
        const hasMobileRightBorder = mCol === 0;
        const hasDesktopRightBorder = dCol < 3;

        return (
          <div
            key={i}
            className={cn(
              "relative flex items-center justify-center px-4 py-8 md:p-8",
              // Background
              desktopBg ? "bg-secondary/40" : "bg-background",
              // Right border
              hasMobileRightBorder && "border-r",
              !hasMobileRightBorder && hasDesktopRightBorder && "md:border-r",
              // Bottom border
              !isLastMobileRow && "border-b",
              isLastMobileRow && !isLastDesktopRow && "md:border-b",
            )}
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

            {/* Plus icons at row intersections */}
            {dCol === 0 && !isLastDesktopRow && (
              <PlusIcon
                className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-muted-foreground/40"
                strokeWidth={1}
              />
            )}
            {dCol === 2 && !isLastDesktopRow && (
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
          </div>
        );
      })}

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-full border-b" />
    </div>
  );
}
