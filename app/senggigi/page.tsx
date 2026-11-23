import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { AmbientCarousel, type CarouselImage } from "@/components/ambient-carousel";

const senggigiImages: CarouselImage[] = [
  { src: "/cafe1%20(1).jpg", alt: "Yessy Senggigi indoor dining space" },
  { src: "/cafe1%20(2).jpg", alt: "Yessy Senggigi evening table setting" },
  { src: "/cafe1%20(3).jpg", alt: "Yessy Senggigi main dining area" },
  { src: "/cafe1%20(4).jpg", alt: "Yessy Senggigi plated dish presentation" },
  { src: "/cafe1%20(5).jpg", alt: "Yessy Senggigi seating atmosphere" },
];

const bestSellers = [
  { name: "Wagyu Beef Steak", image: "/cafe1 (1).jpg", price: "IDR 350k" },
  { name: "Pan-Seared Salmon", image: "/cafe1 (2).jpg", price: "IDR 225k" },
  { name: "Herb Roasted Chicken", image: "/cafe1 (3).jpg", price: "IDR 175k" },
  { name: "Wild Mushroom Risotto", image: "/cafe1 (4).jpg", price: "IDR 145k" },
];

export default function SenggigiPage() {
  return (
    <div>
      <section className="bg-surface-dark text-surface-dark-foreground py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <p className="text-surface-dark-muted font-bold tracking-widest uppercase mb-3 text-xs sm:text-sm">
                Fine Dining &amp; Grill
              </p>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-cream">
                Yessy Senggigi
              </h1>
              <p className="text-surface-dark-muted text-base sm:text-lg leading-relaxed mb-7 max-w-xl">
                Our original Senggigi kitchen pairs Western grill classics with fresh Lombok ingredients in a calm dining room.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/menu-flipbook"
                  className={buttonVariants({
                    size: "lg",
                    className:
                      "bg-primary hover:bg-brown text-primary-foreground px-7 py-3 min-h-[44px] rounded-xl font-semibold",
                  })}
                >
                  View Senggigi Menu
                </Link>
                <Link
                  href="/reservation"
                  className={buttonVariants({
                    variant: "outline",
                    size: "lg",
                    className:
                      "border-sand/60 bg-transparent text-cream hover:bg-brown hover:text-white px-7 py-3 min-h-[44px] rounded-xl font-semibold",
                  })}
                >
                  Reserve at Senggigi
                </Link>
              </div>
            </div>

            <div className="md:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-brown/40">
              <Image
                src="/AMBIENT%20AND%20SPACE%20(17%20of%2084).jpg"
                alt="Yessy Senggigi dining interior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-1">
              Inside Senggigi
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              A look at the dining room and dishes at Yessy Senggigi.
            </p>
          </div>

          <AmbientCarousel images={senggigiImages} label="Yessy Senggigi dining gallery" />
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-surface-dark text-surface-dark-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <p className="text-surface-dark-muted text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
                House Favorites
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-cream">
                Signature Senggigi Plates
              </h2>
            </div>
            <Link
              href="/menu-flipbook"
              className="min-h-[44px] inline-flex items-center text-sand hover:text-white font-semibold text-sm underline underline-offset-4"
            >
              See Full Senggigi Menu
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {bestSellers.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl overflow-hidden bg-darkbrown border border-brown/50 flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5 flex items-baseline justify-between gap-3">
                  <h3 className="font-heading font-bold text-cream text-base sm:text-lg">
                    {item.name}
                  </h3>
                  <span className="text-sand font-semibold text-sm shrink-0">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5">
              <p className="text-muted-foreground text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
                Visit Us
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-3">
                Find Yessy Senggigi
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-6">
                Senggigi, Kec. Batu Layar, Kabupaten Lombok Barat, Nusa Tenggara Bar. 83355
              </p>
              <a
                href="https://www.google.com/maps?q=Yessy+Cafe+Senggigi,+Senggigi,+Kec.+Batu+Layar,+Kabupaten+Lombok+Barat,+Nusa+Tenggara+Bar.+83355"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 min-h-[44px] bg-primary hover:bg-brown text-primary-foreground px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Open in Google Maps
              </a>
            </div>

            <div className="md:col-span-7 bg-card rounded-2xl p-3 shadow-sm border border-border">
              <div className="rounded-xl overflow-hidden aspect-[16/10]">
                <iframe
                  src="https://maps.google.com/maps?q=Yessy+Cafe+Senggigi,+Senggigi,+Kec.+Batu+Layar,+Kabupaten+Lombok+Barat,+Nusa+Tenggara+Bar.+83355&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="600"
                  height="400"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map of Yessy Senggigi"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
