import { join } from "path";
import { getDirName } from "../../fileInfo.js";
import { pipeline } from "node:stream/promises";
import { createGunzip } from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";

const __dirname = getDirName(import.meta.url);

const compressedFile = join(__dirname, "files", "archive.gz");
const decompressedFile = join(__dirname, "files", "fileToCompress.txt");

const decompress = async () => {
  const readableStream = createReadStream(compressedFile);
  const writeableStream = createWriteStream(decompressedFile);

  await pipeline(readableStream, createGunzip(), writeableStream);
};

await decompress();
