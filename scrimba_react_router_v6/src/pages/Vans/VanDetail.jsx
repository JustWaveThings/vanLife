import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation, useSearchParams } from 'react-router-dom';
import '../../../server.js';

function VanDetail() {
	const params = useParams();
	const [displayVan, setDisplayVan] = useState(null);
	const location = useLocation();
	console.log(location);
	useEffect(() => {
		fetch(`/api/vans/${params.id}`)
			.then(res => res.json())
			.then(data => setDisplayVan(data.vans));
	}, [params.id]);

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
