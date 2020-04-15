import React from "react";
import {withRouter} from 'react-router-dom';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import classes from './adminLinks.module.scss';

const AdminLinks = (props) => {
	return (
		<div className={classes.adminAction}>
			<IconButton
				aria-label="delete"
				onClick={() => props.onDelete(props.id)}
			>
				<DeleteIcon color="secondary" fontSize="small" />
			</IconButton>
			<IconButton
				aria-label="edit"
				onClick={() => props.history.push('/edit/' + props.id)}
			>
				<EditIcon color="primary" fontSize="small" />
			</IconButton>
		</div>
	);
};

export default withRouter(AdminLinks);