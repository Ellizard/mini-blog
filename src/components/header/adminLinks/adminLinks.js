import React from "react";
import {NavLink} from "react-router-dom";
import './adminLinks.scss';

const adminLinks = (props) => {

	let adminMenu;

	if (props.isLogged) {
		adminMenu = (
			<ul className="navigation">
				<li>
					<NavLink to="/new-post">Create new post</NavLink>
				</li>
				<li>
					<button onClick={props.logOutHandler}>Log out</button>
				</li>
			</ul>
		)
	} else {
		adminMenu = (
			<ul className="navigation">
				<li>
					<NavLink to="/login">Login</NavLink>
				</li>
			</ul>
		)
	}



	return (
		<div>
			{adminMenu}
		</div>
	);
};

export default adminLinks;