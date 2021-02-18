import _ from 'lodash';

const valueToString = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return `${value}`;
};

const renderPlain = (difference) => {
  const iter = (data, name = '') => {
    const result = data.map((elem) => {
      const names = name + elem.name;
      const { type, value } = elem;
      if (type === 'added') {
        return `Property '${names}' was added with value: ${valueToString(value)}`;
      }
      if (type === 'deleted') {
        return `Property '${names}' was removed`;
      }
      if (type === 'changed') {
        const { valueBefore, valueAfter } = elem;
        return `Property '${names}' was updated. From ${valueToString(valueBefore)} to ${valueToString(valueAfter)}`;
      }
      if (type === 'nested') {
        return iter(elem.children, `${names}.`);
      }
      return null;
    });
    return result.filter((el) => el !== null).join('\n');
  };
  return iter(difference);
};

export default renderPlain;
