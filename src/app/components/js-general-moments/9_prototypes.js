// Prototypes:
// Object.getPrototypeOf()

function SuperHero(name, ability) {
  this.name = name;
  this.ability = ability;
}

SuperHero.prototype.goal = function(goal) {
  console.log(`The ${this.name} general goal is ${goal}`);
}

const shazam = new SuperHero('Shazam', 'Super power');
shazam.goal('cool pretty girls');
console.log(SuperHero.prototype); // SuperHero { goal: [Function] }
console.log(SuperHero); // Function SuperHero
console.log(shazam); // SuperHero {...all fielda and methods of the class}
console.log(shazam.constructor); // Function SuperHero
console.log(shazam.__proto__ === SuperHero.prototype); // true


// ================
function Race() {}
Race.prototype.location = 'MiddleEarth';
Race.prototype.creator = 'Illuvatar';

const elfs = new Race();
elfs.name = 'Lorien elfs';
elfs.life = 'Infinity';


console.log(elfs); // Race { name: 'Lorien elfs', life: 'Infinity' }
console.log(Race.prototype); //Race { location: 'MiddleEarth', creator: 'Illuvatar' }
console.log(elfs.__proto__); // Race { location: 'MiddleEarth', creator: 'Illuvatar' }
console.log('creator' in elfs); // true
console.log(elfs.hasOwnProperty('creator')); // false
console.log(elfs.hasOwnProperty('name')); // true

// Object create
const entity = {day: 'Monday'};
const myWeek = Object.create(entity);
console.log(myWeek); // {}
console.log(myWeek.hasOwnProperty('day')); // false
console.log(myWeek.__proto__); // {day: Monday}
entity.day = 'Tuesday';
console.log(myWeek.__proto__); // {day: Tuesday}
