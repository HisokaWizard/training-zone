import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import { StartPage } from './startPage';
import { BinarySearch } from './binary-search';
import { AllSort } from './sort';
import { ListStructure } from './lists';
import { GraphStructure } from './graph';
import BlogImitation from './blog-imitation';

// import { rootReducer } from './blog-data-store/reducer';
import { HardUILogicApp } from './hard-logic-ui-components/app';
import thunk from 'redux-thunk';
import { rootReducer } from './hard-logic-ui-components/custom-redux/reducers/rootReducer';

// const store = createStore(rootReducer);

function middleware(state: any) {
	return function(next: (arg0: any) => any) {
		return function(action: any) {
			console.log('state', state.getState());
			console.log('action', action);
			return next(action);
		}
	}
}

export const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk, middleware),
		(window as any).window.__REDUX_DEVTOOLS_EXTENSION__ && (window as any).window.__REDUX_DEVTOOLS_EXTENSION__()
	));

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
				{/* <Provider store={store}>
					<Route path={'/blog'} component={BlogImitation} />
				</Provider> */}
				<Provider store={store}>
					<Route path={'/apps/hard-ui-logic'} render={() => <HardUILogicApp title={'Super component'} />} />
				</Provider>
			</Router>
		);
	}
}