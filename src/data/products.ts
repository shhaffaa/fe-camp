// src/data/products.ts
export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;          // dalam IDR
  image: string;          // path ke public/, contoh "/products/keril-40l.webp"
  imageW: number;         // width px
  imageH: number;         // height px
  category: "Backpack" | "Tent" | "Footwear" | "Apparel" | "Accessory";
  badge?: string;         // contoh: "Baru", "Promo"
  description: string;
};

export const products: Product[] = [
  {
    id: "p001",
    slug: "keril-40l-summit",
    name: "Keril 40L Summit Pro",
    price: 749000,
    image: "/products/keril-40l-summit-800.webp",
    imageW: 800,
    imageH: 800,
    category: "Backpack",
    badge: "Baru",
    description: "Ransel 40L ringan, back panel breathable, raincover included."
  },
  {
    id: "p002",
    slug: "sepatu-trail-grip",
    name: "Sepatu Trail Grip",
    price: 599000,
    image: "/products/sepatu-trail-grip-800.webp",
    imageW: 800,
    imageH: 800,
    category: "Footwear",
    description: "Sol agresif, upper breathable, cocok untuk trek basah."
  },
  {
    id: "p003",
    slug: "tenda-2p-lite",
    name: "Tenda 2P Lite",
    price: 1299000,
    image: "/products/tenda-2p-lite-800.webp",
    imageW: 800,
    imageH: 800,
    category: "Tent",
    badge: "Promo",
    description: "Tenda 2 orang, double-layer, berat 2.1 kg, setup cepat."
  },
  {
    id: "p004",
    slug: "jaket-windbreaker",
    name: "Jaket Windbreaker",
    price: 349000,
    image: "/products/jaket-windbreaker-800.webp",
    imageW: 800,
    imageH: 800,
    category: "Apparel",
    description: "Windproof & water-repellent, ringan buat hiking harian."
  },
  {
    id: "p005",
    slug: "trekking-pole-carbon",
    name: "Trekking Pole Carbon",
    price: 299000,
    image: "/products/trekking-pole-carbon-800.webp",
    imageW: 800,
    imageH: 800,
    category: "Accessory",
    description: "Batang karbon, adjustable, shock-absorbing."
  },
  {
    id: "p006",
    slug: "sleeping-bag-compact",
    name: "Sleeping Bag Compact",
    price: 459000,
    image: "/products/sleeping-bag-compact-800.webp",
    imageW: 800,
    imageH: 800,
    category: "Accessory",
    description: "Suhu nyaman 10–15°C, ringan dan mudah dikemas."
  }
];
