const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ord = (array) => {
  let memory = '';
  let sorting = [];
    
  for (let j = 0; j < array.length - 1; j += 1) {
    for (let i = 0; i < array.length -1; i +=1) {
      if (array[i] > array[i+1]) {
        memory = array[i];
        array[i] = array[i+1];
        array[i+1] = memory;
        sorting = array;
      }
    }
  }
}
ord(oddsAndEvens);

console.log(`Seu vetor ordenado é [${oddsAndEvens}], parabéns tryber!!!`)