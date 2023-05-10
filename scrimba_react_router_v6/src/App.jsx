import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './meyer.css';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import Layout from './components/Layout';
import Reviews from './pages/Host/Reviews';
import Income from './pages/Host/Income';
import HostLayout from './components/HostLayout';
import Dashboard from './pages/Host/Dashboard';
import HostVanDetail from './pages/Host/HostVanDetail';
import ListedVans from './pages/Host/ListedVans';

import HostDetailPricing from './components/HostDetailPricing';
import HostDetailPhotos from './components/HostDetailPhotos';
import HostDetailInfo from './components/HostDetailInfo';
import NotFound from './pages/NotFound';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Layout />}
				>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path="about"
						element={<About />}
					/>
					<Route
						path="vans"
						element={<Vans />}
					/>
					<Route
						path="vans/:id"
						element={<VanDetail />}
					/>
					<Route
						path="host"
						element={<HostLayout />}
					>
						<Route
							index
							element={<Dashboard />}
						/>
						<Route
							path="income"
							element={<Income />}
						/>
						<Route
							path="reviews"
							element={<Reviews />}
						/>
						<Route
							path="vans"
							element={<ListedVans />}
						/>
						<Route
							path="vans/:id"
							element={<HostVanDetail />}
						>
							<Route
								index
								element={<HostDetailInfo />}
							/>
							<Route
								path="pricing"
								element={<HostDetailPricing />}
							/>
							<Route
								path="photos"
								element={<HostDetailPhotos />}
							/>
						</Route>
					</Route>
					<Route
						path="*"
						element={<NotFound />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
