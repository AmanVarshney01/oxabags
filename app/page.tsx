import Billboard from "@/components/Billboard";
import ProductMarquee from "@/components/product/ProductsMarqueeWrapper";
import CategoryCardSection from "@/components/category/CategoryCardSection";

export default function Home() {
  return (
    <main className="flex-1 px-2">
      <Billboard />
      <ProductMarquee />
      <CategoryCardSection />
    </main>
  );
}
