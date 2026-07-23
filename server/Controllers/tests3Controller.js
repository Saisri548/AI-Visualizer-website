import {
  ListObjectsV2Command,
} from "@aws-sdk/client-s3";

import s3Client from "../config/s3.js";

export const testS3Connection = async (req, res) => {
  try {
    const command = new ListObjectsV2Command({
      Bucket: process.env.AWS_BUCKET_NAME,
    });

    const response = await s3Client.send(command);

    res.status(200).json({
      success: true,
      message: "AWS S3 Connected Successfully",
      bucket: process.env.AWS_BUCKET_NAME,
      totalObjects: response.KeyCount ?? 0,
      objects: response.Contents ?? [],
    });
  } catch (error) {
    console.error("S3 Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
      code: error.Code || error.name,
    });
  }
};