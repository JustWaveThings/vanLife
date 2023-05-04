import React from 'react';
import './meyer.css';
import './index.css';
import Home from './Home';
import About from './About';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<nav>
				<Link
					to="/scrimba_react_router_v6/"
					className="link"
				>
					{' '}
					Home
				</Link>
				<Link
					to="scrimba_react_router_v6/about"
					className="link"
				>
					About
				</Link>
			</nav>
			<Routes>
				<Route
					path="/scrimba_react_router_v6/"
					element={<Home />}
				/>
				<Route
					path="scrimba_react_router_v6/about"
					element={<About />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
