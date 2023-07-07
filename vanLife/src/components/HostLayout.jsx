import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function HostLayout() {
	return (
		<>
			<nav className="top-host">
				<NavLink
					to="."
					end
					className={({ isActive }) => (isActive ? 'my-link' : 'link')}
				>
					Dashboard
				</NavLink>

				<NavLink
					to="income"
					className={({ isActive }) => (isActive ? 'my-link' : 'link')}
				>
					Income
				</NavLink>
				<NavLink
					to="vans"
					className={({ isActive }) => (isActive ? 'my-link' : 'link')}
				>
					Vans
				</NavLink>
				<NavLink
					to="reviews"
					className={({ isActive }) => (isActive ? 'my-link' : 'link')}
				>
					Reviews
				</NavLink>
			</nav>
			<Outlet />
		</>
	);
}

export default HostLayout;
