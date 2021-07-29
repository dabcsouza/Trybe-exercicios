let numbers = [5, 9, 3, 19, 101, 8, 100, 0, 35, 27];

// Parte 1 

for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}
//Parte 2

let sum = 0;
for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
}

console.log("A soma dos números é:" + sum);


//parte 3

media = sum/numbers.length;
console.log("A média dos números é: " + media);

// parte 4

if (media > 20){
    console.log("Média maior que 20");
} else {
    console.log("Média menor ou igual a 20");
}

//parte 5
let aux = numbers[1];

for (let i = 1; i < numbers.length; i += 1) {
    if (aux < numbers[i]) {
        aux = numbers[i];
    }
}

console.log("O maior número é: " + aux);

//Parte 6

let contOdd = 0;
for (let i = 0; i < numbers.length; i += 1){
    if (numbers[i]%2 === 1){
        contOdd += 1;
    }
}

console.log("Temos um total de: " + contOdd + " números ímpares.");

//parte 7
let menor=numbers[1];
for (let i = 1; i < numbers.length; i += 1){
    if(menor > numbers[i]){
        menor = numbers[i];
    }
}
console.log("O menor número é: " + menor);

//Parte 8

let meuVetor=[];
for (let i = 0; i < 25; i += 1){
    meuVetor[i] = i + 1;
}
console.log(meuVetor);

//Parte 9
console.log("");
for (i = 0; i < meuVetor.length; i += 1){
    console.log(meuVetor[i]/2);
}