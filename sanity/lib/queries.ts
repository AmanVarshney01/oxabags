import { defineQuery } from "next-sanity";

export const productBySlugQuery =
  defineQuery(`*[_type == "product" && slug.current == $slug][0]{
    id,
    name,
    images,
    color,
    weight,
    size,
    price,
    slug,
    description,
    features,
    fabric,
    showOnHomePage,
    category->{name},
}`);

export const productsByCategoryQuery =
  defineQuery(`*[_type == "product" && category->slug.current == $categorySlug]{
    name,
    images[0],
    price,
    slug,
    category->{name}
}`);

export const featuredProductsQuery =
  defineQuery(`*[ _type == "product" && showOnHomePage == true ] {
  id,
  name,
  price,
  images[0],
  category->{
    name
  },
  slug,
}`);

export const categoriesQuery = defineQuery(`*[_type == "category"]{
    name,
    slug
}`);

export const productsSlugQuery = defineQuery(`*[_type == "product"] {
  slug {
    current
  }
}`);

export const searchProductsQuery = defineQuery(`*[_type == "product" && (
  name match $searchTerm
  || description match $searchTerm
  || color match $searchTerm
  || size match $searchTerm
  || weight match $searchTerm
  || fabric match $searchTerm
  || features match $searchTerm
  || category->name match $searchTerm
)] {
  id,
  name,
  price,
  images[0],
  category->{
    name
  },
  slug,
}`);
