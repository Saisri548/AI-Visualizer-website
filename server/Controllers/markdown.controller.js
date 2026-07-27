import { GetObjectCommand } from "@aws-sdk/client-s3";

import { s3Client } from "../Utils/s3Client.js";

import { parseMarkdown } from "../Utils/markdownParser.js";



export const getMarkdown = async (req, res) => {
  try {
    const { filename } = req.params;

    const command = new GetObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `markdown/${filename}`,
    });

    const response = await s3Client.send(command);

    const markdown = await response.Body.transformToString();

    const article = parseMarkdown(markdown);

    res.json({
      success: true,
      article,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};