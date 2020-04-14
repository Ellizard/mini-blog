import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import {Button} from "@material-ui/core";
import './postForm.scss';


const PostForm = (props) => {


	const [title, setTitle] = useState('');
	const [smallDescription, setSmallDescription] = useState('');
	const [postBody, setFullDescription] = useState('');

	return (
		<div className="postForm">
			<div className="formItem">
				<Typography variant="subtitle1">
					Title
				</Typography>
				<input
					onChange={(e) => setTitle(e.target.value)}
					type="text"
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
					id=""
					cols="30"
					rows="10"
				/>
			</div>
			<Button
				variant="contained"
				color="primary"
				onClick={() => props.onCreatePost(title, smallDescription, postBody)}
			>
				Save post
			</Button>
		</div>
	);
};

export default PostForm;