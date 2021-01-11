import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StartPage } from './startPage';
import { BinarySearch } from './algoritms/binary-search';
import { AllSort } from './algoritms/sort';

export class RouterComponent extends React.Component<{}, {}> {

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
			</Router>
		);
	}
}