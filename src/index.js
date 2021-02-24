import getParser from './parser.js';
import getRender from './formatters/index.js';
import getObjDifference from './getObjDifference.js';
import { getFullPath, getFileContent, getFileExt } from './utils.js';

const parse = (ext, content) => getParser(ext)(content);

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const contentFile1 = getFileContent(getFullPath(filepath1));
  const contentFile2 = getFileContent(getFullPath(filepath2));

  const data1 = parse(getFileExt(filepath1), contentFile1);
  const data2 = parse(getFileExt(filepath2), contentFile2);

  const difference = getObjDifference(data1, data2);
  const render = getRender(format);
  return render(difference);
};

export default genDiff;
