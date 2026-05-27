import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div className="font-stamp text-xs uppercase tracking-[0.4em] text-blood-bright mb-3">
          ✦ {eyebrow}
        </div>
      )}
      <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl uppercase font-bold tracking-tight leading-[0.95]">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </Reveal>
  );
}
