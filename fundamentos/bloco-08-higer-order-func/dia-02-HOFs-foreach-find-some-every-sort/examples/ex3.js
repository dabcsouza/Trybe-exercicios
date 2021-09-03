const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) =>  number % 3 === 0 && number % 5 === 0 ? true : false 
const firstNumber = numbers.find(findDivisibleBy3And5);

console.log(firstNumber);

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => name.length === 5 ? true : false
const firstFiveLetters = names.find( findNameWithFiveLetters );
console.log(firstFiveLetters);

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

const findMusic = (musicObj) => musicObj.id ===  '31031685' ? true : false;
const music = musicas.find(findMusic);
console.log(music.title);