"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const images = [
  { src: "/AMBIENT%20AND%20SPACE%20(33%20of%2084).jpg", alt: "Tanjung bias Beach Area" },
  { src: "/AMBIENT%20AND%20SPACE%20(28%20of%2084).jpg", alt: "Tanjung Bias dining atmosphere" },
  { src: "/AMBIENT%20AND%20SPACE%20(38%20of%2084).jpg", alt: "Tanjung Bias bar area" },
  { src: "/AMBIENT%20AND%20SPACE%20(67%20of%2084).jpg", alt: "Tanjung Bias table2 setting" },
  { src: "/AMBIENT%20AND%20SPACE%20(3%20of%2084).jpg", alt: "Tanjung Bias ambient seating" },
  { src: "/AMBIENT%20AND%20SPACE%20(11%20of%2084).jpg", alt: "Tanjung Bias interior detail" },
  { src: "/AMBIENT%20AND%20SPACE%20(47%20of%2084).jpg", alt: "Tanjung Bias evening ambiance" },
  { src: "/AMBIENT%20AND%20SPACE%20(80%20of%2084).jpg", alt: "Tanjung Bias outdoor view" },
  { src: "/AMBIENT%20AND%20SPACE%20(61%20of%2084).jpg", alt: "Tanjung Bias lounge corner" },
  { src: "/AMBIENT%20AND%20SPACE%20(73%20of%2084).jpg", alt: "Tanjung Bias table setting" },
  
  
];

export function AmbientCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [next, paused]);

  return (
    <div
      className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0 transition-opacity duration-700 ease-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 80vw"
            priority={i === current}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-darkbrown/50 via-transparent to-darkbrown/20" />

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/40 active:scale-90"
        aria-label="Previous photo"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/40 active:scale-90"
        aria-label="Next photo"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-white w-6" : "bg-white/40 w-1.5 hover:bg-white/60"
            }`}
            aria-label={`Go to photo ${i + 1}`}
          />
        ))}
      </div>

      {/* Caption */}
      <div className="absolute bottom-3 sm:bottom-5 right-3 sm:right-5 text-white/70 text-xs sm:text-sm font-medium">
        {current + 1} / {images.length}
      </div>
    </div>
  );
}
