#!/usr/bin/env node
import Command from 'commander';
import fs from 'fs';
import genDiff from '../src/index.js';
import getFixturePath from '../src/getFixturePath.js';

const { version } = JSON.parse(fs.readFileSync(getFixturePath('../package.json'), 'utf8'));
const gendiff = Command;
gendiff
  .version(`${version}`)
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    genDiff(filepath1, filepath2);
  });

gendiff.parse();
