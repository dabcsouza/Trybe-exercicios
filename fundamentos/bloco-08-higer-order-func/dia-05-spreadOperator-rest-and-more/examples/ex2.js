const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

[text, foo] = saudacoes;
foo(text);

// Exercício 2

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

const desc = [comida, animal, bebida];
console.log(desc);
[animal, bebida, comida] = desc;
console.log(comida, animal, bebida);


//Exemplo 3

let numerosPares = [1, 3, 5, 6, 8, 10, 12];
[ _, _, _, n1, n2, n3, n4] = numerosPares;
numerosPares = [n1, n2, n3, n4];
console.log(numerosPares); // [6, 8, 10, 12];

