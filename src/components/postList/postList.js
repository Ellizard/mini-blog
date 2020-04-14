import React from "react";
import Grid from "@material-ui/core/Grid";
import PostTeaser from "../postTeaser/postTeaser";
import classes from './postList.module.scss';

const postList = (props) => {
	return (
		<div className={classes.postList}>
			<Grid container spacing={1}>
				{props.posts.map( (post) => {
					return (
						<Grid key={post.id} item xs={12} sm={6} md={3}>
							<PostTeaser
								onEdit={props.onEdit}
								onDelete={props.onDelete}
								isLogged={props.isLogged}
								post={post}
							/>
						</Grid>
					)
				})}
			</Grid>
		</div>
	);
};

export default postList;