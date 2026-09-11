"use client";

import { useState, useCallback, useRef, useMemo } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const HTMLFlipBook = dynamic(() => import("react-pageflip"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-[500px]">
      <p className="text-darkbrown text-lg font-medium">Loading menu...</p>
    </div>
  ),
});

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
              <h3 className="page-item-name">{item.name}</h3>
              <p className="page-item-desc">{item.description}</p>
            </div>
            <span className="page-item-price">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MenuFlipbook({ menuData, locationName, coverSubtitle, backCoverLocation, bgColor = "bg-background" }: MenuFlipbookProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const flipBookRef = useRef<React.ComponentRef<typeof HTMLFlipBook>>(null);

  const pages = useMemo(() => {
    const result: { type: "cover" | "menu" | "backcover"; category?: string; items?: MenuItem[]; pageNumber?: number }[] = [
      { type: "cover" },
    ];
    let pageNum = 2;
    for (const section of menuData) {
      for (let i = 0; i < section.items.length; i += 3) {
        result.push({
          type: "menu",
          category: section.category,
          items: section.items.slice(i, i + 3),
          pageNumber: pageNum++,
        });
      }
    }
    result.push({ type: "backcover" });
    return result;
  }, [menuData]);

  const totalPages = pages.length;

  const onFlip = useCallback((e: { data: number }) => {
    setCurrentPage(e.data);
  }, []);

  const goToNext = () => {
    flipBookRef.current?.pageFlip().flipNext();
  };

  const goToPrev = () => {
    flipBookRef.current?.pageFlip().flipPrev();
  };

  return (
    <div className={`min-h-screen ${bgColor} flex flex-col items-center justify-center px-4 py-8 sm:py-12`}>
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-darkbrown mb-2">
          Yessy {locationName}
        </h1>
        <p className="text-brown/70 text-sm sm:text-base">
          Swipe or drag the corner to flip pages
        </p>
      </div>

      <div className="flipbook-container">
        <HTMLFlipBook
          ref={flipBookRef}
          width={380}
          height={530}
          size="stretch"
          minWidth={300}
          maxWidth={700}
          minHeight={420}
          maxHeight={700}
          drawShadow={true}
          flippingTime={600}
          usePortrait={true}
          startZIndex={0}
          autoSize={true}
          startPage={0}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={30}
          showPageCorners={true}
          disableFlipByClick={false}
          onFlip={onFlip}
          onChangeOrientation={onFlip}
          onChangeState={onFlip}
          style={{}}
          className="flipbook"
        >
          {pages.map((page, index) => (
            <div key={index} className="flipbook-page">
              {page.type === "cover" ? (
                <div className="flipbook-cover">
                  <div className="cover-content">
                    <div className="cover-decoration">✦</div>
                    <h2 className="cover-title">Yessy</h2>
                    <p className="cover-subtitle">{coverSubtitle}</p>
                    <div className="cover-line" />
                    <p className="cover-tagline">Est. 2005</p>
                  </div>
                </div>
              ) : page.type === "backcover" ? (
                <div className="flipbook-backcover">
                  <div className="cover-content">
                    <div className="cover-decoration">✦</div>
                    <h2 className="cover-title">Thank You</h2>
                    <p className="cover-subtitle">for dining with us</p>
                    <div className="cover-line" />
                    <p className="cover-tagline">{backCoverLocation}</p>
                  </div>
                </div>
              ) : (
                <MenuPage
                  category={page.category!}
                  items={page.items!}
                  pageNumber={page.pageNumber!}
                />
              )}
            </div>
          ))}
        </HTMLFlipBook>
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
