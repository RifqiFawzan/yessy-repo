"use client";

import { useState } from "react";
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
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSlotSelect = (time: string) => {
    setFormData({ ...formData, time });
  };

  const handlePlaceSelect = (placeId: string) => {
    setFormData({ ...formData, place: placeId });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.time) {
      alert("Please select a time slot.");
      return;
    }
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

  return (
    <div className="min-h-screen bg-[#f9f6f0]">
      {/* Elegant Hero Section */}
      <section className="relative pt-32 pb-20 bg-darkbrown text-cream overflow-hidden">
        <Image
          src="/AMBIENT AND SPACE (17 of 84).jpg"
          alt="Reservation Background"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
          unoptimized={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darkbrown to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-light mb-6 tracking-tight animate-fade-in delay-100">
            Reserve Your Experience
          </h1>
          <p className="text-sand/90 text-sm sm:text-base max-w-xl mx-auto font-light tracking-wide animate-fade-in delay-200">
            Join us for an unforgettable culinary journey. Select your preferred date, time, and location below to secure your table.
          </p>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-white p-10 sm:p-16 rounded-sm shadow-2xl shadow-darkbrown/5 border border-sand/30 text-center animate-scale-in">
              <div className="w-16 h-16 mx-auto mb-8 rounded-full border-2 border-camel flex items-center justify-center">
                <svg className="w-6 h-6 text-camel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-heading text-3xl font-light text-darkbrown mb-4">Request Received</h2>
              <p className="text-brown/70 mb-10 max-w-md mx-auto font-light leading-relaxed">
                Your reservation details have been captured. To finalize your booking, please confirm via WhatsApp or Email below.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={generateWhatsAppMessage()} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-darkbrown hover:bg-black text-cream px-8 w-full sm:w-auto rounded-none tracking-widest text-xs uppercase h-12 transition-all">
                    Confirm via WhatsApp
                  </Button>
                </a>
                <a href={generateEmailLink()}>
                  <Button size="lg" variant="outline" className="border-darkbrown text-darkbrown hover:bg-darkbrown hover:text-cream px-8 w-full sm:w-auto rounded-none tracking-widest text-xs uppercase h-12 transition-all">
                    Confirm via Email
                  </Button>
                </a>
              </div>

              <button
                onClick={() => { setSubmitted(false); }}
                className="mt-12 text-camel hover:text-darkbrown text-xs uppercase tracking-widest transition-colors border-b border-transparent hover:border-darkbrown pb-1"
              >
                Make another reservation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-14 lg:p-20 rounded-sm shadow-2xl shadow-darkbrown/5 border border-sand/30 animate-fade-in">
              
              {/* Location Selection */}
              <div className="mb-14">
                <h3 className="font-heading text-xl text-darkbrown mb-6 border-b border-sand/30 pb-4 flex items-center gap-3">
                  <span className="text-camel text-sm">01.</span> Select Location
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {places.map((place) => (
                    <button
                      key={place.id}
                      type="button"
                      onClick={() => handlePlaceSelect(place.id)}
                      className={cn(
                        "text-left p-6 transition-all duration-300 border rounded-sm",
                        formData.place === place.id
                          ? "border-camel bg-camel/5 shadow-sm"
                          : "border-sand/40 hover:border-camel/50 bg-transparent"
                      )}
                    >
                      <h4 className={cn(
                        "font-heading text-lg mb-1 transition-colors",
                        formData.place === place.id ? "text-darkbrown font-semibold" : "text-brown"
                      )}>
                        {place.name}
                      </h4>
                      <p className="text-xs text-brown/60 leading-relaxed font-light">{place.address}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time Selection */}
              <div className="mb-14">
                <h3 className="font-heading text-xl text-darkbrown mb-6 border-b border-sand/30 pb-4 flex items-center gap-3">
                  <span className="text-camel text-sm">02.</span> Date & Time
                </h3>
                <div className="grid md:grid-cols-2 gap-10 md:gap-12">
                  <div>
                    <label htmlFor="date" className="block text-xs font-bold tracking-widest uppercase text-brown/70 mb-3">
                      Select Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-brown/20 py-3 text-darkbrown focus:outline-none focus:border-camel transition-colors text-lg font-light cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-brown/70 mb-3">
                      Select Time
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => handleSlotSelect(slot)}
                          className={cn(
                            "py-2 text-sm transition-all rounded-sm border",
                            formData.time === slot
                              ? "bg-darkbrown text-white border-darkbrown"
                              : "bg-transparent text-brown border-sand/40 hover:border-camel hover:text-camel"
                          )}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Guest Details */}
              <div className="mb-12">
                <h3 className="font-heading text-xl text-darkbrown mb-8 border-b border-sand/30 pb-4 flex items-center gap-3">
                  <span className="text-camel text-sm">03.</span> Guest Details
                </h3>
                <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
                  
                  {/* Name Input */}
                  <div className="relative">
                    <label htmlFor="name" className={cn(
                      "absolute left-0 transition-all duration-200 pointer-events-none text-brown/60",
                      (focusedField === 'name' || formData.name) ? "-top-4 text-xs font-bold tracking-widest uppercase text-camel" : "top-2 text-base font-light"
                    )}>
                      Full Name
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
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
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
                      Email Address
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
                      Guests
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-brown/20 py-2 text-darkbrown focus:outline-none focus:border-camel transition-colors text-base appearance-none cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((n) => (
                        <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                      ))}
                    </select>
                    <div className="absolute right-0 top-3 pointer-events-none text-brown/50">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="md:col-span-2 relative mt-4">
                    <label htmlFor="notes" className={cn(
                      "absolute left-0 transition-all duration-200 pointer-events-none text-brown/60",
                      (focusedField === 'notes' || formData.notes) ? "-top-6 text-xs font-bold tracking-widest uppercase text-camel" : "top-2 text-base font-light"
                    )}>
                      Special Requests (Optional)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={1}
                      value={formData.notes}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('notes')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-transparent border-b border-brown/20 py-2 text-darkbrown focus:outline-none focus:border-camel transition-colors text-base resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Action */}
              <div className="mt-12 text-center pt-8 border-t border-sand/30">
                <Button type="submit" size="lg" className="bg-darkbrown hover:bg-black text-cream px-14 py-4 h-14 rounded-none text-sm tracking-widest uppercase transition-all duration-300 hover:shadow-xl">
                  Request Reservation
                </Button>
                <p className="mt-4 text-xs text-brown/60 font-light tracking-wide">
                  Your reservation is subject to confirmation via WhatsApp or Email.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
