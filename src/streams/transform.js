import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";

const transform = async () => {
  const readableStream = process.stdin;
  const writeableStream = process.stdout;

  const reverseText = new Transform({
    transform(chunk, encoding, callback) {
      callback(
        null,
        chunk.toString().trim().split("").reverse().join("") + "\n"
      );
    },
  });

  await pipeline(readableStream, reverseText, writeableStream);
};

await transform();
