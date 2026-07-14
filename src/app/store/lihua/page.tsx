import StoreTemplate from "@/components/StoreTemplate";

const storeData = {
  logo: "/store-img/logo-tenant-B2-Lihua.jpg",
  title: "Li Hua",
  subtitle: "ลี่ฮัว - ข้าวหมูแดง บะหมี่หมูแดง สไตล์ฮ่องกง",
  description:
    "ร้านอาหารสไตล์ฮ่องกง P19 Avenue เมนูเด็ดข้าวหมูแดง บะหมี่หมูแดง หมูแดงสไตล์ฮ่องกงแท้ รสชาติต้นตำรับ",
  time: "10:00 - 19:00 น.",
  hours: "Sun - Sat  10:00 - 19:00",
  closedInfo: "หยุด พุธ ที่ 2 และ 4 ของเดือน",
  phone: "061-4292156",
  email: "",
  lineId: "",
  instagram: "",
  facebookUrl: "https://www.facebook.com/p/Li-Hua-%E0%B8%A5%E0%B8%B5%E0%B9%88%E0%B8%AE%E0%B8%B1%E0%B8%A7-%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B9%81%E0%B8%94%E0%B8%87-%E0%B8%9A%E0%B8%B0%E0%B8%AB%E0%B8%A1%E0%B8%B5%E0%B9%88%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B9%81%E0%B8%94%E0%B8%87-%E0%B8%AA%E0%B9%84%E0%B8%95%E0%B8%A5%E0%B9%8C%E0%B8%AE%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%87-P19-Avenue-61566526730255/",
  facebookName: "Li Hua ลี่ฮัว",
  menuUrl: "/store-img/lihua/lihua-menu-june-26.pdf",
  heroImage: "/store-img/lihua/l1.jpg",
  section2: {
    type: "menu" as const,
    items: [
      { name: "🥩 ข้าวหมูแดง", description: "ข้าวหมูแดงสไตล์ฮ่องกง น้ำราดสูตรพิเศษ", price: "" },
      { name: "🍜 บะหมี่หมูแดง", description: "บะหมี่หมูแดงสไตล์ฮ่องกง", price: "" },
      { name: "📞 โทรศัพท์", description: "061-4292156", price: "" },
    ],
    images: [
      "/store-img/lihua/r1.png",
      "/store-img/lihua/r2.png",
      "/store-img/lihua/r3.png",
    ],
  },
  galleryImages: [
    "/store-img/lihua/l1.jpg",
    "/store-img/lihua/l2.jpg",
    "/store-img/lihua/l3.jpg",
    "/store-img/lihua/l4.jpg",
  ],
};

export default function LiHuaPage() {
  return <StoreTemplate store={storeData} />;
}