import HomeCategoryCard from "@/components/HomeCategoryCard";

export default function CategoryCardSection() {
  return (
    <section className="py-2">
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
  );
}
