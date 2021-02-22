import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { StartPage } from './startPage';
import { BinarySearch } from './algoritms/binary-search';
import { AllSort } from './algoritms/sort';
import { GeneralRedux } from './redux-experiments/general';
import { store } from './redux-experiments/globalRedux/globalStore';
import { ColonialistsGame } from './colonialists';
import { colonialistsStore } from './colonialists/store/store';

export const RouterComponent = () => {
	return (
		<Router>
			<Route exact path={'/'} component={StartPage} />
			<Route path={'/algorithms/sort'} component={AllSort} />
			<Route path={'/algorithms/binary-search'} component={BinarySearch} />
			<Provider store={store}>
				<Route path={'/redux-experiments'} component={GeneralRedux} />
			</Provider>
			<Provider store={colonialistsStore}>
				<Route path={'/colonialists'} component={ColonialistsGame} />
			</Provider>
		</Router>
	);
}