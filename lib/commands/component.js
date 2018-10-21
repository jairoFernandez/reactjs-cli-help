'use strict';
const formatColor = require('../color');
const generateComponent = (args, config) => {
  console.log(formatColor('Generate component', 'FgGreen'));
  const route = args[0];
  const routeArray = splitFolder(route);
  const nameComponent = obtainNameComponent(routeArray, config);

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
    value = `${value[0].toUpperCase()}${value.slice(1)}`;
    return value;
  });
}

module.exports = generateComponent;