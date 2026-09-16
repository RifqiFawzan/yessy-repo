"use client";

import { useState, useMemo } from "react";
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
  bgColor?: string;
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
        <span className="page-number">{pageNumber}</span>
        <h2 className="page-category">{category}</h2>
      </div>
      <div className="page-items">
        {items.map((item) => (
          <div key={item.name} className="page-menu-item">
            <div className="page-item-info">
              <div className="page-item-header">
                <h3 className="page-item-name">{item.name}</h3>
                <div className="page-item-dots" />
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

export function MenuFlipbook({ menuData, locationName, coverSubtitle, backCoverLocation, bgColor = "bg-background" }: MenuFlipbookProps) {
  const pages = useMemo(() => {
    const result: { type: "cover" | "menu" | "backcover"; category?: string; items?: MenuItem[]; pageNumber?: number }[] = [
      { type: "cover" },
    ];
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

  const goToNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className={`min-h-screen ${bgColor} flex flex-col items-center justify-center px-4 py-8 sm:py-12`}>
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-darkbrown mb-2">
          Yessy {locationName}
        </h1>
        <p className="text-brown/70 text-sm sm:text-base">
          Use the buttons below to navigate pages
        </p>
      </div>

      <div className="relative w-full max-w-[380px] h-[530px] mx-auto" style={{ perspective: "1000px" }}>
        <div className="relative w-full h-full">
          {pages.map((page, index) => {
            const isCurrent = index === currentPage;
            const isBefore = index < currentPage;
            
            return (
              <div 
                key={index} 
                className="absolute inset-0 w-full h-full rounded-md shadow-[0_12px_40px_rgba(59,42,34,0.15)] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                style={{
                  opacity: isCurrent ? 1 : 0,
                  transform: isCurrent 
                    ? "translateX(0) rotateY(0deg) rotateZ(0deg) scale(1)" 
                    : isBefore
                      ? "translateX(-60%) rotateY(-10deg) rotateZ(-5deg) scale(0.9)"
                      : "translateX(60%) rotateY(10deg) rotateZ(5deg) scale(0.9)",
                  zIndex: isCurrent ? 10 : 0,
                  pointerEvents: isCurrent ? "auto" : "none",
                }}
              >
                {page.type === "cover" ? (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#3b2a22] via-[#7a553a] to-[#3b2a22]">
                    <div className="text-center text-[#f3e9d7] flex flex-col items-center px-6">
                      <div className="relative w-56 h-56 mb-4">
                        <Image
                          src="/logo trnz.png"
                          alt="Yessy Logo"
                          fill
                          className="object-contain drop-shadow-xl"
                          unoptimized={true}
                        />
                      </div>
                      <p className="text-base text-[#d6bfa6] tracking-widest uppercase">{coverSubtitle}</p>
                      <div className="w-12 h-[2px] bg-[#b08968] mx-auto my-6" />
                      <p className="text-sm text-[#b08968] tracking-widest uppercase">Est. 2005</p>
                    </div>
                  </div>
                ) : page.type === "backcover" ? (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#3b2a22] via-[#7a553a] to-[#3b2a22]">
                    <div className="text-center text-[#f3e9d7]">
                      <div className="text-3xl text-[#b08968] mb-4">✦</div>
                      <h2 className="font-heading text-3xl font-bold tracking-wider mb-2">Thank You</h2>
                      <p className="text-sm text-[#d6bfa6] tracking-widest uppercase">for dining with us</p>
                      <div className="w-12 h-[2px] bg-[#b08968] mx-auto my-6" />
                      <p className="text-sm text-[#b08968] tracking-widest uppercase">{backCoverLocation}</p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#fdf8f0] to-[#f5ebe0]">
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
      </div>

      <div className="flex items-center gap-4 mt-6 sm:mt-8">
        <button
          onClick={goToPrev}
          disabled={currentPage <= 0}
          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-darkbrown text-cream disabled:opacity-30 disabled:cursor-not-allowed hover:bg-brown transition-colors duration-200 ease-out active:scale-95"
          aria-label="Previous page"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <span className="text-darkbrown font-medium text-sm sm:text-base min-w-[80px] text-center">
          {currentPage + 1} / {totalPages}
        </span>

        <button
          onClick={goToNext}
          disabled={currentPage >= totalPages - 1}
          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-darkbrown text-cream disabled:opacity-30 disabled:cursor-not-allowed hover:bg-brown transition-colors duration-200 ease-out active:scale-95"
          aria-label="Next page"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <Link
        href="/"
        className="mt-4 sm:mt-6 text-brown/60 hover:text-darkbrown text-sm underline underline-offset-4 decoration-brown/30 hover:decoration-darkbrown transition-colors duration-200 ease-out"
      >
        Back to Home
      </Link>
    </div>
  );
}
