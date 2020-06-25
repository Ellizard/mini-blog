import React, {useEffect, useState} from "react";
import {withRouter} from 'react-router-dom';
import Comment from './comment/comment';
import {connect} from "react-redux";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import * as axios from "axios";

const Post = (props) => {
	const ID = +props.match.params.id;
	const [comments, setComments] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(
				`https://simple-blog-api.crew.red/posts/${ID}?_embed=comments`,
			);
			setComments(result.data.comments);
		};
		fetchData();
	}, []);

	const filteredPost = props.posts.filter(function (ele) {
		return ele.id === ID;
	});

	const post = filteredPost[0];

	let commentsList;

	commentsList = comments.map((comment) => {
		return (
			<Comment
				key={comment.id}
				commentCopy={comment.body}
			/>
		);
	});

	return (
		<div>
			{post && (
				<div>
					<h1>{post.title}</h1>
					<h3>{post.body}</h3>
				</div>
			)}
			{commentsList.length ?
				<div>
					<h4>Comments:</h4>
					{commentsList}
				</div>
				: <p>Here is no comments for post <b>{ID}</b></p>
			}

			<textarea cols="30" rows="10"></textarea> <br/>
			<button>Add comment</button>

		</div>
	);
};




export default withRouter(Post);
