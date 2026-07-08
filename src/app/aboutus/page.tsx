import type { Metadata } from "next";
import Image from "next/image";
import OurStore from "@/components/OurStore";

export const metadata: Metadata = {
  title: "เกี่ยวกับเรา",
  description: "รู้จัก P19 Avenue — คอมมูนิตี้มอลล์บนถนนพุทธบูชา โดย บริษัท เบทเทอร์แลนด์ ดีเวลลอปเมนท์ จำกัด (BETTERLAND DEVELOPMENT CO., LTD.)",
  openGraph: {
    title: "เกี่ยวกับเรา | P19 Avenue",
    description: "รู้จัก P19 Avenue — คอมมูนิตี้มอลล์บนถนนพุทธบูชา",
  },
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#ebeae2" }}>
      {/* Section 1 */}
      <section className="w-full py-24 px-4 mt-30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          {/* Column 1 - Pic - 30% */}
          <div className="w-full md:w-[30%]">
            <div className="relative w-full aspect-[3/5] overflow-hidden rounded-xl">
              <Image
                src="/image/ab-1.png"
                alt="About us image 1"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover"
                loading="eager"
              />
            </div>
          </div>

          {/* Column 2 - Text - 70% */}
          <div className="w-full md:w-[70%] space-y-6 px-4 md:px-8">
            <h1
              className="font-black mb-8"
              style={{ fontSize: "60px", color: "#687369", fontFamily: "var(--font-sans)" }}
            >
              ABOUT US
            </h1>

            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                <span className="font-bold">ชื่อบริษัท:</span>{" "}
                บริษัท เบทเทอร์แลนด์ ดีเวลลอปเมนท์ จำกัด
              </p>
              <p>
                <span className="font-bold">Company Name:</span>{" "}
                BETTERLAND DEVELOPMENT CO., LTD.
              </p>
              <p>
                <span className="font-bold">ที่ตั้ง:</span>{" "}
                351/1 ถนนพุทธบูชา แขวงบางมด เขตจอมทอง กรุงเทพมหานคร 10150
              </p>
              <p>
                <a
                  href="https://maps.app.goo.gl/Yf98EhAWA79KUt9D6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>ดูบน Google Maps: P19 Avenue</span>
                </a>
              </p>
              <p>
                <span className="font-bold">อีเมล:</span>{" "}
                info.p19avenue@gmail.com
              </p>
              <p>
                <span className="font-bold">โทรศัพท์:</span>{" "}
                084 774 8475
              </p>
              <div className="pt-4 space-y-2">
                <a
                  href="https://line.me/R/ti/p/@431fqlea"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src="https://qr-official.line.me/gs/M_431fqlea_GW.png?oat_content=qr"
                    alt="LINE Official QR"
                    className="w-32 h-32 object-contain hover:opacity-80 transition-opacity"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>  
     
    </main>
  );
}