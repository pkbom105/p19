import StoreTemplate from "@/components/StoreTemplate";

const storeData = {
  logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Caf%C3%A9_Amazon_logo.svg/1200px-Caf%C3%A9_Amazon_logo.svg.png",
  title: "Cafe Amazon",
  subtitle: "ร้านกาแฟสัญชาติไทย",
  description:
    "คาเฟ่อเมซอน พร้อมให้บริการเครื่องดื่มคุณภาพจากเมล็ดกาแฟคัดสรร บรรยากาศสบาย ๆ เหมาะสำหรับพักผ่อนหรือทำงาน",
  time: "06:00 - 22:00 น.",
  heroImage: "/store/amazon/a4.jpg",
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
    "/store/amazon/a1.jpg",
    "/store/amazon/a2.jpg",
    "/store/amazon/a3.jpg",
    "/store/amazon/a4.jpg",
  ],
};

export default function CafeAmazonPage() {
  return <StoreTemplate store={storeData} />;
}