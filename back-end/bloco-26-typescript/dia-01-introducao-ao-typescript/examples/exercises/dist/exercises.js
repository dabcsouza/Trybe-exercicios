"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circumference = exports.diamond = exports.trapeze = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
function greeter(name) {
    return `Olá ${name}`;
}
exports.greeter = greeter;
;
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
;
function add(x, y) {
    return x + y;
}
exports.add = add;
;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
;
function triangle(base, height) {
    return (base * height / 2);
}
exports.triangle = triangle;
;
function square(side) {
    return Math.pow(side, 2);
}
exports.square = square;
;
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
;
function trapeze(majorDiag, minorDiag, height) {
    return (majorDiag + minorDiag) * height / 2;
}
exports.trapeze = trapeze;
;
function diamond(D, d) {
    return (D + d) / 2;
}
exports.diamond = diamond;
;
function circumference(r) {
    return Math.PI * Math.pow(r, 2);
}
exports.circumference = circumference;
;
