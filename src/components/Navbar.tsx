"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

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
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
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
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const navLinks = (colorClass: string) => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`${colorClass} transition-colors text-xl font-bold`}
          style={{ fontWeight: 700 }}
        >
          {item.label}
        </Link>
      ))}
    </>
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        } ${isHome ? "" : "bg-white"}`}
      >
        <div className={`max-w-7xl mx-auto flex items-center justify-between ${isHome ? "mt-6 md:mt-10 px-6" : "px-4 py-4"}`}>
          <Link href="/">
            <Image
              src={isHome ? "/image/p19-logo-02w.png" : "/image/logo2-p19.png"}
              alt="P19 Logo"
              width={160}
              height={56}
              style={{ height: 56, width: "auto" }}
              priority={isHome}
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks(isHome ? "text-white hover:text-white/80" : "text-black hover:text-gray-600")}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors z-[60] ${
              isHome ? "text-white" : "text-black"
            }`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          } ${isHome ? "bg-black/50" : "bg-black/30"}`}
          onClick={closeMobile}
        />

        {/* Menu panel */}
        <div
          className={`absolute left-4 right-4 top-20 transition-all duration-300 ${
            mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className={`rounded-2xl shadow-xl overflow-hidden ${
            isHome ? "bg-white/90 backdrop-blur-md" : "bg-white border border-gray-100"
          }`}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`block px-6 py-4 text-lg font-bold transition-colors ${
                  isHome
                    ? "text-gray-800 hover:bg-gray-100"
                    : "text-gray-800 hover:bg-gray-50"
                }`}
                style={{ fontWeight: 700 }}
                onClick={closeMobile}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}