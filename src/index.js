import getParser from './parser.js';
import getRender from './formatters/index.js';
import getObjDifference from './getObjDifference.js';
import { getFullPath, getFileContent, getFileExt } from './utils.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const fullPath1 = getFullPath(filepath1);
  const fullPath2 = getFullPath(filepath2);

  const contentFile1 = getFileContent(fullPath1);
  const contentFile2 = getFileContent(fullPath2);

  const extensionFile1 = getFileExt(filepath1);
  const extensionFile2 = getFileExt(filepath2);

  const parserFile1 = getParser(extensionFile1);
  const parserFile2 = getParser(extensionFile2);

  const file1 = parserFile1(contentFile1);
  const file2 = parserFile2(contentFile2);

  const difference = getObjDifference(file1, file2);
  const render = getRender(format);
  return render(difference);
};

export default genDiff;
