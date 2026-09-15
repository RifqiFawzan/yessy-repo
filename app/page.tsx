import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { ImageMarquee } from "@/components/image-marquee";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div>
      <section className="relative bg-darkbrown text-cream overflow-hidden">
        <Image
          src="/YESSY-TANJUNGBIAS%20(6%20of%2051).jpg"
          alt=""
          fill
          className="object-cover animate-hero-bg"
          sizes="100vw"
          unoptimized={true}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-darkbrown via-brown/70 to-darkbrown opacity-85" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sand font-bold tracking-[0.2em] uppercase mb-4 text-sm sm:text-base drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] animate-hero-reveal" style={{ animationDelay: "200ms" }}>
              Seafood &amp; Western Cuisine
            </p>
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4 tracking-tight text-cream drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] animate-hero-reveal" style={{ animationDelay: "400ms" }}>
              Welcome to YESSY
            </h1>
            <p className="text-sand font-semibold text-base sm:text-lg md:text-xl mb-8 sm:mb-10 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] animate-hero-reveal" style={{ animationDelay: "600ms" }}>
              Two unique locations, two distinct culinary experiences. Discover the flavors that make Yessy special.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-hero-reveal" style={{ animationDelay: "800ms" }}>
              <Link 
                href="/reservation"
                className={buttonVariants({ size: "lg", className: "w-full sm:w-auto bg-camel hover:bg-brown text-white px-8 py-3 text-base min-h-[44px] transition-all duration-200 hover:shadow-[0_4px_20px_rgba(176,137,104,0.3)]" })}
              >
                Reserve a Table
              </Link>
              <Link 
                href="/senggigi"
                className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto border-sand/50 text-brown hover:bg-brown/50 px-8 py-3 text-base min-h-[44px] transition-all duration-200" })}
              >
                Explore Our Places
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <ImageMarquee /> */}

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

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <ScrollReveal animation="fade-left" delay={100}>
              <Link href="/senggigi" className="block">
                <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-brown border border-sand/20 hover-lift">
                  <Image
                    src="/AMBIENT%20AND%20SPACE%20(17%20of%2084).jpg"
                    alt="Senggigi ambiance"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    unoptimized={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkbrown/90 via-darkbrown/30 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                    <span className="inline-block bg-camel/90 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3 w-fit">Fine Dining</span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">Yessy Senggigi</h3>
                    <p className="text-sand/90 text-sm leading-relaxed max-w-sm mb-4">
                      A cozy fine-dining experience with contemporary cuisine using local ingredients.
                    </p>
                    <div className="text-camel font-bold text-sm group-hover:text-white transition-colors">
                      View Location &rarr;
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal animation="fade-right" delay={200}>
              <Link href="/tanjung-bias" className="block">
                <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-brown border border-sand/20 hover-lift">
                  <Image
                    src="/AMBIENT%20AND%20SPACE%20(14%20of%2084).jpg"
                    alt="Tanjung Bias ambiance"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    unoptimized={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkbrown/90 via-darkbrown/30 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                  <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                    <span className="inline-block bg-darkbrown/90 text-cream text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3 w-fit border border-cream/20">Seafood</span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">Yessy Tanjung Bias</h3>
                    <p className="text-sand/90 text-sm leading-relaxed max-w-sm mb-4">
                      A coastal dining retreat with ocean breezes, fresh seafood, and breathtaking views.
                    </p>
                    <div className="text-camel font-bold text-sm group-hover:text-white transition-colors">
                      View Location &rarr;
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Testimonials />

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
            <Link 
              href="/reservation"
              className={buttonVariants({ size: "lg", className: "bg-camel hover:bg-brown text-white px-8 sm:px-10 py-3 text-base min-h-[44px] transition-all duration-200 hover:shadow-[0_4px_20px_rgba(176,137,104,0.3)]" })}
            >
              Make a Reservation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
