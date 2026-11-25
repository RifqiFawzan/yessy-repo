"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { cn } from "@/lib/utils";

const places = [
  {
    id: "senggigi",
    name: "Yessy Senggigi",
    address: "Senggigi, Kec. Batu Layar, Kabupaten Lombok Barat",
    phone: "6282314110396",
    displayPhone: "+62 823-1411-0396",
    vibe: "Cozy Fine Dining & Wine",
  },
  {
    id: "tanjung-bias",
    name: "Yessy Tanjung Bias",
    address: "Tanjung Bias, Batu Layar, Kabupaten Lombok Barat",
    phone: "6281230186226",
    displayPhone: "+62 812-3018-6226",
    vibe: "Coastal Sunset & Fresh Seafood",
  },
];

type ServicePeriod = "lunch" | "sunset" | "dinner";

interface TimeSlotItem {
  time: string;
  period: ServicePeriod;
  highlight?: string;
}

// Linear chronological order (11:00 AM to 9:00 PM WITA)
const timeSlotConfig: TimeSlotItem[] = [
  // Lunch & Afternoon
  { time: "11:00", period: "lunch" },
  { time: "11:30", period: "lunch" },
  { time: "12:00", period: "lunch" },
  { time: "12:30", period: "lunch" },
  { time: "13:00", period: "lunch" },
  { time: "13:30", period: "lunch" },
  { time: "14:00", period: "lunch" },
  { time: "14:30", period: "lunch" },
  { time: "15:00", period: "lunch" },

  // Golden Hour & Sunset
  { time: "16:00", period: "sunset" },
  { time: "16:30", period: "sunset" },
  { time: "17:00", period: "sunset", highlight: "Sunset" },
  { time: "17:30", period: "sunset", highlight: "Golden Hour" },
  { time: "18:00", period: "sunset", highlight: "Dusk" },

  // Dinner Service
  { time: "18:30", period: "dinner" },
  { time: "19:00", period: "dinner", highlight: "Prime Dinner" },
  { time: "19:30", period: "dinner", highlight: "Prime Dinner" },
  { time: "20:00", period: "dinner" },
  { time: "20:30", period: "dinner", highlight: "Last Call" },
  { time: "21:00", period: "dinner" },
];

