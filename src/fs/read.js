import { readFile } from "node:fs/promises";
import { join } from "path";
import { getDirName } from "../../fileInfo.js";

const __dirname = getDirName(import.meta.url);
const filePath = join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  try {
    const fileContents = await readFile(filePath, { encoding: "utf8" });
    console.log(fileContents);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();
