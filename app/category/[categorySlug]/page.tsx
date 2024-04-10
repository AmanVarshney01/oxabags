import ProductCard from "@/components/product/ProductCard";
import { getProductsByCategory } from "@/sanity/lib/sanity.query";
import { getCategories } from "@/sanity/lib/sanity.query";
import { Metadata } from "next";
import { Product } from "@/lib/types";

export const dynamicParams = false;

type Props = {
  params: { categorySlug: string };
};

type CategorySlug = {
  slug: {
    current: string;
  };
};

export async function generateStaticParams() {
  const categorySlugs = await getCategories();
  return categorySlugs.map((categorySlug: CategorySlug) => {
    return {
      categorySlug: categorySlug.slug.current,
    };
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

export default async function CategoryPage({ params }: Props) {
  const products = await getProductsByCategory(params.categorySlug);
  return (
    <section className="px-2 py-4">
      {products && products.length > 0 ? (
        <section className=" flex flex-col items-center justify-center">
          <h2 className="my-4 p-4 text-3xl font-medium ">
            {products[0].category.name}
          </h2>
          <div className="grid  grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
            {products.map((product: Product, index: number) => (
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