const periodTabs: { id: "all" | ServicePeriod; label: string; timeRange: string }[] = [
  { id: "all", label: "All Hours", timeRange: "11:00 – 21:00" },
  { id: "lunch", label: "Lunch", timeRange: "11:00 – 15:00" },
  { id: "sunset", label: "Sunset", timeRange: "16:00 – 18:00" },
  { id: "dinner", label: "Dinner", timeRange: "18:30 – 21:00" },
];

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    place: "senggigi",
    date: "",
    time: "",
    guests: "2",
    seatingPreference: "Standard Dining",
    notes: "",
  });
  const [activePeriod, setActivePeriod] = useState<"all" | ServicePeriod>("all");
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Compute minimum selectable date (today in local time YYYY-MM-DD)
  const todayString = useMemo(() => {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSlotSelect = (time: string, period: ServicePeriod) => {
    setFormData({ ...formData, time });
    setActivePeriod(period);
  };

  const handlePlaceSelect = (placeId: string) => {
    setFormData({ ...formData, place: placeId });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.time) {
      alert("Please select a reservation time slot.");
      return;
    }
    setSubmitted(true);
  };

  const selectedPlace = places.find((p) => p.id === formData.place);

  const generateWhatsAppMessage = () => {
    const formattedDate = formData.date
      ? new Date(formData.date + "T00:00:00").toLocaleDateString("en-GB", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : formData.date;

    const msg = `Hello Yessy! I would like to request a table reservation:

📍 Location: ${selectedPlace?.name}
📅 Date: ${formattedDate}
⏰ Time: ${formData.time} WITA
👥 Guests: ${formData.guests} ${formData.guests === "1" ? "Guest" : "Guests"}
🪑 Seating Preference: ${formData.seatingPreference}

👤 Guest Details:
• Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email}
${formData.notes ? `• Special Notes: ${formData.notes}` : ""}

Please confirm table availability. Thank you!`;

    const targetPhone = selectedPlace?.phone || "6282314110396";
    return `https://wa.me/${targetPhone}?text=${encodeURIComponent(msg)}`;
  };

  const generateEmailLink = () => {
    const subject = `Reservation Request - ${selectedPlace?.name} (${formData.date} @ ${formData.time})`;
    const body = `Hello Yessy Restaurant,

I would like to request a table reservation with the following details:

Location: ${selectedPlace?.name}
Date: ${formData.date}
Time: ${formData.time} WITA
Guests: ${formData.guests}
Seating Preference: ${formData.seatingPreference}

Guest Information:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Special Requests: ${formData.notes || "None"}

Please let me know if this table can be reserved.

Thank you!`;

    return `mailto:info@yessy.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const currentSlots = activePeriod === "all"
    ? timeSlotConfig
    : timeSlotConfig.filter((slot) => slot.period === activePeriod);

  return (
    <div className="min-h-screen bg-[#f9f6f0]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-darkbrown text-cream overflow-hidden">
        <Image
          src="/AMBIENT AND SPACE (17 of 84).jpg"
          alt="Reservation Background"
          fill
          className="object-cover opacity-20 animate-hero-bg"
          sizes="100vw"
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darkbrown to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-camel font-medium tracking-widest uppercase mb-3 text-xs sm:text-sm animate-hero-reveal">
            Table Booking
          </p>
          <h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-light mb-5 tracking-tight animate-hero-reveal"
            style={{ animationDelay: "150ms" }}
          >
            Reserve Your Experience
          </h1>
          <p
            className="text-sand/90 text-sm sm:text-base max-w-xl mx-auto font-light tracking-wide animate-hero-reveal leading-relaxed"
            style={{ animationDelay: "350ms" }}
          >
            Two unique locations, two distinct culinary journeys. Choose your preferred branch and time slot to secure your table.
          </p>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-white p-10 sm:p-16 rounded-sm shadow-2xl shadow-darkbrown/5 border border-sand/30 text-center animate-scale-in">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-camel/40 bg-camel/10 flex items-center justify-center animate-scale-in delay-100">
                <svg className="w-7 h-7 text-camel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-heading text-3xl font-light text-darkbrown mb-3 animate-fade-in delay-200">
                Reservation Ready
              </h2>
              <p className="text-brown/80 mb-6 max-w-md mx-auto text-sm sm:text-base leading-relaxed animate-fade-in delay-300">
                Details captured for <strong className="text-darkbrown">{selectedPlace?.name}</strong> on{" "}
                <strong className="text-darkbrown">{formData.date}</strong> at{" "}
                <strong className="text-darkbrown">{formData.time} WITA</strong> ({formData.guests} Guests).
              </p>
              <p className="text-xs text-brown/60 mb-8 max-w-sm mx-auto">
                Tap below to send directly to our team via WhatsApp for instant confirmation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-400">
                <a href={generateWhatsAppMessage()} target="_blank" rel="noopener noreferrer" className="sm:w-auto w-full">
                  <Button size="lg" className="press bg-darkbrown hover:bg-black text-cream px-8 w-full sm:w-auto rounded-none tracking-widest text-xs uppercase h-12">
                    Confirm via WhatsApp
                  </Button>
                </a>
                <a href={generateEmailLink()} className="sm:w-auto w-full">
                  <Button size="lg" variant="outline" className="press border-darkbrown text-darkbrown hover:bg-darkbrown hover:text-cream px-8 w-full sm:w-auto rounded-none tracking-widest text-xs uppercase h-12">
                    Confirm via Email
                  </Button>
                </a>
              </div>

              <button
                onClick={() => { setSubmitted(false); }}
                className="press-subtle mt-10 text-camel hover:text-darkbrown text-xs uppercase tracking-widest transition-colors border-b border-transparent hover:border-darkbrown pb-1 animate-fade-in delay-500"
              >
                Edit or Make Another Reservation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-12 lg:p-16 rounded-sm shadow-xl shadow-darkbrown/5 border border-sand/30 animate-fade-in">
              
              {/* 01. Location Selection */}
              <ScrollReveal animation="fade-up">
                <div className="mb-12">
                  <div className="border-b border-sand/30 pb-3 mb-6 flex items-baseline justify-between">
                    <h3 className="font-heading text-xl text-darkbrown flex items-center gap-3">
                      <span className="text-camel text-sm font-sans font-bold">01.</span> Select Location
                    </h3>
                    <span className="text-xs text-brown/60">Both branches in West Lombok</span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {places.map((place) => {
                      const selected = formData.place === place.id;
                      return (
                        <button
                          key={place.id}
                          type="button"
                          onClick={() => handlePlaceSelect(place.id)}
                          className={cn(
                            "reservation-card relative text-left p-5 sm:p-6 border rounded-sm transition-all duration-200",
                            selected
                              ? "border-camel bg-camel/10 shadow-sm ring-1 ring-camel/40"
                              : "border-sand/40 bg-transparent hover:border-camel/60 hover:bg-sand/5"
                          )}
                        >
                          <div className="flex items-start justify-between mb-1.5">
                            <h4 className={cn(
                              "font-heading text-lg transition-colors duration-200",
                              selected ? "text-darkbrown font-bold" : "text-brown"
                            )}>
                              {place.name}
                            </h4>
                            <span
                              className={cn(
                                "size-3 rounded-full border transition-all duration-200 shrink-0 mt-1",
                                selected
                                  ? "bg-camel border-camel ring-2 ring-camel/30"
                                  : "border-sand/70 bg-white"
                              )}
                            />
                          </div>
                          <p className="text-xs text-camel font-semibold mb-1 uppercase tracking-wide">
                            {place.vibe}
                          </p>
                          <p className="text-xs text-brown/70 leading-relaxed font-light">
                            {place.address}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>

              {/* 02. Date & Time Selection (Optimized Time System) */}
              <ScrollReveal animation="fade-up" delay={80}>
                <div className="mb-12">
                  <div className="border-b border-sand/30 pb-3 mb-6 flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-heading text-xl text-darkbrown flex items-center gap-3">
                      <span className="text-camel text-sm font-sans font-bold">02.</span> Date & Service Hours
                    </h3>
                    <span className="text-xs text-brown/60">Open Daily: 11:00 AM – 9:00 PM WITA</span>
                  </div>

                  <div className="space-y-6">
                    {/* Date Picker */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label htmlFor="date" className="block text-xs font-bold tracking-widest uppercase text-brown/80">
                          Reservation Date <span className="text-camel">*</span>
                        </label>
                        {formData.date && (
                          <span className="text-xs text-camel font-medium">
                            {new Date(formData.date + "T00:00:00").toLocaleDateString("en-GB", {
                              weekday: "short",
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        )}
                      </div>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        min={todayString}
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-sand/10 border border-sand/50 rounded-sm px-4 py-3 text-darkbrown focus:outline-none focus:border-camel focus:bg-white transition-colors text-base font-light cursor-pointer"
                      />
                    </div>

                    {/* Time Slot Service Periods Selector */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="block text-xs font-bold tracking-widest uppercase text-brown/80">
                          Dining Period & Time Slot <span className="text-camel">*</span>
                        </label>
                        {formData.time ? (
                          <span className="text-xs bg-darkbrown text-cream px-2.5 py-0.5 rounded-full font-mono">
                            Selected: {formData.time} WITA
                          </span>
                        ) : (
                          <span className="text-xs text-brown/50 italic">Please select one time</span>
                        )}
                      </div>

                      {/* Period Tabs Filter */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 p-1.5 bg-sand/15 border border-sand/30 rounded-sm mb-4">
                        {periodTabs.map((tab) => {
                          const isTabActive = activePeriod === tab.id;
                          return (
                            <button
                              key={tab.id}
                              type="button"
                              onClick={() => setActivePeriod(tab.id)}
                              className={cn(
                                "py-2 px-2 sm:px-3 text-center rounded-sm transition-all duration-200 cursor-pointer",
                                isTabActive
                                  ? "bg-white text-darkbrown font-semibold shadow-sm border border-sand/40"
                                  : "text-brown/70 hover:text-darkbrown hover:bg-white/50"
                              )}
                            >
                              <div className="text-xs sm:text-sm font-heading leading-tight truncate">
                                {tab.label}
                              </div>
                              <div className="text-[10px] sm:text-xs text-camel mt-0.5 font-sans">
                                {tab.timeRange}
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {/* Time Slots Grid (Sequential Chronological Order) */}
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
                        {currentSlots.map((slot) => {
                          const isSelected = formData.time === slot.time;
                          return (
                            <button
                              key={slot.time}
                              type="button"
                              onClick={() => handleSlotSelect(slot.time, slot.period)}
                              className={cn(
                                "press relative py-2.5 px-2 rounded-sm border text-center transition-all duration-150 cursor-pointer flex flex-col items-center justify-center min-h-[52px]",
                                isSelected
                                  ? "bg-darkbrown text-cream border-darkbrown shadow-md ring-2 ring-camel/40"
                                  : "bg-white text-darkbrown border-sand/50 hover:border-camel hover:bg-sand/10"
                              )}
                            >
                              <span className="font-heading text-base font-semibold tracking-wide">
                                {slot.time}
                              </span>
                              {slot.highlight && (
                                <span
                                  className={cn(
                                    "text-[9px] uppercase tracking-wider font-semibold mt-1 px-1.5 py-0.2 rounded leading-tight",
                                    isSelected
                                      ? "text-sand bg-black/30"
                                      : "text-camel bg-sand/20"
                                  )}
                                >
                                  {slot.highlight}
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Quick reminder banner */}
                      <div className="mt-3.5 p-3 bg-sand/15 rounded-sm border border-sand/30 flex items-start gap-2.5 text-xs text-brown/80">
                        <svg className="w-4 h-4 text-camel shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6l4 2" />
                        </svg>
                        <span>
                          <strong>Sunset tip:</strong> For ocean sunset views at <em>Yessy Tanjung Bias</em>, we recommend selecting between <strong>17:00 – 17:30 WITA</strong>.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* 03. Guest Details & Seating Preferences */}
              <ScrollReveal animation="fade-up" delay={80}>
                <div className="mb-10">
                  <div className="border-b border-sand/30 pb-3 mb-6 flex items-baseline justify-between">
                    <h3 className="font-heading text-xl text-darkbrown flex items-center gap-3">
                      <span className="text-camel text-sm font-sans font-bold">03.</span> Guest Details
                    </h3>
                    <span className="text-xs text-brown/60">Table & contact info</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                    {/* Name Input */}
                    <div className="relative">
                      <label htmlFor="name" className={cn(
                        "absolute left-0 transition-all duration-200 pointer-events-none text-brown/60",
                        (focusedField === 'name' || formData.name) ? "-top-4 text-xs font-bold tracking-widest uppercase text-camel" : "top-2 text-base font-light"
                      )}>
                        Full Name <span className="text-camel">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-transparent border-b border-brown/20 py-2 text-darkbrown focus:outline-none focus:border-camel transition-colors text-base"
                      />
                    </div>

                    {/* Phone Input */}
                    <div className="relative">
                      <label htmlFor="phone" className={cn(
                        "absolute left-0 transition-all duration-200 pointer-events-none text-brown/60",
                        (focusedField === 'phone' || formData.phone) ? "-top-4 text-xs font-bold tracking-widest uppercase text-camel" : "top-2 text-base font-light"
                      )}>
                        WhatsApp / Phone <span className="text-camel">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder={focusedField === 'phone' ? "e.g. 08123456789" : ""}
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-transparent border-b border-brown/20 py-2 text-darkbrown focus:outline-none focus:border-camel transition-colors text-base"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                      <label htmlFor="email" className={cn(
                        "absolute left-0 transition-all duration-200 pointer-events-none text-brown/60",
                        (focusedField === 'email' || formData.email) ? "-top-4 text-xs font-bold tracking-widest uppercase text-camel" : "top-2 text-base font-light"
                      )}>
                        Email Address <span className="text-camel">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-transparent border-b border-brown/20 py-2 text-darkbrown focus:outline-none focus:border-camel transition-colors text-base"
                      />
                    </div>

                    {/* Guests Select */}
                    <div className="relative">
                      <label htmlFor="guests" className="absolute -top-4 left-0 text-xs font-bold tracking-widest uppercase text-camel pointer-events-none">
                        Party Size
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-brown/20 py-2 text-darkbrown focus:outline-none focus:border-camel transition-colors text-base appearance-none cursor-pointer"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-0 top-3 pointer-events-none text-brown/50">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>

                    {/* Seating Preference Select */}
                    <div className="relative">
                      <label htmlFor="seatingPreference" className="absolute -top-4 left-0 text-xs font-bold tracking-widest uppercase text-camel pointer-events-none">
                        Seating Area
                      </label>
                      <select
                        id="seatingPreference"
                        name="seatingPreference"
                        value={formData.seatingPreference}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-brown/20 py-2 text-darkbrown focus:outline-none focus:border-camel transition-colors text-base appearance-none cursor-pointer"
                      >
                        <option value="Standard Dining">Standard Dining (Any)</option>
                        <option value="Outdoor / Sea Breeze">Outdoor / Open Air</option>
                        <option value="Indoor Cozy">Indoor Cozy</option>
                        <option value="Romantic / Sunset Table">Romantic / Sunset Table</option>
                        <option value="Family / Large Group Table">Family / Large Table</option>
                      </select>
                      <div className="absolute right-0 top-3 pointer-events-none text-brown/50">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>

                    {/* Notes */}
                    <div className="relative">
                      <label htmlFor="notes" className={cn(
                        "absolute left-0 transition-all duration-200 pointer-events-none text-brown/60",
                        (focusedField === 'notes' || formData.notes) ? "-top-4 text-xs font-bold tracking-widest uppercase text-camel" : "top-2 text-base font-light"
                      )}>
                        Dietary / Special Requests (Optional)
                      </label>
                      <input
                        type="text"
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('notes')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-transparent border-b border-brown/20 py-2 text-darkbrown focus:outline-none focus:border-camel transition-colors text-base"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Submit Action */}
              <ScrollReveal animation="fade-up" delay={100}>
                <div className="pt-6 border-t border-sand/30 text-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="press bg-darkbrown hover:bg-black text-cream px-12 py-4 h-14 rounded-none text-sm tracking-widest uppercase hover:shadow-xl transition-all w-full sm:w-auto"
                  >
                    Proceed to Table Confirmation
                    <svg
                      aria-hidden="true"
                      className="cta-arrow ml-2 size-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Button>
                  <p className="mt-3.5 text-xs text-brown/65 font-light tracking-wide">
                    Fast response confirmation via official WhatsApp for {selectedPlace?.name}.
                  </p>
                </div>
              </ScrollReveal>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
