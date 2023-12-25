import { groq } from "next-sanity";
import {client} from "./client";

export async function getProducts() {
  return client.fetch(
    groq`*[_type == "product"]{
        _id,
        name,
        images,
        color,
        weight,
        size,
        price,
        slug,
        category
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