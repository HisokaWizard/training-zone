import { combineReducers } from 'redux';
import { CHANGE_TEXT, UPDATE_POSTS } from './constants';

export interface Post {
	author: string;
	text: string;
}

export interface BlogState {
	text: string;
	posts: Post[];
}

export interface ActionType {
	type: string;
	payload?: any;
}

const initialState: BlogState = {
	text: '',
	posts: [],
};

function blogState(state: BlogState = initialState, action: ActionType) {
	if (action.type === CHANGE_TEXT) {
		const newState = {
			text: action.payload,
			posts: state.posts,
		};
		return newState;
	} else if (action.type === UPDATE_POSTS) {
		let posts = state.posts;
		action.payload.forEach((post: any) => posts.push(post));
		if (posts.length === 30) {
			posts = posts.slice(15, 29);
		}
		const newState = {
			text: state.text,
			posts: posts,
		};
		return newState;
	}
	return state;
}

export const rootReducer = combineReducers({blogState: blogState});
