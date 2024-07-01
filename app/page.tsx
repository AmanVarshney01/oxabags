import Billboard from "@/components/Billboard";
import CategoryCardSection from "@/components/category/CategoryCardSection";
import ProductMarquee from "@/components/product/ProductsMarqueeWrapper";

export default function Home() {
  return (
    <main className="px-2">
      <Billboard />
      <ProductMarquee />
      <CategoryCardSection />
    </main>
  );
}
