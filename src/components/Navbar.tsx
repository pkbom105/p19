"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Store", href: "/store" },
  { label: "Plan", href: "/plan" },
  { label: "About Us", href: "/aboutus" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!isHome) return;

    let lastScrollY = 0;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  if (isHome) {
    return (
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-end gap-12 mt-10">
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
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-5">
        <Link href="/">
          <Image
            src="/image/logo2-p19.png"
            alt="P19 Logo"
            width={100}
            height={35}
            className="object-contain"
            style={{ width: "auto", height: 100 }}
          />
        </Link>
        <div className="flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xl font-bold text-black hover:text-gray-600 transition-colors"
              style={{ fontWeight: 700 }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}