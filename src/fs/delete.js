import { rm } from "node:fs/promises";
import { join } from "path";
import { getDirName } from "../../fileInfo.js";

const __dirname = getDirName(import.meta.url);
const filePath = join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
  try {
    await rm(filePath);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await remove();
