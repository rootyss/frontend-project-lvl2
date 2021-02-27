import { parse, getFormat } from './parser.js';
import formatting from './formatters/index.js';
import genObjDifference from './genObjDifference.js';
import { getFullPath, getFileContent, getFileExt } from './utils.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const contentFile1 = getFileContent(getFullPath(filepath1));
  const contentFile2 = getFileContent(getFullPath(filepath2));

  const format1 = getFormat(getFileExt(filepath1));
  const format2 = getFormat(getFileExt(filepath2));

  const data1 = parse(format1, contentFile1);
  const data2 = parse(format2, contentFile2);

  const difference = genObjDifference(data1, data2);
  return formatting(format, difference);
};

export default genDiff;
