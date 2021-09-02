const assert = require('assert');

const circle = (radius) => {
  const PI = 3.14;
  if (!radius) { return undefined; }
  return {
    radius,
    area: PI * radius * radius,
    circumference: 2 * PI * radius,
  };
};

// assert.strictEqual(typeof circle(1), 'object');
// assert.strictEqual(Object.entries(circle(1)).length, 3);
// assert.strictEqual(circle(), undefined);
// assert.deepStrictEqual(Object.values(circle(2))[2], 12.56);
// assert.strictEqual(Math.round(Object.values(circle(3))[1]),28);
// assert.deepStrictEqual(Object.values(circle(3)), [3, 28.259999999999998, 18.84]);

assert.strictEqual(typeof circle(1), 'object');
    // Teste se o objeto retornado tem 3 entradas.
    assert.strictEqual(Object.entries(circle(1)).length, 3);
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    assert.strictEqual(circle(), undefined);
    // Teste que a função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2.
    assert.deepStrictEqual(Object.values(circle(2))[2].toPrecision(2), (2*Math.PI*2).toPrecision(2) );
    // Teste que a função retorna, dentro de um objeto, a área correta para um círculo de raio 3.
    assert.strictEqual(Object.values(circle(3))[1].toPrecision(2), ((Math.PI)*(3**2)).toPrecision(2));
    // Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.
    assert.deepStrictEqual(Object.values(circle(3)).map(n => Math.round(n)), [3, Math.round(Math.PI*(3**2)), Math.round(2*Math.PI*3)]);