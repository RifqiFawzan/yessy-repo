import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div>
      <section className="relative bg-surface-dark text-surface-dark-foreground overflow-hidden">
        <Image
          src="/YESSY-TANJUNGBIAS%20(6%20of%2051).jpg"
          alt="Beachfront dining tables at Yessy Restaurant in Lombok"
          fill
          className="object-cover opacity-40"
          sizes="100vw"
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-darkbrown/90 via-darkbrown/75 to-brown/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-surface-dark-muted font-bold tracking-[0.18em] uppercase mb-4 text-xs sm:text-sm">
              Seafood &amp; Western Cuisine in Lombok
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-5 tracking-tight text-cream">
              Welcome to Yessy Restaurant
            </h1>
            <p className="text-surface-dark-muted text-base sm:text-lg md:text-xl mb-8 sm:mb-10 leading-relaxed">
              Two dining spots in West Lombok: warm bistro dishes and steaks in Senggigi, and fresh coastal seafood in Tanjung Bias.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/reservation"
                className={buttonVariants({
                  size: "lg",
                  className:
                    "w-full sm:w-auto bg-primary hover:bg-brown text-primary-foreground px-8 py-3 text-base min-h-[44px] rounded-xl font-semibold transition-colors",
                })}
              >
                Reserve a Table
              </Link>
              <a
                href="#locations"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "w-full sm:w-auto border-sand/60 bg-transparent text-cream hover:bg-brown hover:text-white px-8 py-3 text-base min-h-[44px] rounded-xl font-semibold transition-colors",
                })}
              >
                Compare Our Two Locations
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" aria-labelledby="locations-heading" className="py-14 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <p className="text-muted-foreground text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
                Two Locations
              </p>
              <h2 id="locations-heading" className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
                Choose Your Setting
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-sm sm:text-base">
              Each Yessy kitchen focuses on its own setting, menu, and atmosphere.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            <Link
              href="/senggigi"
              className="lg:col-span-7 group relative rounded-2xl overflow-hidden min-h-[340px] sm:min-h-[400px] bg-surface-dark border border-border hover-lift flex items-end"
            >
              <Image
                src="/AMBIENT%20AND%20SPACE%20(17%20of%2084).jpg"
                alt="Yessy Senggigi dining room"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="relative p-6 sm:p-8 w-full">
                <span className="inline-block bg-cream text-darkbrown text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-3">
                  Senggigi
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
                  Yessy Senggigi
                </h3>
                <p className="text-cream/90 text-sm sm:text-base leading-relaxed max-w-lg mb-4">
                  Intimate indoor dining serving Wagyu steak, pan-seared salmon, risotto, and house classics.
                </p>
                <span className="inline-flex items-center min-h-[44px] text-sand font-semibold text-sm underline underline-offset-4 group-hover:text-white">
                  Visit Senggigi Page
                </span>
              </div>
            </Link>

            <Link
              href="/tanjung-bias"
              className="lg:col-span-5 group relative rounded-2xl overflow-hidden min-h-[340px] sm:min-h-[400px] bg-surface-dark border border-border hover-lift flex items-end"
            >
              <Image
                src="/AMBIENT%20AND%20SPACE%20(14%20of%2084).jpg"
                alt="Yessy Tanjung Bias seaside seating"
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="relative p-6 sm:p-8 w-full">
                <span className="inline-block bg-sand text-darkbrown text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-3">
                  Coastal Dining
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">
                  Yessy Tanjung Bias
                </h3>
                <p className="text-cream/90 text-sm sm:text-base leading-relaxed mb-4">
                  Beachside tables with grilled whole fish, king prawns, calamari, and Lombok sambal dishes.
                </p>
                <span className="inline-flex items-center min-h-[44px] text-sand font-semibold text-sm underline underline-offset-4 group-hover:text-white">
                  Visit Tanjung Bias Page
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-14 sm:py-20 bg-surface-dark text-surface-dark-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-cream mb-4">
            Planning Dinner in Lombok?
          </h2>
          <p className="text-surface-dark-muted max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Pick your preferred branch, date, and seating time, then confirm directly with our team via WhatsApp or email.
          </p>
          <Link
            href="/reservation"
            className={buttonVariants({
              size: "lg",
              className:
                "bg-primary hover:bg-brown text-primary-foreground px-8 sm:px-10 py-3 text-base min-h-[44px] rounded-xl font-semibold transition-colors",
            })}
          >
            Book Your Table
          </Link>
        </div>
      </section>
    </div>
  );
}
