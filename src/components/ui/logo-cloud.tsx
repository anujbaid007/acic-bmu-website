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
        const isEvenRow = Math.floor(i / 4) % 2 === 0;
        const isEvenCol = i % 2 === 0;
        const colInRow = i % 4;
        const hasBg = isEvenRow ? colInRow % 2 === 0 : colInRow % 2 === 1;
        const isLastInRow = colInRow === 3;
        const isLastRow = i >= logos.length - (logos.length % 4 || 4);

        return (
          <LogoCard
            key={i}
            className={cn(
              !isLastInRow && "border-r",
              !isLastRow && "border-b",
              hasBg && "bg-muted/30"
            )}
            logo={logo}
          >
            {colInRow === 0 && !isLastRow && (
              <PlusIcon
                className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-muted-foreground/40"
                strokeWidth={1}
              />
            )}
            {colInRow === 2 && !isLastRow && (
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
        "relative flex items-center justify-center bg-background px-4 py-8 md:p-8",
        className
      )}
      {...props}
    >
      <Image
        alt={logo.alt}
        className="pointer-events-none h-14 w-auto max-w-[160px] select-none object-contain md:h-16 md:max-w-[180px]"
        height={64}
        src={logo.src}
        width={180}
      />
      {children}
    </div>
  );
}
