import stylish from './stylish.js';

const getRender = (format) => {
  switch (format) {
    case 'json':
      return 1;
    case 'plain':
      return 2;
    case 'stylish':
      return stylish;
    default:
      throw new Error(`Unknown format ${format}`);
  }
};

export default getRender;
