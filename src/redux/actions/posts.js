import {
    DELETE_POST,
    ADD_POST,
    EDIT_POST,
    LOAD_POSTS_START,
    LOAD_POSTS_SUCCESS,
    LOAD_POSTS_ERROR,
    ADD_NEW_POST_START, ADD_NEW_POST_SUCCESS, ADD_NEW_POST_ERROR
} from "./types";
import axios from 'axios';

export const addNewPost = (postData) => {
    return async dispatch => {
        dispatch(addNewPostStart());
        axios.post('https://simple-blog-api.crew.red/posts', {
            title: postData.title,
            body: postData.body
        })
            .then(function (response) {
                dispatch(addNewPostSuccess(response.data));
                alert('You added a new post');
            })
            .catch(function (error) {
                dispatch(addNewPostError())
            });
    }
}

export function addNewPostStart() {
    return {
        type: ADD_NEW_POST_START
    }
}

export function addNewPostSuccess(postData) {
    return {
        type: ADD_NEW_POST_SUCCESS,
        postData: postData
    }
}

export function addNewPostError() {
    return {
        type: ADD_NEW_POST_ERROR
    }
}

export const loadPosts = () => {
    return async dispatch => {
        dispatch(fetchPostsStart());
        let posts = [];

        axios.get("https://simple-blog-api.crew.red/posts")
            .then(response => {
                return response.data;
            })
            .then(result => {
                dispatch(fetchPostsSuccess(result));
            })
            .catch(error => {
                console.log('error')
                dispatch(fetchPostsError(error));
            });
    }
};

export function fetchPostsStart() {
    return {
        type: LOAD_POSTS_START,
    }
}

export function fetchPostsSuccess(posts) {
    return {
        type: LOAD_POSTS_SUCCESS,
        posts: posts,
    }
}

export function fetchPostsError() {
    return {
        type: LOAD_POSTS_ERROR
    }
}

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