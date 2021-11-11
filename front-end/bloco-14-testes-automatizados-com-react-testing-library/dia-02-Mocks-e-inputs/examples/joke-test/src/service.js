const randNumber = () => Math.floor(Math.random()*101);
const fooUperCase = (a) => a.toUpperCase();
const fooFirstLetter = (a) => a[0];
const fooConc = (...args) => args.join(' ');
module.exports = { randNumber, fooConc, fooFirstLetter, fooUperCase };