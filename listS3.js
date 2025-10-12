// Workaround to verify images are saved in the private S3 bucket
// Run 'node listS3.js' to list all files currently in the bucket

import 'dotenv/config';
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.S3_REGION,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
});

async function listFiles() {
  try {
    const data = await s3Client.send(
      new ListObjectsV2Command({ Bucket: process.env.S3_BUCKET })
    );
    console.log("Files in S3 bucket:", data.Contents?.map(f => f.Key));
  } catch (err) {
    console.error("Error listing S3 bucket:", err);
  }
}
listFiles();
