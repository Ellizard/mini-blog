import React, {useEffect, useState} from "react";
import {withRouter} from 'react-router-dom';
import Comment from './comment/comment';
import * as axios from "axios";

const Post = (props) => {
	const ID = +props.match.params.id;
	const [comments, setComments] = useState([]);
	let [comment, setComment] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(
				`https://simple-blog-api.crew.red/posts/${ID}?_embed=comments`,
			);
			setComments(result.data.comments);
		};
		fetchData();
	}, []);

	const [filteredPost] = props.posts.filter(function (ele) {
		return ele.id === ID;
	});

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
			{filteredPost && (
				<div>
					<h1>{filteredPost.title}</h1>
					<h3>{filteredPost.body}</h3>
				</div>
			)}
			{commentsList.length ?
				<div>
					<h4>Comments:</h4>
					{commentsList}
				</div>
				: <p>Here is no comments for post <b>{ID}</b></p>
			}

			<textarea
				id="area"
				cols="30"
				rows="10"
				onChange={(e) => setComment(e.target.value)} >

			</textarea>
			<br/>
			<button onClick={ () => {
				props.addComment(ID, comment);
				const area = document.getElementById('area');
				area.value = '';
			}}>
				Add comment
			</button>

		</div>
	);
};




export default withRouter(Post);
