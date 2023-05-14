import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { loginUser } from '../api';
export function loginLoader({ request }) {
	return new URL(request.url).searchParams.get('message');
}

export default function Login() {
	const [loginFormData, setLoginFormData] = useState({ email: 'b@b.com', password: 'p123' });
	const [loginProcessStatus, setLoginProcessStatus] = useState('idle');
	const [loginError, setLoginError] = useState(null);
	const message = useLoaderData();

	function handleSubmit(e) {
		e.preventDefault();
		setLoginProcessStatus('submitting');
		console.log(loginFormData);
		loginUser(loginFormData)
			.then(data => {
				console.log(data);
				setLoginProcessStatus('idle');
				setLoginError(null);
			})
			.catch(err => {
				setLoginError(err.message || 'Unknown error');
				setLoginProcessStatus('idle');
				console.error(loginError);
			});
	}

	function handleChange(e) {
		const { name, value } = e.target;
		setLoginFormData(prev => ({
			...prev,
			[name]: value,
		}));
	}

	return (
		<div className="login-container">
			<h1>Sign in to your account</h1>
			{message && <h2 className="loginRedirectMessage">{message}</h2>}
			{loginError !== null && <h2 className="loginErrorMessage">{loginError} </h2>}
			<form
				onSubmit={handleSubmit}
				className="login-form"
			>
				<input
					name="email"
					onChange={handleChange}
					type="email"
					placeholder="Email address"
					value={loginFormData.email}
				/>
				<input
					name="password"
					onChange={handleChange}
					type="password"
					placeholder="Password"
					value={loginFormData.password}
				/>
				{loginProcessStatus === 'submitting' ? <button className="disabled">Log in</button> : <button>Log in</button>}
			</form>
		</div>
	);
}
