import {uniqueId} from 'lodash';
import {
	DELETE_POST,
	ADD_POST,
	EDIT_POST,
	LOAD_POSTS_START,
	LOAD_POSTS_SUCCESS,
	LOAD_POSTS_ERROR, ADD_NEW_POST_START, ADD_NEW_POST_SUCCESS, ADD_NEW_POST_ERROR
} from '../actions/types';

const initialState = {
	posts: [],
	loading: false,
}

export default function posts(state = initialState, action) {

	switch (action.type) {
		case LOAD_POSTS_START:
			return {
				...state,
				loading: true,
			}
		case LOAD_POSTS_SUCCESS:

			return {
				...state,
				loading: false,
				posts: action.posts
			}
		case LOAD_POSTS_ERROR:
			return {
				...state,
				loading: false,
			}

		case ADD_NEW_POST_START:
			console.log('add post start');
			return {
				...state,
				loading: true,
			}

		case ADD_NEW_POST_SUCCESS:
			const latestPost = action.postData;
			const posts = state.posts.slice();
			posts.push(latestPost);

			return {
				...state,
				loading: false,
				posts: posts
			}

		case ADD_NEW_POST_ERROR:
			return {
				...state,
				loading: false
			}

		case DELETE_POST:
			// Compare post ID and delete him.
			return state.filter( (el) => el.id !== action.id );
		case ADD_POST:
			// Get state
			let updatedState = [...state];
			// Create object for new data.
			let postData = {};
			// Fill all post values.
			postData = {
				id: uniqueId('post_'),
				...action.postData
			};
			// Update and return new state.
			alert('post was added');
			updatedState.push(postData);
			return updatedState;
		case EDIT_POST:
			// Get current post index.
			const index = state.findIndex(x => x.id === action.id);
			// Copy state.
			const newState = [...state];
			// Edit current post.
			newState[index].title = action.postData.title;
			newState[index].smallDescription = action.postData.smallDescription;
			newState[index].postBody = action.postData.postBody;
			// Return updated state
			alert('Post was updated');
			return newState;

		default:
			return state;
	}
}