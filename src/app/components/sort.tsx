import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { StartPage } from './startPage';
import { binarySearch } from './binary-search';

interface State {
}

export class AllSort extends React.Component<{}, State> {

	constructor(props: {}) {
		super(props);
		this.state = {
		};
	}

	render() {
		const { } = this.state;
		const array = generateArray(20, 1000);
		const sortArray = quickSort(array);
		const strArray = sortArray.join(', ');
		return (
			<div>
				[<span>{strArray}</span>]
			</div>
		);
	}
}

export function generateArray(size: number, randomSize: number): number[] {
	const array: number[] = [];
	for (let i = 0; i < size; i++) {
		array.push(Math.round(Math.random() * randomSize));
	}
	return array;
}

export function quickSort(array: number[]): number[] {
	if (array.length === 1) {
		return array;
	}
	const middle = Math.ceil(array.length / 2);
	const left = array.slice(0, middle);
	const right = array.slice(middle);

	const merge = (leftArray: number[], rightArray: number[]): number[] => {
		const resultArray = [];
		let leftIndex = 0;
		let rightIndex = 0;
		while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
			if (leftArray[leftIndex] > rightArray[rightIndex]) {
				resultArray.push(rightArray[rightIndex]);
				rightIndex++;
			} else {
				resultArray.push(leftArray[leftIndex]);
				leftIndex++;
			}
		}
		return resultArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
	}
	return merge(quickSort(left), quickSort(right));
}