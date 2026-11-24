"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
  backHref: string;
  backLabel: string;
  otherMenuHref: string;
  otherMenuLabel: string;
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
  backHref,
  backLabel,
  otherMenuHref,
  otherMenuLabel,
}: MenuFlipbookProps) {
  const { pages, categoryStartPages } = useMemo(() => {
    const result: {
      type: "cover" | "menu" | "backcover";
      category?: string;
      items?: MenuItem[];
      pageNumber?: number;
    }[] = [{ type: "cover" }];
    const starts: { category: string; pageIndex: number }[] = [];

    let pageNum = 2;
    for (const section of menuData) {
      starts.push({ category: section.category, pageIndex: result.length });
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
    return { pages: result, categoryStartPages: starts };
  }, [menuData]);

  const totalPages = pages.length;
  const [currentPage, setCurrentPage] = useState(0);
  const [viewMode, setViewMode] = useState<"booklet" | "list">("booklet");

  const goToNext = useCallback(() => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  }, [totalPages]);

  const goToPrev = useCallback(() => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    if (viewMode !== "booklet") return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "ArrowLeft") {
        goToPrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [viewMode, goToNext, goToPrev]);

  const activeCategory = pages[currentPage]?.category;

  return (
    <div className="min-h-screen sand-grain-surface flex flex-col items-center px-4 py-10 sm:py-14 overflow-x-clip">
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-brown font-bold tracking-widest uppercase text-xs sm:text-sm mb-2">
            {coverSubtitle}
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-darkbrown mb-3">
            Yessy {locationName} Menu
          </h1>
          <p className="text-brown text-sm sm:text-base max-w-xl mx-auto">
            Flip page by page using the controls or arrow keys, or switch to the full menu list.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
          <div role="tablist" aria-label="Menu view mode" className="inline-flex bg-[#fbf6ec] border border-sand rounded-full p-1 shadow-xs">
            <button
              type="button"
              role="tab"
              aria-selected={viewMode === "booklet"}
              onClick={() => setViewMode("booklet")}
              className={cn(
                "cursor-pointer min-h-[44px] px-4 sm:px-5 rounded-full text-sm font-semibold transition-colors",
                viewMode === "booklet"
                  ? "bg-darkbrown text-cream"
                  : "text-darkbrown hover:bg-sand/40"
              )}
            >
              Booklet View
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={viewMode === "list"}
              onClick={() => setViewMode("list")}
              className={cn(
                "cursor-pointer min-h-[44px] px-4 sm:px-5 rounded-full text-sm font-semibold transition-colors",
                viewMode === "list"
                  ? "bg-darkbrown text-cream"
                  : "text-darkbrown hover:bg-sand/40"
              )}
            >
              Full Menu List
            </button>
          </div>

          <Link
            href={otherMenuHref}
            className="min-h-[44px] inline-flex items-center px-4 sm:px-5 rounded-full bg-[#fbf6ec] hover:bg-sand/50 text-darkbrown border border-sand text-sm font-semibold transition-colors"
          >
            {otherMenuLabel}
          </Link>
        </div>

        {viewMode === "booklet" ? (
          <>
            <nav aria-label="Jump to menu category" className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-6 max-w-2xl">
              <button
                type="button"
                onClick={() => setCurrentPage(0)}
                aria-current={currentPage === 0 ? "true" : undefined}
                className={cn(
                  "cursor-pointer min-h-[44px] px-3.5 rounded-full text-xs sm:text-sm font-semibold border transition-colors",
                  currentPage === 0
                    ? "bg-brown text-white border-brown"
                    : "bg-[#fbf6ec] text-darkbrown border-sand hover:bg-sand/50"
                )}
              >
                Cover
              </button>
              {categoryStartPages.map((item) => {
                const isActive = activeCategory === item.category;
                return (
                  <button
                    key={item.category}
                    type="button"
                    onClick={() => setCurrentPage(item.pageIndex)}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "cursor-pointer min-h-[44px] px-3.5 rounded-full text-xs sm:text-sm font-semibold border transition-colors",
                      isActive
                        ? "bg-brown text-white border-brown"
                        : "bg-[#fbf6ec] text-darkbrown border-sand hover:bg-sand/50"
                    )}
                  >
                    {item.category}
                  </button>
                );
              })}
            </nav>

            <div
              role="region"
              aria-label={`${locationName} menu booklet`}
              className="w-full max-w-[420px] grid mx-auto"
              style={{ perspective: "1000px" }}
            >
              {pages.map((page, index) => {
                const isCurrent = index === currentPage;
                const isBefore = index < currentPage;

                return (
                  <div
                    key={index}
                    aria-hidden={!isCurrent}
                    className="[grid-area:1/1] w-full min-h-[540px] rounded-2xl shadow-[0_14px_40px_rgba(59,42,34,0.16)] border border-sand overflow-hidden flex flex-col transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
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
                      <div className="flex-1 min-h-[540px] flex items-center justify-center bg-gradient-to-br from-[#3b2a22] via-[#7a553a] to-[#3b2a22] p-6">
                        <div className="text-center text-cream flex flex-col items-center">
                          <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-4">
                            <Image
                              src="/logo trnz.png"
                              alt="Yessy Restaurant Logo"
                              fill
                              className="object-contain drop-shadow-xl"
                              unoptimized={true}
                              priority
                            />
                          </div>
                          <p className="text-base text-cream tracking-widest uppercase font-semibold">
                            {coverSubtitle}
                          </p>
                          <div className="w-12 h-[2px] bg-sand mx-auto my-5" />
                          <p className="text-sm text-sand tracking-widest uppercase font-semibold">
                            Est. 2005
                          </p>
                        </div>
                      </div>
                    ) : page.type === "backcover" ? (
                      <div className="flex-1 min-h-[540px] flex items-center justify-center bg-gradient-to-br from-[#3b2a22] via-[#7a553a] to-[#3b2a22] p-6">
                        <div className="text-center text-cream">
                          <h2 className="font-heading text-3xl font-bold tracking-wider mb-2">
                            Thank You
                          </h2>
                          <p className="text-sm text-cream tracking-widest uppercase">
                            For dining with us
                          </p>
                          <div className="w-12 h-[2px] bg-sand mx-auto my-6" />
                          <p className="text-sm text-sand tracking-widest uppercase font-semibold">
                            {backCoverLocation}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex-1 min-h-[540px] bg-gradient-to-br from-[#fdf8f0] to-[#f5ebe0]">
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
                className="cursor-pointer flex items-center justify-center min-w-[44px] min-h-[44px] rounded-full bg-darkbrown text-cream disabled:opacity-35 disabled:cursor-not-allowed hover:bg-brown transition-colors duration-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-darkbrown"
                aria-label="Previous page"
              >
                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <span
                aria-live="polite"
                className="text-darkbrown font-semibold text-sm sm:text-base min-w-[80px] text-center tabular-nums"
              >
                {currentPage + 1} / {totalPages}
              </span>

              <button
                type="button"
                onClick={goToNext}
                disabled={currentPage >= totalPages - 1}
                className="cursor-pointer flex items-center justify-center min-w-[44px] min-h-[44px] rounded-full bg-darkbrown text-cream disabled:opacity-35 disabled:cursor-not-allowed hover:bg-brown transition-colors duration-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-darkbrown"
                aria-label="Next page"
              >
                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </>
        ) : (
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuData.map((section) => (
              <section
                key={section.category}
                className="bg-[#fbf6ec] rounded-2xl border border-sand p-6 shadow-sm"
              >
                <h2 className="font-heading text-xl font-bold text-darkbrown pb-3 mb-4 border-b border-sand">
                  {section.category}
                </h2>
                <ul className="space-y-4">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <div className="flex items-baseline justify-between gap-3 mb-0.5">
                        <h3 className="font-heading font-bold text-darkbrown text-sm sm:text-base">
                          {item.name}
                        </h3>
                        <span className="text-brown font-bold text-sm shrink-0">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-brown text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8">
          <Link
            href="/reservation"
            className="min-h-[44px] inline-flex items-center px-6 py-2.5 rounded-full bg-darkbrown hover:bg-brown text-cream text-sm font-semibold transition-colors"
          >
            Reserve a Table
          </Link>
          <Link
            href={backHref}
            className="min-h-[44px] inline-flex items-center px-4 text-brown hover:text-darkbrown text-sm font-semibold underline underline-offset-4 transition-colors"
          >
            {backLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
