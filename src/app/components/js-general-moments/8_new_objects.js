//Реализация собственного new 

function SuperHero(name, ability) {
  this.name = name;
  this.ability = ability;
}

const superMan = new SuperHero('SuperMan', ['super power', 'super speed', 'laser eyes', 'freeze wind']);
console.log(superMan);

function ownNew(constructor, ...args) {
  const object = {};
  Object.setPrototypeOf(object, constructor.prototype);
  return constructor.apply(object, args) || object;
}

const superMan2 = ownNew(SuperHero, 'SuperMan', ['super power', 'super speed', 'laser eyes', 'freeze wind']);
console.log(superMan2);