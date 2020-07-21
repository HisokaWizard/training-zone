import { combineReducers } from 'redux';

export interface BlogState {
	counter: number;
	text: string;
	posts: string[];
}

export interface ActionType {
	type: string;
	payload?: any;
}

const initialState: BlogState = {
	counter: 340,
	text: '',
	posts: [],
};

function someState(state: BlogState = initialState, action: ActionType) {
	if (action.type === 'CHANGE_COUNTER') {
		const newState = {
			counter: state.counter + action.payload,
			text: state.text,
			posts: state.posts,
		};
		return newState;
	} else if (action.type === 'CHANGE_TEXT') {
		const newState = {
			counter: state.counter,
			text: action.payload,
			posts: state.posts,
		};
		return newState;
	} else if (action.type === 'UPDATE_POSTS') {
		const posts = state.posts;
		posts.push(action.payload);
		const newState = {
			counter: state.counter,
			text: state.text,
			posts: posts,
		};
		return newState;
	}
	return state;
}

export const rootReducer = combineReducers({someState: someState});
