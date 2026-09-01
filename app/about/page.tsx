import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";

const milestones = [
  { year: "2005", title: "Grand Opening", description: "Yessy Restaurant opened its doors for the first time in Senggigi, Lombok, serving fresh seafood and Western classics." },
  { year: "2010", title: "Second Location", description: "Expanded to a second location on Jl. Nelayan, bringing our signature dishes to a wider audience." },
  { year: "2015", title: "Award Winning", description: "Recognized as one of the top dining experiences in Lombok by international food critics." },
  { year: "2020", title: "Modern Revamp", description: "Refreshed our menu and ambiance while staying true to the flavors that made us beloved." },
  { year: "Today", title: "Continuing Legacy", description: "Over 20 years of serving exceptional seafood and Western cuisine with warmth and passion." },
];

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "Quality First",
    description: "Every ingredient is carefully selected. Every dish is crafted with precision and care.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Family Tradition",
    description: "A family-owned restaurant where every guest is treated like part of the family.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Passion for Flavor",
    description: "We blend the freshness of the sea with the heartiness of Western cuisine.",
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

      <section className="py-12 sm:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up" className="text-center mb-10 sm:mb-14">
            <p className="text-camel font-medium tracking-widest uppercase mb-3 text-sm">What Drives Us</p>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-darkbrown">Our Values</h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {values.map((val, i) => (
              <ScrollReveal key={val.title} animation="scale-in" delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-sand/20 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 bg-camel/10 rounded-2xl flex items-center justify-center mx-auto mb-5 text-camel">
                    {val.icon}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-darkbrown mb-2">{val.title}</h3>
                  <p className="text-brown/70 text-sm leading-relaxed">{val.description}</p>
                </div>
              </ScrollReveal>
            ))}
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
              <Link href="/reservation">
                <Button size="lg" className="w-full sm:w-auto bg-camel hover:bg-brown text-white px-8 py-3 text-base min-h-[44px] transition-transform duration-150 ease-out hover:scale-[1.02] active:scale-[0.98]">
                  Make a Reservation
                </Button>
              </Link>
              <Link href="/place1">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-sand/40 text-cream hover:bg-brown/50 px-8 py-3 text-base min-h-[44px] transition-transform duration-150 ease-out hover:scale-[1.02] active:scale-[0.98]">
                  View Our Menu
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
