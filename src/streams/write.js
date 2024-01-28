import { createWriteStream } from "node:fs";
import { join } from "path";
import { getDirName } from "../../fileInfo.js";

const __dirname = getDirName(import.meta.url);
const writeFile = join(__dirname, "files", "fileToWrite.txt");

const write = async () => {
  const writeableStream = createWriteStream(writeFile);
  const readableStream = process.stdin;
  readableStream.pipe(writeableStream);
};

await write();
