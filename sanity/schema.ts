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
          name: "fabric",
          title: "Fabric",
          type: "string",
        },
        {
          name: "price",
          title: "Price",
          type: "number",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
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
          to: [
            {
              type: "category",
            },
          ],
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
        {
          name: "slug",
          title: "Slug",
          type: "slug",
          options: {
            source: "name",
          },
        },
      ],
    },
    {
      name: "order",
      type: "document",
      title: "Cart Submits",
      fields: [
        {
          name: "products",
          title: "Products",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "phonenumber",
          title: "Phone Number",
          type: "string",
        },
        {
          name: "date",
          title: "Date",
          type: "string",
        }
      ],
    },
  ],
};
