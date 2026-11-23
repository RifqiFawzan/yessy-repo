import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";

const milestones = [
  {
    year: "2005",
    title: "First Kitchen in Senggigi",
    description:
      "Yessy Restaurant opened in Senggigi, Lombok, cooking fresh coastal seafood alongside Western grill dishes.",
  },
  {
    year: "2019",
    title: "Expansion to Tanjung Bias",
    description:
      "Added our second dining spot along the Batu Layar coast so guests can enjoy open-air seaside meals.",
  },
  {
    year: "2025",
    title: "Updated Menus & Dining Spaces",
    description:
      "Refreshed both menus and seating areas while keeping our signature Lombok grilled fish and family hospitality.",
  },
  {
    year: "Today",
    title: "Two Distinct Lombok Spots",
    description:
      "Serving locals and travelers daily across Senggigi and Tanjung Bias.",
  },
];

const kitchenCommitments = [
  {
    title: "Morning Catch & Local Produce",
    detail:
      "Seafood, spices, and greens are sourced from Lombok fishermen and markets so grilled dishes taste fresh off the coals.",
  },
  {
    title: "Indonesian Spice Meets Western Grill",
    detail:
      "From plecing kangkung and sambal to steaks, pasta, and pan-seared salmon, both kitchens bridge local and Western comfort food.",
  },
  {
    title: "Family-Run Hospitality",
    detail:
      "Guests are welcomed personally by the team, with flexible spice levels and attentive table service.",
  },
];

export default function About() {
  return (
    <div>
      <section className="bg-secondary border-b border-border py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground font-bold tracking-widest uppercase mb-3 text-xs sm:text-sm animate-hero-reveal" style={{ animationDelay: "60ms" }}>
            Since 2005
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-foreground animate-hero-reveal" style={{ animationDelay: "160ms" }}>
            Our Story
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed animate-hero-reveal" style={{ animationDelay: "260ms" }}>
            A family-run kitchen in West Lombok serving fresh coastal seafood and Western classics for two decades.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <ScrollReveal animation="fade-left" className="md:col-span-7">
              <p className="text-muted-foreground font-bold tracking-widest uppercase mb-3 text-xs sm:text-sm">
                Who We Are
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Taste of the Sea, A Touch of the West
              </h2>
              <div className="space-y-4 text-foreground/85 leading-relaxed text-sm sm:text-base">
                <p>
                  Founded in 2005, Yessy Restaurant began as a small family dream: to bring fresh Lombok seafood and comforting Western dishes together in one welcoming table. What started in Senggigi has grown into two restaurants, each shaped by its neighborhood.
                </p>
                <p>
                  Our kitchen pairs traditional Indonesian seafood grilling and Lombok sambal with classic Western preparations, from grilled tiger prawns and whole snapper to Wagyu steaks and pasta.
                </p>
                <p>
                  Whether you sit indoors in Senggigi or dine beside the waves at Tanjung Bias, our focus stays simple: honest ingredients, generous plates, and warm service.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" delay={120} className="md:col-span-5">
              <aside className="bg-card text-card-foreground rounded-2xl p-6 sm:p-8 border border-border shadow-xs space-y-6">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-1">
                  Established
                </p>
                <p className="font-heading text-2xl font-bold text-foreground">2005 in Lombok</p>
              </div>
              <div className="border-t border-border pt-5">
                <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-2">
                  Two Locations
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/senggigi" className="font-semibold text-primary hover:underline underline-offset-4">
                      Yessy Senggigi &rarr; Fine Dining &amp; Grill
                    </Link>
                  </li>
                  <li>
                    <Link href="/tanjung-bias" className="font-semibold text-primary hover:underline underline-offset-4">
                      Yessy Tanjung Bias &rarr; Coastal Seafood
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="border-t border-border pt-5">
                <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-1">
                  Kitchen Focus
                </p>
                <p className="text-sm text-card-foreground/85">
                  Daily grilled seafood, Lombok specialties, steaks, pasta, and fresh tropical juices.
                </p>
              </div>
              </aside>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-card text-card-foreground border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-12">
            <p className="text-muted-foreground font-bold tracking-widest uppercase mb-2 text-xs sm:text-sm">
              Our Journey
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-card-foreground">
              Milestones
            </h2>
          </div>

          <ol className="relative border-l-2 border-border pl-6 sm:pl-8 space-y-8">
            {milestones.map((item) => (
              <li key={item.year} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-3.5 h-3.5 rounded-full bg-primary border-2 border-card"
                />
                <span className="inline-block bg-secondary text-secondary-foreground border border-border text-xs font-bold px-3 py-1 rounded-full mb-2">
                  {item.year}
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-card-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <p className="text-muted-foreground font-bold tracking-widest uppercase mb-2 text-xs sm:text-sm">
                How We Cook
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                What Guides Every Plate
              </h2>
            </div>

            <div className="md:col-span-8 divide-y divide-border border-y border-border">
              {kitchenCommitments.map((item, idx) => (
                <div key={item.title} className="py-6 first:pt-4 last:pb-4 flex gap-4 sm:gap-6">
                  <span className="font-heading text-xl font-bold text-primary shrink-0 tabular-nums">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-secondary border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dine With Us in Lombok
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed text-sm sm:text-base">
            Reserve a table ahead of time or browse our Senggigi and Tanjung Bias menus.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/reservation"
              className={buttonVariants({
                size: "lg",
                className:
                  "w-full sm:w-auto bg-primary hover:bg-accent hover:text-accent-foreground text-primary-foreground px-8 py-3 text-base min-h-[44px] rounded-xl font-semibold transition-colors",
              })}
            >
              Make a Reservation
            </Link>
            <Link
              href="/menu-flipbook"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className:
                  "w-full sm:w-auto border-border bg-card text-foreground hover:bg-muted px-8 py-3 text-base min-h-[44px] rounded-xl font-semibold transition-colors",
              })}
            >
              Browse Senggigi Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
