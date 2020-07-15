// Возможность JS поднимать некоторые определения в начало файла

console.log(sum(32, 67)); // 99

function sum(a, b) {
  return a + b; 
}

console.log(sum(4, 6)); // 10

console.log(value); // undefined, but not an error - поскольку hoisting - подъем  определения переменной value в начало файла
var value = 100;
console.log(value); // 100 инициализация переменной value в предыдущей строке, но не определение

var value2;
console.log(value2); // undefined
value2 = 200;
console.log(value2); // 200

console.log(d); // ReferenceError: variable d is not defined
let d = 1000;
console.log(f); // ReferenceError: variable f is not defined
const f = 2000;

// Function Expression: const f = () => {} =  not hoisting
// Function Declaration: function f() {} - hoisting
console.log(summa(5, 6)); // ReferenceError: summa is not defined
const summa = (a, b) => a + b;
console.log(summa(7, 4)); // 11

