import { join } from "path";
import { getDirName } from "../../fileInfo.js";
import { pipeline } from "node:stream/promises";
import { createGzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";

const __dirname = getDirName(import.meta.url);
const initialFile = join(__dirname, "files", "fileToCompress.txt");
const compressedFile = join(__dirname, "files", "archive.gz");

const compress = async () => {
  const readableStream = createReadStream(initialFile, "utf-8");
  const writeableStream = createWriteStream(compressedFile);

  await pipeline(readableStream, createGzip(), writeableStream);
};

await compress();
