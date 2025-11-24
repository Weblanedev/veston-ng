"use client";

import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-auto bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr_1fr]">
          {/* Logo and Copyright */}
          <div className="text-center sm:text-left md:pr-10">
            <Logo size="sm" tone="light" className="mx-auto mb-4 sm:mx-0" />
            <p className="mb-6 text-sm text-gray-300">
              Veston curates elevated essentials for modern African living —
              from statement interiors to everyday carry, each drop is sourced
              with intention.
            </p>
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">
              Made in Lagos • Shipping nationwide
            </p>
          </div>

          {/* Talk to Us */}
          <div className="text-center sm:text-left">
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
                  href="mailto:info@vestontechnologies.com"
                  className="transition-colors hover:text-accent"
                >
                  info@vestontechnologies.com
                </a>
              </li>
              <li className="text-gray-400">
                No 1 Dynasty Residence, Orchid Road, Lagos.
              </li>
              <li className="text-gray-400">Monday - Saturday: 9AM - 7PM</li>
            </ul>
          </div>

          {/* Policies */}
          <div className="text-center sm:text-left">
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
        </div>

        <p className="mt-10 border-t border-white/10 pt-8 text-center text-[11px] uppercase tracking-[0.35em] text-gray-400 sm:text-xs">
          © {new Date().getFullYear()} Veston. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
