const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

//usando filter e reduce

const sumEven = numbers.filter(number => number % 2 === 0 ? number : false).reduce((cont, number) => cont + number);

console.log(sumEven);

// Sem o filter

const sumEvenOutFilter = numbers.reduce((acc, number) => number % 2 === 0 ? number + acc : acc);
console.log(sumEvenOutFilter);