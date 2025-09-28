import type { CollectionConfig } from "payload";

export const Events: CollectionConfig = {
    slug: 'events',

    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'date'],
      },
    fields: [
        {
            name: "title",
            type: "text",
            required: true,
        },
        {
            name: "date",
            type: "date",
            required: true,
        },
        {
            name: "description",
            type: "textarea",
            required: true,
        },
        {
            name: "image",
            type: "upload",
            relationTo: "media",
            required: true,
        },
        {
            name: "signupURL",
            type: "text",
            required: false,
        },
    ]
}