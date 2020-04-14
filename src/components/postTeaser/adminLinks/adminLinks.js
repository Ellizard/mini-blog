import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import classes from './adminLinks.module.scss';

const adminLinks = (props) => {
	return (
		<div className={classes.adminAction}>
			<IconButton
				aria-label="delete"
				onClick={() => props.onDelete(props.index)}
			>
				<DeleteIcon color="secondary" fontSize="small" />
			</IconButton>
			<IconButton aria-label="edit">
				<EditIcon color="primary" fontSize="small" />
			</IconButton>
		</div>
	);
};

export default adminLinks;