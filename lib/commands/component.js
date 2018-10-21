'use strict';
const formatColor = require('../color');
const fs = require('fs');
const path = require('path');
const files = require('../files');
/**
 * Generate a standar component for Reactjs
 * @param {Arguments used} args 
 * @param {Config vars} config 
 */
const generateComponent = (args, config) => {
  console.log(formatColor('Generate component', 'FgGreen'));
  const route = args[0];
  const routeArray = splitFolder(route);
  const nameComponent = obtainNameComponent(routeArray);
  const folders = normalizeFolders(routeArray, config);
  
  createStructure(nameComponent, folders, config);
}

function createStructure(nameComponent, folders, config){
  const actualDir = files.getCurrentFullPathBase();
  const dir = `${folders.join('/')}`;
  if (!fs.existsSync(dir)){
    mkdirpSync(dir)
  }
}

const mkdirpSync = function (dirPath) {
  const parts = dirPath.split(path.sep);
  for (let i = 1; i <= parts.length; i++) {
    fs.mkdirSync(path.join.apply(null, parts.slice(0, i)))
  }
}

function obtainNameComponent(nameArray){
  let normalizedArray = normalizeName(splitNameByUpperCase(nameArray[nameArray.length -1]));
  normalizedArray = normalizedArray.reduce((previus, current)=>{
    return previus + current;
  });

  return normalizedArray;
}

function createFolder(route){
  console.log(__dirname);
}

function splitFolder(route){
  return route.split('/').filter((name) => {
    return name !== '';
  });
}

function normalizeFolders(foldersArray, config){
  foldersArray.pop();
  if(!config.capitalizeFolders){
    return foldersArray.map((folder)=>{
      return lowerFirstLetter(folder);
    });
  }
  return foldersArray;
}

function splitNameByUpperCase(name){
  return name.replace(/(?:^|\.?)([A-Z])/g, function (x,y){return "_" + y})
        .replace(/^_/, "").split('_');
}

/**
 * 
 * @param {Array of name} nameArray 
 */
function normalizeName(nameArray){
  return nameArray.map((value)=>{
    value = value.toLowerCase();
    value = capitalizeFirstLetter(value);
    return value;
  });
}

function capitalizeFirstLetter(text){
  return `${text[0].toUpperCase()}${text.slice(1)}`;
}

function lowerFirstLetter(text){
  return `${text[0].toLowerCase()}${text.slice(1)}`;
}

module.exports = generateComponent;