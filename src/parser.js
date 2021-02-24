import yaml from 'js-yaml';

const getParser = (format) => {
  switch (format) {
    case '.json':
      return JSON.parse;
    case '.yml':
      return yaml.load;
    default:
      throw new Error(`Unknown format ${format}`);
  }
};

export default getParser;
