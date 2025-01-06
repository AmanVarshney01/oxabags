import ProductCard from "@/components/product/ProductCard";
import { client } from "@/sanity/lib/client";
import { categoriesQuery, productsByCategoryQuery } from "@/sanity/lib/queries";
import {
  CategoriesQueryResult,
  ProductsByCategoryQueryResult,
} from "@/sanity/types";
import { Metadata } from "next";

export const dynamicParams = false;

type Props = {
  params: Promise<{ categorySlug: string }>;
};

export async function generateStaticParams() {
  const categorySlugs =
    await client.fetch<CategoriesQueryResult>(categoriesQuery);
  return categorySlugs.map((categorySlug) => {
    return {
      categorySlug: categorySlug.slug?.current,
    };
  });
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const title = params.categorySlug;

  return {
    title: title
      .split("-")
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    alternates: {
      canonical: `/category/${params.categorySlug}`,
    },
  };
}

export default async function CategoryPage(props: Props) {
  const params = await props.params;
  const products = await client.fetch<ProductsByCategoryQueryResult>(
    productsByCategoryQuery,
    {
      categorySlug: params.categorySlug,
    },
  );

  return (
    <section className="px-2 py-4">
      {products && products.length > 0 ? (
        <section className="flex flex-col items-center justify-center">
          <h2 className="my-4 p-4 text-3xl font-medium">
            {products[0]?.category?.name}
          </h2>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
            {products.map((product, index: number) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </section>
      ) : (
        <p className="p-4 text-2xl">Sorry No Products found</p>
      )}
    </section>
  );
}
