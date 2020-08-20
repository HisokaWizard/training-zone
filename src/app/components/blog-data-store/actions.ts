import { CHANGE_TEXT, UPDATE_POSTS, UPDATE_COLOR, INCREMENT } from './constants';
import { Post } from './reducer';

export function changeText(text: string) {
	return {
		type: CHANGE_TEXT,
		payload: text,
	};
}

export function updatePosts(posts: Post[]) {
	return {
		type: UPDATE_POSTS,
		payload: posts,
	};
}

export function updateColor(color: string) {
	return {
		type: UPDATE_COLOR,
		payload: color,
	};
}

export function increment(value: number) {
	return {
		type: INCREMENT,
		payload: value,
	};
}
