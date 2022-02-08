const read = require('readline-sync');

const scripts = {
  '1': 'IMC',
  '2': 'Velocidade',
  '3': 'Sorteio',
};

console.table(scripts);

const numberScript = read.questionInt(`Insira o número do script que deseja executar: `);

switch(numberScript) {
  case(1):
    require('./imc');
    break;
  case(2):
    require('./velocidade');
    break;
  case(3):
    require('./sorteio');
    break;
  default:
    console.log('Número inválido para o script.\n');
};