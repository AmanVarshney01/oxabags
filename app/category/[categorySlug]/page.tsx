import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/sanity/lib/sanity.query";
import { getCategories } from "@/sanity/lib/sanity.query";
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { categorySlug: string }
}

export async function generateStaticParams() {
  const categorySlugs = await getCategories();
  return categorySlugs.map((categorySlug: any) => {
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
    title: title,
  };
}

export default async function CategoryPage({ params }: any) {
  const products = await getProductsByCategory(params.categorySlug);
  return (
    <section className="">
      {products && products.length > 0 ? (
        <div>
          <h2 className="px-8 py-8 text-2xl font-medium">
            {products[0].category.name}
          </h2>
          <section className="grid grid-cols-2 justify-items-center gap-x-4 gap-y-8 px-2 pb-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {products.map((product: any, index: number) => (
              <div key={index}>
                <ProductCard product={product} />
              </div>
            ))}
          </section>
        </div>
      ) : (
        <p className="p-4 text-2xl">Sorry No Products found</p>
      )}
    </section>
  );
}
