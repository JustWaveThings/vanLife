import React, { useState } from 'react';
import { useLoaderData, Form, useActionData, redirect } from 'react-router-dom';
import { loginUser } from '../api';

export function loginLoader({ request }) {
	return new URL(request.url).searchParams.get('message');
}

export async function action({ request }) {
	const formData = await request.formData();
	const email = formData.get('email');
	const password = formData.get('password');
	try {
		await loginUser({ email, password });
		localStorage.setItem('loggedin', true);
		const response = redirect('/host');
		response.body = true;
		return response;
	} catch (error) {
		return error.message;
	}
}

export default function Login() {
	const [loginProcessStatus, setLoginProcessStatus] = useState('idle');
	const error = useActionData();
	const message = useLoaderData();

	return (
		<div className="login-container">
			<h1>Sign in to your account</h1>
			{message && <h2 className="loginRedirectMessage">{message}</h2>}
			{error && <h4 className="loginErrorMessage">{error} </h4>}
			<Form
				method="post"
				className="login-form"
				replace
			>
				<input
					name="email"
					type="email"
					placeholder="Email address"
				/>
				<input
					name="password"
					type="password"
					placeholder="Password"
				/>
				{loginProcessStatus === 'submitting' ? (
					<button className="disabled">Logging in...</button>
				) : (
					<button>Log in</button>
				)}
			</Form>
		</div>
	);
}
