function mapToNegativize(array) {
  return array.map(item => -item);
}

function mapToNoChange(array) {
  return array.map(item => item);
}

function mapToDouble(array) {
  return array.map(item => item * 2);
}

function mapToSquare(array) {
  return array.map(item => item**2);
}

function reduceToTotal(array, initial = 0) {
  return array.reduce(((total, item) => total + item), initial);
}

function reduceToAllTrue(array) {
  return array.every(item => item);
}

function reduceToAnyTrue(array) {
  return array.some(item => item);
}