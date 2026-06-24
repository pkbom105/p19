"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-black mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-4">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <Image
                src="/image/logo2-p19.png"
                alt="P19 Logo"
                width={120}
                height={40}
                className="object-contain mb-4"
                style={{ width: "auto", height: 60 }}
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              P19 Avenue — คอมมูนิตี้มอลล์บนถนนพุทธบูชา
              <br />
              The Neighborhood Mall ที่รวมร้านค้าและบริการไว้ในที่เดียว
            </p>
            <p className="text-gray-600 text-xs mt-4 leading-relaxed max-w-md">
              <span className="font-bold text-black">บริษัท เบทเทอร์แลนด์ ดีเวลลอปเมนท์ จำกัด</span>
              <br />
              <span className="text-gray-400">BETTERLAND DEVELOPMENT CO., LTD.</span>
              <br />
              351/1 ถนนพุทธบูชา แขวงบางมด เขตจอมทอง กรุงเทพมหานคร 10150
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Store", href: "/store" },
                { label: "Plan", href: "/plan" },
                { label: "About Us", href: "/aboutus" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-black transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="font-bold text-black">บริษัท เบทเทอร์แลนด์ ดีเวลลอปเมนท์ จำกัด</li>
              <li className="text-xs text-gray-400">BETTERLAND DEVELOPMENT CO., LTD.</li>
              <li className="mt-2">351/1 ถนนพุทธบูชา แขวงบางมด</li>
              <li>เขตจอมทอง กรุงเทพมหานคร 10150</li>
              <li className="mt-2">
                <a
                  href="https://www.facebook.com/p19avenue"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors"
                >
                  Facebook: P19 Avenue
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-8 pt-6 text-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} P19 Avenue. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}