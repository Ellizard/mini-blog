import {
    LOAD_POSTS_START,
    LOAD_POSTS_SUCCESS,
    LOAD_POSTS_ERROR,
    ADD_NEW_POST_START,
    ADD_NEW_POST_SUCCESS,
    ADD_NEW_POST_ERROR,
    DELETE_POST_ERROR,
    DELETE_POST_SUCCESS,
    DELETE_POST_START,
    EDIT_POST_START,
    EDIT_POST_ERROR,
    EDIT_POST_SUCCESS,
    LOAD_COMMENTS_ERROR,
    ADD_COMMENT_ERROR,
    ADD_COMMENT_START, ADD_COMMENT_SUCCESS, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_START
} from "./types";
import axios from 'axios';


export function loadComments(id) {
    return async dispatch => {
        dispatch(load_comments_start());
        axios.get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`)
            .then(function (response) {
                dispatch(load_comments_success(response));
            })
            .catch(function (error) {
                dispatch(load_comments_error())
            });
    }
}

export function load_comments_start() {
    return {
        type: LOAD_COMMENTS_START
    }
}

export function load_comments_success(id, comments) {
    return {
        type: LOAD_COMMENTS_SUCCESS,
        comments: comments,
    }
}

export function load_comments_error() {
    return {
        type: LOAD_COMMENTS_ERROR
    }
}

export function editPost(postData, id) {
    return async dispatch => {
        dispatch(editPostStart());
        axios.put('https://simple-blog-api.crew.red/posts/' + id, {
            title: postData.title,
            body: postData.body
        })
            .then(function (response) {
                dispatch(editPostSuccess(postData, id));
                alert('post was edited');
            })
            .catch(function (error) {
                dispatch(editPostError())
            });
    }
}

export function editPostStart() {
    return {
        type: EDIT_POST_START
    }
}

export function editPostSuccess(postData, id) {
    return {
        type: EDIT_POST_SUCCESS,
        id: id,
        postData: postData,
    }
}

export function editPostError() {
    return {
        type: EDIT_POST_ERROR
    }
}

export function removePost(id) {
    return async dispatch => {
        dispatch(deletePostStart());
        axios.delete('https://simple-blog-api.crew.red/posts/' + id)
            .then(function (response) {
                dispatch(deletePostSuccess(id));
                alert('Already removed.');
            })
            .catch(function (error) {
                dispatch(deletePostError())
            });
    }
}

export function deletePostStart() {
    return {
        type: DELETE_POST_START
    }
}

export function deletePostSuccess(id) {
    return {
        type: DELETE_POST_SUCCESS,
        id: id,
    }
}

export function deletePostError() {
    return {
        type: DELETE_POST_ERROR
    }
}

export const addNewPost = (postData) => {
    return async dispatch => {
        dispatch(addNewPostStart());
        axios.post('https://simple-blog-api.crew.red/posts', {
            title: postData.title,
            body: postData.body
        })
            .then(function (response) {
                dispatch(addNewPostSuccess(response.data));
                alert('Post was added');
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

        axios.get("https://simple-blog-api.crew.red/posts")
            .then(response => {
                return response.data;
            })
            .then(result => {
                dispatch(fetchPostsSuccess(result));
            })
            .catch(error => {
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


export const addComment = (id, comment) => {
    return async dispatch => {
        dispatch(addCommentStart());

        axios.post("https://simple-blog-api.crew.red/comments", {
            postId: id,
            body: comment
        })
            .then(response => {
                return response.data;
            })
            .then(result => {
                dispatch(addCommentSuccess(id, comment));
                alert('Your comment will be added');
            })
            .catch(error => {
                dispatch(addCommentError(error));
            });
    }
};

export function addCommentStart() {
    return {
        type: ADD_COMMENT_START,
    }
}

export function addCommentSuccess(id, comment) {
    return {
        type: ADD_COMMENT_SUCCESS,
        id: id,
        comment: comment,
    }
}

export function addCommentError() {
    return {
        type: ADD_COMMENT_ERROR
    }
}