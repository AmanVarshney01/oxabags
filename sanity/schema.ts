import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: "product",
      title: "Products",
      type: "document",
      fields: [
        {
          name: "name",
          title: "Name",
          type: "string",
        },
        {
          name: "images",
          type: "array",
          title: "Images",
          of: [{ type: "image" }],
        },
        {
          name: "color",
          title: "Color",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
        },
        {
          name: "size",
          title: "Size",
          type: "string",
        },
        {
          name: "weight",
          title: "Weight",
          type: "string",
        },
        {
          name: "price",
          title: "Price",
          type: "number",
        },
        {
          name: "slug",
          title: "Slug",
          type: "slug",
          options: {
            source: "name",
          },  
        },
        {
          name: "featured",
          title: "Featured",
          type: "boolean",
        },
        {
          name: "category",
          title: "Product Category",
          type: "reference",
          to:   [{
            type: "category",
          }]
        },  
      ],
    },
    {
      name: "category",
      type: "document",
      title: "Categories",
      fields: [
        {
          name: "name",
          title: "Name of Category",
          type: "string",
        },
      ],
    },
  ],
};
