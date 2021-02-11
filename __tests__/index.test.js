import path from 'path';
import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('diffJson', () => {
  const path1 = getFixturePath('file1.json');
  const path2 = getFixturePath('file2.json');
  const expected = '+a: b\n'
      + '-abc: cba\n'
      + '-asdf: undefined1\n'
      + '+asdf: undefined\n'
      + '-date: today\n'
      + '+date: tomorroow\n'
      + '-follow: false\n'
      + ' host: hexlet.io\n'
      + '-key: value\n'
      + '+key: value42\n'
      + '-proxy: 123.234.53.22\n'
      + '-timeout: 50\n'
      + '+timeout: 20\n'
      + '+verbose: true\n'
      + '+z: end';
  expect(genDiff(path1, path2)).toEqual(expected);
});

test('diffYml', () => {
  const path1 = getFixturePath('file1.yml');
  const path2 = getFixturePath('file2.yml');

  const expected = '+a: b\n'
      + '-abc: cba\n'
      + '-asdf: undefined1\n'
      + '+asdf: undefined\n'
      + '-date: today\n'
      + '+date: tomorroow\n'
      + '-follow: false\n'
      + ' host: hexlet.io\n'
      + '-key: value\n'
      + '+key: value42\n'
      + '-proxy: 123.234.53.22\n'
      + '-timeout: 50\n'
      + '+timeout: 20\n'
      + '+verbose: true\n'
      + '+z: end';

  expect(genDiff(path1, path2)).toEqual(expected);
});
