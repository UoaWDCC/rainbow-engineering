import type { CollectionConfig } from 'payload';

export const Initiatives: CollectionConfig = {
  slug: 'initiatives',

  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'image', 'signupUrl'],
  },

  fields: [
    {
      name: 'name',
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
      required: false,
    },
    {
      name: 'signupUrl',
      type: 'text',
      label: 'Signup URL',
      required: false,
      admin: {
        description: 'Add a link for users to sign up for this initiative',
      },
    },
  ],
};
