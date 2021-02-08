#!/usr/bin/env node
import Command from 'commander';

import fs from 'fs';

const { version } = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const gendiff = Command;
gendiff
  .version(`${version}`)
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format');

gendiff.parse();
