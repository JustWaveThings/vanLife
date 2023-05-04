import React from 'react';
import './meyer.css';
import './index.css';
import Home from './components/Home';
import About from './components/About';
import Vans from './components/Vans';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<nav className="top">
				<Link
					to="/scrimba_react_router_v6/"
					className="link"
				>
					<h1 className="title">#VANLIFE</h1>
				</Link>
				<Link
					to="scrimba_react_router_v6/about"
					className="link"
				>
					About
				</Link>
				<Link
					to="scrimba_react_router_v6/vans"
					className="link"
				>
					Vans
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
				<Route
					path="scrimba_react_router_v6/vans"
					element={<Vans />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
