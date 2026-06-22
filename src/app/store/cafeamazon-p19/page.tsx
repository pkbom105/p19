import StoreTemplate from "@/components/StoreTemplate";

const storeData = {
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Caf%C3%A9_Amazon_logo.svg/1200px-Caf%C3%A9_Amazon_logo.svg.png",
  title: "Cafe Amazon",
  subtitle: "ร้านกาแฟสัญชาติไทย",
  description:
    "คาเฟ่อเมซอน พร้อมให้บริการเครื่องดื่มคุณภาพจากเมล็ดกาแฟคัดสรร บรรยากาศสบาย ๆ เหมาะสำหรับพักผ่อนหรือทำงาน",
  time: "06:00 - 22:00 น.",
  heroImage:
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
  section2: {
    type: "menu" as const,
    items: [
      { name: "อเมริกาโน่", description: "กาแฟดำเข้มข้น สูตรพิเศษ", price: "65 บาท" },
      { name: "ลาเต้", description: "กาแฟนุ่ม ๆ กับนมสด", price: "75 บาท" },
      { name: "มอคค่า", description: "กาแฟผสมช็อคโกแลต", price: "80 บาท" },
      { name: "ชาเขียวปั่น", description: "ชาเขียวมัทฉะปั่นสดชื่น", price: "75 บาท" },
      { name: "น้ำผลไม้สด", description: "น้ำส้มคั้นสด 100%", price: "60 บาท" },
      { name: "เบเกอรี่", description: "ขนมอบสดใหม่ทุกวัน", price: "45-90 บาท" },
    ],
  },
  galleryImages: [
    "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=450&fit=crop",
    "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&h=450&fit=crop",
    "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&h=450&fit=crop",
    "https://images.unsplash.com/photo-1500099817043-86d46000d58f?w=600&h=450&fit=crop",
  ],
};

export default function CafeAmazonPage() {
  return <StoreTemplate store={storeData} />;
}