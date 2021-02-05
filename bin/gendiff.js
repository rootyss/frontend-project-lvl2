#!/usr/bin/env node

import Command from 'commander';
import fs from 'fs';

const version = JSON.parse(fs.readFileSync('package.json', 'utf8')).version;

const gendiff = Command;

gendiff
    .version(`${version}`)
    .description('Compares two configuration files and shows a difference.');

gendiff.parse();

