import React from "react";
import Grid from "@material-ui/core/Grid";
import PostTeaser from "../postTeaser/postTeaser";
import classes from './postList.module.scss';

const postList = (props) => {
	return (
		<div>
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<PostTeaser />
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<PostTeaser />
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<PostTeaser />
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<PostTeaser />
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<PostTeaser />
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<PostTeaser />
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<PostTeaser />
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<PostTeaser />
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<PostTeaser />
				</Grid>
			</Grid>
		</div>
	);
};

export default postList;