import Image from "next/image";
import OurStore from "@/components/OurStore";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ebeae2" }}>
     
      {/* Section 1 - Shop Layout */}
      <section className="w-full bg-white py-18 px-4 mt-30 ">
        <div className="max-w-6xl mx-auto ">
          <h2 className="text-4xl font-black text-gray-800 text-left mb-8">SHOP LAYOUT</h2>
          <div className="relative w-full aspect-[3/1] overflow-hidden rounded-xl">
            <Image
              src="/image/layout1-p19.png"
              alt="Shop layout"
              fill
              sizes="100vw"
              className="object-contain"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Section 3 - Our Store */}
      <OurStore />
      
    </div>
  );
}