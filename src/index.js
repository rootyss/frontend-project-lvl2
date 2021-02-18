import _ from 'lodash';
import parsFile from './parser.js';
import getRender from './formatters/index.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const file1 = parsFile(filepath1);
  const file2 = parsFile(filepath2);

  const iter = (data1, data2) => {
    const unionKeys = [..._.union(_.keys(data1), _.keys(data2))].sort();
    return unionKeys
      .map((node) => {
        if (!_.has(data1, node)) {
          return { name: node, type: 'added', value: data2[node] };
        }
        if (!_.has(data2, node)) {
          return { name: node, type: 'deleted', value: data1[node] };
        }
        if (_.isObject(data1[node]) && _.isObject(data2[node])) {
          return { name: node, type: 'nested', children: iter(data1[node], data2[node]) };
        }
        if ((typeof data1[node] !== typeof data2[node])
              || (data1[node] !== data2[node])) {
          return {
            name: node,
            type: 'changed',
            valueBefore: data1[node],
            valueAfter: data2[node],
          };
        }
        return { name: node, type: 'identical', value: data1[node] };
      });
  };
  const difference = iter(file1, file2);
  const render = getRender(format);
  return render(difference);
};

export default genDiff;
