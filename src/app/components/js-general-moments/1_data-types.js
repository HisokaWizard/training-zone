// Types in the js: null, undefined, number, string, boolean, object, symbol

console.log(typeof undefined); // undefined
console.log(typeof 5); // number
console.log(typeof 'Hello'); // Variants of the string: '', "", ``
console.log(typeof false); // boolean
console.log(typeof {from: 'Spb'}); // object
console.log(typeof Symbol('Hi')); // symbol

// Specials in the JS:
console.log(typeof null); // historical reason it is looks like an object
console.log(typeof function() {}); // js doesn't have type function
console.log(typeof NaN); // NaN - not a number has type number

// Cast или приведение типов
// 1. Boolean false formats: '', 0, null, undefined, NaN, false
// false
console.log('Only false:');
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean(false));
// true
console.log('Only true:');
console.log(Boolean('Hello'));
console.log(Boolean(1));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(function(){}));
console.log(Boolean(Symbol('Hi')));

// Strings and numbers
// null cast to 0 в случае работы с арифметическими операторами 
console.log('Strings and numbers:');
console.log(1 + '2'); // '12'
console.log('' + 1 + 0 + 7); // '107'
console.log('' - 1 - 0 + 7); // 6
console.log('3' * 8); // 24
console.log(4 + 11 + 'px'); // '15px'
console.log(4 + 'px' + 11); // '4px11'
console.log('42' - 11); // '31'
console.log('42px' - 11); // 'NaN'
console.log('44' / 11); // '4'
console.log(null + 11); // '11'
console.log(null * 11); // '0'
console.log(null / 11); // '0'
console.log(null - 11); // '-11'
console.log(11 / null); // 'Infinity'
console.log(undefined + 11); // NaN
console.log(undefined * 11); // NaN the same - / + *
console.log([] + 5); // 5 Пустой массив расцениваниется как 0  
console.log([5] + 5); // 55 Массив при работе с арифметическими операторами приводится к строке через метод toString()
console.log([3, 4] + 5); // '3,45'
console.log([3, 4] * 5); // NaN - / * не переопределены для работы с объектами
console.log({s: 3, d: 4} * 5); // NaN (- / * не переопределены для работы с объектами)
console.log({s: 3, d: 4} + 5); //[object Object]5
console.log(JSON.stringify({s: 3, d: 4}) + 5); //{"s":3,"d":4}5

// == vs ===
// Двойное равно сравнивает c приведением типов, не слишком строго, тройное равно сравнивает без приведения типов
console.log('== vs ===');
console.log('2' == 2); // true
console.log('2' === 2); // false
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log('0' == false); // true
console.log('0' == 0); // true
console.log(0 == 0); // true
// Special compares:
console.log('Special compares:');
console.log(false == ''); // true
console.log(false == []); // true
console.log(false == {}); // false
console.log('' == 0); // true
console.log('' == []); // true
console.log('' == {}); // false
console.log(0 == []); // true
console.log(0 == {}); // false
console.log(0 == null); // false
console.log(0 == undefined); // false
console.log(false === ''); // false
console.log(false === []); // false
console.log(false === {}); // false
console.log('' === 0); // false
console.log('' === []); // false
console.log('' === {}); // false
console.log(0 === []); // false
console.log(0 === false); // false
console.log(0 === null); // false
console.log(0 === undefined); // false

// JS has operator ** which equal pow(value, 2);