import Image from "next/image";
import OurStore from "@/components/OurStore";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ebeae2" }}>
      {/* Section 1 */}
      <section className="w-full py-24 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* Column 1 - Picture */}
          <div className="relative w-[300px] h-[500px] mx-auto overflow-hidden rounded-xl">
            <Image
              src="/image/ab-1.png"
              alt="About us image 1"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>

          {/* Column 2 - Text */}
          <div className="text-center md:text-left px-4">
            <h2 className="text-4xl font-black text-gray-800 mb-6">About P19 Avenue</h2>
            <br></br>
            <h5 className="text-2xl font-black text-gray-800 mb-6">The Neighborhood Mall</h5>
            <p className="text-lg text-gray-600 leading-relaxed">
              โครงการคอมมูนิตี้มอลล์บนถนนพุทธบูชา 
            </p><br></br>
            <h5 className="text-2xl font-black text-gray-800 mb-6">ร้านค้าที่เปิดเเล้ว</h5>
            <p className="text-lg text-gray-600 leading-relaxed">
              จำนวน 6 ร้านค้า  
            </p><br></br>
            <h5 className="text-2xl font-black text-gray-800 mb-6">สถานที่ชุมชนใหล้เคียง</h5>
            <p className="text-md text-gray-600 leading-relaxed">
              - มหาวิทยาลัยพระจอมเกล้าธนบุรี (KMUTT) 4.9 กม. <br></br>
              - โรงเรียนรุ่งอรุณ 1.2 กม.<br></br>
              - หมู่บ้านชิชา 1.7 กม. <br></br>
              - ถนนพระราม-2  1.8 กม.
            </p>
          </div>

          {/* Column 3 - Picture */}
          <div className="relative w-[300px] h-[500px] mx-auto overflow-hidden rounded-xl">
            <Image
              src="/image/ab-2.png"
              alt="About us image 2"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 2 - Shop Layout */}
      <section className="w-full bg-white py-18 px-4 ">
        <div className="max-w-6xl mx-auto ">
          <h2 className="text-4xl font-black text-gray-800 text-left mb-8">Shop Layout</h2>
          <div className="relative w-full aspect-[3/1] overflow-hidden rounded-xl">
            <Image
              src="/image/layout1-p19.png"
              alt="Shop layout"
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Section 3 - Our Store */}
      <OurStore />

      {/* Section 4 - Location */}
      <section className="w-full bg-white py-10 px-10">
        <div className="max-w-6xl mx-auto mb-10">
          <h2 className="text-4xl font-black text-gray-800 mt-10 text-left">P19 Avenue Location</h2>
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl ">
            <Image
              src="/image/gmap-p19.png"
              alt="Shop layout"
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>          
        </div>
      </section>
    </div>
  );
}