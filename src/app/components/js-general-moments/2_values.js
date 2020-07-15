// Передача значение и рефов для примитивов и обектов
let a = 42;
let b = a;
b += 100;
console.log('a', a); // 42
console.log('b', b); // 142

let c = [1, 2, 3, 4, 5];
let d = c;
d.push(6);
console.log('c', c); // [1, 2, 3, 4, 5, 6]
console.log('d', d); // [1, 2, 3, 4, 5, 6]
let e = [1, 2, 3, 4, 5, 6];
console.log(c === d); // true
console.log(e === c); // false