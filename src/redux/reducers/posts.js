import {
	LOAD_POSTS_START,
	LOAD_POSTS_SUCCESS,
	LOAD_POSTS_ERROR,
	ADD_NEW_POST_START,
	ADD_NEW_POST_SUCCESS,
	ADD_NEW_POST_ERROR,
	DELETE_POST_START,
	DELETE_POST_SUCCESS,
	EDIT_POST_START,
	EDIT_POST_SUCCESS,
	EDIT_POST_ERROR,
	LOAD_COMMENTS_START,
	LOAD_COMMENTS_SUCCESS,
	ADD_COMMENT_START, ADD_COMMENT_SUCCESS, ADD_COMMENT_ERROR, LOAD_COMMENTS_ERROR
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

		case DELETE_POST_START:
			return {
				...state,
				loading: true,
			}
		case DELETE_POST_SUCCESS:
			let postList = [...state.posts];
			postList = postList.filter( (el) => el.id !== action.id );
			return {
				...state,
				posts: postList,
				loading: false,
			}

		case EDIT_POST_START:
			return {
				...state,
				loading: true
			}
		case EDIT_POST_SUCCESS:
			const allPosts = [...state.posts];
			const index = allPosts.findIndex(el => el.id === action.id);
			allPosts[index].title = action.postData.title;
			allPosts[index].body = action.postData.body;

			return {
				...state,
				loading: false,
				posts: allPosts,
			}
		case EDIT_POST_ERROR:
			return {
				...state
			}

		case LOAD_COMMENTS_START:
			return {
				loading: true,
			}
		case LOAD_COMMENTS_SUCCESS:
			return {
				...state,
				loading: false,
				comments: action.comments,
			}
		case LOAD_COMMENTS_ERROR:
			return {
				...state,
				loading: false,
			}

		case ADD_COMMENT_START:
			return {
				...state,
				loading: true,
			}
		case ADD_COMMENT_SUCCESS:
			return {
				...state,
				loading: false,
			}
		case ADD_COMMENT_ERROR:
			return {
				...state,
				loading: false,
			}

		default:
			return state;
	}
}