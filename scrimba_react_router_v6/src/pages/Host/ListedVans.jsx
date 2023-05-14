import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getHostVans } from '../../api.js';
import { requireAuth } from '../../utils.js';

export async function loader({ params }) {
	await requireAuth();
	return getHostVans(params.id);
}

function ListedVans() {
	const vanData = useLoaderData();

	return (
		<div className="host-listed-vans-cont">
			<h1 className="host-listed-vans-title">Your Listed Vans</h1>
			{vanData.length > 0 ? (
				<>
					{vanData.map(van => (
						<Link
							key={van.id}
							to={van.id}
						>
							<div className="host-van-card">
								<img
									src={van.imageUrl}
									alt="picture of van"
									height="80"
									width="80"
									className="host-listed-vans-img"
								></img>
								<div className="host-van-right-card">
									<div className="host-van-name">{van.name}</div>
									<div className="host-van-price">${van.price}/day</div>
								</div>
							</div>
						</Link>
					))}
				</>
			) : (
				<h2>Loading... </h2>
			)}
		</div>
	);
}

export default ListedVans;
