// Context - то как мы вызываем функцию, в рамках какого объекта.

const furniture = {
  item1: 'sofa',
  item2: 'table',
  item2: 'armchair',
  location: function() { console.log(`I have ${this.item1}, ${this.item2} and ${this.item3} in the living room!`)},
  location2: () => console.log(`I have ${this.item1}, ${this.item2} and ${this.item3} in the living room!`),
  price: function(item1Cost, item2Cost, item3Cost) {
    console.log(`Prices: ${this.item1} - ${item1Cost}, ${this.item2} - ${item2Cost}, ${this.item3} - ${item3Cost}`)
  }
};

furniture.location();
furniture.price(34, 67, 31);
furniture.location2.bind(furniture)(); //  в стрелочных функциях нет контекста, его туда даже нельзя передать с помощью bind

const teenagerLivingRoom = {
  item1: 'computer',
  item2: 'TV',
  item3: 'dance station',
}

const getFurniture = furniture.location.bind(teenagerLivingRoom);
getFurniture();
furniture.location.call(teenagerLivingRoom);
furniture.location.apply(teenagerLivingRoom);
furniture.price.call(teenagerLivingRoom, ...[960, 345, 321]);
furniture.price.apply(teenagerLivingRoom, [1960, 1245, 1321]);
furniture.price.bind(teenagerLivingRoom, ...[1400, 700, 456])();

function sumAll(...value) { // преобразование остаточных агруметов в массив
  let summa = 0;
  value.forEach(item => summa += item);
  console.log(summa);
}

sumAll(...[1, 2, 3, 6, 8, 9]);

function maxValue(array) {
  const max = Math.max(...array); // обратная операция преобразования массива в список аргументов
  console.log(max);
}

maxValue([5, 7, 9, 5, 3, 1, 86, 54, 32]);

function Monster(name, power) {
  this.name = name;
  this.power = power;
  this.attack = function(attackType) {console.log(`The ${this.name} has ${power} power and attack type: ${attackType}`)}
  // Пример неявной передачи контекста
  console.log(this);
}

const ghul = new Monster('ghul', 100);
ghul.attack('bite and blunge');

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = {item: 'some value'};

logger.bind(obj)(); // Пример явной передачи контекста
logger.apply(obj);
logger.call(obj);

function Shark(type) {
  this.type = type;
  console.log('This', this);
  this.ff = () => {console.log('Arrow 1 this', this)} // нет своего контекста, только внешни объект Shark
  this.contextFF = function() {
   console.log('New context this', this); // есть свой контекст
  }
}

new Shark('tiger').ff();
new Shark('white').contextFF();

const test = {type: '1'};

const hammer = new Shark('hummer');
hammer.ff.bind(test)(); // контекст не крепится к стрелочной функции, this всегда будет от объекта в котором определена стрелочная функция 
hammer.contextFF.bind(test)(); // новый контекст объета test