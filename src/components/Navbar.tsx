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
      if (isHome) {
        setVisible(window.scrollY < window.innerHeight);
      } else {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 20) {
          setVisible(false);
        } else {
          setVisible(true);
        }
        lastScrollY = currentScrollY;
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

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
        <div className={`max-w-6xl mx-auto flex items-center justify-between ${isHome ? "px-6 pt-6 md:pt-10" : "px-4 py-4"}`}>
          <Link href="/" className="flex items-center">
            <Image
              src={isHome ? "/image/p19-1w.png" : "/image/p19-1.png"}
              alt="P19 Logo"
              width={200}
              height={100}
              className={isHome ? "h-[60px] md:h-[120px] w-auto" : ""}
              style={isHome ? undefined : { height: 120, width: "auto" }}
              priority={isHome}
            />
            <span className={`font-['var(--font-poppins)'] ml-4 mt-16 leading-none ${isHome ? "text-white text-[0.75rem] md:text-[1.5rem]" : "text-black"}`} style={{ fontFamily: "var(--font-poppins), sans-serif", fontWeight: 900 }}>
              Phutha<br />Bucha 19
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center mt-25 gap-10">
            {navLinks(isHome ? "text-white hover:text-white/80" : "text-black hover:text-gray-600")}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isHome ? "z-30 text-white" : "z-[60] text-black"
            }`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 z-100 transition-all duration-300 ${
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