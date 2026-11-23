"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale-in";
  delay?: number;
  threshold?: number;
}

export function ScrollReveal({
  children,
  className,
}: ScrollRevealProps) {
  return <div className={cn(className)}>{children}</div>;
}
