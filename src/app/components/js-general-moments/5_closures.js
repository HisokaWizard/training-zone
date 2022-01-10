// Замыкание - доступ функции к переменным вышестоящего scope. Функция захватывает(замыкает) в себе переменные из вышестоящего scope.

function Cars() {
  let cars = [
    { mark: "Lada", price: 3454 },
    { mark: "Porshe", price: 45645 },
  ];
  return {
    presentCars: () => console.log(cars),
    addCar: (car) => cars.push(car),
  };
}

const moreCars = Cars();
moreCars.presentCars();
moreCars.addCar({ mark: "BMW", price: 45455 });
moreCars.presentCars();
moreCars.addCar({ mark: "Lamborgini", price: 5656576 });
moreCars.presentCars();

const arrayWithSetState = () => {
  for (var i = 0; i < 10; i++) {
    // 10 раз выведется 10, т к переменная i не хранится внутри цикла,
    // и setTimeout вызовется 10 раз после всех итераций цикла с переменной, которая уже будет иметь значение 10
    setTimeout(() => console.log(i), 1000);
  }
};

const arrayWithSetStateSolve1 = () => {
  for (var i = 0; i < 10; i++) {
    // выведется все как мы хотим, значения от 0 до 9, т к мы замыкаем каждый вызов setTimeout c текущим значением переменной i
    ((j) => {
      setTimeout(() => console.log(j), 2000);
    })(i);
  }
};

const arrayWithSetStateSolve2 = () => {
  for (let i = 0; i < 10; i++) {
    console.log("i", i);
    // выведется все как мы хотим, значения от 0 до 9, т к переменная i через let работает внутри блочного scope цикла.
    setTimeout(() => console.log(i), 3000);
  }
};

arrayWithSetState();
arrayWithSetStateSolve1();
arrayWithSetStateSolve2();

// В случае с var в setTimeout передается корректное значение i, только ввиду того, что i на внешнем scope,
// то на момент вызова setTimeout выведет то значение которое на этот момент будет иметь переменная, в случае  let, сохраняется то значение, которое было передано,
// т к оно существет только внутри блока, а в случае замыкания, текущее значение замыкается на уровне вложенной в цикл функции в которой вызывается setTimeout

// Лексическое окружение
// Лексическое окружение может быть глобальным, внешним и внутренним, глобальное - на уровне объетка window, для брауреза(но есть и другие например globalThis).,
// внешнее напирмер модуль для функции в котором она находится, внутреннее, это содержимое  функции - ее параметры и локальные переменные

const names = ["Peter", "John", "David"]; // global array names

function SayMyName() {
  // global function SayMyName
  let phrase = "My name is"; // inner(local) for SayMyName variable

  return function (name) {
    // inner(local) for SayMyName function, name - inner for this function parameter, SayMyName is outer function (outer Lexical Environment for anonymous function)
    console.log(`${phrase} ${name}`); // phrase - variable from outer Lexical Environment, name - inner Lexical Environment
  };
}

// В анонимной функции мы получаем доступ к внешней переменной phrase, но когда происходит процесс работы скрипта,
// вначале эта переменная ищется во внутреннем окружении, и если не находится, то поднимается во внешнее и так до глобального,
// т е если убрать из функции SayMyName переменную  phrase ии переместить ее в глобальный Scope или  Global Lexical Environment
//  то мы все равно получим рабочую программу пример ниже

setTimeout(() => {
  const peter = SayMyName();
  peter("Peter");
  const john = SayMyName();
  john("John");
  const david = SayMyName();
  david("David");
}, 9000);

const names2 = ["Peter", "John", "David"]; // global array names
let phrase = "My name is"; // global variable

function SayMyName2() {
  // global function SayMyName
  return function (name) {
    // inner(local) for SayMyName function, name - inner for this function parameter, SayMyName is outer function (outer Lexical Environment for anonymous function)
    console.log(`${phrase} ${name}`); // phrase - variable from outer Lexical Environment, name - inner Lexical Environment
  };
}

// За счет специального скрытого свойства [[Environment]] функция всегда знает в каком лексическом окружении была вызвана,
// и имеет сслыку на него, за счет этого и работают замыкания, т к мы знаем к каким переменным есть доступ в том окружении где была вызвана функция.
// Как здесь работает управление памятью. Хотя makeCounter() закончил выполнение некоторое время назад, его лексическое окружение остаётся в памяти,
// потому что есть вложенная функция с [[Environment]], который ссылается на него.

setTimeout(() => {
  const peter2 = SayMyName2();
  peter2("Peter");
  const john2 = SayMyName2();
  john2("John");
  const david2 = SayMyName2();
  david2("David");
}, 10000);
