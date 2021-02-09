import fs from 'fs';
import getPath from './getPath.js';
import getDiff from './logic.js';

const genDiff = (filepath1, filepath2) => {
  const file1 = fs.readFileSync(getPath(filepath1), 'utf8', (err) => {
    if (err) throw err;
  });
  const file2 = fs.readFileSync(getPath(filepath2), 'utf8', (err) => {
    if (err) throw err;
  });
  const contentFile1 = JSON.parse(file1);
  const contentFile2 = JSON.parse(file2);
  return getDiff(contentFile1, contentFile2);
};

export default genDiff;
