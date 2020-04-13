import React from 'react';
import {MenuBook} from '@material-ui/icons'
import { Button } from '@material-ui/core';
import classes from './postTeaser.module.scss';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from "@material-ui/core/IconButton";
import Typography from '@material-ui/core/Typography';
import {withRouter} from 'react-router-dom';

const postTeaser = (props) => {
	return (
		<div className={classes.PostTeaser}>
			<div className={classes.teasericon}>
				<MenuBook fontSize="large"/>
			</div>
			<Typography variant="h5" component="h5" gutterBottom>
				{props.post.title}
			</Typography>
			<Typography variant="subtitle2" gutterBottom>
				{props.post.smallDesription}
			</Typography>
			<Button
				size="small"
				variant="outlined"
				color="primary"
				onClick={() => props.history.push('/post/' + props.post.id)}
			>
				Read More
			</Button>

			<div className={classes.adminAction}>
				<IconButton aria-label="delete">
					<DeleteIcon color="secondary" fontSize="small" />
				</IconButton>
				<IconButton aria-label="edit">
					<EditIcon color="primary" fontSize="small" />
				</IconButton>
			</div>

		</div>
	);
};

export default withRouter(postTeaser);

