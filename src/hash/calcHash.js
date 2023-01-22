import { join } from "path";
import { getDirName } from "../../fileInfo.js";
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const __dirname = getDirName(import.meta.url);
let filePath = join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  try {
    const fileContents = await readFile(filePath);
    const hexHash = createHash("sha256").update(fileContents).digest("hex");
    console.log(hexHash);
  } catch (error) {
    console.log(error);
  }
};

await calculateHash();
