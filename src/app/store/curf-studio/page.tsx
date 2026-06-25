import StoreTemplate from "@/components/StoreTemplate";

const storeData = {
  logo: "/store/logo-tenant-A5-Curf%20Studio.jpg",
  title: "Curf Studio",
  subtitle: "Your Beloved Cosy Wellness Studio | Private Pilates",
  description:
    "สตูดิโอพิลาทิสส่วนตัว บรรยากาศอบอุ่น ดูแลทุกการเคลื่อนไหว มีครูพิลาทิสที่ได้รับใบเซอร์และประสบการณ์มากมาย พร้อมอุปกรณ์คุณภาพจากแบรนด์ Elina เปิดให้บริการ 3 สาขา",
  time: "7:00 - 21:00 น.",
  heroImage: "/store/curf/c2.jpg",
  section2: {
    type: "service" as const,
    items: [
      { name: "✨ สาขาราชพฤกษ์", description: "Private Class 1,100 บาท, Duo Class 1,900 บาท", price: "" },
      { name: "✨ สาขาบางแค", description: "ทดลอง Private Class 1,100 บาท/ครั้ง", price: "" },
      { name: "✨ สาขาพระราม 2", description: "ทดลอง Private Class 950 บาท/ครั้ง", price: "" },
      { name: "📞 โทรศัพท์", description: "080-0692799", price: "" },
      { name: "Instagram", description: "@curfstudio.pilates", price: "" },
      { name: "Line", description: "@curfstudio", price: "" },
    ],
  },
  galleryImages: [
    "/store/curf/c1.jpg",
    "/store/curf/c2.jpg",
    "/store/curf/c3.jpg",
    "/store/curf/c4.jpg",
  ],
};

export default function CurfStudioPage() {
  return <StoreTemplate store={storeData} />;
}