const assert = require('assert');

const createMenu = (obj) => {
  const menu = obj;
  const restaurantFunctions = {
    fetchMenu: () => obj,
    consumption: [],
    order(myOrder) {
      this.consumption.push(myOrder);
      return restaurantFunctions; 
    },
    pay: () => {
      let payment = 0;
      const menuValues = Object.values(menu);
      const foods = Object.entries(menuValues[0]);
      const drinks = Object.entries(menuValues[1]);
      const fds = foods.concat(drinks);
      const restConsumption = restaurantFunctions.consumption;
      const compairToSum = (i, j) => {
        if (restConsumption[i] === fds[j][0]) {
          payment += fds[j][1];
          payment = Math.round(payment * 100) / 100;
        }
      };

      for (let i = 0; i < restConsumption.length; i += 1) {
        for (let j = 0; j < fds.length; j += 1) {
          compairToSum(i, j);
        }
      }
      return 1.1 * payment;
    },
  };
  return restaurantFunctions;
};

assert.strictEqual(Object.keys(createMenu()).includes('fetchMenu'), true);
assert.strictEqual(typeof createMenu().fetchMenu, 'function');

const functionParameter = { food: {}, drink: {} };
const actual = Object.keys(createMenu(functionParameter).fetchMenu());
const expected = [ 'food', 'drink'];
assert.strictEqual(Object.keys(functionParameter).length, actual.length);
assert.deepStrictEqual(actual, expected);
assert.deepStrictEqual(expected, createMenu(expected).fetchMenu());
assert.deepStrictEqual(createMenu().consumption, []);
const restaurant = createMenu().order('coxinha');
assert.deepStrictEqual(restaurant.consumption,['coxinha']);
restaurant.order("agua");
restaurant.order("sopa");
restaurant.order("sashimi");
assert.deepStrictEqual(restaurant.consumption, ["coxinha", "agua", "sopa", "sashimi"]);
const myObj = {food: {coxinha: 3.90, sanduiche: 9.90}, drinks: {agua: 3.90, cerveja: 6.90}}
const restaurant3 = createMenu(myObj);
restaurant3.order('coxinha');
restaurant3.order('agua');
restaurant3.order('sanduiche');
restaurant3.order('coxinha');
restaurant3.order('coxinha');
assert.strictEqual(restaurant3.pay(), 28.05);