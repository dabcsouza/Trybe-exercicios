const { findAnimalsByType, Animals } = require("./Animals");

describe('Quando o tipo do animal existe', () => {
  it('Retorne a lista de animais', () => (
    findAnimalsByType('Dog').then((listOfDogs) => {
      expect(listOfDogs[0].name).toEqual('Dorminhoco');
      expect(listOfDogs[1].name).toEqual('Soneca');
    })
  ));
});

describe('Quando o tipo do animal, não existe', () => {
  it('Retorne a lista de animais', () => {
    expect.assertions(1);
    findAnimalsByType('Lion').catch((error) => (
      expect(error.message).toMatch('Não possui esse tipo de animal.')
    ))
  });
});