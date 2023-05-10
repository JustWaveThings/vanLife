import React, { useState, useEffect } from 'react';
import { useSearchParams, useLoaderData } from 'react-router-dom';
import VanCard from './VanCard.jsx';
import { getVans } from '../../api.js';

export function loader() {
	return getVans();
}

function Vans() {
	const vanData = useLoaderData();
	let [searchParams, setSearchParams] = useSearchParams();
	const [error, setError] = useState(null);
	const typeFilter = searchParams.get('type');

	const displayVans = typeFilter ? vanData.filter(van => van.type === typeFilter) : vanData;

	const vanDataDisplay = displayVans?.map(van => (
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

	if (error) {
		return <h1 className="test"> There was an error: {error.message}</h1>;
	}

	throw new Error('');
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
