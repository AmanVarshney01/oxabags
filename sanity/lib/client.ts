import { createClient } from "next-sanity";

export const client = createClient({
  apiVersion: "2023-12-29",
  dataset: "production",
  projectId: "du6qptuy",
  useCdn: true,
  token:
    process.env.NEXT_PUBLIC_SANITY_TOKEN || process.env.SANITY_STUDIO_TOKEN,
  ignoreBrowserTokenWarning: true,
});
