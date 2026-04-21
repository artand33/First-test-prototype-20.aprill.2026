"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type VisitType = "in-person" | "virtual";

type BookingModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

type Step = 1 | 2 | 3 | 4;

const services = [
  { id: "injectables", label: "Injectables", description: "Botox and fillers" },
  { id: "lasers-skin", label: "Lasers & Skin", description: "Texture, tone, and glow" },
  { id: "body", label: "Body Contouring", description: "Sculpt and tighten" },
  { id: "iv-wellness", label: "IV & Wellness", description: "Energy and recovery support" },
  { id: "weight-loss", label: "Weight Loss", description: "Medical guidance plan" },
  { id: "not-sure", label: "Not Sure Yet", description: "We will recommend the best fit" },
] as const;

const visitOptions: { id: VisitType; label: string; description: string }[] = [
  { id: "in-person", label: "In-Person", description: "Visit us in Miami" },
  { id: "virtual", label: "Virtual Consultation", description: "Video consult from anywhere" },
];

type MockDay = {
  id: string;
  label: string;
  dateLabel: string;
  slots: string[];
};

const dayFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
});

function createMockDays(): MockDay[] {
  const slotTemplates = [
    ["10:00 AM", "11:30 AM", "1:00 PM", "3:30 PM"],
    ["9:30 AM", "12:00 PM", "2:30 PM", "4:00 PM"],
    ["10:30 AM", "12:30 PM", "2:00 PM", "4:30 PM"],
  ];

  return Array.from({ length: 6 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() + index + 1);
    const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
    const slotIndex = index % slotTemplates.length;

    return {
      id: date.toISOString().slice(0, 10),
      label: index === 0 ? "Tomorrow" : weekday,
      dateLabel: dayFormatter.format(date),
      slots: slotTemplates[slotIndex],
    };
  });
}

const mockDays = createMockDays();

