"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const desktopNav = (
    <div className="hidden md:flex items-center gap-12">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`text-xl font-bold transition-colors ${
            isHome ? "text-white hover:text-white/80" : "text-black hover:text-gray-600"
          }`}
          style={{ fontWeight: 700 }}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );

  const mobileMenuButton = (
    <button
      onClick={() => setMobileOpen(!mobileOpen)}
      className={`md:hidden p-2 rounded-lg transition-colors ${
        isHome ? "text-white" : "text-black"
      }`}
      aria-label={mobileOpen ? "Close menu" : "Open menu"}
    >
      {mobileOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  );

  const mobileMenu = (
    <div
      className={`md:hidden fixed left-0 right-0 z-50 transition-all duration-300 overflow-hidden ${
        mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
      } ${isHome ? "top-[120px]" : "top-[100px]"}`}
    >
      <div
        className={`mx-4 rounded-2xl shadow-xl overflow-hidden ${
          isHome ? "bg-white/70 backdrop-blur-md" : "bg-white border border-gray-100"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`block px-6 py-4 text-lg font-bold transition-colors ${
              isHome
                ? "text-gray-600 hover:bg-white/80"
                : "text-gray-800 hover:bg-gray-50"
            }`}
            style={{ fontWeight: 700 }}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );

  if (isHome) {
    return (
      <>
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center mt-10 px-6">
            <Link href="/">
              <Image
                src="/image/logo-p19-white.png"
                alt="P19 Logo"
                width={200}
                height={70}
                style={{ height: 70, width: "auto" }}
                priority
              />
            </Link>
            {desktopNav}
            {mobileMenuButton}
          </div>
        </nav>
        {mobileMenu}
      </>
    );
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-5">
          <Link href="/">
            <Image
              src="/image/logo2-p19.png"
              alt="P19 Logo"
              width={200}
              height={70}
              style={{ height: 70, width: "auto" }}
            />
          </Link>
          {desktopNav}
          {mobileMenuButton}
        </div>
      </nav>
      {mobileMenu}
    </>
  );
}