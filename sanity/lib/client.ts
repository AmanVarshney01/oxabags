import { createClient } from "next-sanity";

export const client = createClient({
  apiVersion: "2024-01-20",
  dataset: "production",
  projectId: "du6qptuy",
  useCdn: true,
  perspective: "published",
});
