import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  searchParams: Promise<{ ref?: string }>;
};

export default async function BookingSuccess({ searchParams }: Props) {
  const { ref } = await searchParams;
  return (
    <div className="pt-32 pb-24 min-h-[80vh] flex items-center">
      <div className="mx-auto max-w-xl text-center px-4 sm:px-6">
        <CheckCircle2 className="h-16 w-16 text-blood mx-auto mb-6" />
        <p className="font-stamp text-xs uppercase tracking-[0.4em] text-blood-bright mb-3">
          ✦ Booking confirmed ✦
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl uppercase font-bold tracking-tight leading-tight">
          You&apos;re in the <span className="italic text-blood">chair.</span>
        </h1>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          A confirmation email is on its way. Bring valid ID, eat beforehand, and
          arrive a few minutes early. Questions? Hit reply on the email.
        </p>
        {ref && (
          <div className="mt-8 inline-block border border-border bg-card px-6 py-3">
            <div className="text-xs font-stamp uppercase tracking-widest text-muted-foreground">
              Confirmation #
            </div>
            <div className="font-heading text-lg tracking-widest text-blood">
              {ref}
            </div>
          </div>
        )}
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            asChild
            variant="outline"
            className="border-border uppercase tracking-widest"
          >
            <Link href="/aftercare">Read aftercare</Link>
          </Button>
          <Button
            asChild
            className="bg-blood hover:bg-blood-bright text-white uppercase tracking-widest"
          >
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
