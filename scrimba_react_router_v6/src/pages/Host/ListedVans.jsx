import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ListedVans() {
	const [vanData, setVanData] = useState([]);

	useEffect(() => {
		fetch('/api/host/vans')
			.then(res => res.json())
			.then(data => setVanData(data.vans));
	}, []);
	console.log(vanData);
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
