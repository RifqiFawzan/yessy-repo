"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect, useCallback } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

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
  const toggleBtnRef = useRef<HTMLButtonElement>(null);

  const handleClose = useCallback((restoreFocus = false) => {
    setIsClosing(true);
    setTimeout(() => {
      setMobileOpen(false);
      setIsClosing(false);
      if (restoreFocus) {
        toggleBtnRef.current?.focus();
      }
    }, 180);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(e.target as Node)
      ) {
        handleClose(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose(true);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen, handleClose]);

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
    <header className="sticky top-0 z-50 py-2.5 bg-background/95 backdrop-blur-sm border-b border-border shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full gap-2">
          <div className="w-auto lg:w-1/3 flex justify-start">
            <Link href="/" className="flex items-center gap-2 min-h-[44px]" aria-label="Yessy Home">
              <Image
                src="/logo trnz.png"
                alt="Yessy Restaurant Logo"
                width={130}
                height={52}
                className="object-contain w-auto h-10 sm:h-11 md:h-12 [filter:brightness(0.24)_sepia(0.35)_contrast(1.25)] dark:[filter:none] hover:opacity-85 transition-opacity"
                priority
              />
            </Link>
          </div>

          <nav aria-label="Primary navigation" className="hidden md:flex items-center bg-secondary border border-border rounded-full p-1">
            <div className="flex items-center gap-1 px-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={cn(
                    "px-3.5 lg:px-4 py-2 min-h-[44px] inline-flex items-center rounded-full text-sm font-semibold transition-colors duration-150 whitespace-nowrap",
                    pathname === link.href
                      ? "bg-primary text-primary-foreground shadow-xs"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="w-auto lg:w-1/3 flex justify-end items-center gap-1 sm:gap-2">
            <div className="flex items-center gap-1">
              <a
                href="mailto:contact@yessy.com"
                className="text-muted-foreground hover:text-foreground min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full transition-colors hover:bg-secondary"
                aria-label="Email Yessy"
              >
                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full transition-colors hover:bg-secondary"
                aria-label="Chat on WhatsApp"
              >
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" fillRule="evenodd" d="M17.415 14.382c-.298-.149-1.759-.867-2.031-.967s-.47-.148-.669.15c-.198.297-.767.966-.94 1.164c-.174.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.019-.458.13-.606c.134-.133.297-.347.446-.52s.198-.298.297-.497c.1-.198.05-.371-.025-.52c-.074-.149-.668-1.612-.916-2.207c-.241-.579-.486-.5-.668-.51c-.174-.008-.372-.01-.57-.01s-.52.074-.792.372c-.273.297-1.04 1.016-1.04 2.479c0 1.462 1.064 2.875 1.213 3.074s2.095 3.2 5.076 4.487c.71.306 1.263.489 1.694.625c.712.227 1.36.195 1.872.118c.57-.085 1.758-.719 2.006-1.413s.247-1.289.173-1.413s-.272-.198-.57-.347m-5.422 7.403h-.004a9.87 9.87 0 0 1-5.032-1.378l-.36-.214l-3.742.982l.999-3.648l-.235-.374a9.86 9.86 0 0 1-1.511-5.26c.002-5.45 4.436-9.884 9.889-9.884a9.8 9.8 0 0 1 6.988 2.899a9.82 9.82 0 0 1 2.892 6.992c-.002 5.45-4.436 9.885-9.884 9.885m8.412-18.297A11.82 11.82 0 0 0 11.992 0C5.438 0 .102 5.335.1 11.892a11.86 11.86 0 0 0 1.587 5.945L0 24l6.304-1.654a11.9 11.9 0 0 0 5.684 1.448h.005c6.554 0 11.89-5.335 11.892-11.893a11.82 11.82 0 0 0-3.48-8.413" clipRule="evenodd" />
                </svg>
              </a>
              <ThemeToggle />
            </div>

            <Link
              href="/reservation"
              className="hidden sm:inline-flex items-center justify-center min-h-[44px] bg-primary hover:bg-accent hover:text-accent-foreground text-primary-foreground font-semibold px-5 lg:px-6 py-2 rounded-full transition-colors duration-150 shadow-xs text-sm lg:text-base whitespace-nowrap"
            >
              Book a Table
            </Link>

            <button
              ref={toggleBtnRef}
              type="button"
              className="md:hidden bg-secondary text-foreground min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full transition-colors duration-150 hover:bg-muted border border-border"
              onClick={() => (mobileOpen ? handleClose(false) : setMobileOpen(true))}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-menu"
            >
              <svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <nav
            id="mobile-nav-menu"
            aria-label="Mobile navigation"
            ref={menuRef}
            className={cn(
              "md:hidden rounded-2xl border border-border bg-card shadow-lg overflow-hidden origin-top",
              isClosing ? "animate-slide-up" : "animate-slide-down"
            )}
          >
            <div className="p-2 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  onClick={() => handleClose(false)}
                  className={cn(
                    "flex items-center min-h-[44px] px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-150",
                    pathname === link.href
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 pb-1 px-1">
                <Link
                  href="/reservation"
                  onClick={() => handleClose(false)}
                  className="flex items-center justify-center w-full min-h-[44px] bg-primary hover:bg-accent hover:text-accent-foreground text-primary-foreground font-semibold py-2.5 rounded-xl transition-colors shadow-xs"
                >
                  Book a Table
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
