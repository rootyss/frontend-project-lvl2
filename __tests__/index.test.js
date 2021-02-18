import path from 'path';
import fs from 'fs';
import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('diffJsonToStylish', () => {
  const path1 = getFixturePath('file1.json');
  const path2 = getFixturePath('file2.json');
  const expected = fs.readFileSync(getFixturePath('res-stylish.txt'), 'utf8');
  expect(genDiff(path1, path2)).toEqual(expected);
});

test('diffYmlToStylish', () => {
  const path1 = getFixturePath('file1.yml');
  const path2 = getFixturePath('file2.yml');
  const expected = fs.readFileSync(getFixturePath('res-stylish.txt'), 'utf8');
  expect(genDiff(path1, path2)).toEqual(expected);
});

test('diffJsonToPlain', () => {
  const path1 = getFixturePath('file1.json');
  const path2 = getFixturePath('file2.json');
  const expected = fs.readFileSync(getFixturePath('res-plain.txt'), 'utf8');
  expect(genDiff(path1, path2, 'plain')).toEqual(expected);
});

test('diffYmlToPlain', () => {
  const path1 = getFixturePath('file1.yml');
  const path2 = getFixturePath('file2.yml');
  const expected = fs.readFileSync(getFixturePath('res-plain.txt'), 'utf8');
  expect(genDiff(path1, path2, 'plain')).toEqual(expected);
});

test('diffJsonToJson', () => {
  const path1 = getFixturePath('file1.json');
  const path2 = getFixturePath('file2.json');
  const expected = fs.readFileSync(getFixturePath('res-json.txt'), 'utf8');
  expect(genDiff(path1, path2, 'json')).toEqual(expected);
});

test('diffYmlToJson', () => {
  const path1 = getFixturePath('file1.yml');
  const path2 = getFixturePath('file2.yml');
  const expected = fs.readFileSync(getFixturePath('res-json.txt'), 'utf8');
  expect(genDiff(path1, path2, 'json')).toEqual(expected);
});
