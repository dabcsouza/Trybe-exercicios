const read = require('readline-sync');

const guessTheNumber = () => {
  const kick = read.questionInt(`Faça sua aposta, insira um número de 0 a 10: `);
  const drawnNumber = Math.floor(Math.random()*11);
  console.log((kick === drawnNumber)
    ? `Parabéns, número correto!\n`
    : `Opa, não foi dessa vez. O número era ${ drawnNumber }.\n`);
};

guessTheNumber();

module.exports = guessTheNumber;