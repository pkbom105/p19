"use client";

import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Store", href: "/store" },
  { label: "Plan", href: "/plan" },
  { label: "About Us", href: "/aboutus" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-end gap-12 mt-12 mr-50">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="text-xl font-bold text-white hover:text-white/80 transition-colors"
          style={{ fontWeight: 700 }}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}