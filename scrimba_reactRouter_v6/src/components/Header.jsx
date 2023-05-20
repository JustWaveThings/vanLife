import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import image from '../../public/Icon.png';
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
					to="login"
					className={({ isActive }) => (isActive ? 'my-link' : 'link')}
				>
					{' '}
					Login
				</NavLink>
				<NavLink
					to="host"
					className={({ isActive }) => (isActive ? 'my-link' : 'link')}
				>
					{' '}
					Host
				</NavLink>
				<NavLink
					to="about"
					className={({ isActive }) => (isActive ? 'my-link' : 'link')}
				>
					About
				</NavLink>
				<NavLink
					to="vans"
					className={({ isActive }) => (isActive ? 'my-link' : 'link')}
				>
					Vans
				</NavLink>
				<NavLink
					to="login"
					className={({ isActive }) => (isActive ? 'my-link' : 'link')}
				>
					<img
						src={image}
						height="20px"
					></img>
				</NavLink>
			</nav>
		</>
	);
}

export default Header;
