// storage-adapter-import-placeholder
import { postgresAdapter } from "@payloadcms/db-postgres";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { s3Storage } from "@payloadcms/storage-s3";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { AboutUs } from "./globals/AboutUs";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Executives } from "./collections/Executives";
import { Showcase } from "./collections/Showcase";
import { Initiatives } from "./collections/Initiatives";
import { SponsorsGold } from "./collections/SponsorsGold";
import { SponsorsSilver } from './collections/SponsorsSilver'
import { SponsorsAmethyst } from './collections/SponsorsAmethyst';
import { Events } from "./collections/Events";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  globals: [AboutUs],
  collections: [Users, Media, Executives, Showcase, SponsorsSilver, SponsorsAmethyst, SponsorsGold, Initiatives, Events],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  sharp,
  plugins: [
    s3Storage({
        collections: {
            media: {
                prefix: "media",
            },
        },
        bucket: process.env.S3_BUCKET ?? "",
        config: {
            credentials: {
                accessKeyId: process.env.ACCESS_KEY ?? "",
                secretAccessKey: process.env.SECRET_ACCESS_KEY ?? "",
            },
            region: process.env.S3_REGION,
        },
    }),
],
});
