// Your code here
const mapToNegativize = (array) => array.map(element => -element)
const mapToNoChange = (array) => array.map(element => element)
const mapToDouble = (array) => array.map(element => element * 2)
const mapToSquare = (array) => array.map(element => element ** 2)
const reduceToTotal = (array, initial = 0) => array.reduce(((total, item) => total + item), initial)
const reduceToAllTrue = (array) => array.every(value => value)
const reduceToAnyTrue = (array) => array.some(value => value)