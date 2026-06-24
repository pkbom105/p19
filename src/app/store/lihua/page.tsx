import StoreTemplate from "@/components/StoreTemplate";

const storeData = {
  title: "Li Hua",
  subtitle: "ลี่ฮัว - ข้าวหมูแดง บะหมี่หมูแดง สไตล์ฮ่องกง",
  description:
    "ร้านอาหารสไตล์ฮ่องกง P19 Avenue เมนูเด็ดข้าวหมูแดง บะหมี่หมูแดง หมูแดงสไตล์ฮ่องกงแท้ รสชาติต้นตำรับ",
  time: "11:00 - 22:00 น.",
  heroImage: "/store/lihua/l1.jpg",
  section2: {
    type: "menu" as const,
    items: [
      { name: "🥩 ข้าวหมูแดง", description: "ข้าวหมูแดงสไตล์ฮ่องกง น้ำราดสูตรพิเศษ", price: "" },
      { name: "🍜 บะหมี่หมูแดง", description: "บะหมี่หมูแดงสไตล์ฮ่องกง", price: "" },
      { name: "📞 โทรศัพท์", description: "061-4292156", price: "" },
      { name: "📍 ที่ตั้ง", description: "P19 Avenue", price: "" },
      { name: "Facebook", description: "Li Hua ลี่ฮัว", price: "" },
      { name: "เวลาเปิด", description: "11:00 - 22:00 น.", price: "" },
    ],
  },
  galleryImages: [
    "/store/lihua/l1.jpg",
    "/store/lihua/l2.jpg",
    "/store/lihua/l3.jpg",
    "/store/lihua/l4.jpg",
  ],
};

export default function LiHuaPage() {
  return <StoreTemplate store={storeData} />;
}