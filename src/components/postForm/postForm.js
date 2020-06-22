import React, {useState} from "react";
import {withRouter} from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import {Button} from "@material-ui/core";
import './postForm.scss';


const PostForm = (props) => {

	let postData = {};
	let defaultTitle = '';
	let defaultDescription = '';
	let defaultPostBody = '';

	const editPage = props.match.params.id;

	if (editPage) {

		const currentPost = props.posts.find( post => {
			return post.id === editPage
		});

		defaultTitle = currentPost.title;
		defaultPostBody = currentPost.body;
	}

	let [title, setTitle] = useState(defaultTitle);
	let [body, setFullDescription] = useState(defaultPostBody);

	postData = {
		title,
		body
	};

	return (
		<div className="postForm">
			<div className="formItem">
				<Typography variant="subtitle1">
					Title
				</Typography>
				<input
					defaultValue={defaultTitle}
					onChange={(e) => setTitle(e.target.value)}
					type="text"
					name="title"
					placeholder="title"
				/>
			</div>

			<div className="formItem">
				<Typography variant="subtitle1">
					Post body
				</Typography>
				<textarea
					defaultValue={body}
					onChange={(e) => setFullDescription(e.target.value)}
					placeholder="Post body"
					name=""
					id=""
					cols="30"
					rows="10"
				/>
			</div>
			<Button
				variant="contained"
				color="primary"
				onClick={() => props.submitAction(postData, editPage)}
			>
				Save post
			</Button>
		</div>
	);
};

export default withRouter(PostForm);