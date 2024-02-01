import ProductDetailCard from "@/components/ProductDetailCard";
import ProductMarquee from "@/components/ProductsMarqueeWrapper";
import { Product } from "@/lib/types";
import { client } from "@/sanity/lib/client";
import { getProductBySlug } from "@/sanity/lib/sanity.query";
import type { Metadata } from "next";
import { urlForImage } from "@/sanity/lib/image";

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
  const product: Product = await getProductBySlug(params.productSlug);

  return {
    title: product.name,
    alternates: {
      canonical: `/product/${params.productSlug}`,
    },
    description: product.features,
  };
}

const ProductPage = async ({ params }: Props) => {
  const product: Product = await getProductBySlug(params.productSlug);

  const jsonLd = {
    "@context": "https://www.oxabags.com/",
    "@type": "Product",
    name: product.name,
    image: urlForImage(product.images[0]),
    description: product.features,
    brand: {
      "@type": "Brand",
      name: "oxabags",
    }
  };

  return (
    <div className="px-2">
      <ProductDetailCard product={product} />
      <ProductMarquee />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default ProductPage;
