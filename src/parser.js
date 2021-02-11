import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import getPath from './getPath.js';

const parsFile = (filePath) => {
  const fullPath = getPath(filePath);
  const fileContent = fs.readFileSync(fullPath, 'utf8');
  const format = path.extname(filePath);
  if (format === 'json') {
    return JSON.parse(fileContent);
  }
  return yaml.load(fileContent);
};

export default parsFile;
