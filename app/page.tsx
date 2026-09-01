import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <div>
      <section className="relative bg-darkbrown text-cream overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-darkbrown via-brown/80 to-darkbrown opacity-90 animate-hero-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-camel font-medium tracking-[0.2em] uppercase mb-4 text-sm animate-hero-reveal" style={{ animationDelay: "200ms" }}>
              Seafood &amp; Western Cuisine
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-hero-reveal" style={{ animationDelay: "400ms" }}>
              Welcome to{" "}
              <span className="text-camel">Yessy</span>
            </h1>
            <p className="text-sand text-base sm:text-lg md:text-xl mb-8 sm:mb-10 leading-relaxed animate-hero-reveal" style={{ animationDelay: "600ms" }}>
              Two unique locations, two distinct culinary experiences. Discover the flavors that make Yessy special.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-hero-reveal" style={{ animationDelay: "800ms" }}>
              <Link href="/reservation">
                <Button size="lg" className="w-full sm:w-auto bg-camel hover:bg-brown text-white px-8 py-3 text-base min-h-[44px] transition-all duration-200 hover:shadow-[0_4px_20px_rgba(176,137,104,0.3)]">
                  Reserve a Table
                </Button>
              </Link>
              <Link href="/place1">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-sand/50 text-brown hover:bg-brown/50 px-8 py-3 text-base min-h-[44px] transition-all duration-200">
                  Explore Our Places
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up" className="text-center mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="block w-12 h-px bg-sand"></span>
              <span className="text-camel text-sm tracking-widest uppercase">Locations</span>
              <span className="block w-12 h-px bg-sand"></span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-darkbrown mb-4">
              Our Locations
            </h2>
            <p className="text-brown/80 max-w-2xl mx-auto text-sm sm:text-base">
              Each Yessy location offers a unique atmosphere and menu crafted to delight your senses.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            <ScrollReveal animation="fade-left" delay={100}>
              <Link href="/place1" className="group flex">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-sand/30 hover-lift flex flex-col w-full">
                  <div className="h-40 sm:h-48 bg-gradient-to-br from-camel to-brown flex items-center justify-center relative shrink-0">
                    <span className="font-heading text-3xl sm:text-4xl font-bold text-white">Place 1</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-darkbrown mb-2">Yessy Place 1</h3>
                    <p className="text-brown/70 text-sm leading-relaxed flex-1">
                      A cozy fine-dining experience with contemporary cuisine using localngredients.
                    </p>
                    <div className="mt-4 text-camel font-medium text-sm group-hover:underline">
                      View Menu &rarr;
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" delay={200}>
              <Link href="/place2" className="group flex">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-sand/30 hover-lift flex flex-col w-full">
                  <div className="h-40 sm:h-48 bg-gradient-to-br from-brown to-darkbrown flex items-center justify-center relative shrink-0">
                    <span className="font-heading text-3xl sm:text-4xl font-bold text-white">Place 2</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-darkbrown mb-2">Yessy Place 2</h3>
                    <p className="text-brown/70 text-sm leading-relaxed flex-1">
                      A relaxed bistro-style setting serving hearty comfort food and artisanal cocktails.
                    </p>
                    <div className="mt-4 text-camel font-medium text-sm group-hover:underline">
                      View Menu &rarr;
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-darkbrown relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-darkbrown via-brown/20 to-darkbrown" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal animation="scale-in">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-cream mb-4">
              Ready to Dine?
            </h2>
            <p className="text-sand/80 max-w-xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
              Book your table today and experience the warmth of Yessy. We look forward to welcoming you.
            </p>
            <Link href="/reservation">
              <Button size="lg" className="bg-camel hover:bg-brown text-white px-8 sm:px-10 py-3 text-base min-h-[44px] transition-all duration-200 hover:shadow-[0_4px_20px_rgba(176,137,104,0.3)]">
                Make a Reservation
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
