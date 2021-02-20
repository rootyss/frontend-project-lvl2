import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import getPath from './getPath.js';

const getFullPath = (filePath) => getPath(filePath);

const getFileContent = (fullPath) => fs.readFileSync(fullPath, 'utf8');

const getFileFormat = (filePath) => path.extname(filePath);

const parsFile = (filePath) => {
  const fullPath = getFullPath(filePath);
  const fileContent = getFileContent(fullPath);
  const format = getFileFormat(filePath);
  if (format === 'json') {
    return JSON.parse(fileContent);
  }
  return yaml.load(fileContent);
};

export default parsFile;
