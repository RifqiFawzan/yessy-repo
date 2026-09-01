"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/place1", label: "Place 1" },
  { href: "/place2", label: "Place 2" },
  { href: "/reservation", label: "Reservation" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMobileOpen(false);
      setIsClosing(false);
    }, 200);
  };

  useEffect(() => {
    if (!mobileOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-darkbrown/95 backdrop-blur-md border-b border-brown/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading text-2xl font-bold text-cream tracking-[0.05em]">
              Yessy
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ease-out",
                  "hover:bg-brown/50 hover:text-white active:bg-brown/70 active:scale-[0.98]",
                  "max-md:hover:scale-100",
                  pathname === link.href
                    ? "bg-camel text-white"
                    : "text-sand"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-sand p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg transition-colors duration-150 hover:bg-brown/50 active:bg-brown/70 active:scale-[0.95]"
            onClick={() => mobileOpen ? handleClose() : setMobileOpen(true)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {(mobileOpen || isClosing) && (
        <div
          ref={menuRef}
          className={cn(
            "md:hidden border-t border-brown/30 bg-darkbrown",
            isClosing ? "animate-slide-up" : "animate-slide-down"
          )}
        >
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleClose}
                className={cn(
                  "block px-4 py-3 min-h-[44px] rounded-lg text-sm font-medium transition-colors duration-150",
                  "hover:bg-brown/50 hover:text-white active:bg-brown/70",
                  pathname === link.href
                    ? "bg-camel text-white"
                    : "text-sand"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
