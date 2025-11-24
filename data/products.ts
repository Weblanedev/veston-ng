import { Product } from "@/types";

type ProductSeed = Omit<Product, "comingSoon"> & { comingSoon?: boolean };

const productSeeds: ProductSeed[] = [
  {
    id: "iphone17",
    name: "iPhone 17",
    description: "The latest iPhone with cutting-edge technology and stunning design.",
    detailedDescription:
      "The iPhone 17 features a revolutionary A18 Pro chip, advanced camera system with ProRAW capabilities, and an all-day battery life. With its stunning 6.7-inch Super Retina XDR display and Ceramic Shield front cover, it's built to last. Experience the future of smartphones with 5G connectivity, Face ID, and iOS 18.",
    price: 2500000,
    color: "Space Black",
    spec: "256GB Storage",
    image: "/productImg/iphone17.jpg",
    availableColors: ["Space Black", "Titanium Blue", "Natural Titanium", "White"],
    availableSizes: ["128GB", "256GB", "512GB", "1TB"],
  },
  {
    id: "applewatch9",
    name: "Apple Watch Series 9",
    description: "The most advanced Apple Watch with powerful health and fitness features.",
    detailedDescription:
      "Apple Watch Series 9 features a brighter always-on display, advanced health sensors, and the S9 SiP chip for faster performance. Track your workouts, monitor your health, and stay connected. Water resistant and built for active lifestyles.",
    price: 580000,
    color: "Midnight",
    spec: "GPS + Cellular",
    image: "/productImg/applewatch9.jpg",
    availableColors: ["Midnight", "Starlight", "Pink", "Product Red", "Blue"],
    availableSizes: ["41mm", "45mm"],
  },
  {
    id: "applewatch",
    name: "Apple Watch Series 8",
    description: "Advanced health monitoring with a sleek, modern design.",
    detailedDescription:
      "Apple Watch Series 8 features temperature sensing, crash detection, and advanced health metrics. With a durable design and comprehensive fitness tracking, it's your perfect health companion.",
    price: 480000,
    color: "Silver",
    spec: "GPS",
    image: "/productImg/applewatch.jpg",
    availableColors: ["Silver", "Space Gray", "Gold", "Blue"],
    availableSizes: ["41mm", "45mm"],
  },
  {
    id: "macbookm4",
    name: "MacBook Pro M4",
    description: "Ultimate performance with the latest M4 chip for professionals.",
    detailedDescription:
      "MacBook Pro M4 features the groundbreaking M4 chip for unprecedented performance. With a stunning Liquid Retina XDR display, up to 22 hours of battery life, and advanced cooling system. Perfect for video editing, programming, and creative work.",
    price: 3200000,
    color: "Space Gray",
    spec: "16-inch, 512GB",
    image: "/productImg/macbookm4.jpg",
    availableColors: ["Space Gray", "Silver"],
    availableSizes: ["14-inch", "16-inch"],
  },
  {
    id: "macbookm3",
    name: "MacBook Pro M3",
    description: "Powerful M3 chip delivers exceptional performance for demanding tasks.",
    detailedDescription:
      "MacBook Pro M3 combines incredible performance with efficiency. Features a brilliant Liquid Retina display, advanced camera and audio systems, and all-day battery life. Ideal for creative professionals and developers.",
    price: 2800000,
    color: "Space Gray",
    spec: "14-inch, 512GB",
    image: "/productImg/macbookm3.jpg",
    availableColors: ["Space Gray", "Silver"],
    availableSizes: ["14-inch", "16-inch"],
  },
  {
    id: "macbookcharger",
    name: "MacBook Charger",
    description: "Official MagSafe charger for MacBook with fast charging.",
    detailedDescription:
      "Official Apple MagSafe charger with 96W power delivery. Features magnetic connection for secure attachment and fast charging. Compatible with all MacBook models.",
    price: 45000,
    color: "White",
    spec: "96W",
    image: "/productImg/macbookcharger.jpg",
    availableColors: ["White"],
  },
  {
    id: "ps5",
    name: "PlayStation 5",
    description: "Next-generation gaming console with stunning graphics and performance.",
    detailedDescription:
      "PlayStation 5 delivers next-generation gaming with ray tracing, 4K gaming, and ultra-fast SSD loading. Features the DualSense wireless controller with haptic feedback and adaptive triggers. Experience gaming like never before.",
    price: 650000,
    color: "White",
    spec: "825GB SSD",
    image: "/productImg/ps5.jpg",
    availableColors: ["White"],
  },
    {
    id: "iphone16",
    name: "iPhone 16",
    description: "Powerful performance meets elegant design in Apple's flagship device.",
    detailedDescription:
      "The iPhone 16 delivers exceptional performance with the A17 Pro chip. Features a stunning 6.1-inch display, advanced triple-camera system, and all-day battery life. Perfect for photography enthusiasts and power users alike.",
    price: 2100000,
    color: "Blue",
    spec: "128GB Storage",
    image: "/productImg/iphone16.jpg",
    availableColors: ["Blue", "Pink", "Yellow", "Green", "Black"],
    availableSizes: ["128GB", "256GB", "512GB"],
  },

  {
    id: "airpods-pro-2",
    name: "AirPods Pro (2nd Gen)",
    description: "Premium earbuds with active noise cancellation and Spatial Audio.",
    detailedDescription:
      "AirPods Pro (2nd generation) introduce the H2 chip for smarter noise cancellation, personalized Spatial Audio, and Adaptive Transparency. Enjoy up to 6 hours of listening on a single charge with MagSafe charging capability and IPX4 sweat and water resistance.",
    price: 310000,
    color: "White",
    spec: "MagSafe case · H2 chip",
    image: "/productImg/airpodpro.jpg",
    availableColors: ["White"],
  },
  {
    id: "echo-dot-5",
    name: "Amazon Echo Dot (5th Gen)",
    description: "Compact smart speaker with Alexa and improved bass.",
    detailedDescription:
      "The Echo Dot 5th Gen delivers clearer vocals, deeper bass, and Alexa voice control in a compact form. Manage your smart home, set reminders, and stream music hands-free using Wi-Fi and Bluetooth connectivity.",
    price: 120000,
    color: "Deep Sea Blue",
    spec: "Wi-Fi · Bluetooth · Alexa",
    image: "/productImg/amazondotspeaker.jpg",
    availableColors: ["Deep Sea Blue", "Charcoal", "Glacier White"],
  },
  {
    id: "homepod-3",
    name: "Apple HomePod 3",
    description: "Rich, room-filling audio with Siri smart home control.",
    detailedDescription:
      "Apple HomePod 3 pairs custom-engineered woofers with room-sensing technology for immersive audio. Control your HomeKit accessories, serve as a home hub, and hand off music seamlessly from your iPhone.",
    price: 540000,
    color: "Midnight",
    spec: "Wi-Fi 6 · Thread · Siri",
    image: "/productImg/applepod3.jpg",
    availableColors: ["Midnight", "White"],
  },
  {
    id: "nest-smart-speaker",
    name: "Google Nest Smart Speaker",
    description: "Voice-forward speaker powered by Google Assistant.",
    detailedDescription:
      "Google Nest Smart Speaker brings together rich audio, Google Assistant, and Matter-ready smart home control. Stream music from YouTube Music or Spotify, broadcast messages, and manage routines with simple voice commands.",
    price: 190000,
    color: "Chalk",
    spec: "Wi-Fi · Matter-ready",
    image: "/productImg/googlesmartspeaker.jpg",
    availableColors: ["Chalk", "Charcoal"],
  },
  {
    id: "vista-smart-glasses",
    name: "Vista Smart Glasses",
    description: "Lightweight AR glasses with heads-up notifications.",
    detailedDescription:
      "Vista Smart Glasses blend tinted lenses with discreet AR projection for glanceable navigation, messages, and fitness stats. Features dual speakers, touch gesture controls, and eight hours of mixed-use battery life.",
    price: 520000,
    color: "Graphite",
    spec: "AR display · Bluetooth 5.3",
    image: "/productImg/smarteyesglass.jpg",
    availableColors: ["Graphite", "Matte Black"],
    availableSizes: ["Standard"],
  },
 
];

const orderToken = (id: string) =>
  Array.from(id).reduce((sum, char) => sum + char.charCodeAt(0), 0) % 11;

const orderedSeeds = [...productSeeds].sort((a, b) => {
  const diff = orderToken(a.id) - orderToken(b.id);
  if (diff !== 0) return diff;
  const nameDiff = a.name.localeCompare(b.name);
  if (nameDiff !== 0) return nameDiff;
  return a.id.localeCompare(b.id);
});

export const productsData: Product[] = orderedSeeds.map((product) => ({
  ...product,
  comingSoon: product.comingSoon ?? true,
}));
