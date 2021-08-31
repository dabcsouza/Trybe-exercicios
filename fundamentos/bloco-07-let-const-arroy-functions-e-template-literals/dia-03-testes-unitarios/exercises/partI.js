// Exercicio 1
const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.strictEqual(sum(4, 5), 9); //1 ok
assert.strictEqual(sum(0,0),0); //2 ok
assert.throws(() => sum(4,'5')); //3 ok

// Exercicio 

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

assert.strictEqual(typeof myRemove, 'function');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
let arr = [1, 2, 3, 4];
myRemove(arr,3);
assert.deepStrictEqual([1, 2, 3, 4],arr);
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);

// Part 3

function myRemoveWithoutCopy(arr, item) {
    for (let index = 0, len = arr.length; index < len; index += 1) {
      if (arr[index] === item) {
        arr.splice(index, 1);
        index -= 1;
        len -= 1;
      }
    }
  
    return arr;
  }

  assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
  assert.notDeepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
  myRemoveWithoutCopy(arr, 3); //arr = [1, 2, 3, 4]
  assert.notDeepEqual(arr,[1, 2, 3, 4]);
  assert.deepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);

  // Exercicio 4;

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

assert.strictEqual(myFizzBuzz(15),'fizzbuzz');
assert.strictEqual(myFizzBuzz(21),'fizz');
assert.strictEqual(myFizzBuzz(25),'buzz');
assert.strictEqual(myFizzBuzz(22), 22);
assert.strictEqual(myFizzBuzz('3'), false);

// Exercicio 5

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};
  
const obj2 = {
  description: 'My Description',
  title: 'My Title',
};
  
const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

assert.deepStrictEqual(obj1,obj2);
assert.throws(() => assert.strictEqual(obj1, obj3)); // como 1 = 2 e 1 != 3 portante 2 != 3
