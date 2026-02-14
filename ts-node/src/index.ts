import { printObject, genericFunction, generictFunctionArrow } from "./generics/generics";


// printObject(123);
// printObject(new Date());
// printObject({ a: 1, b: 2, c: 3 });
// printObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// printObject('Hola mundo');

const name: string = 'Tobías';

console.log(generictFunctionArrow(3.141618).toFixed(2));
console.log(generictFunctionArrow(name).toUpperCase());
console.log(generictFunctionArrow(new Date()).getDate());