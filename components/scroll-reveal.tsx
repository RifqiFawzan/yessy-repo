"use client";

import { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale-in";
  delay?: number;
  threshold?: number;
}

const initialTransforms: Record<NonNullable<ScrollRevealProps["animation"]>, string> = {
  "fade-up": "translateY(22px)",
  "fade-down": "translateY(-22px)",
  "fade-left": "translateX(-22px)",
  "fade-right": "translateX(22px)",
  "scale-in": "scale(0.96)",
};

export function ScrollReveal({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  threshold = 0.12,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let hasAnimated = false;
    const play = () => {
      if (hasAnimated) return;
      hasAnimated = true;
      element.animate(
        [
          { opacity: 0, transform: initialTransforms[animation] },
          { opacity: 1, transform: "translate(0, 0) scale(1)" },
        ],
        {
          duration: 550,
          delay,
          easing: "cubic-bezier(0.23, 1, 0.32, 1)",
          fill: "both",
        }
      );
    };

    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      play();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            play();
            observer.disconnect();
            break;
          }
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [animation, delay, threshold]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
