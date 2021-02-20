import parsFile from './parser.js';
import getRender from './formatters/index.js';
import getObjDifference from './getObjDifference.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const file1 = parsFile(filepath1);
  const file2 = parsFile(filepath2);
  const difference = getObjDifference(file1, file2);
  const render = getRender(format);
  return render(difference);
};

export default genDiff;
