import ProductDetailCard from "@/components/ProductDetailCard";
import ProductMarquee from "@/components/ProductMarquee";
import { client } from "@/sanity/lib/client";
import { Metadata} from "next";

type Props = {
  params: { productSlug: string };
};

type ProductSlug = {
  slug: {
    current: string;
  };
};

export async function generateStaticParams() {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;

  const productSlugs = await client.fetch(query);

  return productSlugs.map((productSlug: ProductSlug) => {
    return {
      productSlug: productSlug.slug.current,
    };
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const title = params.productSlug;

  return {
    title: title
      .split("-")
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
  };
}

const ProductPage = ({ params }: Props) => {
  return (
    <div className="px-2">
      <ProductDetailCard slug={params.productSlug} />
      <ProductMarquee />
    </div>
  );
};

export default ProductPage;
