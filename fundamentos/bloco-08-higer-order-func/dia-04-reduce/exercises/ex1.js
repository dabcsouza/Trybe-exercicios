const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
return arrays.reduce((acc, element) => {
    element.forEach(value => value !== ' ' ? acc.push(value) : acc);
    return acc;
  }, []);
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);