const numbers = [50, 85, -30, 3, 15];

let biggerNumber = numbers[0];

for (let i = 1; i < numbers.length; i +=1) {
  biggerNumber > numbers[i] ? false : biggerNumber = numbers[i];
}

console.log(biggerNumber);

/// Usando reduce

const biggerReduce = numbers.reduce((bigger, number) => {
  bigger > number ? false : bigger = number
return bigger});

console.log(biggerReduce);