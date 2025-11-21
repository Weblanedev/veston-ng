"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link href={`/products/${product.id}`}>
      <div className="group relative cursor-pointer overflow-hidden rounded-3xl border border-secondary/60 bg-cream/70 shadow-[0_25px_45px_rgba(15,28,46,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_35px_65px_rgba(15,28,46,0.15)]">
        <div className="relative h-80 overflow-hidden rounded-3xl bg-secondary/50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-charcoal">
            {product.category || "New"}
          </span>
        </div>
        <div className="space-y-3 p-6">
          <h3 className="text-xl font-bold text-primary transition-colors duration-300 group-hover:text-accent">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-accent">
              ₦{product.price.toLocaleString("en-NG")}
            </span>
            <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
              Veston
            </span>
          </div>
          <button
            onClick={handleAddToCart}
            className="w-full rounded-2xl bg-primary/90 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-primary hover:shadow-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}
