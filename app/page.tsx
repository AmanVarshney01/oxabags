import Billboard from "@/components/Billboard";
import CategoryCardSection from "@/components/category/CategoryCardSection";
import ProductsMarqueeWrapper from "@/components/product/ProductsMarqueeWrapper";
import ProductsMarqueeWrapperSkeleton from "@/components/skeletons/ProductsMarqueeWrapperSkeleton";
import { client } from "@/sanity/lib/client";
import { featuredProductsQuery } from "@/sanity/lib/queries";
import { FeaturedProductsQueryResult } from "@/sanity/types";
import { Suspense } from "react";

export default async function Home() {
  const products = await client.fetch<FeaturedProductsQueryResult>(
    featuredProductsQuery,
  );

  return (
    <main className="px-2">
      <Billboard />
      <Suspense fallback={<ProductsMarqueeWrapperSkeleton />}>
        <ProductsMarqueeWrapper products={products} />
      </Suspense>
      <CategoryCardSection />
    </main>
  );
}
