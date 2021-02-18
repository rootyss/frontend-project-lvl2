import stylish from './stylish.js';
import plain from './plain.js';
const getRender = (format) => {
  switch (format) {
    case 'json':
      return 1;
    case 'plain':
      return plain;
    case 'stylish':
      return stylish;
    default:
      throw new Error(`Unknown format ${format}. Use json, plain or stylish (default)`);
  }
};

export default getRender;
