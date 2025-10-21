export const products = [
  {
    id: 1,
    name: "Snake Plant",
    price: 25,
    description:
      "Thrives on neglect, perfect for beginners. Known for its air-purifying qualities.",
    //image: "/plants/snake-plant.png",
    image: new URL("/plants/snake-plant.png", import.meta.url).href,
    category: "Air Purifying",
  },
  {
    id: 2,
    name: "Monstera Deliciosa",
    price: 45,
    description:
      "Iconic for its split leaves. A statement plant that brings a tropical vibe.",
    //image: "/plants/monstera.png",
    image: new URL("/plants/monstera.png", import.meta.url).href,

    category: "Air Purifying",
  },
  {
    id: 3,
    name: "Lavender",
    price: 15,
    description: "A beautiful, fragrant herb known for its calming properties.",
    //image: "/plants/lavender.png",
    image: new URL("/plants/lavender.png", import.meta.url).href,
    category: "Aromatic",
  },
  {
    id: 4,
    name: "Eucalyptus",
    price: 20,
    description: "Known for its distinctive scent, often used in aromatherapy.",
    //image: "/plants/eucalyptus.png",
    image: new URL("/plants/eucalyptus.png", import.meta.url).href,
    category: "Aromatic",
  },
  {
    id: 5,
    name: "Peace Lily",
    price: 30,
    description:
      "Elegant plant with white blooms that is excellent at cleaning the air.",
    //image: "/plants/peace-lily.png",
    image: new URL("/plants/peace-lily.png", import.meta.url).href,
    category: "Air Purifying",
  },
  {
    id: 6,
    name: "Rosemary",
    price: 15,
    description: "A culinary and aromatic herb that is easy to grow.",
    //image: "/plants/rosemary.png",
    image: new URL("/plants/rosemary.png", import.meta.url).href,
    category: "Aromatic",
  },
];
