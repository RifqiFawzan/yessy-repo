"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface CarouselImage {
  src: string;
  alt: string;
}

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

const defaultImages: CarouselImage[] = [
  { src: "/AMBIENT%20AND%20SPACE%20(33%20of%2084).jpg", alt: "Tanjung Bias beachfront seating area" },
  { src: "/AMBIENT%20AND%20SPACE%20(28%20of%2084).jpg", alt: "Tanjung Bias dining atmosphere" },
  { src: "/AMBIENT%20AND%20SPACE%20(38%20of%2084).jpg", alt: "Tanjung Bias bar area" },
  { src: "/AMBIENT%20AND%20SPACE%20(67%20of%2084).jpg", alt: "Tanjung Bias dining table setting" },
  { src: "/AMBIENT%20AND%20SPACE%20(3%20of%2084).jpg", alt: "Tanjung Bias shaded pavilion seating" },
  { src: "/AMBIENT%20AND%20SPACE%20(11%20of%2084).jpg", alt: "Tanjung Bias interior detail" },
  { src: "/AMBIENT%20AND%20SPACE%20(47%20of%2084).jpg", alt: "Tanjung Bias evening ambiance" },
  { src: "/AMBIENT%20AND%20SPACE%20(80%20of%2084).jpg", alt: "Tanjung Bias outdoor garden view" },
  { src: "/AMBIENT%20AND%20SPACE%20(61%20of%2084).jpg", alt: "Tanjung Bias lounge corner" },
  { src: "/AMBIENT%20AND%20SPACE%20(73%20of%2084).jpg", alt: "Tanjung Bias table setting" },
];

interface AmbientCarouselProps {
  images?: CarouselImage[];
  label?: string;
}

export function AmbientCarousel({
  images = defaultImages,
  label = "Restaurant ambiance photo gallery",
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
      className="bg-[#fbf6ec] rounded-3xl p-2.5 sm:p-4 border border-sand shadow-sm"
    >
      <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-darkbrown">
        {images.map((img, i) => (
          <div
            key={img.src}
            aria-hidden={i !== current}
            className="absolute inset-0 transition-opacity duration-500 ease-out"
            style={{
              opacity: i === current ? 1 : 0,
              pointerEvents: i === current ? "auto" : "none",
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 85vw"
              priority={i === 0}
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-darkbrown/55 via-transparent to-darkbrown/20 pointer-events-none" />

        <button
          type="button"
          onClick={prev}
          className="cursor-pointer absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] rounded-full bg-darkbrown/80 text-cream flex items-center justify-center hover:bg-darkbrown active:scale-95 transition-colors z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
          aria-label="Previous photo"
        >
          <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          type="button"
          onClick={next}
          className="cursor-pointer absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] rounded-full bg-darkbrown/80 text-cream flex items-center justify-center hover:bg-darkbrown active:scale-95 transition-colors z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
          aria-label="Next photo"
        >
          <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => setUserPaused((p) => !p)}
          aria-pressed={userPaused}
          aria-label={userPaused ? "Resume slideshow" : "Pause slideshow"}
          className="cursor-pointer absolute top-3 right-3 min-w-[44px] min-h-[44px] px-3.5 rounded-full bg-darkbrown/80 text-cream text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-darkbrown transition-colors z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
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

      <div className="mt-3 px-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center justify-between sm:justify-start gap-3">
          <p className="text-darkbrown text-sm font-medium truncate">
            {images[current]?.alt}
          </p>
          <span
            aria-live="polite"
            className="text-brown text-xs font-bold tabular-nums shrink-0 bg-sand/45 px-2.5 py-1 rounded-full"
          >
            {current + 1} / {images.length}
          </span>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {images.map((img, i) => {
            const active = i === current;
            return (
              <button
                key={img.src}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`View photo ${i + 1}: ${img.alt}`}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "cursor-pointer relative shrink-0 w-14 h-11 rounded-lg overflow-hidden border-2 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown",
                  active
                    ? "border-brown opacity-100 scale-[1.03]"
                    : "border-transparent opacity-65 hover:opacity-100"
                )}
              >
                <Image
                  src={img.src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
