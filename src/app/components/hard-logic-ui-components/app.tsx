import React, { useRef, useState } from 'react';
import thunk from 'redux-thunk';
import { Alert } from './components/alert/alert';
import { AlertProvider } from './components/alert/alertContext';
import { HookContext } from './components/hook-context';
import { applyMiddleware, createStore } from 'redux';
import { CounterState, rootReducer } from './custom-redux/reducers/rootReducer';
import { asyncIncrement, decrement, increment } from './custom-redux/reducers/actions';
import { useSelector, Provider } from 'react-redux';
import { store } from '../router';
import { TextField } from '@material-ui/core';

interface HardUILogicAppProps {
	title: string;
}

export const HardUILogicApp = ({ title }: HardUILogicAppProps) => {
	const randomNumber: number = useSelector((state: any) => state.counter.value);
	const hideBtn: boolean = useSelector((state: any) => state.counter.hide);
	const randomPlusBtn = useRef(null);
	const randomMinusBtn = useRef(null);
	
	const updateCounterToRandomPlusAsync = () => {
		let length = 5;
		const numbers = numberGenerator(length);
		while(length > 0) {
			console.log(numbers.next().value);
			length--;
		}
		const randomNum = Math.round(Math.random() * 1000);
		// @ts-ignore
		store.dispatch(asyncIncrement({value: randomNum, hide: hideBtn}));
	}

	const updateCounterToRandomPlus = () => {
		const randomNum = Math.round(Math.random() * 1000);
		store.dispatch(increment(randomNum));
	}

	const updateCounterToRandomMinus = () => {
		const randomNum = Math.round(Math.random() * 1000);
		store.dispatch(decrement(randomNum));
	}

	return (
		<Provider store={store}>
			<h1>{title}</h1>
			<button className='btn btn-success' onClick={updateCounterToRandomPlusAsync}>
				Click here to get random value from 0 to 1000 and async plus to result
			</button>
			<button ref={randomPlusBtn} disabled={hideBtn} className='btn btn-primary' onClick={updateCounterToRandomPlus}>
				Click here to get random value from 0 to 1000 and plus to result
			</button>
			<button ref={randomMinusBtn} disabled={hideBtn} className='btn btn-danger' onClick={updateCounterToRandomMinus}>
				Click here to get random value from 0 to 1000 and minus from result
			</button>
			<h3>{randomNumber}</h3>
			<TextField
          id="555555"
          label="Helper text"
					// defaultValue={randomNumber}
					value={randomNumber}
					onChange={(event) => randomNumber}
          helperText="Some important text"
          variant="outlined"
        />
			<AlertProvider>
				<HookContext />
				<Alert />
			</AlertProvider>
		</Provider>
	)
};

function* numberGenerator(length: number) {
	while(length > 0) {
		yield Math.round(Math.random() * 1000);
		length--;
	};
}