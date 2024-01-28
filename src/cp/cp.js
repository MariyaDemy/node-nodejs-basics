import { getDirName } from "../../fileInfo.js";
import { join } from "path";
import { fork } from "node:child_process";

const __dirname = getDirName(import.meta.url);
const childProcessPath = join(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  //Docs: By default, pipes for stdin, stdout, and stderr are established between the parent Node.js process and the spawned subprocess
  fork(childProcessPath, args);
};

spawnChildProcess(["arg1", "arg2"]);
