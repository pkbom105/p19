"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-black mt-auto" style={{ borderTop: "4px solid #ebeae2" }}>
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
                style={{ height: 60, width: "auto" }}
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
                  href="https://maps.app.goo.gl/Yf98EhAWA79KUt9D6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-black transition-colors"
                >
                  <MapPin size={16} color="#EA4335" />
                  <span>Google Maps: P19 Avenue</span>
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="https://www.facebook.com/p19avenue"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-black transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  <span>Facebook: P19 Avenue</span>
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="https://line.me/R/ti/p/@431fqlea"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-black transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#06C755"><path d="M19.364 10.254c0-2.394-3.118-4.354-6.864-4.354-3.746 0-6.864 1.96-6.864 4.354 0 2.15 2.488 3.928 5.762 4.258.224.047.532.144.61.332.066.16.043.412.02.576l-.001.001c-.003.023-.005.046-.01.068-.065.396-.383 1.552-.434 1.654-.068.136-.256.35-.115.428s.988.177 1.78.208c1.11.043 1.942.28 2.24.46.262.158.266.438.255.608v.002c0 .011-.002.023-.004.034-.03.21-.298 1.736-.41 1.994-.112.258-.056.386.224.386.532 0 2.05-.932 2.865-1.666 1.344-1.212 2.114-2.602 2.114-4.066v.002c.022-1.113-.088-2.18-.088-2.18zm-8.144 2.876s-.002 0-.004 0H9.174a.27.27 0 0 1-.27-.27V9.755c0-.15.12-.27.27-.27h.136c.15 0 .27.12.27.27v2.602h1.174c.15 0 .27.12.27.27v.136c0 .148-.12.27-.27.27h.003-.137zm1.888-.88h-1.04v.75c0 .155-.124.28-.28.28h-.14c-.156 0-.28-.125-.28-.28v-2.86c0-.155.124-.28.28-.28h.14c.156 0 .28.125.28.28v.88h1.04v-.88c0-.155.124-.28.28-.28h.14c.156 0 .28.125.28.28v2.86c0 .155-.124.28-.28.28h-.14c-.156 0-.28-.125-.28-.28v-.75zm2.398-2.27h.136c.15 0 .27.12.27.27v2.104c0 .15-.12.27-.27.27h-.136c-.15 0-.27-.12-.27-.27V10.25c0-.15.12-.27.27-.27zm1.56 3.482c-.186 0-.338-.152-.338-.338v-2.42c0-.186.152-.338.338-.338.186 0 .338.152.338.338v2.42c0 .186-.152.338-.338.338z"/></svg>
                  <span>LINE OA : P19 Avenue @431fqlea </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-6 text-center text-gray-500 text-xs" style={{ borderTop: "1px solid #ebeae2" }}>
          <p>&copy; {new Date().getFullYear()} P19 Avenue. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}