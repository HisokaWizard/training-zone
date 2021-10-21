import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { StartPage } from './startPage';
import { BinarySearch } from './algoritms/binary-search';
import { AllSort } from './algoritms/sort';
import { GeneralRedux } from './redux-experiments/general';
import {FilterExperiments} from "@/filter-experiments";
import {store} from "@/redux/store";
import {ColonialistsGame} from "@/colonialists";

export const RouterComponent = () => {
	return (
		<Router>
			<Route exact path={'/'} component={StartPage} />
			<Route path={'/algorithms/sort'} component={AllSort} />
			<Route path={'/algorithms/binary-search'} component={BinarySearch} />
			<Provider store={store}>
				<Route path={'/redux-experiments'} component={GeneralRedux} />
			</Provider>
			<Provider store={store}>
				<Route path={'/colonialists'} component={ColonialistsGame} />
			</Provider>
			<Provider store={store}>
			<Route path={'/filter-experiments'} component={FilterExperiments} />
			</Provider>
		</Router>
	);
}