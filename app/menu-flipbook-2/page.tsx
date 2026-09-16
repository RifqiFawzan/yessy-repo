"use client";

import { Suspense } from "react";
import { MenuFlipbook, type MenuSection } from "@/components/menu-flipbook";

const tanjungBiasMenu: MenuSection[] = [
  {
    category: "Seafood Specialities",
    items: [
      { name: "Crispy Fried Shrimp", description: "Served with rice", price: "125k" },
      { name: "Crispy Fried Squid", description: "Served with rice", price: "125k" },
      { name: "Whole Fish - Small", description: "Sauces: Garlic, Sweet Sour, Ginger, Spicy, or Yessy Sauce", price: "150k" },
      { name: "Whole Fish - Medium", description: "Sauces: Garlic, Sweet Sour, Ginger, Spicy, or Yessy Sauce", price: "300k" },
      { name: "Whole Fish - Large", description: "Sauces: Garlic, Sweet Sour, Ginger, Spicy, or Yessy Sauce", price: "350k" },
      { name: "Large Snapper", description: "Sauces: Garlic, Sweet Sour, Ginger, Spicy, or Yessy Sauce", price: "350k" },
      { name: "Whole Fish - Extra Large", description: "Sauces: Garlic, Sweet Sour, Ginger, Spicy, or Yessy Sauce", price: "400k" },
      { name: "Whole Fish - Double XL", description: "Sauces: Garlic, Sweet Sour, Ginger, Spicy, or Yessy Sauce", price: "450k" },
      { name: "Grilled Squid", description: "Sauces: Garlic, Sweet Sour, Ginger, Spicy, or Yessy Sauce", price: "350k" },
      { name: "Fresh King Prawn", description: "Grilled or fried options available", price: "350k" },
      { name: "Fresh Tiger Prawn", description: "Grilled or fried options available", price: "250k" },
      { name: "Fresh Jumbo Prawn", description: "Grilled or fried options available", price: "380k" },
      { name: "Grilled Scallop", description: "Fresh scallops grilled to perfection", price: "200k" },
      { name: "Mixed Seafood", description: "Squid, Prawn, Scallop", price: "550k" },
      { name: "Crab", description: "With Yessy Sauce or Spicy Sauce", price: "360k" },
      { name: "Lobster", description: "Available on request (Order 1 day before)", price: "-" },
    ],
  },
  {
    category: "Vegetarian food",
    items: [
      { name: "Tofu and Vegetables", description: "Stir-fried tofu with mixed veggies", price: "100K" },
      { name: "Capcay Vegetables", description: "Stir-fried mixed vegetables", price: "35K" },
      { name: "Spring Rolls", description: "Crispy vegetable spring rolls", price: "35K" },
      { name: "Pelecing", description: "Spicy water spinach salad", price: "20K" },
      { name: "Fried Rice with Vegetables", description: "Vegetarian fried rice", price: "50K" },
      { name: "Fried Noodles with Vegetables", description: "Vegetarian fried noodles", price: "50K" },
    ],
  },
  {
    category: "Nasi Goreng & Mie",
    items: [
      { name: "Nasi Goreng Telur", description: "Egg fried rice", price: "50K" },
      { name: "Nasi Goreng Terasi", description: "Shrimp paste fried rice", price: "50K" },
      { name: "Nasi Goreng Special", description: "Special fried rice", price: "50K"},
      { name: "Nasi Goreng Seafood", description: "Seafood fried rice", price: "50K"},
      { name: "Mie Goreng Special", description: "Special fried noodles", price: "50K" },
      { name: "Mie Goreng Seafood", description: "Seafood fried noodles", price: "50K" },
    ],
  },
  {
    category: "Snacks & Others",
    items: [
      { name: "French Fries", description: "Classic crispy fries", price: "50K" },
      { name: "Fried Banana", description: "Sweet fried banana", price: "35K" },
      { name: "Garlic Bread", description: "Toasted bread with garlic butter", price: "35K" },
      { name: "Plain Pancake", description: "Classic plain pancake", price: "35K" },
      { name: "Pineapple / Banana Pancake", description: "Sweet fruit pancake", price: "35K" },
      { name: "Sweet Papaya Salad", description: "Fresh papaya salad", price: "35K" },
      { name: "Boiled Water Spinach", description: "Healthy boiled greens", price: "50K" },
    ],
  },
  {
    category: "Drinks & Juices",
    items: [
      { name: "Iced Young Coconut", description: "With palm sugar (25K) or plain (20K)", price: "20-25K" },
      { name: "Coconut in Shell", description: "Fresh whole young coconut", price: "35K" },
      { name: "Fresh Juices", description: "Orange, Pineapple, Watermelon, Banana, Melon, Avocado, Mango", price: "25K" },
      { name: "Mixed Fruit Juice", description: "Blend of seasonal fruits", price: "35K" },
      { name: "Soda Gembira", description: "Happy soda with milk and syrup", price: "35K" },
      { name: "Mineral Water", description: "Medium (10K) / Large (20K)", price: "10-20K" },
      { name: "Hot Drinks", description: "Lombok Coffee (10K), Hot Ginger w/ Palm Sugar (25K), Malay Tea (35K)", price: "10-35K" },
      { name: "Soft Drinks", description: "Coca Cola, Zero, Sprite, Fanta", price: "25K" },
    ],
  }
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
