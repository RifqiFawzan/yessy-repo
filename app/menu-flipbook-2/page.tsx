"use client";

import { Suspense } from "react";
import { MenuFlipbook, type MenuSection } from "@/components/menu-flipbook";

const tanjungBiasMenu: MenuSection[] = [
  {
    category: "Starters",
    items: [
      { name: "Salt & Pepper Prawns", description: "Crispy tiger prawns wok-fried with chili, garlic, and spring onion", price: "IDR 115k" },
      { name: "Tuna Tartare", description: "Fresh ahi tuna with avocado, sesame, soy dressing, and wonton crisps", price: "IDR 125k" },
      { name: "Coconut Fish Cakes", description: "Pan-fried barramundi cakes with lemongrass and sweet chili", price: "IDR 85k" },
      { name: "Garden Fresh Salad", description: "Mixed greens with mango, macadamia, and citrus vinaigrette", price: "IDR 65k" },
    ],
  },
  {
    category: "Seafood Mains",
    items: [
      { name: "Grilled Lobster Tail", description: "Fresh lobster with garlic herb butter, served with seasonal vegetables", price: "IDR 285k" },
      { name: "Pan-Seared Barramundi", description: "Local barramundi fillet with lemon caper sauce and mashed potato", price: "IDR 175k" },
      { name: "Tanjung Bias Platter", description: "A curated selection of grilled seafood with three signature sauces", price: "IDR 345k" },
      { name: "Fish & Chips", description: "Beer-battered catch of the day with tartare sauce and thick-cut fries", price: "IDR 135k" },
    ],
  },
  {
    category: "Western & Local",
    items: [
      { name: "Wagyu Ribeye", description: "250g wagyu steak with truffle mushroom sauce and fries", price: "IDR 325k" },
      { name: "Nasi Goreng Seafood", description: "Wok-fried rice with shrimp, squid, and crispy shallots", price: "IDR 95k" },
      { name: "Chicken Parmigiana", description: "Crumbed chicken breast with napoli sauce, cheese, and chips", price: "IDR 145k" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Mango Pavlova", description: "Crisp meringue topped with fresh mango, passion fruit, and cream", price: "IDR 75k" },
      { name: "Coconut Panna Cotta", description: "Silky coconut cream with lime zest and tropical fruit compote", price: "IDR 65k" },
      { name: "Chocolate Lava Cake", description: "Warm dark chocolate cake with salted caramel ice cream", price: "IDR 85k" },
    ],
  },
  {
    category: "Drinks & Shakes",
    items: [
      { name: "Ocean Sunset Cocktail", description: "Blue curaçao, rum, and tropical juice with a dramatic gradient", price: "IDR 115k" },
      { name: "Fresh Coconut", description: "Young coconut served straight from the shell", price: "IDR 35k" },
      { name: "Mango Tango Shake", description: "Thick mango milkshake with a hint of lime", price: "IDR 55k" },
      { name: "Iced Lemon Tea", description: "Refreshing freshly brewed lemon tea", price: "IDR 30k" },
    ],
  },
];

export default function MenuFlipbook2Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <p className="text-darkbrown text-lg font-medium">Loading menu...</p>
        </div>
      }
    >
      <MenuFlipbook
        menuData={tanjungBiasMenu}
        locationName="Tanjung Bias"
        coverSubtitle="Coastal Dining Experience"
        backCoverLocation="Tanjung Bias, Lombok"
        bgColor="bg-[#fdf8f0]"
      />
    </Suspense>
  );
}
