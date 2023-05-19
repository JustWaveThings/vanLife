import React, { useState, Suspense } from 'react';
import { useSearchParams, useLoaderData, defer, Await } from 'react-router-dom';
import VanCard from './VanCard.jsx';
import { getVans } from '../../api.js';

export function loader() {
	return defer({ vans: getVans() });
}

function Vans() {
	const loaderData = useLoaderData();
	let [searchParams, setSearchParams] = useSearchParams();

	const typeFilter = searchParams.get('type');

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
				<Suspense fallback={<h2> Loading Vans...</h2>}>
					<Await resolve={loaderData.vans}>
						{vanDataDisplay => {
							const displayVans = typeFilter ? vanDataDisplay.filter(van => van.type === typeFilter) : vanDataDisplay;
							const vanDisplay = displayVans?.map(van => (
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
							return <main className="van-cont">{vanDisplay}</main>;
						}}
					</Await>
				</Suspense>
			</div>
		</div>
	);
}

export default Vans;
