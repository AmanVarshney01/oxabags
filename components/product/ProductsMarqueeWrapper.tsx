import { getFeaturedProducts } from "@/sanity/lib/sanity.query";
import ProductsMarquee from "./ProductsMarquee";

export default async function ProductsMarqueeWrapper() {
  const products = await getFeaturedProducts();
  return (
    <section className=" py-4 md:py-10">
      <h2 className="p-2 pt-0 text-lg font-medium md:p-4 md:pt-0 md:text-xl">
        Our Most Popular Products
      </h2>
      <ProductsMarquee products={products} />
    </section>
  );
}
