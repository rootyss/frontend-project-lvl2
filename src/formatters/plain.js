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
    const dataFiltered = data.filter((el) => !(el.type === 'identical'));
    const result = dataFiltered.map((elem) => {
      const names = `${name}${elem.name}`;
      const { type, value } = elem;
      const { valueBefore, valueAfter } = elem;
      switch (type) {
        case 'added':
          return `Property '${names}' was added with value: ${valueToString(value)}`;
        case 'deleted':
          return `Property '${names}' was removed`;
        case 'changed':
          return `Property '${names}' was updated. From ${valueToString(valueBefore)} to ${valueToString(valueAfter)}`;
        case 'nested':
          return iter(elem.children, `${names}.`);
        default:
          throw new Error('Unknown node type');
      }
    });
    return result.join('\n');
  };
  return iter(difference);
};

export default renderPlain;
