import _ from 'lodash';

const sortByKey = (obj) => {
  const sortedKeys = Object.keys(obj).sort();
  return sortedKeys.reduce((acc, value) => {
    acc[value] = obj[value];
    return acc;
  }, {});
};

const diffToString = (sortDiffDatas, data1, data2) => {
  const entries = Object.entries(sortDiffDatas);
  const diffAsString = entries.reduce((acc, elem) => {
    const key = elem[0];
    const value = elem[1];
    if (value === true) {
      acc.push(` ${key}: ${data1[key]}`);
    }
    if (value === 'added') {
      acc.push(`+${key}: ${data2[key]}`);
    }
    if (value === 'deleted') {
      acc.push(`-${key}: ${data1[key]}`);
    }
    if (value === 'changed') {
      acc.push(`-${key}: ${data1[key]}`);
      acc.push(`+${key}: ${data2[key]}`);
    }
    return acc;
  }, []);
  return diffAsString.join('\n');
};

const getDiff = (data1, data2) => {
  const diffDatas = {};
  const entriesData1 = Object.entries(data1);
  const entriesData2 = Object.entries(data2);

  entriesData1.forEach((val) => {
    const [key, value] = val;

    if (_.has(data2, key) && data2[key] === value) {
      diffDatas[key] = true;
    }
    if (!_.has(data2, key)) {
      diffDatas[key] = 'deleted';
    }
    if (_.has(data2, key) && data2[key] !== value) {
      diffDatas[key] = 'changed';
    }
  });
  entriesData2.forEach((val) => {
    const [key] = val;

    if (!_.has(data1, key)) {
      diffDatas[key] = 'added';
    }
  });
  const sortDiffDatas = sortByKey(diffDatas);
  return diffToString(sortDiffDatas, data1, data2);
};

export default getDiff;
