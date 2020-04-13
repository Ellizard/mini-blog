import React, {useState}  from "react";
import {withRouter} from 'react-router-dom';
import {Button} from "@material-ui/core";
import './login.scss';

const Login = (props) => {

	const [name, setName] = useState('');
	const [pass, setPass] = useState('');

	return (
		<div className="login">
			<input
				type="text"
				placeholder="username"
				onChange={ (e) => setName(e.target.value)}
			/>
			<input
				type="password"
				placeholder="password"
				onChange={ (e) => setPass(e.target.value)}
			/>
			<Button
				variant="contained"
				color="primary"
				onClick={() => props.logInHandler(name, pass)}
			>
				Login
			</Button>
		</div>
	);
};

export default withRouter(Login);