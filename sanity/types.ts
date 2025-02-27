/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Product = {
  _id: string;
  _type: "product";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  id?: number;
  name?: string;
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
  color?: string;
  size?: string;
  weight?: string;
  fabric?: string;
  price?: number;
  features?: string;
  description?: string;
  slug?: Slug;
  showOnHomePage?: boolean;
  category?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "category";
  };
};

export type Category = {
  _id: string;
  _type: "category";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | Product
  | Category
  | Slug
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: sanity/lib/queries.ts
// Variable: productBySlugQuery
// Query: *[_type == "product" && slug.current == $slug][0]{    id,    name,    images,    color,    weight,    size,    price,    slug,    description,    features,    fabric,    showOnHomePage,    category->{name},}
export type ProductBySlugQueryResult = {
  id: number | null;
  name: string | null;
  images: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }> | null;
  color: string | null;
  weight: string | null;
  size: string | null;
  price: number | null;
  slug: Slug | null;
  description: string | null;
  features: string | null;
  fabric: string | null;
  showOnHomePage: boolean | null;
  category: {
    name: string | null;
  } | null;
} | null;
// Variable: productsByCategoryQuery
// Query: *[_type == "product" && category->slug.current == $categorySlug]{    name,    images[0],    price,    slug,    category->{name}}
export type ProductsByCategoryQueryResult = Array<{
  name: string | null;
  images: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  } | null;
  price: number | null;
  slug: Slug | null;
  category: {
    name: string | null;
  } | null;
}>;
// Variable: featuredProductsQuery
// Query: *[ _type == "product" && showOnHomePage == true ] {  id,  name,  price,  images[0],  category->{    name  },  slug,}
export type FeaturedProductsQueryResult = Array<{
  id: number | null;
  name: string | null;
  price: number | null;
  images: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  } | null;
  category: {
    name: string | null;
  } | null;
  slug: Slug | null;
}>;
// Variable: categoriesQuery
// Query: *[_type == "category"]{    name,    slug}
export type CategoriesQueryResult = Array<{
  name: string | null;
  slug: Slug | null;
}>;
// Variable: productsSlugQuery
// Query: *[_type == "product"] {  slug {    current  }}
export type ProductsSlugQueryResult = Array<{
  slug: {
    current: string | null;
  } | null;
}>;
// Variable: searchProductsQuery
// Query: *[_type == "product" && (  name match $searchTerm  || description match $searchTerm  || color match $searchTerm  || size match $searchTerm  || weight match $searchTerm  || fabric match $searchTerm  || features match $searchTerm  || category->name match $searchTerm)] {  id,  name,  price,  images[0],  category->{    name  },  slug,}
export type SearchProductsQueryResult = Array<{
  id: number | null;
  name: string | null;
  price: number | null;
  images: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  } | null;
  category: {
    name: string | null;
  } | null;
  slug: Slug | null;
}>;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    '*[_type == "product" && slug.current == $slug][0]{\n    id,\n    name,\n    images,\n    color,\n    weight,\n    size,\n    price,\n    slug,\n    description,\n    features,\n    fabric,\n    showOnHomePage,\n    category->{name},\n}': ProductBySlugQueryResult;
    '*[_type == "product" && category->slug.current == $categorySlug]{\n    name,\n    images[0],\n    price,\n    slug,\n    category->{name}\n}': ProductsByCategoryQueryResult;
    '*[ _type == "product" && showOnHomePage == true ] {\n  id,\n  name,\n  price,\n  images[0],\n  category->{\n    name\n  },\n  slug,\n}': FeaturedProductsQueryResult;
    '*[_type == "category"]{\n    name,\n    slug\n}': CategoriesQueryResult;
    '*[_type == "product"] {\n  slug {\n    current\n  }\n}': ProductsSlugQueryResult;
    '*[_type == "product" && (\n  name match $searchTerm\n  || description match $searchTerm\n  || color match $searchTerm\n  || size match $searchTerm\n  || weight match $searchTerm\n  || fabric match $searchTerm\n  || features match $searchTerm\n  || category->name match $searchTerm\n)] {\n  id,\n  name,\n  price,\n  images[0],\n  category->{\n    name\n  },\n  slug,\n}': SearchProductsQueryResult;
  }
}
