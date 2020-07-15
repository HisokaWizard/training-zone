// IIFE - Immediate Invoked Function Expression

// Моментальный вызов функции с созданием нужного scope

let array = [];
for (var i = 0; i < 5; i++) {
  array.push(() => console.log(i))
}

array[3](); // 5 т к не подходящий scope

let array2 = [];

for (var i = 0; i < 5; i++) {
  (() => {
    var j = i;
    array2.push(() => console.log(j))
  })()
}

array2[3]() // 3 т к корректный scope 
