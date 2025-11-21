"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { productsData } from "@/data/products";
import { Product } from "@/types";

function ProductsContent() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const allProducts = productsData;
    setProducts(allProducts);

    const search = searchParams.get("search");
    if (search) {
      setSearchQuery(search);
      const filtered = allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(search.toLowerCase()) ||
          product.description.toLowerCase().includes(search.toLowerCase()) ||
          product.color.toLowerCase().includes(search.toLowerCase()) ||
          product.spec.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(allProducts);
      setSearchQuery("");
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          product.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.spec.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <div className="min-h-screen bg-background px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-primary">
          Our Products
        </h1>

        {/* Search Bar */}
        <div className="mx-auto mb-12 max-w-2xl">
          <form
            onSubmit={handleSearch}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products..."
              className="flex-1 rounded-2xl border border-secondary px-6 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="rounded-2xl bg-primary px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-primary/90"
            >
              Search
            </button>
          </form>
        </div>

        {filteredProducts.length > 0 ? (
          <>
            {searchQuery && (
              <p className="mb-6 text-center text-gray-600">
                Found {filteredProducts.length} product
                {filteredProducts.length !== 1 ? "s" : ""} matching "
                {searchQuery}"
              </p>
            )}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-slideUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="py-16 text-center">
            <p className="mb-4 text-xl text-gray-600">
              No products found matching "{searchQuery}"
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setFilteredProducts(products);
              }}
              className="rounded-full border border-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary transition hover:bg-primary hover:text-white"
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background px-4 py-12">
          <div className="mx-auto max-w-7xl">
            <h1 className="mb-12 text-center text-4xl font-bold text-primary">
              Our Products
            </h1>
            <div className="text-center text-gray-600">Loading...</div>
          </div>
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
