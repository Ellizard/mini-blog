import React, {useState} from "react";
import {withRouter} from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import {Button} from "@material-ui/core";
import './postForm.scss';


const PostForm = (props) => {

	let defaultTitle = '';
	let defaultDescription = '';
	let defaultPostBody = '';
	let postID = null;

	if (props.match.params.id) {

		postID = props.match.params.id;
		const currentPost = props.posts.filter( (post) => {
			return post.id === props.match.params.id;
		});

		defaultTitle = currentPost[0].title;
		defaultDescription = currentPost[0].smallDescription;
		defaultPostBody = currentPost[0].postBody;
	}

	let [title, setTitle] = useState(defaultTitle);
	let [smallDescription, setSmallDescription] = useState(defaultDescription);
	let [postBody, setFullDescription] = useState(defaultPostBody);

	return (
		<div className="postForm">
			<div className="formItem">
				<Typography variant="subtitle1">
					Title
				</Typography>
				<input
					onChange={(e) => setTitle(e.target.value)}
					type="text"
					defaultValue={defaultTitle}
					name="title"
					placeholder="title"
				/>
			</div>
			<div className="formItem">
				<Typography variant="subtitle1">
					Small description
				</Typography>
				<input
					onChange={(e) => setSmallDescription(e.target.value)}
					type="text"
					defaultValue={defaultDescription}
					name="title"
					placeholder="title"
				/>
			</div>

			<div className="formItem">
				<Typography variant="subtitle1">
					Post body
				</Typography>
				<textarea
					onChange={(e) => setFullDescription(e.target.value)}
					placeholder="Post body"
					name=""
					defaultValue={defaultPostBody}
					id=""
					cols="30"
					rows="10"
				/>
			</div>
			<Button
				variant="contained"
				color="primary"
				onClick={() => props.submitAction(title, smallDescription, postBody, postID)}
			>
				Save post
			</Button>
		</div>
	);
};

export default withRouter(PostForm);