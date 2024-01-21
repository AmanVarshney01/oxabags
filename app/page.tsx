import Billboard from "@/components/Billboard";
import ProductMarquee from "@/components/ProductMarquee";
import HomeCategoryCard from "@/components/HomeCategoryCard";
import Image from "next/image";
import whatsapp from "../public/WhatsAppButtonGreenSmall.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 px-2">
      <Billboard />
      <ProductMarquee />
      <section className="py-4">
        <div className=" grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
          <HomeCategoryCard
            title="Cotton Bags"
            description="Ethically sourced and made from 100% organic cotton."
            image="/testbag.jpg"
            link="/category/cotton-bags"
          />

          <HomeCategoryCard
            title="Cotton Totes"
            description="Perfect for grocery shopping, ditch the plastic and go green."
            image="/testbag.jpg"
            link="/category/cotton-bags"
          />

          <HomeCategoryCard
            title="Canvas Bags"
            description="Trendy and stylish designs printed on high quality canvas."
            image="/testbag.jpg"
            link="/category/canvas-bags"
          />
          <HomeCategoryCard
            title="Pouches"
            description="Pouches for your everyday needs."
            image="/testbag.jpg"
            link="/category/pouches"
          />

          <HomeCategoryCard
            title="File Folders"
            description="Keep your documents safe and organized."
            image="/testbag.jpg"
            link="/category/file-folders"
          />

          <HomeCategoryCard
            title="Jute Bags"
            description="Eco-friendly bags made from jute."
            image="/testbag.jpg"
            link="/category/jute-bags"
          />
        </div>
      </section>
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
