import type { CollectionConfig } from "payload";

export const Showcase: CollectionConfig = {
  slug: "showcase",
  admin: {
    defaultColumns: ["img", "File Name", "Created At"],
  },
  fields: [
    {
      name: "img",
      type: "upload",
      relationTo: "media",
      label: "Featured Image",
      required: true,
    },
  ],
};
