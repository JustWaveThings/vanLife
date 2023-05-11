import React from 'react';
import { useRouteError } from 'react-router-dom';

function Error(props) {
	const error = useRouteError();
	console.log(error);
	return (
		<div className="test">
			<h2> An Error Occurred</h2>
			<div>Message: {error.message}</div>
			<div>Status: {error.statusText}</div>
			<div>Code: {error.status}</div>
		</div>
	);
}

export default Error;
