"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export interface MenuSection {
  category: string;
  items: MenuItem[];
}

interface MenuFlipbookProps {
  menuData: MenuSection[];
  locationName: string;
  coverSubtitle: string;
  backCoverLocation: string;
  backHref?: string;
  backLabel?: string;
}

function MenuPage({
  category,
  items,
  pageNumber,
}: {
  category: string;
  items: MenuItem[];
  pageNumber: number;
}) {
  return (
    <div className="flipbook-page-inner">
      <div className="page-header">
        <span className="page-number">Page {pageNumber}</span>
        <h2 className="page-category">{category}</h2>
      </div>
      <div className="page-items">
        {items.map((item) => (
          <div key={item.name} className="page-menu-item">
            <div className="page-item-info">
              <div className="page-item-header">
                <h3 className="page-item-name">{item.name}</h3>
                <div className="page-item-dots" aria-hidden="true" />
                <span className="page-item-price">{item.price}</span>
              </div>
              <p className="page-item-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MenuFlipbook({
  menuData,
  locationName,
  coverSubtitle,
  backCoverLocation,
  backHref = "/",
  backLabel = "Back to Home",
}: MenuFlipbookProps) {
  const pages = useMemo(() => {
    const result: {
      type: "cover" | "menu" | "backcover";
      category?: string;
      items?: MenuItem[];
      pageNumber?: number;
    }[] = [{ type: "cover" }];
    let pageNum = 2;
    for (const section of menuData) {
      for (let i = 0; i < section.items.length; i += 6) {
        result.push({
          type: "menu",
          category: section.category,
          items: section.items.slice(i, i + 6),
          pageNumber: pageNum++,
        });
      }
    }
    result.push({ type: "backcover" });
    return result;
  }, [menuData]);

  const totalPages = pages.length;
  const [currentPage, setCurrentPage] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  }, [totalPages]);

  const goToPrev = useCallback(() => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "ArrowLeft") {
        goToPrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrev]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-8 sm:py-12">
      <div className="text-center mb-6 sm:mb-8 animate-hero-reveal">
        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
          Yessy {locationName}
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          Use the buttons or left/right arrow keys to flip pages.
        </p>
      </div>

      <div
        role="region"
        aria-label={`${locationName} menu booklet`}
        className="w-full max-w-[420px] grid"
        style={{ perspective: "1000px" }}
      >
        {pages.map((page, index) => {
          const isCurrent = index === currentPage;
          const isBefore = index < currentPage;

          return (
            <div
              key={index}
              aria-hidden={!isCurrent}
              className="[grid-area:1/1] w-full min-h-[520px] rounded-2xl shadow-[0_14px_38px_rgba(110,76,54,0.16)] border border-border overflow-hidden flex flex-col transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
              style={{
                opacity: isCurrent ? 1 : 0,
                transform: isCurrent
                  ? "translateX(0) rotateY(0deg) rotateZ(0deg) scale(1)"
                  : isBefore
                    ? "translateX(-45%) rotateY(-10deg) rotateZ(-3deg) scale(0.92)"
                    : "translateX(45%) rotateY(10deg) rotateZ(3deg) scale(0.92)",
                zIndex: isCurrent ? 10 : 0,
                pointerEvents: isCurrent ? "auto" : "none",
              }}
            >
              {page.type === "cover" ? (
                <div className="flex-1 min-h-[520px] flex items-center justify-center bg-gradient-to-br from-[#efe4d2] via-[#e7d7bf] to-[#efe4d2] p-6">
                  <div className="text-center text-foreground flex flex-col items-center">
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-4">
                      <Image
                        src="/logo trnz.png"
                        alt="Yessy Restaurant Logo"
                        fill
                        className="object-contain [filter:brightness(0.24)_sepia(0.35)_contrast(1.25)]"
                        unoptimized={true}
                        priority
                      />
                    </div>
                    <p className="text-base text-foreground tracking-widest uppercase font-semibold">
                      {coverSubtitle}
                    </p>
                    <div className="w-12 h-[2px] bg-primary mx-auto my-5" />
                    <p className="text-sm text-muted-foreground font-semibold tracking-widest uppercase">
                      Est. 2005
                    </p>
                  </div>
                </div>
              ) : page.type === "backcover" ? (
                <div className="flex-1 min-h-[520px] flex items-center justify-center bg-gradient-to-br from-[#efe4d2] via-[#e7d7bf] to-[#efe4d2] p-6">
                  <div className="text-center text-foreground">
                    <h2 className="font-heading text-3xl font-bold tracking-wider mb-2">
                      Thank You
                    </h2>
                    <p className="text-sm text-muted-foreground tracking-widest uppercase font-semibold">
                      For dining with us
                    </p>
                    <div className="w-12 h-[2px] bg-primary mx-auto my-6" />
                    <p className="text-sm text-foreground font-semibold tracking-widest uppercase">
                      {backCoverLocation}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex-1 min-h-[520px] bg-gradient-to-br from-[#fffdf9] to-[#faf5ec]">
                  <MenuPage
                    category={page.category!}
                    items={page.items!}
                    pageNumber={page.pageNumber!}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-4 mt-6 sm:mt-8">
        <button
          type="button"
          onClick={goToPrev}
          disabled={currentPage <= 0}
          className="press flex items-center justify-center min-w-[44px] min-h-[44px] rounded-full bg-primary text-primary-foreground disabled:opacity-40 hover:bg-terracotta-dark transition-colors duration-150"
          aria-label="Previous page"
        >
          <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <span className="text-foreground font-semibold text-sm sm:text-base min-w-[80px] text-center tabular-nums" aria-live="polite">
          {currentPage + 1} / {totalPages}
        </span>

        <button
          type="button"
          onClick={goToNext}
          disabled={currentPage >= totalPages - 1}
          className="press flex items-center justify-center min-w-[44px] min-h-[44px] rounded-full bg-primary text-primary-foreground disabled:opacity-40 hover:bg-terracotta-dark transition-colors duration-150"
          aria-label="Next page"
        >
          <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <Link
        href={backHref}
        className="mt-4 sm:mt-6 min-h-[44px] inline-flex items-center px-4 text-muted-foreground hover:text-foreground text-sm font-medium underline underline-offset-4 transition-colors duration-150"
      >
        {backLabel}
      </Link>
    </div>
  );
}
