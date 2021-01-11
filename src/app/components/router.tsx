import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StartPage } from './startPage';
import { BinarySearch } from './algoritms/binary-search';
import { AllSort } from './algoritms/sort';
import { GeneralRedux } from './redux-experiments/general';

export const RouterComponent = () => {
	return (
		<Router>
			<Route exact path={'/'} component={StartPage} />
			<Route path={'/algorithms/sort'} component={AllSort} />
			<Route path={'/algorithms/binary-search'} component={BinarySearch} />
			<Route path={'/redux-experiments'} component={GeneralRedux} />
		</Router>
	);
}