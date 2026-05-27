"use client";

import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TESTIMONIALS } from "@/lib/testimonials";

export function TestimonialCarousel() {
  return (
    <Carousel
      opts={{ loop: true, align: "start" }}
      className="w-full"
    >
      <CarouselContent>
        {TESTIMONIALS.map((t) => (
          <CarouselItem
            key={t.name}
            className="md:basis-1/2 lg:basis-1/3"
          >
            <figure className="h-full border border-border bg-card/60 p-8 relative grain">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-blood/40" />
              <blockquote className="text-bone leading-relaxed">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border/60">
                <div className="font-heading uppercase tracking-widest text-sm">
                  {t.name}
                </div>
                <div className="text-xs text-muted-foreground font-stamp uppercase tracking-wider mt-1">
                  {t.piece}
                </div>
              </figcaption>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex -left-4 bg-card border-border hover:bg-blood hover:text-white hover:border-blood" />
      <CarouselNext className="hidden md:flex -right-4 bg-card border-border hover:bg-blood hover:text-white hover:border-blood" />
    </Carousel>
  );
}
