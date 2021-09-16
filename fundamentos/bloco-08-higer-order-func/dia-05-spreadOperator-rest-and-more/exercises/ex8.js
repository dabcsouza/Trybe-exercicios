const assert = require('assert');

const greet = (...greetPar) => greetPar.length !== 1 ? `${greetPar[1]} ${greetPar[0]}` : `Hi ${greetPar[0]}`

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');