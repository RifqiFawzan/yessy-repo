import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { AmbientCarousel } from "@/components/ambient-carousel";

const featuredGrill = {
  name: "Mix Seafood Platter",
  image: "/MIXseafood.jpg",
  price: "IDR 550k",
  description: "Grilled squid, prawns, and scallops prepared for sharing beside the shore.",
};

const coastalDishes = [
  { name: "King Prawn", image: "/King Prawn.jpg", price: "IDR 350k", note: "Grilled or fried" },
  { name: "Grill Fish", image: "/Grill fish.jpg", price: "Seasonal price", note: "Market catch by size" },
  { name: "Grill Squid", image: "/Grill Squid.jpg", price: "IDR 350k", note: "Garlic, spicy, or Yessy sauce" },
];

export default function TanjungBiasPage() {
  return (
    <div>
      <section className="bg-surface-dark text-surface-dark-foreground py-16 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-surface-dark-muted font-bold tracking-widest uppercase mb-3 text-xs sm:text-sm">
            Coastal Dining Experience
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-cream">
            Yessy Tanjung Bias
          </h1>
          <p className="text-surface-dark-muted text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Open-air seaside dining in Batu Layar featuring fresh coastal seafood, Lombok grilled fish, and Western plates.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/menu-flipbook-2"
              className={buttonVariants({
                size: "lg",
                className:
                  "bg-primary hover:bg-brown text-primary-foreground px-7 py-3 min-h-[44px] rounded-xl font-semibold",
              })}
            >
              Open Tanjung Bias Menu
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
              Reserve at Tanjung Bias
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8 text-center">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-1">
              By the Shore
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Views around Yessy Tanjung Bias
            </p>
          </div>

          <AmbientCarousel label="Yessy Tanjung Bias coastal gallery" />
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-surface-dark text-surface-dark-foreground">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-12">
            <p className="text-surface-dark-muted text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
              Seafood From the Grill
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-cream">
              Tanjung Bias Favorites
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-6 rounded-2xl overflow-hidden bg-darkbrown border border-brown/50 flex flex-col">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={featuredGrill.image}
                  alt={featuredGrill.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="font-heading text-2xl font-bold text-cream">
                      {featuredGrill.name}
                    </h3>
                    <span className="text-sand font-bold text-base shrink-0">
                      {featuredGrill.price}
                    </span>
                  </div>
                  <p className="text-surface-dark-muted text-sm sm:text-base leading-relaxed">
                    {featuredGrill.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 gap-4">
              {coastalDishes.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl overflow-hidden bg-darkbrown border border-brown/50 flex flex-col sm:flex-row"
                >
                  <div className="relative sm:w-44 aspect-[16/10] sm:aspect-auto shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 176px"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-center">
                    <div className="flex items-baseline justify-between gap-3 mb-1">
                      <h3 className="font-heading font-bold text-cream text-lg">
                        {item.name}
                      </h3>
                      <span className="text-sand font-semibold text-sm shrink-0">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-surface-dark-muted text-sm">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/menu-flipbook-2"
              className="min-h-[44px] inline-flex items-center text-sand hover:text-white font-semibold text-sm underline underline-offset-4"
            >
              Browse Complete Tanjung Bias Menu
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-muted-foreground text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
              Visit Us
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
              Yessy Tanjung Bias Location
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed text-sm sm:text-base">
              Tanjung Bias, Batu Layar, West Lombok, West Nusa Tenggara
            </p>
          </div>

          <div className="bg-card rounded-2xl p-3 shadow-sm border border-border">
            <div className="rounded-xl overflow-hidden aspect-[16/9]">
              <iframe
                src="https://maps.google.com/maps?q=Tanjung+Bias,+Batu+Layar,+Kabupaten+Lombok+Barat,+Nusa+Tenggara+Bar.&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="800"
                height="450"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map of Yessy Tanjung Bias"
              />
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.google.com/maps?q=Tanjung+Bias,+Batu+Layar,+Kabupaten+Lombok+Barat,+Nusa+Tenggara+Bar."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 min-h-[44px] bg-primary hover:bg-brown text-primary-foreground px-7 py-3 rounded-xl font-semibold transition-colors"
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
        </div>
      </section>
    </div>
  );
}
