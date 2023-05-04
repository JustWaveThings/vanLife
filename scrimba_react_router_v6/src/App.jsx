import React from 'react';
import './meyer.css';
import './index.css';
import Home from './components/Home';
import About from './components/About';
import Vans from './components/Vans';
import VanDetail from './components/VanDetail';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<nav className="top">
				<Link
					to="/"
					className="link"
				>
					<h1 className="title-header">#VANLIFE</h1>
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
					path="/"
					element={<Home />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/vans"
					element={<Vans />}
				/>
				<Route
					path="/vans/:id"
					element={<VanDetail />}
				/>
			</Routes>
			<footer> Ⓒ 2022 #VANLIFE </footer>
		</BrowserRouter>
	);
}

export default App;
