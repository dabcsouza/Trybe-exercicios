// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Laranja', 'banana', 'mamão', 'manga', 'morango', 'cupuaçu'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['creme de leite', 'leite condensado'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional, 'extra grande'];
};

console.log(fruitSalad(specialFruit, additionalItens));