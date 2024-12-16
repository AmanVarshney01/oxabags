import ProductDetailCardSkeleton from "@/components/skeletons/ProductDetailCardSkeleton";
import ProductsMarqueeWrapperSkeleton from "@/components/skeletons/ProductsMarqueeWrapperSkeleton";

export default function Loading() {
  return (
    <div className="px-2">
      <ProductDetailCardSkeleton />
      <ProductsMarqueeWrapperSkeleton />
    </div>
  );
}
