import { groq } from "next-sanity";
import { client } from "./client";

export async function getProductBySlug(slug: string = "") {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
        _id,
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

export async function getProductsByCategory(categorySlug: string = "") {
  return client.fetch(
    groq`*[_type == "product" && category->slug.current == $categorySlug]{
        name,
        images[0],
        price,
        slug,
        category->{name, slug},
    }`,
    { categorySlug },
  );
}

export async function getFeaturedProducts() {
  return client.fetch(
    groq`*[ _type == "product" && showOnHomePage == true ] {
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
