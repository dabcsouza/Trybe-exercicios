const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.map(elementName => elementName.toLowerCase()).reduce((acc, eName) => {
    const aInitial = eName.length;
    const aFinal = eName.replaceAll('a', '').length;
    acc += aInitial - aFinal;
    return acc;
  },0);
  
}
assert.deepStrictEqual(containsA(), 20);
