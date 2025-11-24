"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Product } from "@/types";
import { productsData } from "@/data/products";
import ReadyLabel from "@/components/ReadyLabel";
import { useCart } from "@/context/CartContext";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");

  useEffect(() => {
    const foundProduct = productsData.find((p) => p.id === params.id);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedColor(foundProduct.availableColors[0]);
      if (
        foundProduct.availableSizes &&
        foundProduct.availableSizes.length > 0
      ) {
        setSelectedSize(foundProduct.availableSizes[0]);
      }
    }
  }, [params.id]);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-primary">
            Product Not Found
          </h1>
          <button
            onClick={() => router.push("/products")}
            className="rounded-full border border-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary transition hover:bg-primary hover:text-white"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!product) return;

    const productToAdd = {
      ...product,
      selectedColor: selectedColor || product.color,
      selectedSize: selectedSize || product.spec,
    };
    addToCart(productToAdd);
    setTimeout(() => {
      router.push("/checkout");
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <button
          onClick={() => router.back()}
          className="mb-8 flex items-center text-primary transition-all duration-300 hover:scale-105 hover:text-accent animate-slideInLeft"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back
        </button>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Product Image */}
          <div className="relative animate-slideInLeft">
            <div className="relative h-[360px] overflow-hidden rounded-[32px] border border-secondary bg-secondary/70 shadow-[0_35px_70px_rgba(15,28,46,0.15)] transition-shadow duration-300 sm:h-[420px] md:h-[500px] lg:h-[600px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="animate-slideInRight">
            <h1 className="mb-4 text-4xl font-bold text-primary">
              {product.name}
            </h1>
            <p className="mb-6 text-2xl font-bold text-accent">
              ₦{product.price.toLocaleString("en-NG")}
            </p>

            <div className="mb-8">
              <h3 className="mb-4 text-lg font-semibold text-primary">
                Description
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {product.detailedDescription || product.description}
              </p>
            </div>

            {/* Color Selection */}
            {product.availableColors && product.availableColors.length > 1 && (
              <div className="mb-6">
                <h3 className="mb-3 text-lg font-semibold text-primary">
                  Color: <span className="font-normal">{selectedColor}</span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.availableColors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`rounded-2xl border-2 px-6 py-2 transition-all duration-300 hover:scale-105 active:scale-95 ${
                        selectedColor === color
                          ? "scale-105 border-primary bg-primary text-white shadow-lg"
                          : "border-secondary bg-white text-primary hover:border-primary"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.availableSizes && product.availableSizes.length > 0 && (
              <div className="mb-6">
                <h3 className="mb-3 text-lg font-semibold text-primary">
                  Size: <span className="font-normal">{selectedSize}</span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.availableSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`rounded-2xl border-2 px-6 py-2 transition-all duration-300 hover:scale-105 active:scale-95 ${
                        selectedSize === size
                          ? "scale-105 border-primary bg-primary text-white shadow-lg"
                          : "border-secondary bg-white text-primary hover:border-primary"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Spec */}
            <div className="mb-6">
              <h3 className="mb-2 text-lg font-semibold text-primary">
                Specification
              </h3>
              <p className="text-gray-700">{product.spec}</p>
            </div>

            {/* Availability */}
            {product.comingSoon ? (
              <ReadyLabel className="mt-8" />
            ) : (
              <button
                onClick={handleAddToCart}
                className="mt-6 w-full rounded-2xl bg-primary px-6 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-xl"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
