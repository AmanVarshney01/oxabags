import ProductDetailCard from "@/components/product/ProductDetailCard";
import ProductsMarqueeWrapper from "@/components/product/ProductsMarqueeWrapper";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { Product } from "@/lib/types";
import { urlForImage } from "@/sanity/lib/image";
import { getProductBySlug, getProductsSlug } from "@/sanity/sanity.query";
import type { Metadata, ResolvingMetadata } from "next";

export const dynamicParams = false;

type Props = {
  params: { productSlug: string };
};

type ProductSlug = {
  slug: {
    current: string;
  };
};

export async function generateStaticParams() {
  const productSlugs = await getProductsSlug();
  return productSlugs.map((productSlug: ProductSlug) => {
    return {
      productSlug: productSlug.slug.current,
    };
  });
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const product: Product = await getProductBySlug(params.productSlug);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.name,
    alternates: {
      canonical: `/product/${params.productSlug}`,
    },
    description: product.features,
    openGraph: {
      images: [urlForImage(product.images[0]).url(), ...previousImages],
    },
  };
}

const ProductPage = async ({ params }: Props) => {
  const product: Product = await getProductBySlug(params.productSlug);

  const jsonLd = {
    "@context": SITE_URL,
    "@type": "Product",
    name: product.name,
    image: urlForImage(product.images[0]),
    description: product.features,
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
  };

  return (
    <div className="px-2">
      <ProductDetailCard product={product} />
      <ProductsMarqueeWrapper />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default ProductPage;
