import { readdir } from "node:fs/promises";
import { join } from "path";
import { getDirName } from "../../fileInfo.js";

const __dirname = getDirName(import.meta.url);
const folderPath = join(__dirname, "files");

const list = async () => {
  try {
    const folderFiles = await readdir(folderPath);
    console.log(folderFiles);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
