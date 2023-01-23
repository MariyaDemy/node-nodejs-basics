import { createReadStream } from 'node:fs';
import { join } from "path";
import { getDirName } from "../../fileInfo.js";

const __dirname = getDirName(import.meta.url);
const readFile = join(__dirname, "files", "fileToRead.txt");

const read = async () => {
    const readableStream = createReadStream(readFile, "utf8");
    const writeableStream = process.stdout;
    readableStream.pipe(writeableStream);
};

await read();