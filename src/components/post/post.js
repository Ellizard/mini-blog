import React from "react";
import {withRouter} from 'react-router-dom';
import Comment from './comment/comment';
import {connect} from "react-redux";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

const post = (props) => {
	const ID = +props.match.params.id;

	const filteredPost = props.posts.filter(function (ele) {
		return ele.id === ID;
	});

	const post = filteredPost[0];
	// let comments;
	// let allComments = [...post.comments];

	// comments = allComments.map((comment) => {
	// 	return (
	// 		<Comment
	// 			key={comment}
	// 			commentCopy={comment}
	// 		/>
	// 	);
	// });

	return (
		<div>
			{post && (
				<div>
					<h1>{post.title}</h1>
					<h3>{post.body}</h3>
				</div>
			)}
			<h4>Comments:</h4>
			{/*{comments}*/}
		</div>
	);
};




export default withRouter(post);
