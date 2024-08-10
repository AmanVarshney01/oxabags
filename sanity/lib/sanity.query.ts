import { groq } from "next-sanity";
import { client } from "./client";

export async function getProductBySlug(slug: string) {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
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
    }`,
    { slug },
  );
}

export async function getProductsByCategory(categorySlug: string) {
  return client.fetch(
    groq`*[_type == "product" && category->slug.current == $categorySlug]{
        name,
        images[0],
        price,
        slug,
        category->{name}
    }`,
    { categorySlug },
  );
}

export async function getFeaturedProducts() {
  return client.fetch(
    groq`*[ _type == "product" && showOnHomePage == true ] {
      id,
      name,
      price,
      images[0],
      category->{
        name
      },
      slug,
    }`,
  );
}

export async function getCategories() {
  return client.fetch(
    groq`*[_type == "category"]{
        name,
        slug
    }`,
  );
}

export async function getProductsSlug() {
  return client.fetch(
    groq`*[_type == "product"] {
      slug {
        current
      }
    }`,
  );
}

export async function searchProducts(searchTerm: string) {
  return client.fetch(
    groq`*[_type == "product" && (
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
    }`,
    { searchTerm },
  );
}
