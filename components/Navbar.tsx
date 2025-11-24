"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { getTotalItems } = useCart();
  const pathname = usePathname();
  const totalItems = getTotalItems();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    // Close the mobile menu whenever the route changes
    setIsMenuOpen(false);
  }, [pathname]);

  const renderNavLinks = (className = "") =>
    navLinks.map((link, index) => (
      <Link
        key={link.href}
        href={link.href}
        className={`text-sm font-semibold uppercase tracking-wide transition-all duration-300 hover:scale-105 ${
          pathname === link.href
            ? "text-accent"
            : "text-charcoal hover:text-primary"
        } ${className}`}
        style={{ animationDelay: `${index * 80}ms` }}
      >
        {link.label}
      </Link>
    ));

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-secondary/60 bg-white/90 backdrop-blur-xl shadow-[0_10px_45px_rgba(11,28,46,0.08)] animate-slideDown">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group flex flex-col text-primary transition-all duration-300 hover:text-accent animate-slideInLeft"
          >
            <span className="text-2xl font-black tracking-wide">Veston</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-charcoal/60 transition-all duration-300 group-hover:text-accent sm:text-xs">
              Commerce
            </span>
          </Link>

          <div className="flex items-center gap-3 md:gap-6">
            <Link
              href="/checkout"
              className="relative flex items-center rounded-full border border-secondary/70 bg-white px-3 py-2 text-primary shadow-md transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-lg animate-slideInRight"
              aria-label="Go to cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <span className="ml-2 hidden text-xs font-semibold tracking-wider sm:inline">
                Cart
              </span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-white shadow-lg">
                  {totalItems}
                </span>
              )}
            </Link>

            <div className="hidden items-center space-x-8 md:flex">
              {renderNavLinks()}
            </div>

            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-secondary/70 text-primary shadow-md transition-all duration-300 hover:border-accent hover:text-accent md:hidden"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Toggle navigation menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="h-6 w-6"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6h16.5M3.75 12h16.5m-10.5 6h10.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="ml-auto flex h-full w-full max-w-xs flex-col gap-8 bg-white px-6 py-10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-primary">Menu</span>
              <button
                type="button"
                className="rounded-full border border-secondary/60 p-2 text-primary hover:border-accent hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close navigation"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col space-y-4">
              {renderNavLinks("text-base")}
            </div>

            <Link
              href="/checkout"
              className="mt-auto rounded-2xl bg-primary px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-primary/90"
            >
              Go to Checkout
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
