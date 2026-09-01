"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const places = [
  { id: "place1", name: "Yessy Place 1", address: "Jl. Sudirman No. 123, Jakarta" },
  { id: "place2", name: "Yessy Place 2", address: "Jl. Gatot Subroto No. 456, Jakarta" },
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
    place: "place1",
    date: "",
    time: "",
    guests: "2",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
Address: ${selectedPlace?.address}
Date: ${formData.date}
Time: ${formData.time}
Number of Guests: ${formData.guests}
Notes: ${formData.notes || "None"}

Please confirm my reservation at your earliest convenience.

Thank you!`;
    return `mailto:crzyever@yessy.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-darkbrown via-brown to-darkbrown text-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-camel font-medium tracking-widest uppercase mb-3 text-sm animate-fade-in delay-100">Book Your Table</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 animate-fade-in delay-200">Make a Reservation</h1>
          <p className="text-sand text-lg max-w-2xl mx-auto animate-fade-in delay-300">
            Book your table at Yessy and let us create a memorable dining experience for you.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-white rounded-2xl shadow-lg border border-sand/30 p-8 text-center animate-scale-in">
              <div className="w-16 h-16 bg-camel/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-fade-in delay-100">
                <svg className="w-8 h-8 text-camel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-heading text-2xl font-bold text-darkbrown mb-4 animate-fade-in delay-200">
                Reservation Ready!
              </h2>
              <p className="text-brown/70 mb-8 animate-fade-in delay-300">
                Please confirm your reservation by contacting us via WhatsApp or email. We&apos;ll get back to you shortly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-400">
                <a href={generateWhatsAppMessage()} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-3 w-full sm:w-auto transition-transform duration-150 ease-out hover:scale-[1.02] active:scale-[0.98]">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Confirm via WhatsApp
                  </Button>
                </a>
                <a href={generateEmailLink()}>
                  <Button size="lg" variant="outline" className="border-camel text-camel hover:bg-camel/10 px-8 py-3 w-full sm:w-auto transition-transform duration-150 ease-out hover:scale-[1.02] active:scale-[0.98]">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Confirm via Email
                  </Button>
                </a>
              </div>

              <button
                onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", place: "place1", date: "", time: "", guests: "2", notes: "" }); }}
                className="mt-6 text-camel hover:underline text-sm"
              >
                Make another reservation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-sand/30 p-8 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="animate-fade-in-left" style={{ animationDelay: "100ms" }}>
                  <label htmlFor="name" className="block text-sm font-medium text-darkbrown mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-sand/50 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-camel/50 focus:border-camel transition-colors duration-150 ease-out hover:border-camel/30"
                    placeholder="Your full name"
                  />
                </div>

                <div className="animate-fade-in-right" style={{ animationDelay: "150ms" }}>
                  <label htmlFor="email" className="block text-sm font-medium text-darkbrown mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-sand/50 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-camel/50 focus:border-camel transition-colors duration-150 ease-out hover:border-camel/30"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="animate-fade-in-left" style={{ animationDelay: "200ms" }}>
                  <label htmlFor="phone" className="block text-sm font-medium text-darkbrown mb-2">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-sand/50 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-camel/50 focus:border-camel transition-colors duration-150 ease-out hover:border-camel/30"
                    placeholder="+62 xxx-xxxx-xxxx"
                  />
                </div>

                <div className="animate-fade-in-right" style={{ animationDelay: "250ms" }}>
                  <label htmlFor="place" className="block text-sm font-medium text-darkbrown mb-2">Location *</label>
                  <select
                    id="place"
                    name="place"
                    value={formData.place}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-sand/50 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-camel/50 focus:border-camel transition-colors duration-150 ease-out hover:border-camel/30"
                  >
                    {places.map((place) => (
                      <option key={place.id} value={place.id}>
                        {place.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="animate-fade-in-left" style={{ animationDelay: "300ms" }}>
                  <label htmlFor="date" className="block text-sm font-medium text-darkbrown mb-2">Date *</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-sand/50 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-camel/50 focus:border-camel transition-colors duration-150 ease-out hover:border-camel/30"
                  />
                </div>

                <div className="animate-fade-in-right" style={{ animationDelay: "350ms" }}>
                  <label htmlFor="time" className="block text-sm font-medium text-darkbrown mb-2">Time *</label>
                  <select
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-sand/50 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-camel/50 focus:border-camel transition-colors duration-150 ease-out hover:border-camel/30"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>

                <div className="animate-fade-in-left" style={{ animationDelay: "400ms" }}>
                  <label htmlFor="guests" className="block text-sm font-medium text-darkbrown mb-2">Number of Guests *</label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-sand/50 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-camel/50 focus:border-camel transition-colors duration-150 ease-out hover:border-camel/30"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2 animate-fade-in" style={{ animationDelay: "450ms" }}>
                  <label htmlFor="notes" className="block text-sm font-medium text-darkbrown mb-2">Special Requests</label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-sand/50 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-camel/50 focus:border-camel transition-colors duration-150 ease-out hover:border-camel/30 resize-none"
                    placeholder="Dietary restrictions, celebrations, seating preference..."
                  />
                </div>
              </div>

              <div className="mt-8 text-center animate-fade-in delay-500">
                <Button type="submit" size="lg" className="bg-camel hover:bg-brown text-white px-10 py-3 text-base transition-transform duration-150 ease-out hover:scale-[1.02] active:scale-[0.98]">
                  Submit Reservation
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
