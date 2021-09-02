const assert = require('assert');

const productDetails = (firstProduct, secondProduct) => [
  {
    name: firstProduct,
    details: {
      productId: `${firstProduct}123`,
    },
  },
  {
    name: secondProduct,
    details: {
      productId: `${secondProduct}123`,
    },
  },
];

// assert.strictEqual(typeof productDetails(),'object');
// assert.strictEqual(Object.entries(productDetails()).length, 2);
// assert.strictEqual(typeof productDetails()[0], 'object');
// assert.strictEqual(typeof productDetails()[1], 'object');
// assert.notDeepStrictEqual(productDetails('alcool', 'gel')[0], productDetails('alcool', 'gel')[1]);
// const string1 = productDetails()[0].details.productId;
// const string2 = productDetails()[1].details.productId;
// assert.strictEqual(string1.split('').slice(string1.length-3, string1.length).join(''), '123');
// assert.strictEqual(string2.split('').slice(string2.length-3, string2.length).join(''), '123');

assert.strictEqual(typeof productDetails(),'object');
// Teste que o array retornado pela função contém dois itens dentro.
assert.strictEqual(Object.entries(productDetails()).length, 2);
// Teste que os dois itens dentro do array retornado pela função são objetos.
assert.strictEqual(typeof productDetails()[0], 'object');
assert.strictEqual(typeof productDetails()[1], 'object');
// Teste que os dois objetos são diferentes entre si.
assert.notDeepStrictEqual(productDetails('alcool', 'gel')[0], productDetails('alcool', 'gel')[1]);
// Teste que os dois productIds terminam com 123.
const string1 = productDetails()[0].details.productId;
const string2 = productDetails()[1].details.productId;
assert.strictEqual(string1.split('').slice(string1.length-3, string1.length).join(''), '123');
assert.strictEqual(string2.split('').slice(string2.length-3, string2.length).join(''), '123');