import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { StartPage } from './startPage';
import { BinarySearch } from './binary-search';
import { AllSort } from './sort';
import { ListStructure } from './lists';
import { GraphStructure } from './graph';

interface State {
}

class TestToSee extends React.Component<{}, {}> {
	render() {
		return <div>Hello world!</div>;
	}
}

export class RouterComponent extends React.Component<{}, State> {

	constructor(props: {}) {
		super(props);
		this.state = {
		};
	}


	render() {
		const {} = this.state;
		return (
			<Router>
				<Route exact path={'/'} component={StartPage} />
				<Route path={'/algorithms/sort'} component={AllSort} />
				<Route path={'/algorithms/binary-search'} component={BinarySearch} />
				<Route path={'/data/structure/list'} component={ListStructure} />
				<Route path={'/data/structure/graph'} component={GraphStructure} />
			</Router>
		);
	}
}