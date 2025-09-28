// src/collections/Executives.ts
import type { CollectionConfig } from 'payload'

export const Executives: CollectionConfig = {
  slug: 'executives',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'image'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}