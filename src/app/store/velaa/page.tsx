import StoreTemplate from "@/components/StoreTemplate";

const storeData = {
  logo: "/store-img/logo-tenant-A3-Velaa.jpg",
  title: "Velaa",
  subtitle: "ร้านอาหารเพื่อสุขภาพ & คาเฟ่",
  description:
    "VELAA เกิดจากความตั้งใจ อยากให้มื้อเช้าไม่ใช่แค่ \"อิ่ม\" แต่ \"มีความหมาย\" ขนมปังซาวร์โดว์อบใหม่ทุกวัน เพื่อสุขภาพเราใส่ใจทุกจาน เพื่อให้ทุกครั้งที่คุณมาที่นี่ เป็นช่วงเวลาแห่งการพักใจ VELAA—the time we taste",
  time: "07:00 - 20:00 น.",
  hours: "Everyday  07:00 - 20:00",
  phone: "082-5649924",
  email: "velaarama2@gmail.com",
  lineId: "@velaa",
  instagram: "",
  facebookUrl: "https://www.facebook.com/people/Velaa/61587371002283/",
  facebookName: "Velaa",
  heroImage: "/store-img/velaa/v1.jpg",
  section2: {
    type: "menu" as const,
    items: [
      { name: "🥗 สลัดโรล", description: "ชิ้นโตๆ เนื้อแน่นๆ ผักล้นๆ เพื่อสุขภาพ มีทั้งหน้าร้านและจัดส่ง", price: "" },
      { name: "🍞 ขนมปังซาวร์โดว์", description: "อบใหม่ทุกวัน สุขภาพดี ใส่ใจทุกจาน", price: "" },
      { name: "🥤 เครื่องดื่ม", description: "สั่งซาวโดว์ อาหารและเครื่องดื่มได้", price: "" },
    ],
    images: [
      "/store-img/velaa/s1.png",
      "/store-img/velaa/s2.png",
      "/store-img/velaa/s3.png",
    ],
  },
  galleryImages: [
    "/store-img/velaa/v1.jpg",
    "/store-img/velaa/v2.jpg",
    "/store-img/velaa/v3.jpg",
    "/store-img/velaa/v1.jpg",
  ],
};

export default function VelaaPage() {
  return <StoreTemplate store={storeData} />;
}