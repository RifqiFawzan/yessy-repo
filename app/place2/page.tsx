import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";

const menu = {
  starters: [
    { name: "Loaded Nachos", description: "Crispy tortilla chips with cheese, jalapeños, and guacamole", price: "IDR 75k" },
    { name: "Chicken Wings", description: "Spicy buffalo wings with blue cheese dip", price: "IDR 85k" },
    { name: "Garlic Bread", description: "Toasted bread with garlic butter and melted cheese", price: "IDR 55k" },
    { name: "Bruschetta", description: "Toasted ciabatta with tomato, basil, and olive oil", price: "IDR 65k" },
  ],
  burgers: [
    { name: "Classic Yessy Burger", description: "Wagyu beef patty with lettuce, tomato, and special sauce", price: "IDR 135k" },
    { name: "BBQ Bacon Burger", description: "Beef patty with crispy bacon, cheddar, and BBQ sauce", price: "IDR 155k" },
    { name: "Mushroom Swiss Burger", description: "Beef patty with sautéed mushrooms and Swiss cheese", price: "IDR 145k" },
    { name: "Veggie Burger", description: "Plant-based patty with avocado and spicy mayo", price: "IDR 125k" },
  ],
  pasta: [
    { name: "Spaghetti Carbonara", description: "Classic pasta with pancetta, egg yolk, and parmesan", price: "IDR 125k" },
    { name: "Penne Arrabbiata", description: "Penne in spicy tomato sauce with fresh basil", price: "IDR 105k" },
    { name: "Seafood Linguine", description: "Linguine with shrimp, mussels, and garlic white wine sauce", price: "IDR 165k" },
  ],
  sides: [
    { name: "Truffle Fries", description: "Crispy fries with truffle oil and parmesan", price: "IDR 65k" },
    { name: "Onion Rings", description: "Beer-battered onion rings with ranch dip", price: "IDR 55k" },
    { name: "Garden Salad", description: "Mixed greens with vinaigrette dressing", price: "IDR 50k" },
  ],
  milkshakes: [
    { name: "Chocolate Dream", description: "Rich chocolate milkshake with whipped cream", price: "IDR 65k" },
    { name: "Vanilla Classic", description: "Creamy vanilla milkshake with a cherry on top", price: "IDR 60k" },
    { name: "Strawberry Bliss", description: "Fresh strawberry milkshake with real fruit pieces", price: "IDR 65k" },
    { name: "Salted Caramel", description: "Caramel milkshake with sea salt and toffee bits", price: "IDR 70k" },
  ],
};

export default function Place2() {
  return (
    <div>
      <section className="bg-gradient-to-br from-brown via-darkbrown to-brown text-cream py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brown via-darkbrown to-brown animate-hero-bg" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-camel font-medium tracking-widest uppercase mb-3 text-sm animate-hero-reveal" style={{ animationDelay: "200ms" }}>Bistro &amp; Comfort Food</p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-hero-reveal" style={{ animationDelay: "400ms" }}>Yessy Place 2</h1>
          <p className="text-sand text-base sm:text-lg max-w-2xl mx-auto animate-hero-reveal" style={{ animationDelay: "600ms" }}>
            A relaxed bistro-style atmosphere serving hearty comfort food, juicy burgers, and artisanal drinks.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 sm:space-y-14">
            {Object.entries(menu).map(([category, items], catIndex) => (
              <ScrollReveal key={category} animation="fade-up" delay={catIndex * 100}>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-darkbrown mb-4 sm:mb-6 capitalize border-b border-sand/50 pb-3">
                  {category}
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.name}
                      className="flex justify-between items-start gap-4 bg-white rounded-xl p-4 shadow-sm border border-sand/20 transition-shadow duration-200 ease-out hover:shadow-md hover:border-camel/30 hover:-translate-y-0.5"
                    >
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-darkbrown text-sm sm:text-base">{item.name}</h3>
                        <p className="text-brown/70 text-xs sm:text-sm mt-1">{item.description}</p>
                      </div>
                      <span className="text-camel font-bold whitespace-nowrap text-sm sm:text-base">{item.price}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="scale-in" className="mt-10 sm:mt-14 text-center">
            <Link href="/reservation">
              <Button size="lg" className="bg-camel hover:bg-brown text-white px-8 sm:px-10 py-3 text-base min-h-[44px] transition-transform duration-150 ease-out hover:scale-[1.02] active:scale-[0.98]">
                Reserve at Place 2
              </Button>
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
              Jl. Nelayan, Senteluk, Kec. Batu Layar, Kabupaten Lombok Barat, Nusa Tenggara Bar.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="scale-in" delay={200}>
            <div className="bg-white rounded-3xl p-3 shadow-[0_4px_24px_rgba(122,85,58,0.08)] border border-sand/30">
              <div className="rounded-2xl overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=Yessy+Kitchen,+Jl.+Nelayan,+Senteluk,+Kec.+Batu+Layar,+Kabupaten+Lombok+Barat,+Nusa+Tenggara+Bar.&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Yessy Place 2 Location"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300} className="mt-6 sm:mt-8 text-center">
            <a
              href="https://www.google.com/maps?q=Yessy+Kitchen,+Jl.+Nelayan,+Senteluk,+Kec.+Batu+Layar,+Kabupaten+Lombok+Barat,+Nusa+Tenggara+Bar."
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
