import { getFeaturedProducts } from "@/sanity/lib/sanity.query";
import ProductCarouselMarquee from "./ProductsCarouselMarquee";

export default async function ProductMarquee() {
  const products = await getFeaturedProducts();
  return (
    <section className=" my-4">
      <h2 className="p-2 text-lg font-medium md:p-4 md:text-xl">
        Featured Products
      </h2>
      <ProductCarouselMarquee products={products} />
    </section>
  );
}
