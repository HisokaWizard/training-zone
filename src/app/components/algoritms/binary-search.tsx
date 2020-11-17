import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { StartPage } from './startPage';
import { generateArray, quickSort } from './sort';

interface State {
}

export class BinarySearch extends React.Component<{}, State> {

	constructor(props: {}) {
		super(props);
		this.state = {
		};
	}

	render() {
		const { } = this.state;
		const array = generateArray(30, 100);
		const sortArray = quickSort(array);
		const result = binarySearch(sortArray, 36);
		const strArray = sortArray.join(', ');
		return (
			<div>
				[<span>{strArray}</span>]
				<div>Result: {result}</div>
			</div>
		);
	}
}

export function binarySearch(sortArray: number[], value: number): number {
	let low = 0;
	let high = sortArray.length - 1;
	let index = -1;
	while (low <= high) {
		const middle = Math.floor((high + low) / 2);
		if (value > sortArray[middle]) {
			low = middle + 1;
		} else if (value < sortArray[middle]) {
			high = middle - 1;
		} else {
			index = middle;
			break;
		}
	}
	return index;
}