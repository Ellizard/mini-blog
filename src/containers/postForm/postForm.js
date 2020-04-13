import React from "react";
import Typography from "@material-ui/core/Typography";
import {Button} from "@material-ui/core";
import './postForm.scss';


const postForm = () => {
	return (
		<div className="postForm">
			<div className="formItem">
				<Typography variant="subtitle1">
					Title
				</Typography>
				<input
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
					type="text"
					name="title"
					placeholder="title"
				/>
			</div>

			<div className="formItem">
				<Typography variant="subtitle1">
					Small description
				</Typography>
				<textarea
					placeholder="post description"
					name=""
					id=""
					cols="30"
					rows="10"
				/>
			</div>
			<Button variant="contained" color="primary">
				Save post
			</Button>
		</div>
	);
};

export default postForm;