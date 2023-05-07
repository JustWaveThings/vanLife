import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../../../server.js';
import VanCard from './VanCard.jsx';

function Vans() {
	const [vanData, setVanData] = useState([]);
	let [searchParams, setSearchParams] = useSearchParams();

	const typeFilter = searchParams.get('type');
	console.log(typeFilter);

	useEffect(() => {
		fetch('/api/vans')
			.then(res => res.json())
			.then(data => setVanData(data.vans));
	}, []);

	const vanDataDisplay = vanData.map(van => (
		<VanCard
			image={van.imageUrl}
			key={van.id}
			vanName={van.name}
			price={van.price}
			type={van.type}
			id={van.id}
			description={van.description}
		/>
	));

	return (
		<div className="test vans">
			<div className="nav-cont-van">
				<h1 className="nav-title-van">Explore our van options</h1>
				<nav className="nav-van-options">
					<button className="simple">Simple</button>
					<button className="luxury">Luxury</button>
					<button className="rugged">Rugged</button>
					<button>Clear Filters</button>
				</nav>
				<main className="van-cont">{vanDataDisplay}</main>
			</div>
		</div>
	);
}

export default Vans;
