"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";
import { useRouter } from "next/navigation";
import { productsData } from "@/data/products";

export default function Home() {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const stats = [
    { label: "Repeat buyers", value: "82%" },
    { label: "Nationwide drops", value: "140+" },
    { label: "Avg. delivery", value: "72hrs" },
  ];

  // Get hero images from actual products (first 4 products)
  const heroImages = productsData.slice(0, 4);
  const currentProduct = heroImages[currentImageIndex];

  useEffect(() => {
    // Use first 6 products from the actual product data
    setFeaturedProducts(productsData.slice(0, 6));
  }, []);

  useEffect(() => {
    if (heroImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(interval);
    }
  }, [heroImages.length]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/products");
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] overflow-hidden text-white">
        <div className="absolute inset-0">
          {heroImages.map((product, index) => (
            <div
              key={product.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-primary/60 to-primary/90" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-28 md:px-6 lg:px-8">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full border border-white/40 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em]">
              Veston · Lagos
            </span>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Commerce for those who collect moments, not just things.
            </h1>
            <p className="text-lg text-white/85 md:text-xl">
              Veston curates limited-run pieces across interiors, tech, and
              lifestyle essentials — crafted with African sensibilities and
              shipped nationwide in 72 hours.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wide text-primary shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                Shop the Drop
              </Link>
              <button
                onClick={() => router.push("/about")}
                className="rounded-full border border-white/40 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:-translate-y-1 hover:border-white"
              >
                Learn About Veston
              </button>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur"
                >
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs uppercase tracking-widest text-white/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            {currentProduct && (
              <div className="max-w-lg rounded-2xl border border-white/20 bg-white/85 p-6 text-primary shadow-2xl backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-charcoal/60">
                  Featured
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">
                    {currentProduct.name}
                  </h2>
                  <p className="text-lg font-bold text-accent">
                    ₦{currentProduct.price.toLocaleString("en-NG")}
                  </p>
                </div>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  {currentProduct.description}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="relative z-10 mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-6 px-4 text-xs uppercase tracking-[0.5em] text-white/70">
          <span>Curated Drops</span>
          <span className="h-px w-6 bg-white/40" />
          <span>Ethical Sourcing</span>
          <span className="h-px w-6 bg-white/40" />
          <span>Express Delivery</span>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex justify-center gap-3 pb-8">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentImageIndex
                  ? "w-10 bg-accent"
                  : "w-4 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Search Products Section */}
      <section className="-mt-12 px-4 pb-12">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/60 bg-white/90 p-8 shadow-[0_25px_60px_rgba(15,28,46,0.1)] backdrop-blur">
          <div className="mb-6 flex flex-col gap-2 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-charcoal/60">
              find it faster
            </p>
            <h2 className="text-3xl font-bold text-primary">
              Search the Veston archive
            </h2>
          </div>
          <form
            onSubmit={handleSearch}
            className="flex flex-col gap-4 md:flex-row"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by color, mood, or product name..."
              className="flex-1 rounded-2xl border border-secondary px-6 py-4 text-base text-primary focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="rounded-2xl bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-primary/90"
            >
              Search
            </button>
          </form>
          <p className="mt-3 text-center text-sm text-gray-500">
            Tip: try “terracotta diffuser” or “matte black kettle”
          </p>
        </div>
      </section>

      {/* Featured Products Section - Enhanced */}
      <section className="bg-background px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-charcoal/60">
              this week’s edit
            </p>
            <h2 className="mt-4 text-4xl font-bold text-primary md:text-5xl">
              The Veston Featured Drop
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              A rotating ensemble of objects with utility, tactility, and quiet
              luxury. Limited quantities — once sold out, pieces move to the
              archive.
            </p>
          </div>
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/products"
              className="inline-flex items-center rounded-full border border-primary px-10 py-4 text-sm font-semibold uppercase tracking-wide text-primary transition hover:-translate-y-1 hover:bg-primary hover:text-white"
            >
              View the full collection →
            </Link>
          </div>
        </div>
      </section>

      {/* Veston experience */}
      <section className="bg-secondary/50 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-xs uppercase tracking-[0.4em] text-charcoal/60">
              the veston experience
            </p>
            <h3 className="mt-3 text-3xl font-bold text-primary">
              Designed for people who obsess over the details
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            {[
              {
                title: "Slow, Intentional Sourcing",
                description:
                  "We work directly with artisans and ethical factories to keep every piece traceable.",
              },
              {
                title: "Express Lagos Dispatch",
                description:
                  "Order by 2pm for same-day delivery within Lagos and 72-hour shipping nationwide.",
              },
              {
                title: "Seamless Checkout",
                description:
                  "Secure payments, saved preferences, and proactive concierge support on every order.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/60 bg-white/70 p-8 shadow-lg transition hover:-translate-y-1 hover:border-accent/60"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                  {index + 1}
                </div>
                <h4 className="text-xl font-semibold text-primary">
                  {item.title}
                </h4>
                <p className="mt-3 text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
