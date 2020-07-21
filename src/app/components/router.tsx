import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StartPage } from './startPage';
import { BinarySearch } from './binary-search';
import { AllSort } from './sort';
import { ListStructure } from './lists';
import { GraphStructure } from './graph';
import BlogImitation from './blog-imitation';

import { rootReducer } from './blog-data-store/reducer';

const store = createStore(rootReducer);

interface State {
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
				<Provider store={store}>
					<Route path={'/blog'} component={BlogImitation} />
				</Provider>

			</Router>
		);
	}
}