import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { AmbientCarousel } from "@/components/ambient-carousel";
import { MenuCarousel } from "@/components/menu-carousel";

const bestSellers = [
  { name: "King Prawn", image: "/King Prawn.jpg", price: "IDR 350k" },
  { name: "Grill Fish", image: "/Grill fish.jpg", price: "IDR k" },
  { name: "Grill Squid", image: "/Grill Squid.jpg", price: "IDR 350k" },
  { name: "Mix Seafood", image: "/MIXseafood.jpg", price: "IDR 550k" },
];

export default function TanjungBias() {
  return (
    <div>
      <section className="bg-gradient-to-br from-brown via-darkbrown to-brown text-cream py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brown via-darkbrown to-brown animate-hero-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-camel font-medium tracking-widest uppercase mb-3 text-sm animate-hero-reveal" style={{ animationDelay: "200ms" }}>Coastal Dining Experience</p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-hero-reveal" style={{ animationDelay: "400ms" }}>Yessy Tanjung Bias</h1>
          <p className="text-sand text-base sm:text-lg max-w-2xl mx-auto animate-hero-reveal" style={{ animationDelay: "600ms" }}>
            Where the ocean breeze meets exquisite flavors. A coastal retreat offering fresh seafood and western cuisine with breathtaking views.
          </p>
          <p className="text-sand text-base sm:text-lg mt-4">
            This is our{" "}
            <a
              href="/menu-flipbook-2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-bold text-cream underline decoration-camel/50 decoration-2 underline-offset-4 hover:decoration-camel hover:text-camel transition-all duration-200 ease-out"
            >
              Menu
            </a>
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up" className="text-center mb-6 sm:mb-8">
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-darkbrown mb-2">The Ambiance</h2>
            <p className="text-brown/60 text-sm sm:text-base">A glimpse inside Yessy Tanjung Bias</p>
          </ScrollReveal>

          <ScrollReveal animation="scale-in">
            <AmbientCarousel />
          </ScrollReveal>
        </div>
      </section>

      {/* <section className="py-12 sm:py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up" className="text-center mb-8 sm:mb-10">
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-darkbrown mb-2">Signature Grills</h2>
            <p className="text-brown/60 text-sm sm:text-base">Fresh from the ocean, grilled to perfection</p>
          </ScrollReveal>

          <ScrollReveal animation="scale-in">
            <MenuCarousel />
          </ScrollReveal>
        </div>
      </section> */}

      <section className="py-16 sm:py-20 bg-darkbrown text-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up" className="text-center mb-10 sm:mb-16">
            <p className="text-camel text-sm tracking-widest uppercase mb-4">Our Dishes</p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
              Dishes That Keep<br />Guests Coming Back.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {bestSellers.map((item, i) => (
              <ScrollReveal key={item.name} animation="fade-up" delay={i * 100}>
                <div className="relative group rounded-none overflow-hidden aspect-[4/5] bg-brown border border-sand/20">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />
                  
                  <div className="absolute inset-0 p-4 sm:p-5">
                    <div className="w-full h-full border border-white/20 flex flex-col justify-between p-4 sm:p-5 transition-colors duration-500 group-hover:border-white/50">
                      <h3 className="font-heading font-bold text-white text-base sm:text-lg tracking-wide uppercase max-w-[90%] leading-snug">
                        {item.name}
                      </h3>
                      
                      <div className="flex items-end justify-between">
                        <span className="text-white font-semibold text-sm sm:text-base">{item.price}</span>
                        <div className="w-8 h-8 bg-cream flex items-center justify-center text-darkbrown transition-transform duration-500 group-hover:scale-110">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 7L7 17M17 7H9M17 7v8" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="scale-in" className="mt-12 sm:mt-16 text-center">
            <Link 
              href="/reservation"
              className={buttonVariants({ size: "lg", className: "bg-camel hover:bg-brown text-white px-8 sm:px-10 py-3 text-base min-h-[44px] transition-transform duration-150 ease-out hover:scale-[1.02] active:scale-[0.98]" })}
            >
              Reserve at Tanjung Bias
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up" className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="block w-12 h-px bg-sand"></span>
              <svg className="w-6 h-6 text-camel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="block w-12 h-px bg-sand"></span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-darkbrown mb-3">Visit Us</h2>
            <p className="text-brown/70 max-w-lg mx-auto leading-relaxed text-sm sm:text-base">
              Tanjung Bias, Batu Layar, West Lombok, West Nusa Tenggara
            </p>
          </ScrollReveal>

          <ScrollReveal animation="scale-in" delay={200}>
            <div className="bg-white rounded-3xl p-3 shadow-[0_4px_24px_rgba(122,85,58,0.08)] border border-sand/30">
              <div className="rounded-2xl overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=Tanjung+Bias,+Batu+Layar,+Kabupaten+Lombok+Barat,+Nusa+Tenggara+Bar.&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Yessy Tanjung Bias Location"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300} className="mt-6 sm:mt-8 text-center">
            <a
              href="https://www.google.com/maps?q=Tanjung+Bias,+Batu+Layar,+Kabupaten+Lombok+Barat,+Nusa+Tenggara+Bar."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-darkbrown hover:bg-brown text-cream px-7 py-3.5 rounded-full font-medium transition-all duration-300 shadow-[0_2px_12px_rgba(59,42,34,0.15)] hover:shadow-[0_4px_20px_rgba(59,42,34,0.25)] hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open in Google Maps
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
