// IIFE - Immediate Invoked Function Expression

// Моментальный вызов функции с созданием нужного scope

let array = [];
for (var i = 0; i < 5; i++) {
  array.push(() => console.log(i))
}

array[3](); // 5 т к не подходящий scope

let array2 = [];

for (var i = 0; i < 5; i++) {
  ((j) => {
    // var j = i;
    array2.push(() => console.log(j))
  })(i)
}

array2[3](); // 3 т к корректный scope 

// === одинаковые формы

let array3 = [];

for (var i = 0; i < 5; i++) {
  (() => {
    var j = i;
    array3.push(() => console.log(j))
  })()
}

array3[3](); // 3 т к корректный scope 

// Пути создания IIFE
(function() {
  console.log("Скобки вокруг функции");
})();

(function() {
  console.log("Скобки вокруг всего");
}());

!function() {
  console.log("Выражение начинается с логического оператора NOT");
}();

+function() {
  console.log("Выражение начинается с унарного плюса");
}();

// Try case with Immediate Invoked FE
(function() {
  var tt = 0;
  // console.log(this); // globalThis for Node or window for browser
  console.log(this.tt); // undefined т к переменная не в глобальной области видимости
  console.log(tt); // 0
})()
