const firstName = 'David';
const keyname = 'Name';
const lastName = 'Souza';
const keyLastName = 'Last Name'
const age = '31';
const keyAge = 'age';
const myObj = {};

myObj[keyname] = firstName;
console.table(myObj);
myObj[keyLastName] = lastName;
console.table(myObj);
myObj[keyAge] = age;
console.table(`

Objeto Final`);
console.table(myObj);