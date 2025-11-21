"use client";

import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail("");
    } else {
      toast.error("Please enter a valid email address");
    }
  };

  return (
    <footer className="mt-auto bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Copyright */}
          <div>
            <Link
              href="/"
              className="mb-4 block text-3xl font-black tracking-wide"
            >
              Veston
            </Link>
            <p className="mb-6 max-w-xs text-sm text-gray-300">
              Veston curates elevated essentials for modern African living —
              from statement interiors to everyday carry, each drop is sourced
              with intention.
            </p>
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">
              Made in Lagos • Shipping nationwide
            </p>
          </div>

          {/* Talk to Us */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Talk to us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-accent"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@veston.ng"
                  className="transition-colors hover:text-accent"
                >
                  support@veston.ng
                </a>
              </li>
              <li className="text-gray-400">1 Adedeji Adekola, Lekki Lagos.</li>
              <li className="text-gray-400">Monday - Saturday: 9AM - 7PM</li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Policies</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/privacy"
                  className="transition-colors hover:text-accent"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-return"
                  className="transition-colors hover:text-accent"
                >
                  Refund & Return Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Stay in the loop</h3>
            <p className="mb-4 text-sm text-gray-300">
              Receive early access to Veston drops, styling stories, and private
              sales.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition-colors hover:bg-accent/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-8 text-center text-xs uppercase tracking-[0.4em] text-gray-400">
          © {new Date().getFullYear()} Veston. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
