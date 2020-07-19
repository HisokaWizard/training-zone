// Паттерн декотатор  динамичеки наделяет объект новыми возможностиями и является
// гибкой альтернативой субклассированию в области расширения функциональности

// Декоратор использует принцип расширения функциональности за счет добавления нового, не изменяя старого

// Super class
class Beverage  { // напиток
	protected description = 'No name beverage';

	getDescription(): string {
		return this.description;
	}

	cost(): number { return 0; }
}

// Класс декоратор для дополнений
class CondimentDecorator extends Beverage { // Condiment - приправа
	// getDescription(): string { return this.description; }
}

// Экземпляры класса Beverage
class Espresso extends Beverage {
	constructor() {
		super();
		this.description = 'Espresso';
	}

	private costValue = 1.5;

	cost(): number { return this.costValue; }
}

class Latte extends Beverage {
	constructor() {
		super();
		this.description = 'Latte';
	}

	private costValue = 1.2;

	cost(): number { return this.costValue; }
}

class Cappuccino extends Beverage {
	constructor() {
		super();
		this.description = 'Cappuccino';
	}

	private costValue = 1.3;

	cost(): number { return this.costValue; }
}

// Дополнения в кофе
class Mocha extends CondimentDecorator {
	beverage: Beverage;
	private costValue = 0.4;

	constructor(beverage: Beverage) {
		super();
		this.beverage = beverage;
	}

	getDescription(): string {
		return `${this.beverage.getDescription()} + Mocha`;
	}

	cost(): number {
		return this.beverage.cost() + this.costValue;
	}
}

class Milk extends CondimentDecorator {
	beverage: Beverage;
	private costValue = 0.25;

	constructor(beverage: Beverage) {
		super();
		this.beverage = beverage;
	}

	getDescription(): string {
		return `${this.beverage.getDescription()} + Milk`;
	}

	cost(): number {
		return this.beverage.cost() + this.costValue;
	}
}

class Whip extends CondimentDecorator {
	beverage: Beverage;
	private costValue = 0.55;

	constructor(beverage: Beverage) {
		super();
		this.beverage = beverage;
	}

	getDescription(): string {
		return `${this.beverage.getDescription()} + Whip`;
	}

	cost(): number {
		return this.beverage.cost() + this.costValue;
	}
}

export function testing() {
	let espresso: Beverage = new Espresso();
	espresso = new Mocha(espresso);
	espresso = new Mocha(espresso);
	espresso = new Milk(espresso);
	espresso = new Whip(espresso);
	console.log(espresso.getDescription(), espresso.cost());

	let latte: Beverage = new Latte();
	latte = new Mocha(latte);
	latte = new Whip(latte);
	latte = new Whip(latte);
	console.log(latte.getDescription(), latte.cost());
}

testing();
