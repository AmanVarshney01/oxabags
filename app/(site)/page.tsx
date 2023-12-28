import Billboard from "@/components/Billboard";
import ProductMarquee from "@/components/ProductMarquee";
import HomeCategoryCard from "@/components/HomeCategoryCard";

export default function Home() {
  return (
    <main className="flex-1 px-2">
      <Billboard />
      <ProductMarquee />
      <section className="my-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <HomeCategoryCard
          title="Eco-Friendly Cotton Bags"
          description="thically sourced and made from 100% organic cotton."
          image="/testbag.jpg"
          link="/category/cotton-bags"
        />

        <HomeCategoryCard
          title="Large Cotton Totes"
          description="Perfect for grocery shopping, ditch the plastic and go green."
          image="/testbag.jpg"
          link="/category/cotton-bags"
        />

        <HomeCategoryCard
          title="Designer Canvas Bags"
          description="Trendy designs printed on high quality canvas."
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
      </section>
    </main>
  );
}
