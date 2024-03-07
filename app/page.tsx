import Billboard from "@/components/Billboard";
import ProductMarquee from "@/components/ProductsMarqueeWrapper";
import CategoryCardSection from "@/components/CategoryCardSection";

export default function Home() {
  return (
    <main className="flex-1 px-2">
      <Billboard />
      <ProductMarquee />
      <CategoryCardSection />
    </main>
  );
}
