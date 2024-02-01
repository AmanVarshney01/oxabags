import Billboard from "@/components/Billboard";
import ProductMarquee from "@/components/ProductsMarqueeWrapper";
import Image from "next/image";
import whatsapp from "../public/WhatsAppButtonGreenSmall.svg";
import Link from "next/link";
import CategoryCardSection from "@/components/CategoryCardSection";

export default function Home() {
  return (
    <main className="flex-1 px-2">
      <Billboard />
      <ProductMarquee />
      <CategoryCardSection />
      <Link
        href={"https://wa.me/9868151526"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          priority
          className="fixed bottom-2 left-2 rounded-lg border border-black/20"
          width={140}
          // height={50}
          src={whatsapp}
          alt="whatsapp"
        />
      </Link>
    </main>
  );
}
