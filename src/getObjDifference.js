import _ from 'lodash';

const getObjDifference = (data1, data2) => {
  const unionKeys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));
  return unionKeys
    .map((node) => {
      if (!_.has(data1, node)) {
        return {
          name: node,
          type: 'added',
          value: data2[node],
        };
      }
      if (!_.has(data2, node)) {
        return {
          name: node,
          type: 'deleted',
          value: data1[node],
        };
      }
      if (_.isObject(data1[node]) && _.isObject(data2[node])) {
        return {
          name: node,
          type: 'nested',
          children: getObjDifference(data1[node], data2[node]),
        };
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
      return {
        name: node,
        type: 'identical',
        value: data1[node],
      };
    });
};

export default getObjDifference;
