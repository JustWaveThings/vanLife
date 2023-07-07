import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<div className="not-found test">
			<h2>Sorry, the page you were looking for was not found.</h2>
			<Link
				to="/"
				className="return-button"
			>
				Return to Home
			</Link>
		</div>
	);
}

export default NotFound;
