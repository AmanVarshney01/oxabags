import ProductDetailCard from "@/components/ProductDetailCard";
import ProductMarquee from "@/components/ProductMarquee";
import { client } from "@/sanity/lib/client";

export async function generateStaticParams() {
  const query = `*[_type == "product"] {
  slug {
    current
  }
 }`;

  const productSlugs = await client.fetch(query);

  return productSlugs.map((productSlug: any) => {
    return {
      productSlug: productSlug.slug.current,
    };
  });
}

const ProductPage = ({ params }: any) => {
  return (
    <div>
      <ProductDetailCard slug={params.productSlug} />
      <ProductMarquee />
    </div>
  );
};

export default ProductPage;
