const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const myList = products.map((product, index) => {
  const priceList = {};
  priceList[product] = prices[index];
  return priceList;
});

console.log(myList);