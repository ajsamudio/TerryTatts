"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { toast } from "sonner";
import { Check, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { TIME_SLOTS, getBookedSlots, isClosed } from "@/lib/availability";
import { STYLES } from "@/lib/gallery";
import { DEPOSIT_USD } from "@/lib/services";
import { cn } from "@/lib/utils";

const STEPS = ["Date", "Tattoo", "Contact", "Review"] as const;
type Step = (typeof STEPS)[number];

type FormState = {
  date?: Date;
  time?: string;
  style: string;
  size: string;
  placement: string;
  description: string;
  reference?: File;
  name: string;
  email: string;
  phone: string;
  age18: boolean;
};

export function BookingWizard() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("Date");
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<FormState>({
    style: "",
    size: "",
    placement: "",
    description: "",
    name: "",
    email: "",
    phone: "",
    age18: false,
  });

  const stepIndex = STEPS.indexOf(step);
  const update = (patch: Partial<FormState>) =>
    setForm((f) => ({ ...f, ...patch }));

  const bookedToday = useMemo(
    () => (form.date ? getBookedSlots(form.date) : []),
    [form.date]
  );

  const canContinue = (() => {
    if (step === "Date") return !!form.date && !!form.time;
    if (step === "Tattoo")
      return !!form.style && !!form.size && !!form.placement && form.description.length > 10;
    if (step === "Contact")
      return (
        form.name.trim().length > 1 &&
        /.+@.+\..+/.test(form.email) &&
        form.phone.trim().length >= 7 &&
        form.age18
      );
    return true;
  })();

  function next() {
    const i = STEPS.indexOf(step);
    if (i < STEPS.length - 1) setStep(STEPS[i + 1]);
  }
  function back() {
    const i = STEPS.indexOf(step);
    if (i > 0) setStep(STEPS[i - 1]);
  }

  async function submit() {
    setSubmitting(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          date: form.date?.toISOString(),
          time: form.time,
          style: form.style,
          size: form.size,
          placement: form.placement,
          description: form.description,
          name: form.name,
          email: form.email,
          phone: form.phone,
        }),
      });
      if (!res.ok) throw new Error("Network");
      const { confirmationNumber } = await res.json();
      // Booked. In production: redirect to Stripe Checkout instead of /success.
      router.push(`/booking/success?ref=${confirmationNumber}`);
    } catch {
      toast.error("Something went wrong. Try again in a moment.");
      setSubmitting(false);
    }
  }

  return (
    <div className="border border-border bg-card/50 p-6 sm:p-10">
      {/* Progress */}
      <div className="flex items-center justify-between mb-10">
        {STEPS.map((s, i) => {
          const done = i < stepIndex;
          const active = i === stepIndex;
          return (
            <div key={s} className="flex items-center flex-1 last:flex-none">
              <div
                className={cn(
                  "h-8 w-8 rounded-full border flex items-center justify-center text-xs font-stamp",
                  active && "bg-blood border-blood text-white",
                  done && "bg-blood/20 border-blood text-blood",
                  !active && !done && "border-border text-muted-foreground"
                )}
              >
                {done ? <Check className="h-4 w-4" /> : i + 1}
              </div>
              <div className="ml-2 text-xs font-stamp uppercase tracking-widest hidden sm:block">
                {s}
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className={cn(
                    "flex-1 h-px mx-3",
                    i < stepIndex ? "bg-blood" : "bg-border"
                  )}
                />
              )}
            </div>
          );
        })}
      </div>

      {step === "Date" && (
        <StepDate
          date={form.date}
          time={form.time}
          booked={bookedToday}
          onDate={(d) => update({ date: d, time: undefined })}
          onTime={(t) => update({ time: t })}
        />
      )}

      {step === "Tattoo" && <StepTattoo form={form} update={update} />}
      {step === "Contact" && <StepContact form={form} update={update} />}
      {step === "Review" && <StepReview form={form} />}

      <div className="flex justify-between mt-10">
        <Button
          variant="outline"
          onClick={back}
          disabled={stepIndex === 0 || submitting}
          className="uppercase tracking-widest"
        >
          <ChevronLeft className="h-4 w-4 mr-1" /> Back
        </Button>
        {step !== "Review" ? (
          <Button
            onClick={next}
            disabled={!canContinue}
            className="bg-blood hover:bg-blood-bright text-white uppercase tracking-widest"
          >
            Continue <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        ) : (
          <Button
            onClick={submit}
            disabled={submitting}
            className="bg-blood hover:bg-blood-bright text-white uppercase tracking-widest"
          >
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Processing…
              </>
            ) : (
              <>Pay ${DEPOSIT_USD} deposit</>
            )}
          </Button>
        )}
      </div>
    </div>
  );
}

