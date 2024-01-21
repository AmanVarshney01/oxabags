import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/sanity/lib/sanity.query";
import { getCategories } from "@/sanity/lib/sanity.query";
import { Metadata, ResolvingMetadata } from "next";
import { Product } from "@/lib/types";

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

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const title = params.categorySlug;

  return {
    title: title
      .split("-")
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
  };
}

export default async function CategoryPage({ params }: Props) {
  const products = await getProductsByCategory(params.categorySlug);
  return (
    <section className="px-2 pb-8">
      {products && products.length > 0 ? (
        <div>
          <h2 className="p-4 text-xl font-medium md:p-8">
            {products[0].category.name}
          </h2>
          <section className="grid grid-cols-2 justify-items-center gap-4 px-2 pb-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {products.map((product: Product, index: number) => (
              <ProductCard key={index} product={product} />
            ))}
          </section>
        </div>
      ) : (
        <p className="p-4 text-2xl">Sorry No Products found</p>
      )}
    </section>
  );
}
