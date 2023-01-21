import { writeFile } from "node:fs/promises";
import { join } from "path";
import { getDirName } from "../../fileInfo.js";

const __dirname = getDirName(import.meta.url);

const filePath = join(__dirname, "files", "fresh.txt");

const create = async () => {
  try {
    await writeFile(
      filePath,
      "I am fresh and young",
      { flag: "wx" } // if file already exists, there will be an error
    );
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await create();
