import { rename as renameFile, access } from "node:fs/promises";
import { join } from "path";
import { getDirName } from "../../fileInfo.js";

const __dirname = getDirName(import.meta.url);
const oldPath = join(__dirname, "files", "wrongFilename.txt");
const newPath = join(__dirname, "files", "properFilename.md");

const existsFile = async (path) => {
  try {
    await access(path);
    return true;
  } catch (error) {
    return false;
  }
};

const rename = async () => {
  try {
    if (await existsFile(newPath)) {
      throw new Error("FS operation failed"); //if properFilename.md already exists
    } else {
      await renameFile(oldPath, newPath);
    }
  } catch (error) {
    throw new Error("FS operation failed"); //if wrongFilename.txt not exist
  }
};

await rename();
