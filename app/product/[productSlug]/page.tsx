import ProductDetailCard from "@/components/product/ProductDetailCard";
import ProductsMarqueeWrapper from "@/components/product/ProductsMarqueeWrapper";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import {
  featuredProductsQuery,
  productBySlugQuery,
  productsSlugQuery,
} from "@/sanity/lib/queries";
import {
  FeaturedProductsQueryResult,
  ProductBySlugQueryResult,
  ProductsSlugQueryResult,
} from "@/sanity/types";
import type { Metadata, ResolvingMetadata } from "next";

export const dynamicParams = false;

type Props = {
  params: Promise<{ productSlug: string }>;
};

export async function generateStaticParams() {
  const productSlugs =
    await client.fetch<ProductsSlugQueryResult>(productsSlugQuery);
  return productSlugs.map((productSlug) => {
    return {
      productSlug: productSlug.slug?.current,
    };
  });
}

export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const params = await props.params;
  const product = await client.fetch<ProductBySlugQueryResult>(
    productBySlugQuery,
    {
      slug: params.productSlug,
    },
  );

  return {
    title: product?.name,
    alternates: {
      canonical: `/product/${params.productSlug}`,
    },
    description: product?.features,
    openGraph: {
      title: product?.name!,
      description: product?.description!,
      url: `${SITE_URL}product/${params.productSlug}`,
      images: [
        {
          url: urlForImage(product?.images?.[0]!).url(),
          width: 1200,
          height: 630,
          alt: product?.name!,
        },
      ],
    },
  };
}

const ProductPage = async (props: Props) => {
  const params = await props.params;
  const product = await client.fetch<ProductBySlugQueryResult>(
    productBySlugQuery,
    {
      slug: params.productSlug,
    },
  );

  const favProducts = await client.fetch<FeaturedProductsQueryResult>(
    featuredProductsQuery,
  );

  const jsonLd = {
    "@context": SITE_URL,
    "@type": "Product",
    name: product?.name,
    description: product?.features,
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
  };

  return (
    <div className="px-2">
      <ProductDetailCard product={product} />
      <ProductsMarqueeWrapper products={favProducts} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default ProductPage;
