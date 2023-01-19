import { writeFile } from 'node:fs/promises';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, 'files', 'fresh.txt');

const create = async () => {
  try {
    await writeFile(
        filePath,
        'I am fresh and young',
        {flag: 'wx'} // if file already exists, there will be an error
      );
  } catch(error) {
        throw Error('FS operation failed');
  }
};

await create();