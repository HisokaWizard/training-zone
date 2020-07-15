// Замыкание - доступ функции к переменным вышестоящего scope. Функция захватывает(замыкает) в себе переменные из вышестоящего scope.

function Cars() {
  let cars = [{mark: 'Lada', price: 3454}, {mark: 'Porshe', price: 45645}];
  return {
    presentCars: () => console.log(cars),
    addCar: (car) => cars.push(car)
  }
}

const moreCars = Cars();
moreCars.presentCars();
moreCars.addCar({mark: 'BMW', price: 45455});
moreCars.presentCars();
moreCars.addCar({mark: 'Lamborgini', price: 5656576});
moreCars.presentCars();


const arrayWithSetState = () => {
  for(var i = 0; i < 10; i++) {
    // 10 раз выведется 10, т к переменная i не хранится внутри цикла,
    // и setTimeout вызовется 10 раз после всех итераций цикла с переменной, которая уже будет иметь значение 10
    setTimeout(() => console.log(i), 1000);
  }
}

const arrayWithSetStateSolve1 = () => {
  for(var i = 0; i < 10; i++) {
    // выведется все как мы хотим, значения от 0 до 9, т к мы замыкаем каждый вызов setTimeout c текущим значением переменной i
    ((j)  => {setTimeout(() => console.log(j), 2000);})(i) 
  }
}

const arrayWithSetStateSolve2 = () => {
  for(let i = 0; i < 10; i++) {
    console.log('i', i);
    // выведется все как мы хотим, значения от 0 до 9, т к переменная i через let работает внутри блочного scope цикла.
    setTimeout(() => console.log(i), 3000);
  }
}

arrayWithSetState();
arrayWithSetStateSolve1();
arrayWithSetStateSolve2();

// В случае с var в setTimeout передается корректное значение i, только ввиду того, что i на внешнем scope,
// то на момент вызова setTimeout выведет то значение которое на этот момент будет иметь переменная, в случае  let, сохраняется то значение, которое было передано,
// т к оно существет только внутри блока, а в случае замыкания, текущее значение замыкается на уровне вложенной в цикл функции в которой вызывается setTimeout