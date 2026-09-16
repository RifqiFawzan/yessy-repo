"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/senggigi", label: "Senggigi" },
  { href: "/tanjung-bias", label: "Tanjung Bias" },
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
    <header className="sticky top-0 z-50 py-3 bg-darkbrown border-b border-brown/30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          {/* Logo (Left) */}
          <div className="w-auto lg:w-1/3 flex justify-start">
            <Link href="/" className="flex items-center gap-2 drop-shadow-sm">
              <Image
                src="/logo trnz.png"
                alt="Yessy Logo"
                width={130}
                height={52}
                className="object-contain w-auto h-10 sm:h-11 md:h-14 opacity-95 hover:opacity-100 transition-opacity drop-shadow-sm"
                priority
              />
            </Link>
          </div>

          {/* Centered Pill (Middle) */}
          <nav className="hidden md:flex items-center bg-white/5 border border-brown/30 rounded-full p-1.5">
            <div className="flex items-center gap-1 px-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 lg:px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ease-out whitespace-nowrap",
                    "hover:bg-brown/60 hover:text-white active:bg-brown/80 active:scale-[0.98]",
                    pathname === link.href
                      ? "bg-camel text-white shadow-sm"
                      : "text-sand"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Book a Table, Contacts & Mobile Menu (Right) */}
          <div className="w-auto lg:w-1/3 flex justify-end items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1 sm:gap-2 mr-1 sm:mr-0">
              <a 
                href="mailto:contact@yessy.com" 
                className="text-sand hover:text-white p-2 rounded-full transition-colors hover:bg-brown/50"
                aria-label="Email Us"
              >
                <svg className="w-5 h-5 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sand hover:text-white p-2 rounded-full transition-colors hover:bg-brown/50"
                aria-label="WhatsApp Us"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <g fill="none">
                  <g clipPath="url(#SVGXv8lpc2Y)">
                    <path fill="#d6bfa6" fillRule="evenodd" d="M17.415 14.382c-.298-.149-1.759-.867-2.031-.967s-.47-.148-.669.15c-.198.297-.767.966-.94 1.164c-.174.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.019-.458.13-.606c.134-.133.297-.347.446-.52s.198-.298.297-.497c.1-.198.05-.371-.025-.52c-.074-.149-.668-1.612-.916-2.207c-.241-.579-.486-.5-.668-.51c-.174-.008-.372-.01-.57-.01s-.52.074-.792.372c-.273.297-1.04 1.016-1.04 2.479c0 1.462 1.064 2.875 1.213 3.074s2.095 3.2 5.076 4.487c.71.306 1.263.489 1.694.625c.712.227 1.36.195 1.872.118c.57-.085 1.758-.719 2.006-1.413s.247-1.289.173-1.413s-.272-.198-.57-.347m-5.422 7.403h-.004a9.87 9.87 0 0 1-5.032-1.378l-.36-.214l-3.742.982l.999-3.648l-.235-.374a9.86 9.86 0 0 1-1.511-5.26c.002-5.45 4.436-9.884 9.889-9.884a9.8 9.8 0 0 1 6.988 2.899a9.82 9.82 0 0 1 2.892 6.992c-.002 5.45-4.436 9.885-9.884 9.885m8.412-18.297A11.82 11.82 0 0 0 11.992 0C5.438 0 .102 5.335.1 11.892a11.86 11.86 0 0 0 1.587 5.945L0 24l6.304-1.654a11.9 11.9 0 0 0 5.684 1.448h.005c6.554 0 11.89-5.335 11.892-11.893a11.82 11.82 0 0 0-3.48-8.413" clipRule="evenodd" />
                  </g>
                  <defs>
                    <clipPath id="SVGXv8lpc2Y">
                      <path fill="#fff" d="M0 0h24v24H0z" />
                    </clipPath>
                  </defs>
                </g>
              </svg>
              </a>
            </div>

            <Link href="/reservation" className="hidden sm:block bg-cream hover:bg-white text-darkbrown font-semibold px-5 lg:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 shadow-md text-sm lg:text-base">
              Book a Table
            </Link>

            <button
              className="md:hidden bg-darkbrown/90 text-sand p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full transition-colors duration-150 hover:bg-brown/50 shadow-md border border-brown/30"
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
      </div>

      {(mobileOpen || isClosing) && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-3">
          <div
            ref={menuRef}
            className={cn(
              "md:hidden rounded-2xl border border-brown/30 bg-darkbrown/95 backdrop-blur-md shadow-xl overflow-hidden origin-top",
              isClosing ? "animate-slide-up" : "animate-slide-down"
            )}
          >
            <div className="p-2 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleClose}
                  className={cn(
                    "block px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-150",
                    "hover:bg-brown/50 hover:text-white active:bg-brown/70",
                    pathname === link.href
                      ? "bg-camel text-white"
                      : "text-sand"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 pb-1 px-2">
                <Link
                  href="/reservation"
                  onClick={handleClose}
                  className="block w-full text-center bg-cream hover:bg-white text-darkbrown font-semibold py-3 rounded-xl transition-all shadow-sm"
                >
                  Book a Table
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
