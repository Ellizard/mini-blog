import {DELETE_POST, ADD_POST, EDIT_POST} from "./types";

export const deletePost = (id) => {
	return {
		type: DELETE_POST,
		id,
	}
};

export const addPost = (postData) => {
	return {
		type: ADD_POST,
		postData,
	}
};

export const editPost = (postData, id) => {
	return {
		type: EDIT_POST,
		postData, id
	}
};