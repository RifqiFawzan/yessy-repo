"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const places = [
  { id: "senggigi", name: "Yessy Senggigi", address: "Senggigi, Kec. Batu Layar, Kabupaten Lombok Barat" },
  { id: "tanjung-bias", name: "Yessy Tanjung Bias", address: "Tanjung Bias, Batu Layar, Kabupaten Lombok Barat" },
];

const timeSlots = [
  "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30",
];

interface FormErrors {
  date?: string;
  time?: string;
  name?: string;
  phone?: string;
  email?: string;
}

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    place: "senggigi",
    date: "",
    time: "",
    guests: "2",
    notes: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const dateRef = useRef<HTMLInputElement>(null);
  const firstSlotRef = useRef<HTMLButtonElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSlotSelect = (time: string) => {
    setFormData((prev) => ({ ...prev, time }));
    if (errors.time) {
      setErrors((prev) => ({ ...prev, time: undefined }));
    }
  };

  const handlePlaceSelect = (placeId: string) => {
    setFormData((prev) => ({ ...prev, place: placeId }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: FormErrors = {};

    if (!formData.date) {
      nextErrors.date = "Please choose a reservation date.";
    }
    if (!formData.time) {
      nextErrors.time = "Please select a preferred time slot.";
    }
    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your full name.";
    }
    if (!formData.phone.trim()) {
      nextErrors.phone = "Please enter a contact phone number.";
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address (e.g. name@example.com).";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      if (nextErrors.date) dateRef.current?.focus();
      else if (nextErrors.time) firstSlotRef.current?.focus();
      else if (nextErrors.name) nameRef.current?.focus();
      else if (nextErrors.phone) phoneRef.current?.focus();
      else if (nextErrors.email) emailRef.current?.focus();
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const selectedPlace = places.find((p) => p.id === formData.place);

  const generateWhatsAppMessage = () => {
    const msg = `Hello Yessy! I'd like to make a reservation:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Location: ${selectedPlace?.name}
Date: ${formData.date}
Time: ${formData.time}
Guests: ${formData.guests}
Notes: ${formData.notes || "None"}

Please confirm my reservation. Thank you!`;
    return `https://wa.me/6285333908375?text=${encodeURIComponent(msg)}`;
  };

  const generateEmailLink = () => {
    const subject = `Reservation Request - ${selectedPlace?.name}`;
    const body = `Hello Yessy,

I would like to make a reservation with the following details:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Location: ${selectedPlace?.name}
Date: ${formData.date}
Time: ${formData.time}
Number of Guests: ${formData.guests}
Notes: ${formData.notes || "None"}

Please confirm my reservation at your earliest convenience.

Thank you!`;
    return `mailto:crzyever@yessy.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const errorCount = Object.values(errors).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 bg-surface-dark text-surface-dark-foreground overflow-hidden">
        <Image
          src="/AMBIENT AND SPACE (17 of 84).jpg"
          alt="Yessy dining tables prepared for reservation"
          fill
          className="object-cover opacity-25"
          sizes="100vw"
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darkbrown via-darkbrown/70 to-darkbrown/60" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl font-bold mb-4 tracking-tight text-cream">
            Reserve a Table
          </h1>
          <p className="text-surface-dark-muted text-sm sm:text-base max-w-xl mx-auto">
            Select your preferred Yessy location, date, and seating time below.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-card text-card-foreground p-8 sm:p-14 rounded-2xl shadow-lg border border-border text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-primary flex items-center justify-center text-primary">
                <svg aria-hidden="true" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-heading text-3xl font-bold text-card-foreground mb-3">
                Reservation Details Ready
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed text-sm sm:text-base">
                Send your reservation summary for {selectedPlace?.name} on {formData.date} at {formData.time} via WhatsApp or Email to confirm.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center min-h-[44px] bg-primary hover:bg-brown text-primary-foreground px-8 py-3 rounded-xl text-sm font-semibold transition-colors"
                >
                  Confirm via WhatsApp
                </a>
                <a
                  href={generateEmailLink()}
                  className="inline-flex items-center justify-center min-h-[44px] border border-border bg-transparent hover:bg-muted text-card-foreground px-8 py-3 rounded-xl text-sm font-semibold transition-colors"
                >
                  Confirm via Email
                </a>
              </div>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-8 min-h-[44px] inline-flex items-center px-4 text-primary hover:underline text-sm font-semibold underline-offset-4"
              >
                Edit or make another reservation
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-card text-card-foreground p-6 sm:p-12 lg:p-16 rounded-2xl shadow-lg border border-border space-y-12"
            >
              {errorCount > 0 && (
                <div
                  role="alert"
                  className="rounded-xl border border-destructive bg-destructive/10 p-4 text-sm text-destructive font-medium"
                >
                  Please complete the {errorCount} highlighted {errorCount === 1 ? "field" : "fields"} below before submitting.
                </div>
              )}

              <fieldset>
                <legend className="w-full font-heading text-xl font-bold text-card-foreground mb-6 border-b border-border pb-3 flex items-center gap-3">
                  <span className="text-primary text-sm font-sans">01.</span> Select Location
                </legend>
                <div className="grid sm:grid-cols-2 gap-4">
                  {places.map((place) => {
                    const selected = formData.place === place.id;
                    return (
                      <button
                        key={place.id}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => handlePlaceSelect(place.id)}
                        className={cn(
                          "reservation-card relative text-left p-5 sm:p-6 border rounded-xl min-h-[44px]",
                          selected
                            ? "border-primary bg-primary/10 shadow-sm"
                            : "border-border bg-transparent hover:border-primary/60"
                        )}
                      >
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <span className="font-heading text-lg font-bold text-card-foreground">
                            {place.name}
                          </span>
                          {selected && (
                            <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary shrink-0">
                              <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                              Selected
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {place.address}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <fieldset>
                <legend className="w-full font-heading text-xl font-bold text-card-foreground mb-6 border-b border-border pb-3 flex items-center gap-3">
                  <span className="text-primary text-sm font-sans">02.</span> Date &amp; Time
                </legend>
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-xs font-bold tracking-wider uppercase text-muted-foreground mb-2"
                    >
                      Select Date
                    </label>
                    <input
                      ref={dateRef}
                      type="date"
                      id="date"
                      name="date"
                      required
                      aria-invalid={Boolean(errors.date)}
                      aria-describedby={errors.date ? "date-error" : undefined}
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full min-h-[44px] bg-transparent border-b-2 border-input px-1 py-2.5 text-card-foreground focus:border-primary transition-colors text-base"
                    />
                    {errors.date && (
                      <p id="date-error" role="alert" className="mt-2 text-xs font-medium text-destructive">
                        {errors.date}
                      </p>
                    )}
                  </div>

                  <div>
                    <p id="time-slot-label" className="block text-xs font-bold tracking-wider uppercase text-muted-foreground mb-3">
                      Select Time
                    </p>
                    <div
                      role="group"
                      aria-labelledby="time-slot-label"
                      aria-describedby={errors.time ? "time-error" : undefined}
                      className="grid grid-cols-3 sm:grid-cols-4 gap-2"
                    >
                      {timeSlots.map((slot, index) => {
                        const isSelected = formData.time === slot;
                        return (
                          <button
                            key={slot}
                            ref={index === 0 ? firstSlotRef : undefined}
                            type="button"
                            aria-pressed={isSelected}
                            onClick={() => handleSlotSelect(slot)}
                            className={cn(
                              "press min-h-[44px] px-2 text-sm font-semibold rounded-xl border",
                              isSelected
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-transparent text-card-foreground border-border hover:border-primary"
                            )}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                    {errors.time && (
                      <p id="time-error" role="alert" className="mt-2 text-xs font-medium text-destructive">
                        {errors.time}
                      </p>
                    )}
                  </div>
                </div>
              </fieldset>

              <fieldset>
                <legend className="w-full font-heading text-xl font-bold text-card-foreground mb-6 border-b border-border pb-3 flex items-center gap-3">
                  <span className="text-primary text-sm font-sans">03.</span> Guest Details
                </legend>
                <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold tracking-wider uppercase text-muted-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      ref={nameRef}
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      placeholder="Your Name"
                      required
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full min-h-[44px] bg-transparent border-b-2 border-input px-1 py-2 text-card-foreground placeholder:text-muted-foreground/60 focus:border-primary transition-colors text-base"
                    />
                    {errors.name && (
                      <p id="name-error" role="alert" className="mt-1.5 text-xs font-medium text-destructive">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold tracking-wider uppercase text-muted-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      ref={phoneRef}
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      placeholder="+62 ..."
                      required
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full min-h-[44px] bg-transparent border-b-2 border-input px-1 py-2 text-card-foreground placeholder:text-muted-foreground/60 focus:border-primary transition-colors text-base"
                    />
                    {errors.phone && (
                      <p id="phone-error" role="alert" className="mt-1.5 text-xs font-medium text-destructive">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold tracking-wider uppercase text-muted-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      ref={emailRef}
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      placeholder="email@example.com"
                      required
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full min-h-[44px] bg-transparent border-b-2 border-input px-1 py-2 text-card-foreground placeholder:text-muted-foreground/60 focus:border-primary transition-colors text-base"
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="mt-1.5 text-xs font-medium text-destructive">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="guests" className="block text-xs font-bold tracking-wider uppercase text-muted-foreground mb-2">
                      Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full min-h-[44px] bg-card border-b-2 border-input px-1 py-2 text-card-foreground focus:border-primary transition-colors text-base"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="notes" className="block text-xs font-bold tracking-wider uppercase text-muted-foreground mb-2">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={2}
                      placeholder="Allergies, seating preference, or celebration notes"
                      value={formData.notes}
                      onChange={handleChange}
                      className="w-full min-h-[44px] bg-transparent border-b-2 border-input px-1 py-2 text-card-foreground placeholder:text-muted-foreground/60 focus:border-primary transition-colors text-base"
                    />
                  </div>
                </div>
              </fieldset>

              <div className="pt-6 border-t border-border text-center">
                <Button
                  type="submit"
                  size="lg"
                  className="press bg-primary hover:bg-brown text-primary-foreground px-10 py-3 min-h-[48px] rounded-xl text-sm font-semibold tracking-wide"
                >
                  Review Reservation Request
                </Button>
                <p className="mt-4 text-xs text-muted-foreground">
                  Next step lets you send this request directly via WhatsApp or Email.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
