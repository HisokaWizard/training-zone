import * as React from 'react';

interface State {
}

export class GraphStructure extends React.Component<{}, State> {
	graph: Map<number, number[]> = new Map();
	constructor(props: {}) {
		super(props);

		this.graph.set(1, [5, 7, 15]);
		this.graph.set(5, [3, 9]);
		this.graph.set(3, []);
		this.graph.set(9, [8, 6]);
		this.graph.set(8, []);
		this.graph.set(6, []);
		this.graph.set(7, [4]);
		this.graph.set(4, []);
		this.graph.set(15, [26]);
		this.graph.set(26, []);
	}

	render() {
		// deepGraphSearch(this.graph, 1);
		widthGraphSearch(this.graph, 1);
		return (
			<div>
			</div>
		);
	}
}

function deepGraphSearch(graph: Map<number, number[]>, startPosition: number) {
	const startItem = graph.get(startPosition);
	const checkedItem: number[] = [];

	for (const item of startItem) {
		if (checkedItem.find(elem => elem === item)) {
			continue;
		}
		console.log(item);
		deepGraphSearch(graph, item);
	}
}

function widthGraphSearch(graph: Map<number, number[]>, startPosition: number) {
	const startItem = graph.get(startPosition);
	const listOfNextNodes: number[] = startItem;

	const seeCurrentLevel = (fullGraph: Map<number, number[]>, actualList: number[]) => {
		const currentItem = fullGraph.get(actualList[0]);
		if (!currentItem) {
			return;
		}
		console.log(actualList);
		actualList.shift();
		currentItem.forEach(item => actualList.push(item));
		seeCurrentLevel(fullGraph, actualList);
	};

	seeCurrentLevel(graph, listOfNextNodes);
}