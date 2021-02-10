import _ from 'lodash';

const getDiff = (data1, data2) => {
  const dataKeysSorted = Object.keys({ ...data1, ...data2 }).sort();
  const diffDatas = dataKeysSorted.reduce((acc, key) => {
    const value1 = data1[key];
    const value2 = data2[key];
    if (_.has(data1, key) && _.has(data2, key)) {
      if (data1[key] === data2[key]) {
        return [...acc, ` ${key}: ${value1}`];
      }
      return [...acc, `-${key}: ${value1}`, `+${key}: ${value2}`];
    }
    if (!_.has(data1, key)) {
      return [...acc, `+${key}: ${value2}`];
    }
    return [...acc, `-${key}: ${value1}`];
  }, []);
  return diffDatas.join('\n');
};

export default getDiff;
