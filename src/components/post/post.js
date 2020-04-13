import React from "react";
import {withRouter} from 'react-router-dom';
import Comment from './comment/comment';

const post = (props) => {

	const post = {...props.posts[props.match.params.id - 1]};
	const allComments = [...post.comments];

	const comments = allComments.map((comment) => {
		return (
			<Comment
				key={comment}
				commentCopy={comment}
			/>
		);

	});

	return (
		<div>
			<h1>{post.title}</h1>
			<h3>{post.smallDesription}</h3>
			<p>{post.postBody}</p>

			<h4>Comments:</h4>
			{comments}
		</div>
	);
};

export default withRouter(post);