import StoreTemplate from "@/components/StoreTemplate";

const storeData = {
  title: "Chaanin",
  subtitle: "CHAA-NIN Massage | ชนินทร์ มาสสาจ",
  description:
    "ร้านนวดเพื่อสุขภาพ พุทธบูชา-พระราม 2 ให้บริการนวดแผนไทย นวดผ่อนคลาย ด้วยทีมนักนวดมืออาชีพ บรรยากาศเงียบสงบ เพื่อการพักผ่อนอย่างแท้จริง",
  time: "10:00 - 20:00 น.",
  heroImage: "/store/chaanin/ch2.jpg",
  section2: {
    type: "service" as const,
    items: [
      { name: "📞 โทรศัพท์", description: "063-6368626", price: "" },
      { name: "📧 อีเมล", description: "chaanin.massage@gmail.com", price: "" },
      { name: "Instagram", description: "@chaanin.massage", price: "" },
      { name: "Facebook", description: "CHAA-NIN Massage", price: "" },
      { name: "Line ID", description: "@642ckhym", price: "" },
      { name: "TikTok", description: "@chaanin.massage", price: "" },
    ],
  },
  galleryImages: [
    "/store/chaanin/ch1.jpg",
    "/store/chaanin/ch2.jpg",
    "/store/chaanin/ch3.jpg",
    "/store/chaanin/ch4.jpg",
  ],
};

export default function ChaaninPage() {
  return <StoreTemplate store={storeData} />;
}