class Car {
	protected color: string;
	protected type: string;
	protected moveBehavior: MoveBehavior;

	constructor(type: string, color: string) {
		this.type = type;
		this.color = color;
	}

	hasColor() {
		alert(`This car has ${this.color} color`);
	}

	hasType() {
		alert(`This car has ${this.type} type`);
	}

	// method to replace in the all children components
	performMoveBehavior() {
		this.moveBehavior.moveBehavior();
	}

	setMoveBehavior(moveBehavior: MoveBehavior) {
		this.moveBehavior = moveBehavior;
	}

	hasSpeed() {
		alert('Speed diapason 0 - 500 km/h');
	}

}

class Automobile extends Car {
	constructor(type: string, color: string) {
		super(type, color);
	}

	hasSpeed() {
		alert('Speed diapason 40 - 150 km/h');
	}
}

class MotorCycle extends Car {
	constructor(type: string, color: string) {
		super(type, color);
	}

	hasSpeed() {
		alert('Speed diapason 70 - 200 km/h');
	}
}

class ElectroBoat extends Car {
	constructor(type: string, color: string) {
		super(type, color);
	}

	hasSpeed() {
		alert('Speed diapason 30 - 80 km/h');
	}
}

class Helicopter extends Car {
	constructor(type: string, color: string) {
		super(type, color);
	}

	hasSpeed() {
		alert('Speed diapason 300 - 500 km/h');
	}
}

interface MoveBehavior {
	moveBehavior(): void;
}

class MoveByLand implements MoveBehavior {
	moveBehavior() {
		alert('This type of car can go on the land');
	}
}

class MoveByWater implements MoveBehavior {
	moveBehavior() {
		alert('This type of car can go on the water');
	}
}

class MoveByAir implements MoveBehavior {
	moveBehavior() {
		alert('This type of car can go in the air');
	}
}

export function goCar() {
	const bmw: Automobile = new Automobile('automobile', 'black');
	bmw.hasType();
	bmw.hasColor();
	bmw.hasSpeed();
	bmw.setMoveBehavior(new MoveByLand());
	bmw.performMoveBehavior();

	const boat: ElectroBoat = new ElectroBoat('ElectroBoat', 'red');
	boat.hasType();
	boat.hasColor();
	boat.hasSpeed();
	boat.setMoveBehavior(new MoveByWater());
	boat.performMoveBehavior();

	const motorbike: MotorCycle = new MotorCycle('MotorCycle', 'green');
	motorbike.hasType();
	motorbike.hasColor();
	motorbike.hasSpeed();
	motorbike.setMoveBehavior(new MoveByLand());
	motorbike.performMoveBehavior();

	const helicopter: Helicopter = new Helicopter('Helicopter', 'blue');
	helicopter.hasType();
	helicopter.hasColor();
	helicopter.hasSpeed();
	helicopter.setMoveBehavior(new MoveByAir());
	helicopter.performMoveBehavior();
}

