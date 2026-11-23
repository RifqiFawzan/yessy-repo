import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Testimonials } from "@/components/testimonials";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <div>
      <section className="bg-secondary border-b border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <p
                className="text-muted-foreground font-bold tracking-[0.16em] uppercase mb-3 text-xs sm:text-sm animate-hero-reveal"
                style={{ animationDelay: "60ms" }}
              >
                Seafood &amp; Western Cuisine in Lombok
              </p>
              <h1
                className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-5 tracking-tight text-foreground leading-[1.15] animate-hero-reveal"
                style={{ animationDelay: "160ms" }}
              >
                Warm Lombok Dining Across Two Settings
              </h1>
              <p
                className="text-muted-foreground text-base sm:text-lg mb-8 leading-relaxed max-w-xl animate-hero-reveal"
                style={{ animationDelay: "260ms" }}
              >
                Visit Yessy Senggigi for steaks, pasta, and warm bistro plates, or head to Yessy Tanjung Bias for grilled coastal seafood beside the sea.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-hero-reveal"
                style={{ animationDelay: "360ms" }}
              >
                <Link
                  href="/reservation"
                  className={buttonVariants({
                    size: "lg",
                    className:
                      "press w-full sm:w-auto bg-primary hover:bg-terracotta-dark text-primary-foreground px-7 py-3 text-base min-h-[44px] rounded-xl font-semibold transition-colors",
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
                      "press w-full sm:w-auto border-border bg-card text-foreground hover:bg-sandstone px-7 py-3 text-base min-h-[44px] rounded-xl font-semibold transition-colors",
                  })}
                >
                  Compare Our Two Locations
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 animate-hero-reveal" style={{ animationDelay: "220ms" }}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-md bg-sandstone">
                <Image
                  src="/YESSY-TANJUNGBIAS%20(6%20of%2051).jpg"
                  alt="Sunlit coastal dining tables at Yessy Restaurant in Lombok"
                  fill
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" aria-labelledby="locations-heading" className="py-14 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up" className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
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
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            <ScrollReveal animation="fade-left" delay={80} className="lg:col-span-7 flex">
              <Link
                href="/senggigi"
                className="w-full group rounded-2xl overflow-hidden bg-card border border-border hover-lift flex flex-col"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src="/AMBIENT%20AND%20SPACE%20(17%20of%2084).jpg"
                    alt="Yessy Senggigi dining room"
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="inline-block bg-secondary text-foreground text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-3 border border-border">
                      Senggigi
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-2">
                      Yessy Senggigi
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-lg mb-4">
                      Intimate indoor dining serving Wagyu steak, pan-seared salmon, risotto, and house classics.
                    </p>
                  </div>
                  <span className="inline-flex items-center min-h-[44px] text-primary font-semibold text-sm underline underline-offset-4">
                    Visit Senggigi Page
                  </span>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" delay={160} className="lg:col-span-5 flex">
              <Link
                href="/tanjung-bias"
                className="w-full group rounded-2xl overflow-hidden bg-card border border-border hover-lift flex flex-col"
              >
                <div className="relative aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src="/AMBIENT%20AND%20SPACE%20(14%20of%2084).jpg"
                    alt="Yessy Tanjung Bias seaside seating"
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="inline-block bg-secondary text-foreground text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-3 border border-border">
                      Coastal Dining
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-2">
                      Yessy Tanjung Bias
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                      Beachside tables with grilled whole fish, king prawns, calamari, and Lombok sambal dishes.
                    </p>
                  </div>
                  <span className="inline-flex items-center min-h-[44px] text-primary font-semibold text-sm underline underline-offset-4">
                    Visit Tanjung Bias Page
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-14 sm:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="scale-in">
            <div className="rounded-3xl bg-sandstone border border-border p-8 sm:p-12 text-center">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                Planning Dinner in Lombok?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
                Pick your preferred branch, date, and seating time, then confirm directly with our team via WhatsApp or email.
              </p>
              <Link
                href="/reservation"
                className={buttonVariants({
                  size: "lg",
                  className:
                    "press bg-primary hover:bg-terracotta-dark text-primary-foreground px-8 sm:px-10 py-3 text-base min-h-[44px] rounded-xl font-semibold transition-colors",
                })}
              >
                Book Your Table
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
