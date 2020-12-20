interface Subject {
	registerObserver(observer: Observer): void;
	removeObserver(observer: Observer): void;
	notifyObserver(): void;
}

interface Observer {
	update(height: number, speed: number): void;
}

class GeneralSubject implements Subject {
	observerList: Set<Observer>;
	private height: number;
	private speed: number;

	constructor() {
		this.observerList = new Set();
	}

	registerObserver(observer: Observer) {
		this.observerList.add(observer);
	}

	removeObserver(observer: Observer) {
		this.observerList.delete(observer);
	}

	notifyObserver() {
		this.observerList.forEach(observer => {
			observer.update(this.height, this.speed);
		})
	}

	attributesChanged() {
		this.notifyObserver();
	}

	public setAttributes(height: number, speed: number) {
		this.height = height;
		this.speed = speed;
		this.attributesChanged();
	}
}

class TextPresenter implements Observer {
	private height: number;
	private speed: number;
	private entity: Subject;

	constructor(entity: Subject) {
		this.entity = entity;
		this.entity.registerObserver(this);
	}

	update(height: number, speed: number) {
		this.height = height;
		this.speed = speed;
		this.display();
	}

	display() {
		alert(`Text presenter: height: ${this.height}, speed: ${this.speed}`);
	}
}

class GraphPresenter implements Observer {
	private height: number;
	private speed: number;
	private entity: Subject;

	constructor(entity: Subject) {
		this.entity = entity;
		this.entity.registerObserver(this);
	}

	update(height: number, speed: number) {
		this.height = height;
		this.speed = speed;
		this.display();
	}

	display() {
		alert(`Graph presenter: height: ${this.height}, speed: ${this.speed}`);
	}
}

class VideoRuntimePresenter implements Observer {
	private height: number;
	private speed: number;
	private entity: Subject;

	constructor(entity: Subject) {
		this.entity = entity;
		this.entity.registerObserver(this);
	}

	update(height: number, speed: number) {
		this.height = height;
		this.speed = speed;
		this.display();
	}

	display() {
		alert(`Video in runtime presenter: height: ${this.height}, speed: ${this.speed}`);
	}
}

export function goObservers() {
	const generalItem: GeneralSubject = new GeneralSubject();

	const text: TextPresenter = new TextPresenter(generalItem);
	const graph: GraphPresenter = new GraphPresenter(generalItem);
	const video: VideoRuntimePresenter = new VideoRuntimePresenter(generalItem);

	generalItem.setAttributes(100, 150);
	generalItem.setAttributes(500, 278);
	generalItem.setAttributes(1000, 359);
	generalItem.setAttributes(2000, 453);
	generalItem.setAttributes(5000, 586);
}
