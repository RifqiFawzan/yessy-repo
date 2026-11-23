"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import Image from "next/image";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION_QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export interface CarouselImage {
  src: string;
  alt: string;
}

const defaultImages: CarouselImage[] = [
  { src: "/AMBIENT%20AND%20SPACE%20(33%20of%2084).jpg", alt: "Tanjung Bias beachfront seating area" },
  { src: "/AMBIENT%20AND%20SPACE%20(28%20of%2084).jpg", alt: "Tanjung Bias outdoor dining tables" },
  { src: "/AMBIENT%20AND%20SPACE%20(38%20of%2084).jpg", alt: "Tanjung Bias bar counter" },
  { src: "/AMBIENT%20AND%20SPACE%20(67%20of%2084).jpg", alt: "Tanjung Bias table setting" },
  { src: "/AMBIENT%20AND%20SPACE%20(3%20of%2084).jpg", alt: "Tanjung Bias shaded dining pavilion" },
  { src: "/AMBIENT%20AND%20SPACE%20(11%20of%2084).jpg", alt: "Tanjung Bias interior detail" },
  { src: "/AMBIENT%20AND%20SPACE%20(47%20of%2084).jpg", alt: "Tanjung Bias evening lighting" },
  { src: "/AMBIENT%20AND%20SPACE%20(80%20of%2084).jpg", alt: "Tanjung Bias garden view" },
  { src: "/AMBIENT%20AND%20SPACE%20(61%20of%2084).jpg", alt: "Tanjung Bias lounge corner" },
  { src: "/AMBIENT%20AND%20SPACE%20(73%20of%2084).jpg", alt: "Tanjung Bias dinner table" },
];

interface AmbientCarouselProps {
  images?: CarouselImage[];
  label?: string;
}

export function AmbientCarousel({
  images = defaultImages,
  label = "Restaurant ambiance gallery",
}: AmbientCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hoverPaused, setHoverPaused] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const isAutoPaused = userPaused || hoverPaused || reducedMotion;

  useEffect(() => {
    if (isAutoPaused) return;
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next, isAutoPaused]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setHoverPaused(true)}
      onMouseLeave={() => setHoverPaused(false)}
      className="space-y-3"
    >
      <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-border bg-surface-dark">
        {images.map((img, i) => (
          <div
            key={img.src}
            aria-hidden={i !== current}
            className="absolute inset-0 transition-opacity duration-500 ease-out"
            style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 80vw"
              priority={i === 0}
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20 pointer-events-none" />

        <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
          <button
            type="button"
            onClick={() => setUserPaused((p) => !p)}
            aria-pressed={userPaused}
            aria-label={userPaused ? "Resume slideshow" : "Pause slideshow"}
            className="min-w-[44px] min-h-[44px] px-3 rounded-full bg-black/70 text-white text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-black/85 transition-colors"
          >
            {userPaused ? (
              <>
                <svg aria-hidden="true" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>Play</span>
              </>
            ) : (
              <>
                <svg aria-hidden="true" className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
                </svg>
                <span>Pause</span>
              </>
            )}
          </button>
        </div>

        <button
          type="button"
          onClick={prev}
          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black/85 active:scale-95 transition-colors z-10"
          aria-label="Previous photo"
        >
          <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          type="button"
          onClick={next}
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black/85 active:scale-95 transition-colors z-10"
          aria-label="Next photo"
        >
          <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs sm:text-sm font-medium pointer-events-none">
          <span className="truncate pr-4 drop-shadow">{images[current]?.alt}</span>
          <span className="shrink-0 tabular-nums bg-black/60 px-2.5 py-1 rounded-full">
            {current + 1} / {images.length}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-1">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Show photo ${i + 1}: ${img.alt}`}
            aria-current={i === current ? "true" : undefined}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-muted transition-colors"
          >
            <span
              aria-hidden="true"
              className={`block h-2 rounded-full transition-all duration-200 ${
                i === current ? "bg-primary w-6" : "bg-border w-2"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
