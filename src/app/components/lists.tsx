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

export class ListStructure extends React.Component<{}, State> {
	constructor(props: {}) {
		super(props);
		this.state = {
			data: undefined,
		};
	}

	componentDidMount() {
		this.initComponent();
	}

	async initComponent() {

		const response = await fetch('http://localhost:7008/somedata', {
			method: 'GET',
			credentials: 'same-origin',
		});

		const data = await response.json();
		this.setState({data});
	}

	render() {
		const { data } = this.state;
		if (!data) {
			return <div>No data, please wait...</div>;
		}
		return (
			<div>
				<div>Person 1:</div>
				<div>Name: {data[0].name}</div>
				<div>Person 2:</div>
				<div>Name: {data[1].name}</div>
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

