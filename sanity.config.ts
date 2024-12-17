import { defineConfig } from "sanity";
import { schema } from "./sanity/schemaTypes";

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  schema,
});
