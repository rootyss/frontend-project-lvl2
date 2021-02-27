#!/usr/bin/env node
import Command from 'commander';
import { createRequire } from 'module';
import genDiff from '../index.js';

const require = createRequire(import.meta.url);
const { version, description } = require('../package.json');

const gendiff = Command;

gendiff
  .version(version)
  .arguments('<filepath1> <filepath2>')
  .description(description)
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2, gendiff.opts().format));
  });

gendiff.parse(process.argv);
