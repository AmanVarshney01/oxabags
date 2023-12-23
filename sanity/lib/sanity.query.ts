import { groq } from "next-sanity";
import {client} from "./client";

export async function getBag() {
  return client.fetch(
    groq`*[_type == "Bag"]{
        _id,
        name,
        color,
        price,
    }`
  );
}