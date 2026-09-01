"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      setShouldAnimate(true);
      prevPathname.current = pathname;
    }
  }, [pathname]);

  return (
    <div className={shouldAnimate ? "animate-page-enter" : ""}>
      {children}
    </div>
  );
}
