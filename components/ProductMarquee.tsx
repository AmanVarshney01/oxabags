import ProductCard from "./ProductCard";
import { getFeaturedProducts } from "@/sanity/lib/sanity.query";

export default async function ProductMarquee() {
  const products = await getFeaturedProducts();
  return (
    <section className="overflow-x-auto w-full my-8">
      <div className="flex space-x-6 px-2 py-4">
        {products.map((item: any, index: number) => (
          <ProductCard item={item} key={index} />
        ))}
      </div>
    </section>
  );
}
