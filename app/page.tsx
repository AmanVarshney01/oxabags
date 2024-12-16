import Billboard from "@/components/Billboard";
import CategoryCardSection from "@/components/category/CategoryCardSection";
import ProductMarquee from "@/components/product/ProductsMarqueeWrapper";
import ProductsMarqueeWrapperSkeleton from "@/components/skeletons/ProductsMarqueeWrapperSkeleton";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="px-2">
      <Billboard />
      <Suspense fallback={<ProductsMarqueeWrapperSkeleton />}>
        <ProductMarquee />
      </Suspense>
      <CategoryCardSection />
    </main>
  );
}