function StepDate({
  date,
  time,
  booked,
  onDate,
  onTime,
}: {
  date?: Date;
  time?: string;
  booked: string[];
  onDate: (d: Date | undefined) => void;
  onTime: (t: string) => void;
}) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <Label className="font-stamp uppercase tracking-widest text-xs text-blood-bright">
          ✦ Pick a date
        </Label>
        <div className="mt-3 border border-border bg-background p-2 inline-block">
          <Calendar
            mode="single"
            selected={date}
            onSelect={onDate}
            disabled={(d) => {
              const today = new Date();
              today.setHours(0, 0, 0, 0);
              return d < today || isClosed(d);
            }}
            autoFocus
          />
        </div>
        <p className="text-xs text-muted-foreground mt-3">
          Studio is closed Sundays &amp; Mondays.
        </p>
      </div>
      <div>
        <Label className="font-stamp uppercase tracking-widest text-xs text-blood-bright">
          ✦ Pick a time
        </Label>
        {!date ? (
          <p className="text-sm text-muted-foreground mt-4">
            Choose a date first.
          </p>
        ) : (
          <>
            <p className="text-sm text-muted-foreground mt-2 mb-4">
              {format(date, "EEEE, MMMM d, yyyy")}
            </p>
            <div className="grid grid-cols-2 gap-2">
              {TIME_SLOTS.map((slot) => {
                const isBooked = booked.includes(slot);
                const selected = time === slot;
                return (
                  <button
                    key={slot}
                    type="button"
                    disabled={isBooked}
                    onClick={() => onTime(slot)}
                    className={cn(
                      "py-3 border text-sm font-stamp uppercase tracking-widest transition-colors",
                      isBooked &&
                        "border-border text-muted-foreground line-through cursor-not-allowed opacity-50",
                      !isBooked &&
                        !selected &&
                        "border-border hover:border-blood hover:text-blood",
                      selected && "bg-blood border-blood text-white"
                    )}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function StepTattoo({
  form,
  update,
}: {
  form: FormState;
  update: (p: Partial<FormState>) => void;
}) {
  const styleOptions = STYLES.filter((s) => s !== "All");
  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <Label className="font-stamp uppercase tracking-widest text-xs text-blood-bright">
            ✦ Style
          </Label>
          <Select value={form.style} onValueChange={(v) => update({ style: v })}>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Choose a style" />
            </SelectTrigger>
            <SelectContent>
              {styleOptions.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
              <SelectItem value="Not sure yet">Not sure yet</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="font-stamp uppercase tracking-widest text-xs text-blood-bright">
            ✦ Size
          </Label>
          <RadioGroup
            value={form.size}
            onValueChange={(v) => update({ size: v })}
            className="grid grid-cols-5 gap-2 mt-2"
          >
            {["XS", "S", "M", "L", "XL"].map((s) => (
              <div key={s}>
                <RadioGroupItem id={`size-${s}`} value={s} className="peer sr-only" />
                <Label
                  htmlFor={`size-${s}`}
                  className="flex items-center justify-center py-3 border border-border text-sm font-stamp uppercase cursor-pointer peer-data-[state=checked]:bg-blood peer-data-[state=checked]:border-blood peer-data-[state=checked]:text-white"
                >
                  {s}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>

      <div>
        <Label className="font-stamp uppercase tracking-widest text-xs text-blood-bright">
          ✦ Placement
        </Label>
        <Input
          placeholder="e.g. inner forearm, right rib, behind ear"
          value={form.placement}
          onChange={(e) => update({ placement: e.target.value })}
          className="mt-2"
        />
      </div>

      <div>
        <Label className="font-stamp uppercase tracking-widest text-xs text-blood-bright">
          ✦ Describe your idea
        </Label>
        <Textarea
          placeholder="Subject matter, mood, references, anything I should know about..."
          value={form.description}
          onChange={(e) => update({ description: e.target.value })}
          rows={5}
          className="mt-2"
        />
        <p className="text-xs text-muted-foreground mt-2">
          {form.description.length} / 1000
        </p>
      </div>

      <div>
        <Label className="font-stamp uppercase tracking-widest text-xs text-blood-bright">
          ✦ Reference image <span className="text-muted-foreground normal-case tracking-normal">(optional)</span>
        </Label>
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => update({ reference: e.target.files?.[0] })}
          className="mt-2 file:text-bone file:bg-blood/20 file:border-0 file:px-3 file:py-1 file:mr-3"
        />
        {form.reference && (
          <p className="text-xs text-muted-foreground mt-2 font-stamp">
            Attached: {form.reference.name}
          </p>
        )}
      </div>
    </div>
  );
}

function StepContact({
  form,
  update,
}: {
  form: FormState;
  update: (p: Partial<FormState>) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="name" className="font-stamp uppercase tracking-widest text-xs text-blood-bright">
          ✦ Full name
        </Label>
        <Input
          id="name"
          value={form.name}
          onChange={(e) => update({ name: e.target.value })}
          className="mt-2"
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="email" className="font-stamp uppercase tracking-widest text-xs text-blood-bright">
            ✦ Email
          </Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => update({ email: e.target.value })}
            className="mt-2"
          />
        </div>
        <div>
          <Label htmlFor="phone" className="font-stamp uppercase tracking-widest text-xs text-blood-bright">
            ✦ Phone
          </Label>
          <Input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update({ phone: e.target.value })}
            className="mt-2"
          />
        </div>
      </div>
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={form.age18}
          onChange={(e) => update({ age18: e.target.checked })}
          className="mt-1 h-4 w-4 accent-blood"
        />
        <span className="text-sm text-muted-foreground">
          I confirm I am 18 years or older and will bring valid ID to my appointment.
          I understand the $50 deposit is non-refundable inside 48 hours.
        </span>
      </label>
    </div>
  );
}

function StepReview({ form }: { form: FormState }) {
  return (
    <div>
      <p className="text-sm text-muted-foreground mb-6">
        Quick once-over before deposit.
      </p>
      <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4 border border-border p-6 bg-background/50">
        <Row label="Date" value={form.date ? format(form.date, "EEE, MMM d, yyyy") : "—"} />
        <Row label="Time" value={form.time ?? "—"} />
        <Row label="Style" value={form.style || "—"} />
        <Row label="Size" value={form.size || "—"} />
        <Row label="Placement" value={form.placement || "—"} />
        <Row label="Name" value={form.name || "—"} />
        <Row label="Email" value={form.email || "—"} />
        <Row label="Phone" value={form.phone || "—"} />
        <div className="sm:col-span-2">
          <dt className="text-xs font-stamp uppercase tracking-widest text-muted-foreground">Idea</dt>
          <dd className="text-sm mt-1 whitespace-pre-wrap">{form.description || "—"}</dd>
        </div>
      </dl>
      <div className="mt-6 border border-blood/50 bg-blood/5 p-6 flex items-center justify-between">
        <div>
          <div className="text-xs font-stamp uppercase tracking-widest text-blood-bright">
            ✦ Deposit
          </div>
          <div className="font-heading text-3xl mt-1">${DEPOSIT_USD}.00</div>
          <p className="text-xs text-muted-foreground mt-1">
            Goes toward your total. Non-refundable inside 48 hours.
          </p>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-stamp uppercase tracking-widest text-muted-foreground">{label}</dt>
      <dd className="text-sm mt-1 break-words">{value}</dd>
    </div>
  );
}
