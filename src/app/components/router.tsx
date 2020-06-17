import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { GeneralComponent } from './general';
import { StartPage } from './startPage';

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
				<Route path={'/counting'} component={GeneralComponent} />
			</Router>
		);
	}
}