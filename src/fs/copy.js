import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
import {mkdir, copyFile, readdir, rm} from 'node:fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let srcFolderPath = join(__dirname, 'files');
let destFolderPath = join(__dirname, 'files_copy');

const copy = async () => {
    try {
        const promisesResult = await Promise.all([ // to execute multiple promises in parallel
            mkdir(destFolderPath),
            await readdir(srcFolderPath),
        ]);
        for (const file of promisesResult[1]){
            await copyFile(srcFolderPath + "\\" + file, destFolderPath + "\\" + file);
        }
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await copy();
