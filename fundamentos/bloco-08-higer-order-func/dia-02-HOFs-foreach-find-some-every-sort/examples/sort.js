const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const peopleByGrowingAge = people.sort((age1, age2) => age1.age > age2.age ? 1 : -1).slice();
const peopleByDecreasingAge = people.sort((age1, age2) => age1.age < age2.age ? 1 : -1).slice();

console.log(peopleByGrowingAge);
console.log(peopleByDecreasingAge);