import React from 'react';
import { Link, useLocation, useLoaderData } from 'react-router-dom';
import { getVans } from '../../api.js';

export function loader({ params }) {
	return getVans(params.id);
}

function VanDetail() {
	const displayVan = useLoaderData();
	const location = useLocation();

	return (
		<div className="test van-detail">
			<Link
				to={`..?${location.state.searchParams ? location.state.searchParams : ''}`}
				relative="path"
				className="back"
			>
				{displayVan ? (
					<div className="back">{` Back to ${
						displayVan.type.slice(0, 1).toUpperCase() + displayVan.type.slice(1)
					} vans`}</div>
				) : (
					<h2>Loading...</h2>
				)}
			</Link>
			<div className="van-detail-container">
				{displayVan ? (
					<div className="van-detail-inner">
						<img src={displayVan.imageUrl} />
						<i className={`van-type ${displayVan.type} selected`}>{displayVan.type}</i>
						<h2>{displayVan.name}</h2>
						<p className="van-price">
							<span>${displayVan.price}</span>/day
						</p>
						<p>{displayVan.description}</p>
						<button className="link-button">Rent this van</button>
					</div>
				) : (
					<h2>Loading...</h2>
				)}
			</div>
		</div>
	);
}

export default VanDetail;
