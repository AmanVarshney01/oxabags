import HomeCategoryCard from "@/components/CategoryCard";
import CanvasBag from "@/public/categoryImages/canvas bags.webp"
import CottonBag from "@/public/categoryImages/cotton bag.webp"
import DenimBag from "@/public/categoryImages/denim bags.webp"
import FileFolder from "@/public/categoryImages/file folder.jpg"
import JuteBag from "@/public/categoryImages/JUTE BAGS.webp"
import Pouch from "@/public/categoryImages/pouch.webp"

export default function CategoryCardSection() {
  return (
    <section className=" py-4">
      <div className=" grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-end md:gap-4">
        <HomeCategoryCard
          title="Cotton Bags"
          description="Ethically sourced and made from 100% organic cotton."
          image={CottonBag}
          link="/category/cotton-bags"
        />
        <HomeCategoryCard
          title="Canvas Bags"
          description="Trendy and stylish designs printed on high quality canvas."
          image={CanvasBag}
          link="/category/canvas-bags"
        />
        <HomeCategoryCard
          title="Pouches"
          description="Pouches for your everyday needs."
          image={Pouch}
          link="/category/pouches"
        />

        <HomeCategoryCard
          title="File Folders"
          description="Keep your documents safe and organized."
          image={FileFolder}
          link="/category/file-folders"
        />

        <HomeCategoryCard
          title="Jute Bags"
          description="Eco-friendly bags made from jute."
          image={JuteBag}
          link="/category/jute-bags"
        />

        <HomeCategoryCard
          title="Denim Bags"
          description="Trendy and stylish designs printed on high quality denim."
          image={DenimBag}
          link="/category/denim-bags"
        />
      </div>
    </section>
  );
}
