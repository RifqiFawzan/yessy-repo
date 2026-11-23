import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-secondary text-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4 tracking-[0.04em]">
              Yessy
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Seafood and Western dining across two sunlit spots in West Lombok: Yessy Senggigi and coastal Yessy Tanjung Bias.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
              Locations &amp; Pages
            </h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/about"
                  className="inline-flex items-center min-h-[44px] text-muted-foreground hover:text-foreground transition-colors duration-150 text-sm font-medium"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/senggigi"
                  className="inline-flex items-center min-h-[44px] text-muted-foreground hover:text-foreground transition-colors duration-150 text-sm font-medium"
                >
                  Yessy Senggigi
                </Link>
              </li>
              <li>
                <Link
                  href="/tanjung-bias"
                  className="inline-flex items-center min-h-[44px] text-muted-foreground hover:text-foreground transition-colors duration-150 text-sm font-medium"
                >
                  Yessy Tanjung Bias
                </Link>
              </li>
              <li>
                <Link
                  href="/reservation"
                  className="inline-flex items-center min-h-[44px] text-muted-foreground hover:text-foreground transition-colors duration-150 text-sm font-medium"
                >
                  Make a Reservation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
              Contact
            </h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:info@yessy.com"
                  className="inline-flex items-center min-h-[44px] hover:text-foreground transition-colors font-medium"
                >
                  info@yessy.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center min-h-[44px] hover:text-foreground transition-colors font-medium"
                >
                  WhatsApp: +62 812-3456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Yessy Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
