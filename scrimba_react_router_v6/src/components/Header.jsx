import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
	return (
		<>
			<nav className="top">
				<Link
					to="/"
					className="logo"
				>
					<h1 className="title-header">#VANLIFE</h1>
				</Link>
				<NavLink
					to="/host"
					className={({ isActive }) => (isActive ? 'my-link' : 'link')}
				>
					{' '}
					Host
				</NavLink>
				<NavLink
					to="/about"
					className={({ isActive }) => (isActive ? 'my-link' : 'link')}
				>
					About
				</NavLink>
				<NavLink
					to="/vans"
					className={({ isActive }) => (isActive ? 'my-link' : 'link')}
				>
					Vans
				</NavLink>
			</nav>
		</>
	);
}

export default Header;
