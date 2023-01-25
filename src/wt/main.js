import { cpus } from "node:os";
import { Worker } from "node:worker_threads";
import { getDirName } from "../../fileInfo.js";
import { join } from "path";

const __dirname = getDirName(import.meta.url);
const workerPath = join(__dirname, "./worker.js");

const performCalculations = async () => {

  const logicalCPUCoresNumber = cpus().length;

  function createWorker(workerData) {
    return new Promise((resolve, reject) => {
      const worker = new Worker(workerPath, { workerData: workerData });
      worker.on("message", (message) => {
        resolve({ status: "resolved", data: message });
      });
      // "resolve" to pass it to the promise.all even if there is an error
      worker.on("error", (error) => {
        resolve({ status: "error", data: null });
      });
    });
  }

  const promisesArr = [];

  let i = 10;
  let n = 0;

  while (n < logicalCPUCoresNumber) {
    const workerPromise = createWorker(i);
    promisesArr.push(workerPromise);
    i++;
    n++;
  }

  Promise.all(promisesArr)
    .then((result) => {
      console.log(result);
    })
    .catch(function (error) {
      console.log(error);
    });
};

await performCalculations();
