import stylish from './stylish.js';

const getRender = (format) => {
  switch (format) {
    case 'json':
      return 1;
    case 'plain':
      return 2;
    default:
      return stylish;
  }
};

export default getRender;
