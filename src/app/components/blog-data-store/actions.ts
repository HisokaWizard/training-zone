import { CHANGE_TEXT, UPDATE_POSTS } from './constants';
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
