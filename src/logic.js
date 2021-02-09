import _ from 'lodash';

const sortByKey = (obj) => {
  const sortedKeys = Object.keys(obj).sort();
  return sortedKeys.reduce((acc, value) => {
    acc[value] = obj[value];
    return acc;
  }, {});
};

const objToString = (obj) => {
  const arrayEntries = [];
  for (const [key, value] of Object.entries(obj)) {
    arrayEntries.push(`${key}: ${value}`);
  }
  return arrayEntries.join('\n');
};

const getDiff = (data1, data2) => {
  const sortData1 = sortByKey(data1);
  const sortData2 = sortByKey(data2);
  const diff = {};
  for (const [key, value] of Object.entries(sortData1)) {
    if (_.has(sortData2, key) && sortData2[key] === value) {
      diff[`  ${key}`] = value;
    }
    if (!_.has(sortData2, key)) {
      diff[`- ${key}`] = value;
    }
    if (_.has(sortData2, key) && sortData2[key] !== value) {
      diff[`- ${key}`] = value;
      diff[`+ ${key}`] = sortData2[key];
    }
  }
  for (const [key, value] of Object.entries(sortData2)) {
    if (!_.has(sortData1, key)) {
      diff[`+ ${key}`] = value;
    }
  }
  return objToString(diff);
};

export default getDiff;
