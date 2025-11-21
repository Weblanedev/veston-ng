"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { getTotalItems } = useCart();
  const pathname = usePathname();
  const totalItems = getTotalItems();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-secondary/60 bg-white/90 backdrop-blur-xl shadow-[0_10px_45px_rgba(11,28,46,0.08)] animate-slideDown">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex flex-col text-primary transition-all duration-300 hover:text-accent animate-slideInLeft"
        >
          <span className="text-2xl font-black tracking-wide">Veston</span>
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-charcoal/60 transition-all duration-300 group-hover:text-accent">
            Commerce
          </span>
        </Link>

        <div className="flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold uppercase tracking-wide transition-all duration-300 hover:scale-105 ${
                pathname === link.href
                  ? "text-accent"
                  : "text-charcoal hover:text-primary"
              }`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/checkout"
            className="relative flex items-center rounded-full border border-secondary/70 bg-white px-4 py-2 text-primary shadow-md transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-lg animate-slideInRight"
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
            <span className="ml-2 text-xs font-semibold tracking-wider">
              Cart
            </span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-white shadow-lg">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
