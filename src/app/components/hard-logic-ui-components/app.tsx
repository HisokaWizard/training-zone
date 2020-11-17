import React, { useRef } from 'react';
import thunk from 'redux-thunk';
import { Alert } from './components/alert/alert';
import { AlertProvider } from './components/alert/alertContext';
import { HookContext } from './components/hook-context';
import { asyncIncrement, decrement, increment } from './custom-redux/reducers/actions';
import { useSelector, Provider } from 'react-redux';
import { store } from '../router';
import { TextField } from '@material-ui/core';
import { LoggerItem, MiddleLogger, SimpleLogger } from './components/simpleLogger';

interface HardUILogicAppProps {
	title: string;
}

export const HardUILogicApp = ({ title }: HardUILogicAppProps) => {
	const randomNumber: number = useSelector((state: any) => state.counter.value);
	const hideBtn: boolean = useSelector((state: any) => state.counter.hide);
	const randomPlusBtn = useRef(null);
	const randomMinusBtn = useRef(null);
	const logger = SimpleLogger.prototype.createLogger();
	const logger2 = SimpleLogger.prototype.createLogger();
	const mLogger = new MiddleLogger();
	const mLogger2 = new MiddleLogger();
	const mLogger3 = new MiddleLogger();
	const mLogger4 = new MiddleLogger();
	
	const updateCounterToRandomPlusAsync = () => {
		const randomNum = Math.round(Math.random() * 1000);
		store.dispatch(asyncIncrement({value: randomNum, hide: hideBtn}));
		const logItem: LoggerItem = {
			method: 'updateCounterToRandomPlusAsync',
			message: `Set next value ${randomNum} to the redux with the method asyncIncrement`,	
		};
		logger.addLogItem(logItem);
		logStackToConsole();
		mLogger.addLogItem(logItem);
		mLogStackToConsole();
	}

	const updateCounterToRandomPlus = () => {
		const randomNum = Math.round(Math.random() * 1000);
		store.dispatch(increment(randomNum));
		const logItem: LoggerItem = {
			method: 'updateCounterToRandomPlus',
			message: `Set next value ${randomNum} to the redux with the method increment`,	
		};
		logger.addLogItem(logItem);
		logStackToConsole();
		mLogger.addLogItem(logItem);
		mLogStackToConsole();
	}

	const updateCounterToRandomMinus = () => {
		const randomNum = Math.round(Math.random() * 1000);
		store.dispatch(decrement(randomNum));
		const logItem: LoggerItem = {
			method: 'updateCounterToRandomMinus',
			message: `Set next value ${randomNum} to the redux with the method decrement`,	
		};
		logger.addLogItem(logItem);
		logStackToConsole();
		mLogger.addLogItem(logItem);
		mLogStackToConsole();
	}

	const logStackToConsole = () => {
		console.clear();
		logger2.getLogList().forEach((item: LoggerItem) => {
			console.warn(`Method: ${item.method}; Message: ${item.message}`);
		}) 
	}

	const mLogStackToConsole = () => {
		const random = Math.round(Math.random() * 3);
		let logger: MiddleLogger;
		let loggerName: string;
		if (random === 0 || random === 1) {
			loggerName = 'mLoggger2';
			logger = mLogger2;
		} else if (random === 2) {
			logger = mLogger3;
			loggerName = 'mLoggger3';
		} else {
			logger = mLogger4;
			loggerName = 'mLoggger4';
		}
		logger.getLogList().forEach((item: LoggerItem) => {
			console.error(`Logger name: ${loggerName}; Method: ${item.method}; Message: ${item.message}`);
		}) 
	}

	const clearLogger = () => {
		logger.clearLog();
		mLogger.clearLog();
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
			<button disabled={hideBtn} className='btn btn-info' onClick={clearLogger}>
				Clear Logger
			</button>
			<h3>{randomNumber}</h3>
			<TextField
          id="555555"
          label="Helper text"
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