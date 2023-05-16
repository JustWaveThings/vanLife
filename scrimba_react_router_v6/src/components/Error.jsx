import React from 'react';
import { useRouteError } from 'react-router-dom';

function Error() {
	const error = useRouteError();
	console.log(error);
	return (
		<div className="test">
			<h2> An Error Occurred</h2>
			<div>Error: {error.message}</div>
			<pre>
				{error.status} - {error.message}
			</pre>
		</div>
	);
}

export default Error;
