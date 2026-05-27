import type { Metadata } from "next";
import { BookingWizard } from "@/components/booking-wizard";

export const metadata: Metadata = {
  title: "Book a Session — Terry Tattoos",
  description: "Reserve a chair with Terry. Pick a date, share your idea, lock it in with a $50 deposit.",
};

export default function BookingPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="font-stamp text-xs uppercase tracking-[0.4em] text-blood-bright mb-3">
            ✦ Booking ✦
          </p>
          <h1 className="font-heading text-4xl sm:text-6xl uppercase font-bold tracking-tight leading-[0.95]">
            Reserve your <br />
            <span className="italic text-blood">chair.</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Four quick steps. You&apos;ll get a confirmation email and calendar invite
            once your deposit clears.
          </p>
        </div>
        <BookingWizard />
      </div>
    </div>
  );
}
