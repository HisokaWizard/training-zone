import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Dropdown } from 'react-bootstrap';

export const StartPage = () => {
	return (
		<div>
			<Dropdown style={{ margin: '10px' }}>
				<Dropdown.Toggle variant='success' id='dropdown-basic'>Algorithms</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item><Link to='/algorithms/sort'>Sorting</Link></Dropdown.Item>
					<Dropdown.Item><Link to='/algorithms/binary-search'>Binary Search</Link></Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<Link style={{ margin: '10px' }} to='/redux-experiments'>
				<Button variant='primary'>Redux experiments</Button>
			</Link>
		</div>
	);
}