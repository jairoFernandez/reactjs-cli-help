#!/usr/bin/env node
'use strict';
const lib = require('./lib');
const formatColor = require('./lib/color');
const config = require('./config');
console.log(formatColor(`

============================`, 'FgCyan'));
console.log(formatColor('  Reactjs CLI Help', 'FgCyan'))
console.log(formatColor('============================', 'FgCyan'));

const argument = process.argv.slice(2);
const command = argument[0];
lib.selectCommand(command, argument.slice(1), config);
