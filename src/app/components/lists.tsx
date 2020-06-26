import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { StartPage } from './startPage';
import { generateArray, quickSort } from './sort';
import { sum } from 'lodash';

interface BoxColumn {
	name: string;
}

interface State {
	data: any;
}

interface IPerson {
	name: string;
	age: number;
	profession: string;
}

class Person {
	person: IPerson;

	constructor(name: string, age: number, profession: string) {
		this.person = {name, age, profession};
	}
}

export class ListStructure extends React.Component<{}, State> {
	constructor(props: {}) {
		super(props);
		this.state = {
			data: undefined,
		};

		this.initComponent = this.initComponent.bind(this);
	}

	async initComponent() {
		const person = new Person('Petr', 27, 'software-developer');
		const getPerson = getPersonData.bind(person);
		getPerson();
		const response = await fetch('http://localhost:7008/somedata', {
			method: 'GET',
			credentials: 'same-origin',
		});

		const data = await response.json();
		this.setState({data});
	}

	render() {
		const { data } = this.state;
		return (
			<div>
				<button onClick={this.initComponent}>Click to get data</button>
				<div>Person 1:</div>
				<div>Name: {data ? data[0].name : null}</div>
				<div>Person 2:</div>
				<div>Name: {data ? data[1].name : null}</div>
			</div>
		);
	}
}

class Stack<T> {
	private stack: Array<T> = new Array<T>();

	push(item: T) {
		this.stack.push(item);
	}

	private pop() {
		if (this.stack.length === 0) {
			return;
		}
		this.stack.pop();
	}

	get() {
		const lastItem = this.stack[this.stack.length - 1];
		this.pop();
		return lastItem;
	}

	size() {
		return this.stack.length;
	}

	getStack() {
		return this.stack;
	}
}

function getPersonData() {
	if (!this.person) {
		return;
	}
	alert(`Name: ${this.person.name}, Age: ${this.person.age}, Profession: ${this.person.profession}`);
}
