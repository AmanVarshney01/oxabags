import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: 'Bag',
      title: 'Bag',
      type: 'document',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
          name: 'color',
          title: 'Color',
          type: 'string',
        },
        {
          name: 'price',
          title: 'Price',
          type: 'number',
        },
      ],
    },
  ],
}
