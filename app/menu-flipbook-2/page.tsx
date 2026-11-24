import { MenuFlipbook, type MenuSection } from "@/components/menu-flipbook";

const tanjungBiasMenu: MenuSection[] = [
  {
    category: "Seafood Specialities",
    items: [
      { name: "Crispy Fried Shrimp", description: "Served with steamed rice", price: "IDR 125k" },
      { name: "Crispy Fried Squid", description: "Served with steamed rice", price: "IDR 125k" },
      { name: "Whole Fish - Small", description: "Choice of Garlic, Sweet Sour, Ginger, Spicy, or Yessy Sauce", price: "IDR 150k" },
      { name: "Whole Fish - Medium", description: "Choice of Garlic, Sweet Sour, Ginger, Spicy, or Yessy Sauce", price: "IDR 300k" },
      { name: "Whole Fish - Large", description: "Choice of Garlic, Sweet Sour, Ginger, Spicy, or Yessy Sauce", price: "IDR 350k" },
      { name: "Large Snapper", description: "Choice of Garlic, Sweet Sour, Ginger, Spicy, or Yessy Sauce", price: "IDR 350k" },
      { name: "Whole Fish - Extra Large", description: "Choice of Garlic, Sweet Sour, Ginger, Spicy, or Yessy Sauce", price: "IDR 400k" },
      { name: "Whole Fish - Double XL", description: "Choice of Garlic, Sweet Sour, Ginger, Spicy, or Yessy Sauce", price: "IDR 450k" },
      { name: "Grilled Squid", description: "With Garlic, Sweet Sour, Ginger, Spicy, or Yessy Sauce", price: "IDR 350k" },
      { name: "Fresh King Prawn", description: "Grilled or fried options available", price: "IDR 350k" },
      { name: "Fresh Tiger Prawn", description: "Grilled or fried options available", price: "IDR 250k" },
      { name: "Fresh Jumbo Prawn", description: "Grilled or fried options available", price: "IDR 380k" },
      { name: "Grilled Scallop", description: "Fresh scallops grilled over coals", price: "IDR 200k" },
      { name: "Mixed Seafood", description: "Grilled squid, prawn, and scallop platter", price: "IDR 550k" },
      { name: "Crab", description: "Prepared with Yessy Sauce or Spicy Sauce", price: "IDR 360k" },
      { name: "Lobster", description: "Available on request (order 1 day ahead)", price: "On request" },
    ],
  },
  {
    category: "Vegetarian Food",
    items: [
      { name: "Tofu and Vegetables", description: "Stir-fried tofu with mixed vegetables", price: "IDR 100k" },
      { name: "Capcay Vegetables", description: "Stir-fried mixed vegetables", price: "IDR 35k" },
      { name: "Spring Rolls", description: "Crispy vegetable spring rolls", price: "IDR 35k" },
      { name: "Pelecing", description: "Spicy Lombok water spinach salad", price: "IDR 20k" },
      { name: "Fried Rice with Vegetables", description: "Vegetarian fried rice", price: "IDR 50k" },
      { name: "Fried Noodles with Vegetables", description: "Vegetarian fried noodles", price: "IDR 50k" },
    ],
  },
  {
    category: "Nasi Goreng & Mie",
    items: [
      { name: "Nasi Goreng Telur", description: "Egg fried rice", price: "IDR 50k" },
      { name: "Nasi Goreng Terasi", description: "Shrimp paste fried rice", price: "IDR 50k" },
      { name: "Nasi Goreng Special", description: "House special fried rice", price: "IDR 50k" },
      { name: "Nasi Goreng Seafood", description: "Seafood fried rice", price: "IDR 50k" },
      { name: "Mie Goreng Special", description: "House special fried noodles", price: "IDR 50k" },
      { name: "Mie Goreng Seafood", description: "Seafood fried noodles", price: "IDR 50k" },
    ],
  },
  {
    category: "Snacks & Sides",
    items: [
      { name: "French Fries", description: "Crispy golden fries", price: "IDR 50k" },
      { name: "Fried Banana", description: "Sweet fried banana", price: "IDR 35k" },
      { name: "Garlic Bread", description: "Toasted bread with garlic butter", price: "IDR 35k" },
      { name: "Plain Pancake", description: "Classic plain pancake", price: "IDR 35k" },
      { name: "Pineapple / Banana Pancake", description: "Warm fruit pancake", price: "IDR 35k" },
      { name: "Sweet Papaya Salad", description: "Fresh papaya salad", price: "IDR 35k" },
      { name: "Boiled Water Spinach", description: "Steamed local water spinach", price: "IDR 50k" },
    ],
  },
  {
    category: "Drinks & Juices",
    items: [
      { name: "Iced Young Coconut", description: "With palm sugar (25k) or plain (20k)", price: "IDR 20-25k" },
      { name: "Coconut in Shell", description: "Fresh whole young coconut", price: "IDR 35k" },
      { name: "Fresh Juices", description: "Orange, Pineapple, Watermelon, Banana, Melon, Avocado, or Mango", price: "IDR 25k" },
      { name: "Mixed Fruit Juice", description: "Blend of seasonal fruits", price: "IDR 35k" },
      { name: "Soda Gembira", description: "Sweet soda with condensed milk and syrup", price: "IDR 35k" },
      { name: "Mineral Water", description: "Medium (10k) / Large (20k)", price: "IDR 10-20k" },
      { name: "Hot Drinks", description: "Lombok Coffee (10k), Hot Ginger w/ Palm Sugar (25k), Malay Tea (35k)", price: "IDR 10-35k" },
      { name: "Soft Drinks", description: "Coca-Cola, Zero, Sprite, Fanta", price: "IDR 25k" },
    ],
  },
];

export default function MenuFlipbook2Page() {
  return (
    <MenuFlipbook
      menuData={tanjungBiasMenu}
      locationName="Tanjung Bias"
      coverSubtitle="Coastal Dining Experience"
      backCoverLocation="Tanjung Bias, Lombok"
      backHref="/tanjung-bias"
      backLabel="Back to Yessy Tanjung Bias"
      otherMenuHref="/menu-flipbook"
      otherMenuLabel="Switch to Senggigi Menu"
    />
  );
}
