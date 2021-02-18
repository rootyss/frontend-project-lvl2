import path from 'path';
import fs from 'fs';
import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('diffJson', () => {
  const path1 = getFixturePath('file1.json');
  const path2 = getFixturePath('file2.json');
  const expected = fs.readFileSync(getFixturePath('res-stylish.txt'), 'utf8');
  expect(genDiff(path1, path2)).toEqual(expected);
});

test('diffYml', () => {
  const path1 = getFixturePath('file1.yml');
  const path2 = getFixturePath('file2.yml');
  const expected = fs.readFileSync(getFixturePath('res-stylish.txt'), 'utf8');
  expect(genDiff(path1, path2)).toEqual(expected);
});

/*test('diffJson', () => {
  const path1 = getFixturePath('file1.json');
  const path2 = getFixturePath('file2.json');
  const expected = fs.readFileSync(getFixturePath('res-plain.txt'), 'utf8');
  expect(genDiff(path1, path2, 'plain')).toEqual(expected);
});

test('diffYml', () => {
  const path1 = getFixturePath('file1.yml');
  const path2 = getFixturePath('file2.yml');
  const expected = fs.readFileSync(getFixturePath('res-plain.txt'), 'utf8');
  expect(genDiff(path1, path2, 'plain')).toEqual(expected);
});*/
