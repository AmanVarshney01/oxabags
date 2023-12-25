import { groq } from "next-sanity";
import { client } from "./client";

export async function getProductBySlug(slug: string) {
  return client.fetch(
    groq`*[_type == "product" && slug.current == "${slug}"][0]{
        _id,
        name,
        images,
        color,
        weight,
        size,
        price,
        slug,
        category->{name},
    }`
  );
}

export async function getFeaturedProducts() {
  return client.fetch(
    groq`*[ _type == "product" && featured == true ] {
      _id,
      name,
      price,
      images[0],
      category->{
        name
      },
      slug,
    }`
  );
}

export async function getCategories() {
  return client.fetch(
    groq`*[_type == "category"]{
        _id,
        name
    }`
  );
}
