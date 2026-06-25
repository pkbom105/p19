import Image from "next/image";
import OurStore from "@/components/OurStore";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ebeae2" }}>
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
                <span className="font-bold">ชื่อบริษัท (ภาษาไทย):</span>{" "}
                บริษัท เบทเทอร์แลนด์ ดีเวลลอปเมนท์ จำกัด
              </p>
              <p>
                <span className="font-bold">ชื่อบริษัท (ภาษาอังกฤษ):</span>{" "}
                BETTERLAND DEVELOPMENT CO., LTD.
              </p>
              <p>
                <span className="font-bold">ที่ตั้ง:</span>{" "}
                351/1 ถนนพุทธบูชา แขวงบางมด เขตจอมทอง กรุงเทพมหานคร 10150
              </p>
            </div>
          </div>
        </div>
      </section>  
     
    </div>
  );
}