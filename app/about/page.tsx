import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";

const milestones = [
  { year: "2005", title: "Grand Opening", description: "Yessy Restaurant opened its doors for the first time in Senggigi, Lombok, serving fresh seafood and Western classics." },
  { year: "2019", title: "Second Location", description: "Expanded to a second location on Jl. Nelayan, bringing our signature dishes to a wider audience." },
  { year: "2020", title: "Award Winning", description: "Recognized as one of the top dining experiences in Lombok by international food critics." },
  { year: "2025", title: "Modern Revamp", description: "Refreshed our menu and ambiance while staying true to the flavors that made us beloved." },
  { year: "Today", title: "Continuing Legacy", description: "Over 20 years of serving exceptional seafood and Western cuisine with warmth and passion." },
];

const values = [
  {
    number: "01",
    title: "Fresh Catch & Honest Ingredients",
    description:
      "Daily seafood from Lombok fishermen, local spices, and hand-trimmed cuts prepared fresh for every service.",
    featured: true,
  },
  {
    number: "02",
    title: "Family-Run Hospitality",
    description:
      "A family-owned kitchen where guests are welcomed personally and spice levels are adjusted to your table.",
    featured: false,
  },
  {
    number: "03",
    title: "Lombok Grill Meets Western Table",
    description:
      "From whole grilled snapper and plecing kangkung to steaks and pasta, both menus cook side by side.",
    featured: false,
  },
];

export default function About() {
  return (
    <div>
      <section className="bg-gradient-to-br from-darkbrown via-brown to-darkbrown text-cream py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-darkbrown via-brown to-darkbrown animate-hero-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-camel font-medium tracking-widest uppercase mb-4 text-sm animate-hero-reveal" style={{ animationDelay: "200ms" }}>Since 2005</p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold mb-6 animate-hero-reveal" style={{ animationDelay: "400ms" }}>Our Story</h1>
          <p className="text-sand text-base sm:text-lg max-w-2xl mx-auto leading-relaxed animate-hero-reveal" style={{ animationDelay: "600ms" }}>
            Over two decades of passion, flavor, and unforgettable dining experiences on the island of Lombok.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
            <ScrollReveal animation="fade-left">
              <p className="text-camel font-medium tracking-widest uppercase mb-3 text-sm">Who We Are</p>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-darkbrown mb-6">
                A Taste of the Sea, A Touch of the West
              </h2>
              <div className="space-y-4 text-brown/80 leading-relaxed text-sm sm:text-base">
                <p>
                  Founded in 2005, Yessy Restaurant began as a small family dream — to bring the freshest seafood
                  and the finest Western dishes to the beautiful island of Lombok. What started as a single location
                  in Senggigi has grown into two beloved restaurants, each with its own character.
                </p>
                <p>
                  Our chefs combine traditional Indonesian seafood preparation with classic Western techniques,
                  creating dishes that are both familiar and exciting. Every plate tells a story of the ocean,
                  the land, and the hands that carefully crafted it.
                </p>
                <p>
                  Whether you&apos;re craving a perfectly grilled fish straight from the morning catch, or a hearty
                  steak cooked to your liking, Yessy promises a meal that warms the soul.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" delay={200}>
              <div className="relative">
                <div className="bg-gradient-to-br from-camel/20 to-sand/30 rounded-3xl p-6 sm:p-8 md:p-10">
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-white/80 backdrop-blur rounded-2xl p-4 sm:p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                      <p className="font-heading text-3xl sm:text-4xl font-bold text-camel">20+</p>
                      <p className="text-brown/70 text-xs sm:text-sm mt-1">Years Serving</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur rounded-2xl p-4 sm:p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                      <p className="font-heading text-3xl sm:text-4xl font-bold text-camel">2</p>
                      <p className="text-brown/70 text-xs sm:text-sm mt-1">Locations</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur rounded-2xl p-4 sm:p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                      <p className="font-heading text-3xl sm:text-4xl font-bold text-camel">100+</p>
                      <p className="text-brown/70 text-xs sm:text-sm mt-1">Menu Items</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur rounded-2xl p-4 sm:p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                      <p className="font-heading text-3xl sm:text-4xl font-bold text-camel">50k+</p>
                      <p className="text-brown/70 text-xs sm:text-sm mt-1">Happy Guests</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up" className="text-center mb-10 sm:mb-14">
            <p className="text-camel font-medium tracking-widest uppercase mb-3 text-sm">Our Journey</p>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-darkbrown">Milestones</h2>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-sand/50"></div>

            <div className="space-y-8 sm:space-y-12">
              {milestones.map((item, i) => (
                <ScrollReveal key={item.year} animation={i % 2 === 0 ? "fade-left" : "fade-right"} delay={i * 100}>
                  <div className="relative pl-10 sm:pl-0 md:flex items-center gap-8">
                    <div className="hidden md:block md:w-1/2"></div>
                    <div className="hidden md:flex w-4 h-4 bg-camel rounded-full border-4 border-white shadow shrink-0"></div>
                    <div className="md:w-1/2">
                      <span className="inline-block bg-camel text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                        {item.year}
                      </span>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-darkbrown mb-1">{item.title}</h3>
                      <p className="text-brown/70 text-sm leading-relaxed">{item.description}</p>
                    </div>
                    <div className="absolute left-2.5 sm:left-auto sm:top-1/2 sm:-translate-y-1/2 w-3 h-3 bg-camel rounded-full border-2 border-white shadow md:hidden"></div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="values-heading" className="py-14 sm:py-20 sand-grain-surface border-y border-[#cbb293] overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <ScrollReveal animation="fade-left" className="lg:col-span-4">
              <p className="text-brown font-bold tracking-widest uppercase mb-3 text-xs sm:text-sm">
                What Drives Us
              </p>
              <h2 id="values-heading" className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-darkbrown mb-4">
                Our Values
              </h2>
              <p className="text-brown text-sm sm:text-base leading-relaxed">
                Three kitchen commitments that guide how we source, cook, and host across both Lombok branches.
              </p>
            </ScrollReveal>

            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5 sm:gap-6">
              {values.map((val, i) => (
                <ScrollReveal
                  key={val.title}
                  animation="fade-up"
                  delay={i * 90}
                  className={val.featured ? "sm:col-span-2" : ""}
                >
                  <article
                    className={`rounded-2xl border border-[#c9b092] bg-[#f5ebd9] shadow-sm h-full ${
                      val.featured ? "p-6 sm:p-8" : "p-6"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-heading text-xl font-bold text-brown tabular-nums">
                        {val.number}
                      </span>
                      <span className="h-px flex-1 bg-[#cbb293]" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-darkbrown mb-2">
                      {val.title}
                    </h3>
                    <p className="text-brown text-sm sm:text-base leading-relaxed">
                      {val.description}
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-darkbrown">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="scale-in">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-cream mb-4">Come Taste the Difference</h2>
            <p className="text-sand/80 max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Join us at Yessy and experience over 20 years of culinary passion. We look forward to welcoming you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link 
                href="/reservation"
                className={buttonVariants({ size: "lg", className: "w-full sm:w-auto bg-camel hover:bg-brown text-white px-8 py-3 text-base min-h-[44px] transition-transform duration-150 ease-out hover:scale-[1.02] active:scale-[0.98]" })}
              >
                Make a Reservation
              </Link>
              <Link 
                href="/senggigi"
                className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto border-sand/50 text-brown hover:bg-brown/50 px-8 py-3 text-base min-h-[44px] transition-all duration-200" })}
              >
                View Our Menu
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
