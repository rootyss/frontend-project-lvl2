import path from 'path';
import process from 'process';

const getPath = (filename) => path.resolve(process.cwd(), filename);

export default getPath;
