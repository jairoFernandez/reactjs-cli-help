'use strict';
const formatColor = require('../../color');
const fs = require('fs');
const path = require('path');
const files = require('../../files');

function createStructure(nameComponent, folders, config){
  nameComponent = lowerFirstLetter(nameComponent);
  const actualDir = files.getCurrentFullPathBase();
  const dir = `${folders.join('/')}`;
  console.log(dir)
  if (!fs.existsSync(dir)){
    mkdirpSync(dir);
  }

  if (!fs.existsSync(`${dir}/${nameComponent}`)){
    fs.mkdirSync(`${dir}/${nameComponent}`);
  }

  
}

const mkdirpSync = function (dirPath) {
  const parts = dirPath.split(path.sep);
  for (let i = 1; i <= parts.length; i++) {
    const folder = path.join.apply(null, parts.slice(0, i));
    if(!fs.existsSync(folder)){
      fs.mkdirSync(folder);
    }
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

module.exports = {
  splitFolder,
  obtainNameComponent,
  normalizeFolders,
  createStructure
}