import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import '../../../server.js';
import VanCard from './VanCard.jsx';

function Vans() {
	const [vanData, setVanData] = useState([]);
	let [searchParams, setSearchParams] = useSearchParams();

	const typeFilter = searchParams.get('type');
	console.log(typeFilter);

	const displayVans = typeFilter ? vanData.filter(van => van.type === typeFilter) : vanData;

	useEffect(() => {
		fetch('/api/vans')
			.then(res => res.json())
			.then(data => setVanData(data.vans));
	}, []);

	const vanDataDisplay = displayVans.map(van => (
		<VanCard
			image={van.imageUrl}
			key={van.id}
			vanName={van.name}
			price={van.price}
			type={van.type}
			id={van.id}
			description={van.description}
			searchParams={searchParams.toString()}
		/>
	));

	return (
		<div className="test vans">
			<div className="nav-cont-van">
				<h1 className="nav-title-van">Explore our van options</h1>
				<nav className="nav-van-options">
					<button
						onClick={() => setSearchParams({ type: 'simple' })}
						className={`simple link ${typeFilter === 'simple' ? 'selected' : null} `}
					>
						Simple
					</button>

					<button
						onClick={() => setSearchParams({ type: 'luxury' })}
						className={`luxury link ${typeFilter === 'luxury' ? 'selected' : null} `}
					>
						Luxury
					</button>

					<button
						onClick={() => setSearchParams({ type: 'rugged' })}
						className={`rugged link ${typeFilter === 'rugged' ? 'selected' : null} `}
					>
						Rugged
					</button>

					{typeFilter && (
						<button
							onClick={() => setSearchParams({})}
							className="clear-filter"
						>
							Clear Filters
						</button>
					)}
				</nav>
				<main className="van-cont">{vanDataDisplay}</main>
			</div>
		</div>
	);
}

export default Vans;
