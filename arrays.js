var chocolateBars 
= [
  'snickers', 
  'hundred grand', 
  'kitkat', 
  'skittles'
];

function addElementToBeginningOfArray(array, newElement) {
  return [newElement, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, newElement) {
  array.unshift(newElement);
  return array;
}

function addElementToEndOfArray(array, newElement) {
  return [...array, newElement];
}

function destructivelyAddElementToEndOfArray(array, newElement) {
  array.push(newElement);
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}