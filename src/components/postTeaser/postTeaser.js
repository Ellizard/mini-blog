import React from 'react';
import {MenuBook} from '@material-ui/icons'
import { Button } from '@material-ui/core';
import classes from './postTeaser.module.scss';
import AdminLinks from './adminLinks/adminLinks';
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
				{props.post.smallDescription}
			</Typography>
			<Button
				size="small"
				variant="outlined"
				color="primary"
				onClick={() => props.history.push('/post/' + props.post.id)}
			>
				Read More
			</Button>
			<AdminLinks
				id={props.post.id}
				onDelete={props.onDelete}
			/>
		</div>
	);
};

export default withRouter(postTeaser);

