const readLine = require('readline-sync');

const boobleSort = (arrayToSort) => {
  for (let j = 0; j < arrayToSort.length - 2; j++) {
    for (let i = 0; i < arrayToSort.length - 1; i += 1) {
      if(arrayToSort[i + 1] < arrayToSort[i]) {
        const varSupport = arrayToSort[i];
        arrayToSort[i] = arrayToSort[i + 1];
        arrayToSort[i + 1] = varSupport;
      }
    }
  }
  return arrayToSort;
}

console.log("Este pacote usa o algorítmo de booble sort para ordenar alguns arrays:\n")
console.log([40, 1, 5, 200, 2], ` => [${ boobleSort([40, 1, 5, 200, 2])}]\n`);
console.log([9, 13, 16, 21, 12, 32], ` => [${ boobleSort([9, 13, 16,
  21, 12, 32])}] \n`);
console.log("Voce também pode colocar seu array para ordenação.\n");

let readContinue = readLine.question('Gostaria de tentar? [s/n]:');

while(readContinue === 's') {
  const arrayRecebido = readLine.question('\ninsira uma sequência de números a serem ordenados \n(separados por vírgula): ');
  const arrayParsed = arrayRecebido.split(',')
    .map((item) => Number(item)).filter((item) => !isNaN(item));
  console.log(`\n\nEntrada: `, arrayParsed);
  console.log(`Saída: `, boobleSort(arrayParsed));
  readContinue = readLine.question('\nGostaria de continuar? [s/n]:');
}

