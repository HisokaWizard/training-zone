import * as React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Button, } from 'react-bootstrap';

export class StartPage extends React.Component<{}, {}> {

	render() {
		return (
			<div>
				<Dropdown>
					<Dropdown.Toggle variant='success' id='dropdown-basic'>Algorithms</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item><Link to='/algorithms/sort'>Sorting</Link></Dropdown.Item>
						<Dropdown.Item><Link to='/algorithms/binary-search'>Binary Search</Link></Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
				<Dropdown>
					<Dropdown.Toggle variant='primary' id='dropdown-basic'>Data Structure</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item><Link to='/data/structure/list'>Lists</Link></Dropdown.Item>
						<Dropdown.Item><Link to='/data/structure/graph'>Graphs</Link></Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		);
	}
}