function emailIsValid(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function BookingModal({ open, onOpenChange }: BookingModalProps) {
  const [step, setStep] = React.useState<Step>(1);
  const [selectedService, setSelectedService] = React.useState<string | null>(null);
  const [visitType, setVisitType] = React.useState<VisitType | null>(null);
  const [selectedDay, setSelectedDay] = React.useState<string>(mockDays[0].id);
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);
  const [fullName, setFullName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [goals, setGoals] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const selectedDayData = React.useMemo(
    () => mockDays.find((day) => day.id === selectedDay) ?? mockDays[0],
    [selectedDay]
  );

  const nextLabel = step === 4 ? "Confirm Consultation" : "Continue";

  function goBack() {
    setErrorMessage("");
    setStep((current) => (current > 1 ? ((current - 1) as Step) : current));
  }

  function goNext() {
    if (step === 1 && !selectedService) {
      setErrorMessage("Select the treatment area you are most interested in.");
      return;
    }

    if (step === 2 && !visitType) {
      setErrorMessage("Choose if you prefer in-person or virtual consultation.");
      return;
    }

    if (step === 3 && !selectedTime) {
      setErrorMessage("Pick a date and time to continue.");
      return;
    }

    if (step === 4) {
      if (!fullName.trim() || !phone.trim() || !email.trim()) {
        setErrorMessage("Name, phone, and email are required.");
        return;
      }

      if (!emailIsValid(email.trim())) {
        setErrorMessage("Enter a valid email address.");
        return;
      }

      setErrorMessage("");
      setSubmitted(true);
      return;
    }

    setErrorMessage("");
    setStep((current) => (current < 4 ? ((current + 1) as Step) : current));
  }

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[70] bg-black/60 data-[state=open]:animate-fade-in" />
        <DialogPrimitive.Content className="fixed inset-0 z-[80] md:inset-6 md:mx-auto md:max-w-4xl md:h-[calc(100dvh-3rem)] bg-brand-cream text-brand-foreground md:rounded-3xl shadow-2xl flex flex-col outline-none">
          <DialogPrimitive.Title className="sr-only">Book Free Consultation</DialogPrimitive.Title>

          <div className="border-b border-brand-border px-4 md:px-8 py-4 md:py-5 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-sans font-medium tracking-widest uppercase text-brand-bronze">
                Book Free Consultation
              </p>
              <p className="text-sm text-brand-muted mt-1">
                Takes less than 30 seconds. No credit card required.
              </p>
            </div>
            <DialogPrimitive.Close asChild>
              <button
                type="button"
                aria-label="Close booking flow"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-brand-border text-brand-muted hover:text-brand-foreground hover:border-brand-bronze transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bronze focus-visible:ring-offset-2"
              >
                <X className="w-5 h-5" />
              </button>
            </DialogPrimitive.Close>
          </div>

          <div className="px-4 md:px-8 pt-4 md:pt-5">
            {!submitted && (
              <div className="mb-4 md:mb-5">
                <div className="flex items-center justify-between text-xs font-medium tracking-wide text-brand-muted uppercase mb-2">
                  <span>{`Step ${step} of 4`}</span>
                  <span>{step === 4 ? "Almost done" : "Quick booking flow"}</span>
                </div>
                <div className="h-2 rounded-full bg-brand-muted-bg overflow-hidden">
                  <div
                    className="h-full bg-brand-bronze transition-all duration-300"
                    style={{ width: `${(step / 4) * 100}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="flex-1 overflow-y-auto px-4 md:px-8 pb-6 md:pb-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <CheckCircle2 className="w-14 h-14 text-brand-bronze mb-4" />
                <h3 className="font-display text-4xl md:text-5xl leading-tight mb-4">
                  Your Consultation Is Requested
                </h3>
                <p className="text-brand-muted max-w-xl mb-6">
                  We saved your preferred slot for review. A concierge will confirm your
                  appointment details shortly by phone or email.
                </p>
                <div className="w-full max-w-xl rounded-2xl border border-brand-border bg-white/65 p-5 text-left mb-6">
                  <p className="text-sm text-brand-muted mb-2">Booking summary</p>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <strong>Service:</strong>{" "}
                      {services.find((service) => service.id === selectedService)?.label}
                    </li>
                    <li>
                      <strong>Visit type:</strong>{" "}
                      {visitType === "virtual" ? "Virtual consultation" : "In-person consultation"}
                    </li>
                    <li>
                      <strong>Preferred time:</strong> {selectedDayData.label}, {selectedDayData.dateLabel} at{" "}
                      {selectedTime}
                    </li>
                    <li>
                      <strong>Contact:</strong> {fullName} ({phone})
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-brand-muted mb-8">
                  <span className="inline-flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-brand-bronze" />
                    Personalized treatment plan
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Sparkles className="w-4 h-4 text-brand-bronze" />
                    Low-pressure consultation
                  </span>
                </div>
                <Button onClick={() => onOpenChange(false)}>Close</Button>
              </div>
            ) : (
              <>
                {step === 1 && (
                  <section aria-labelledby="booking-step-service">
                    <h3
                      id="booking-step-service"
                      className="font-display text-3xl md:text-4xl leading-tight mb-2"
                    >
                      What interests you most?
                    </h3>
                    <p className="text-brand-muted mb-6">
                      Pick the area you want to discuss. We can refine details after booking.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-2xl border border-brand-border/70 bg-brand-muted-bg/45 p-3">
                      {services.map((service) => {
                        const active = selectedService === service.id;
                        return (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => setSelectedService(service.id)}
                            className={cn(
                              "text-left rounded-2xl border p-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bronze focus-visible:ring-offset-2",
                              active
                                ? "border-brand-bronze bg-brand-beige/70 shadow-sm"
                                : "border-brand-border/80 hover:border-brand-bronze/60 bg-brand-cream"
                            )}
                          >
                            <p className="font-medium">{service.label}</p>
                            <p className="text-sm text-brand-muted mt-1">{service.description}</p>
                          </button>
                        );
                      })}
                    </div>
                  </section>
                )}

                {step === 2 && (
                  <section aria-labelledby="booking-step-visit">
                    <h3
                      id="booking-step-visit"
                      className="font-display text-3xl md:text-4xl leading-tight mb-2"
                    >
                      In-person or virtual?
                    </h3>
                    <p className="text-brand-muted mb-6">
                      Virtual is great for out-of-town patients and first conversations.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-2xl border border-brand-border/70 bg-brand-muted-bg/45 p-3">
                      {visitOptions.map((option) => {
                        const active = visitType === option.id;
                        return (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => setVisitType(option.id)}
                            className={cn(
                              "text-left rounded-2xl border p-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bronze focus-visible:ring-offset-2",
                              active
                                ? "border-brand-bronze bg-brand-beige/70 shadow-sm"
                                : "border-brand-border/80 hover:border-brand-bronze/60 bg-brand-cream"
                            )}
                          >
                            <p className="font-medium">{option.label}</p>
                            <p className="text-sm text-brand-muted mt-1">{option.description}</p>
                          </button>
                        );
                      })}
                    </div>
                  </section>
                )}

                {step === 3 && (
                  <section aria-labelledby="booking-step-time">
                    <h3
                      id="booking-step-time"
                      className="font-display text-3xl md:text-4xl leading-tight mb-2"
                    >
                      Pick a time
                    </h3>
                    <p className="text-brand-muted mb-6">
                      Live-style availability shown for demo purposes.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-2 mb-4">
                      {mockDays.map((day) => {
                        const active = day.id === selectedDay;
                        return (
                          <button
                            key={day.id}
                            type="button"
                            onClick={() => {
                              setSelectedDay(day.id);
                              setSelectedTime(null);
                            }}
                            className={cn(
                              "rounded-xl border px-3 py-2 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bronze focus-visible:ring-offset-2",
                              active
                                ? "border-brand-bronze bg-brand-beige/70"
                                : "border-brand-border/80 bg-brand-cream hover:border-brand-bronze/60"
                            )}
                          >
                            <p className="text-xs uppercase tracking-wide text-brand-muted">{day.label}</p>
                            <p className="text-sm font-medium">{day.dateLabel}</p>
                          </button>
                        );
                      })}
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {selectedDayData.slots.map((slot) => {
                        const active = selectedTime === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTime(slot)}
                            className={cn(
                              "rounded-xl border px-3 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bronze focus-visible:ring-offset-2",
                              active
                                ? "border-brand-bronze bg-brand-bronze text-white"
                                : "border-brand-border/80 bg-brand-cream hover:border-brand-bronze/60"
                            )}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                    <div className="mt-4 text-sm text-brand-muted flex flex-wrap items-center gap-x-4 gap-y-2">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-brand-bronze" />
                        Same-week options
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock3 className="w-4 h-4 text-brand-bronze" />
                        Most visits under 1 hour
                      </span>
                    </div>
                  </section>
                )}

                {step === 4 && (
                  <section aria-labelledby="booking-step-details">
                    <h3
                      id="booking-step-details"
                      className="font-display text-3xl md:text-4xl leading-tight mb-2"
                    >
                      Your details
                    </h3>
                    <p className="text-brand-muted mb-6">
                      We only need the essentials to confirm your consultation.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <label className="flex flex-col gap-1">
                        <span className="text-sm font-medium">Name</span>
                        <input
                          type="text"
                          value={fullName}
                          onChange={(event) => setFullName(event.target.value)}
                          className="rounded-xl border border-brand-border bg-white px-3 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bronze focus-visible:ring-offset-2"
                          autoComplete="name"
                        />
                      </label>
                      <label className="flex flex-col gap-1">
                        <span className="text-sm font-medium">Phone</span>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(event) => setPhone(event.target.value)}
                          className="rounded-xl border border-brand-border bg-white px-3 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bronze focus-visible:ring-offset-2"
                          autoComplete="tel"
                        />
                      </label>
                      <label className="flex flex-col gap-1 sm:col-span-2">
                        <span className="text-sm font-medium">Email</span>
                        <input
                          type="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          className="rounded-xl border border-brand-border bg-white px-3 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bronze focus-visible:ring-offset-2"
                          autoComplete="email"
                        />
                      </label>
                      <label className="flex flex-col gap-1 sm:col-span-2">
                        <span className="text-sm font-medium">Any specific goals? (optional)</span>
                        <textarea
                          value={goals}
                          onChange={(event) => setGoals(event.target.value)}
                          rows={4}
                          className="rounded-xl border border-brand-border bg-white px-3 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bronze focus-visible:ring-offset-2 resize-none"
                        />
                      </label>
                    </div>
                  </section>
                )}
              </>
            )}
          </div>

          {!submitted && (
            <div className="border-t border-brand-border px-4 md:px-8 py-4 flex items-center justify-between gap-3">
              <Button
                variant="outline"
                onClick={goBack}
                disabled={step === 1}
                className="min-w-28"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </Button>
              <div className="text-right">
                {errorMessage && <p className="text-sm text-red-700 mb-2">{errorMessage}</p>}
                <Button onClick={goNext} className="min-w-44">
                  {nextLabel}
                  {step !== 4 && <ChevronRight className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
