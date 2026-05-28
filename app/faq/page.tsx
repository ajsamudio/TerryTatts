import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/lib/faq";

export const metadata = {
  title: "FAQ — buddha_.tattz",
  description: "Pricing, deposits, age, pain, aftercare, and everything else.",
};

export default function FaqPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Frequently asked"
          title={<>Before you <span className="italic text-blood">book.</span></>}
          description="The questions that come up most often. Still stuck? Drop a message on the contact page."
          align="center"
          className="mb-12"
        />
        <Reveal>
          <Accordion type="single" collapsible className="border border-border bg-card/30">
            {FAQ.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border last:border-b-0 px-6">
                <AccordionTrigger className="text-left font-heading uppercase tracking-wider text-base hover:text-blood">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
        <div className="mt-12 text-center">
          <Button
            asChild
            className="bg-blood hover:bg-blood-bright text-white uppercase tracking-widest"
          >
            <Link href="/contact">Still have questions?</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
