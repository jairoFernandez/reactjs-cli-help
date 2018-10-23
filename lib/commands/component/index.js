'use strict';
const formatColor = require('../../color');
const utils = require('./utils');
/**
 * Generate a standar component for Reactjs
 * @param {Arguments used} args 
 * @param {Config vars} config 
 */
const generateComponent = (args, config) => {
  const route = args[0];
  const routeArray = utils.splitFolder(route);
  const nameComponent = utils.obtainNameComponent(routeArray);
  const folders = utils.normalizeFolders(routeArray, config);
  
  console.log(formatColor(`Generate component ${nameComponent}`, 'FgGreen'));
  utils.createStructure(nameComponent, folders, config);
}

module.exports = generateComponent;
