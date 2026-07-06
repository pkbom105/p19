import StoreTemplate from "@/components/StoreTemplate";

const storeData = {
  logo: "/store/logo-tenant-B1-Cafe%20Amazon.jpg",
  title: "Cafe Amazon",
  subtitle: "ร้านกาแฟสัญชาติไทย",
  description:
    "คาเฟ่อเมซอน พร้อมให้บริการเครื่องดื่มคุณภาพจากเมล็ดกาแฟคัดสรร บรรยากาศสบาย ๆ เหมาะสำหรับพักผ่อนหรือทำงาน",
  time: "06:00 - 19:00 น.",
  hours: "Everyday  06:00 - 19:00",
  phone: "063-258-1458",
  email: "",
  lineId: "",
  instagram: "",
  facebookUrl: "https://www.facebook.com/p/Cafe-Amazon-P19-Avenue-61553828324308/",
  facebookName: "Cafe Amazon - P19 Avenue",
  heroImage: "/store/amazon/a4.jpg",
  section2: {
    type: "menu" as const,
    items: [
      { name: "อเมริกาโน่", description: "กาแฟดำเข้มข้น สูตรพิเศษ", price: "65 บาท" },
      { name: "ลาเต้", description: "กาแฟนุ่ม ๆ กับนมสด", price: "75 บาท" },
      { name: "มอคค่า", description: "กาแฟผสมช็อคโกแลต", price: "80 บาท" },
    ],
    images: [
      "/store/amazon/q2.png",
      "/store/amazon/q1.png",
      "/store/amazon/q3.png",
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