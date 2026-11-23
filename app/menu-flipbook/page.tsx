"use client";

import { Suspense } from "react";
import { MenuFlipbook, type MenuSection } from "@/components/menu-flipbook";

const senggigiMenu: MenuSection[] = [
  {
    category: "Appetizers",
    items: [
      { name: "Truffle Mushroom Soup", description: "Creamy wild mushroom soup with truffle oil and crusty bread", price: "IDR 85k" },
      { name: "Grilled Calamari", description: "Tender calamari with garlic butter and lemon herb dressing", price: "IDR 95k" },
      { name: "Caprese Salad", description: "Fresh mozzarella, heirloom tomatoes, basil, and balsamic glaze", price: "IDR 75k" },
      { name: "Crispy Spring Rolls", description: "Vegetable spring rolls with sweet chili dipping sauce", price: "IDR 65k" },
    ],
  },
  {
    category: "Main Courses",
    items: [
      { name: "Wagyu Beef Steak", description: "Premium wagyu beef with roasted vegetables and red wine jus", price: "IDR 350k" },
      { name: "Pan-Seared Salmon", description: "Atlantic salmon with lemon butter sauce and seasonal greens", price: "IDR 225k" },
      { name: "Herb Roasted Chicken", description: "Free-range chicken with rosemary potatoes and gravy", price: "IDR 175k" },
      { name: "Wild Mushroom Risotto", description: "Arborio rice with mixed mushrooms and parmesan cream", price: "IDR 145k" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Crème Brûlée", description: "Classic vanilla custard with caramelized sugar crust", price: "IDR 75k" },
      { name: "Tiramisu", description: "Traditional Italian dessert with espresso-soaked ladyfingers", price: "IDR 85k" },
      { name: "Chocolate Fondant", description: "Warm chocolate cake with molten center and vanilla ice cream", price: "IDR 95k" },
    ],
  },
  {
    category: "Drinks",
    items: [
      { name: "Signature Yessy Cocktail", description: "House blend of tropical fruits and spirits", price: "IDR 125k" },
      { name: "Fresh Pressed Juice", description: "Seasonal fruit juice, freshly squeezed to order", price: "IDR 45k" },
      { name: "Artisan Coffee", description: "Single-origin coffee brewed fresh", price: "IDR 55k" },
    ],
  },
];

export default function MenuFlipbookPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <p className="text-foreground text-lg font-medium">Loading Senggigi menu...</p>
        </div>
      }
    >
      <MenuFlipbook
        menuData={senggigiMenu}
        locationName="Senggigi"
        coverSubtitle="Fine Dining & Grill"
        backCoverLocation="Senggigi, Lombok"
        backHref="/senggigi"
        backLabel="Back to Yessy Senggigi"
      />
    </Suspense>
  );
}
