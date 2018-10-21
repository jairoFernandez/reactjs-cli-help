'use strict';
const formatColor = require('../color');

const help = () => {
  console.log(
    formatColor(`
    List of commands`, 
    'FgGreen')
  );
  console.log(`
  Help: 
  1. generate:
     generate component folder1/folder2/MyComponent
  2. Validate:
     ... in progress  
  `);
}

module.exports = help;