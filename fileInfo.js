import { dirname } from "path";
import { fileURLToPath } from "url";

const getDirName = (metaUrl) => {
  return dirname(fileURLToPath(metaUrl));
};

export { getDirName };
