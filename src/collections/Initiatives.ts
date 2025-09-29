import type { CollectionConfig } from 'payload';

export const Initiatives: CollectionConfig = {
  slug: 'initiatives',
  
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'image'],
  },
  fields: [
    { 
    name: 'name',
    type: 'text', 
    required: true 
    },
    { 
    name: 'description', 
    type: 'textarea', 
    required: true 
    }, 
    { 
    name: 'image', 
    type: 'upload', 
    relationTo: 'media',
    required: false 
    }, 
  ],
};
