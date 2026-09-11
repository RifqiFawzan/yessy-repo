"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const menuItems = [
  { name: "King Prawn", image: "/King Prawn.jpg", price: "IDR 185k" },
  { name: "Grill Squid", image: "/Grill Squid.jpg", price: "IDR 125k" },
  { name: "Mix Seafood", image: "/MIXseafood.jpg", price: "IDR 245k" },
  { name: "Grill Fish", image: "/Grill fish.jpg", price: "IDR 155k" },
];

export function MenuCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % menuItems.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + menuItems.length) % menuItems.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next, paused]);

  return (
    <div
      className="relative w-full max-w-4xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-2xl">
        <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${current * 100}%)` }}>
          {menuItems.map((item) => (
            <div key={item.name} className="w-full flex-shrink-0">
              <div className="relative aspect-[4/3] sm:aspect-[16/9]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 80vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkbrown/70 via-darkbrown/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-1 drop-shadow-lg">{item.name}</h3>
                  <span className="text-camel font-bold text-lg sm:text-xl drop-shadow-lg">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-white/40 active:scale-90 transition-all duration-300"
        aria-label="Previous"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-white/40 active:scale-90 transition-all duration-300"
        aria-label="Next"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {menuItems.map((item, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-camel w-8" : "bg-sand/50 w-2 hover:bg-sand"
            }`}
            aria-label={`Go to ${item.name}`}
          />
        ))}
      </div>
    </div>
  );
}
