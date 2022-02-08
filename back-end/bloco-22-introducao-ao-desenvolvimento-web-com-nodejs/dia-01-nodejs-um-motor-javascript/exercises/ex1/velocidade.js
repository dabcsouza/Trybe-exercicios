const read = require('readline-sync');

const getDistance = () => {
  return read.questionFloat(`insira a distância (metros): `);
};

const getTime = () => {
  return read.questionInt(`insira o tempo (segundos): `);
};

const calcVelocity = () => {
  const calc = Number((getDistance() / getTime()).toFixed(2));
  result = isNaN(calc) ? -1 : calc;
  if(result === -1) console.log('Dados inválidos')
  else console.log(`Sua velocidade é de: ${result} m/s`);
};

calcVelocity();

module.exports = calcVelocity;