export const runtime = "edge";
import ProductCard from "@/components/product/ProductCard";
import { client } from "@/sanity/lib/client";
import { searchProductsQuery } from "@/sanity/lib/queries";
import { SearchProductsQueryResult } from "@/sanity/types";

export default async function SearchPage(
  props: {
    searchParams: Promise<{ [key: string]: string }>;
  }
) {
  const searchParams = await props.searchParams;
  const { q } = searchParams;

  const searchResults = await client.fetch<SearchProductsQueryResult>(
    searchProductsQuery,
    {
      searchTerm: q,
    },
  );

  return (
    <section className="px-2 py-4">
      <section className="flex flex-col items-center justify-center">
        <h2 className="my-4 p-4 text-3xl font-medium">
          Search Results for {q}
        </h2>
        {searchResults && searchResults.length > 0 ? (
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
            {searchResults.map((product) => (
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
