import StoreTemplate from "@/components/StoreTemplate";

const storeData = {
  title: "Velaa",
  subtitle: "ร้านอาหารเพื่อสุขภาพ & คาเฟ่",
  description:
    "VELAA เกิดจากความตั้งใจ อยากให้มื้อเช้าไม่ใช่แค่ \"อิ่ม\" แต่ \"มีความหมาย\" ขนมปังซาวร์โดว์อบใหม่ทุกวัน เพื่อสุขภาพเราใส่ใจทุกจาน เพื่อให้ทุกครั้งที่คุณมาที่นี่ เป็นช่วงเวลาแห่งการพักใจ VELAA—the time we taste",
  time: "7:00 - 20:00 น. เปิดทุกวัน",
  heroImage: "/store/velaa/v1.jpg",
  section2: {
    type: "menu" as const,
    items: [
      { name: "🥗 สลัดโรล", description: "ชิ้นโตๆ เนื้อแน่นๆ ผักล้นๆ เพื่อสุขภาพ มีทั้งหน้าร้านและจัดส่ง", price: "" },
      { name: "🍞 ขนมปังซาวร์โดว์", description: "อบใหม่ทุกวัน สุขภาพดี ใส่ใจทุกจาน", price: "" },
      { name: "🥤 เครื่องดื่ม", description: "สั่งซาวโดว์ อาหารและเครื่องดื่มได้", price: "" },
      { name: "📍 ที่อยู่", description: "Velaa พุทธบูชา 19 พุธบูชาซอย19 กรุงเทพฯ", price: "" },
      { name: "📞 โทรศัพท์", description: "082-5649924", price: "" },
      { name: "Line", description: "@velaa", price: "สั่งผ่าน app delivery หรือ ไลน์ @velaa" },
    ],
  },
  galleryImages: [
    "/store/velaa/v1.jpg",
    "/store/velaa/v2.jpg",
    "/store/velaa/v3.jpg",
    "/store/velaa/v1.jpg",
  ],
};

export default function VelaaPage() {
  return <StoreTemplate store={storeData} />;
}