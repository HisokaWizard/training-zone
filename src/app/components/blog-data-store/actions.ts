import { CHANGE_COUNTER, CHANGE_TEXT, UPDATE_POSTS } from './constants';

export function changeCounter(counter: number) {
	return {
		type: CHANGE_COUNTER,
		payload: counter,
	};
}

export function changeText(text: string) {
	return {
		type: CHANGE_TEXT,
		payload: text,
	};
}

export function updatePosts(post: string) {
	return {
		type: UPDATE_POSTS,
		payload: post,
	};
}
