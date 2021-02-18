import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const getRender = (format) => {
  switch (format) {
    case 'json':
      return json;
    case 'plain':
      return plain;
    case 'stylish':
      return stylish;
    default:
      throw new Error(`Unknown format ${format}. Use json, plain or stylish (default)`);
  }
};

export default getRender;
