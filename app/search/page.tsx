import ProductCard from "@/components/product/ProductCard";
import { Product } from "@/lib/types";
import { searchProducts } from "@/sanity/lib/sanity.query";

export const runtime = "edge";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const { q } = searchParams;

  const searchResults = await searchProducts(q);

  return (
    <section className="px-2 py-4">
      <section className="flex flex-col items-center justify-center">
        <h2 className="my-4 p-4 text-3xl font-medium">
          Search Results for {q}
        </h2>
        {searchResults && searchResults.length > 0 ? (
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
            {searchResults.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="p-4 text-2xl">Sorry No Products found</p>
        )}
      </section>
    </section>
  );
}
