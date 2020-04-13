import React, {useState}  from "react";
import {Button} from "@material-ui/core";
import './login.scss';

const Login = (props) => {

	const [name, setName] = useState('');
	const [pass, setPass] = useState('');

	//console.log(name, pass);

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

export default Login;