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

  const activePage = pages[currentPage];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-8 sm:py-12">
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
          Yessy {locationName}
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base">
          Use the buttons or left/right arrow keys to browse pages.
        </p>
      </div>

      <div
        role="region"
        aria-label={`${locationName} menu booklet`}
        className="w-full max-w-[420px] min-h-[520px] rounded-xl shadow-[0_12px_40px_rgba(59,42,34,0.18)] border border-border overflow-hidden flex flex-col"
      >
        {activePage.type === "cover" ? (
          <div className="flex-1 min-h-[520px] flex items-center justify-center bg-gradient-to-br from-[#3b2a22] via-[#7a553a] to-[#3b2a22] p-6">
            <div className="text-center text-[#f3e9d7] flex flex-col items-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-4">
                <Image
                  src="/logo trnz.png"
                  alt="Yessy Restaurant Logo"
                  fill
                  className="object-contain"
                  unoptimized={true}
                  priority
                />
              </div>
              <p className="text-base text-[#f3e9d7] tracking-widest uppercase font-semibold">
                {coverSubtitle}
              </p>
              <div className="w-12 h-[2px] bg-[#d6bfa6] mx-auto my-5" />
              <p className="text-sm text-[#d6bfa6] tracking-widest uppercase">
                Est. 2005
              </p>
            </div>
          </div>
        ) : activePage.type === "backcover" ? (
          <div className="flex-1 min-h-[520px] flex items-center justify-center bg-gradient-to-br from-[#3b2a22] via-[#7a553a] to-[#3b2a22] p-6">
            <div className="text-center text-[#f3e9d7]">
              <h2 className="font-heading text-3xl font-bold tracking-wider mb-2">
                Thank You
              </h2>
              <p className="text-sm text-[#f3e9d7] tracking-widest uppercase">
                For dining with us
              </p>
              <div className="w-12 h-[2px] bg-[#d6bfa6] mx-auto my-6" />
              <p className="text-sm text-[#d6bfa6] tracking-widest uppercase">
                {backCoverLocation}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex-1 min-h-[520px] bg-gradient-to-br from-[#fdf8f0] to-[#f5ebe0]">
            <MenuPage
              category={activePage.category!}
              items={activePage.items!}
              pageNumber={activePage.pageNumber!}
            />
          </div>
        )}
      </div>

      <div className="flex items-center gap-4 mt-6 sm:mt-8">
        <button
          type="button"
          onClick={goToPrev}
          disabled={currentPage <= 0}
          className="flex items-center justify-center min-w-[44px] min-h-[44px] rounded-full bg-surface-dark text-surface-dark-foreground disabled:opacity-40 hover:bg-brown hover:text-white transition-colors duration-150"
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
          className="flex items-center justify-center min-w-[44px] min-h-[44px] rounded-full bg-surface-dark text-surface-dark-foreground disabled:opacity-40 hover:bg-brown hover:text-white transition-colors duration-150"
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
