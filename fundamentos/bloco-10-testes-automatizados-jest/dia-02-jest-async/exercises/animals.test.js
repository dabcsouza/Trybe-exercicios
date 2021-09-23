const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Animals.find((animal) => animal.name === name);
      if (Animals.length !== 0) {
        console.log(Animals[0]);
        return resolve(Animals[0]);
      }
      return reject(new Error())
    });
  });
};

console.log(async () => await getAnimal('Dorminhoco'));
// const getAnimal = (name) => {
//   typeof name === String ? findAnimalByName(name) : false;
//   typeof name === Number ? findAnimalByAge(name) : false;
// };

// describe('Testando promise - findAnimalByName', () => {
//   describe('Quando existe o animal com o nome procurado', () => {
//     test('Retorne o objeto do animal', () => {
//       expect.assertions(1);
//       return getAnimal('Dorminhoco').then(animal => {
//         expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
//       });
//     });
//   });

//   describe('Quando não existe o animal com o nome procurado', () => {
//     test('Retorna um erro', () => {
//       expect.assertions(1);
//       return getAnimal('Bob').catch(error =>
//         expect(error).toEqual('Nenhum animal com esse nome!')
//       );
//     });
//   });
// });