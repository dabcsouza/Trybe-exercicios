const read = require('readline-sync');

const getMass = () => {
  return read.questionFloat(`Qual seu peso? `);
};

const getHeight = () => {
  return read.questionFloat(`Qual sua altura? `);
};

const calcIMC = () => {
  const calc = Number((getMass() / (getHeight() ** 2)).toFixed(2));
  console.log(`Seu IMC é: `, calc);
  result = isNaN(calc) ? -1 : calc;
  if(result === -1) console.log('Dados inválidos\n')
  else if(result < 18.5) console.log('Abaixo do peso (magreza)\n')
  else if(result >= 18.5 && result < 25) console.log('Peso normal\n')
  else if(result >= 25 && result < 30) console.log('Acima do peso (sobrepeso)\n')
  else if(result >= 30 && result < 35) console.log('Obesidade grau I\n')
  else if(result >= 35 && result < 40) console.log('Obesidade grau II\n')
  else console.log('Obesidade graus III e IV\n');
  }

calcIMC();

module.exports = calcIMC;
