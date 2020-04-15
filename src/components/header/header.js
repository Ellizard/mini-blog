import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {NavLink} from 'react-router-dom';

import './header.scss';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	mainMenu: {
		flexGrow: 1,
	},
}));

const Header = (props) => {

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<div className={classes.mainMenu} >
						<ul className="navigation">
							<li>
								<NavLink to="/">Posts</NavLink>
							</li>
						</ul>
					</div>
					<div>
						<ul className="navigation">
							<li>
								<NavLink to="/new-post">Create new post</NavLink>
							</li>
						</ul>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;

