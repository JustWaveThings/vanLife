import React from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';

function HostDetailLayout() {
	return (
		<>
			<Link
				to=".."
				relative="path"
				className="back"
			>
				<img
					src="/Arrow.png"
					alt="left arrow"
				></img>
				<div>Back to all vans</div>
			</Link>

			<nav className="top-host">
				<NavLink
					to="details"
					className={({ isActive }) => (isActive ? 'my-link' : 'link')}
				>
					Details
				</NavLink>

				<NavLink
					to="pricing"
					className={({ isActive }) => (isActive ? 'my-link' : 'link')}
				>
					Pricing
				</NavLink>
				<NavLink
					to="photos"
					className={({ isActive }) => (isActive ? 'my-link' : 'link')}
				>
					Photos
				</NavLink>
			</nav>
			<Outlet />
		</>
	);
}

export default HostDetailLayout;
