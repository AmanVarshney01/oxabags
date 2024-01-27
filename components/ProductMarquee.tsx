import { getFeaturedProducts } from "@/sanity/lib/sanity.query";
import ProductCarouselMarquee from "./ProductsCarouselMarquee";

export default async function ProductMarquee() {
  const products = await getFeaturedProducts();
  return (
    <section className=" py-4">
      <h2 className="p-2 pt-0 text-lg font-medium md:p-4 md:pt-0 md:text-xl">
        Featured Products
      </h2>
      <ProductCarouselMarquee products={products} />
    </section>
  );
}
