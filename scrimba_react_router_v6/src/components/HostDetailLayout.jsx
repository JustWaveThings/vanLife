import React, { useEffect, useState } from 'react';
import { Link, useParams, useLoaderData } from 'react-router-dom';

export function loader() {
	return getHostVans();
}
function HostDetailLayout() {
	const { id } = useParams();
	const preVanDetail = useLoaderData();
	const vanDetail = preVanDetail[id];

	return (
		<div className="host-detail-layout-cont">
			<Link
				to=".."
				relative="path"
				className="back"
			>
				<img
					src="/Arrow.png"
					alt="left arrow"
				></img>
				<div className="back">Back to all vans</div>
			</Link>
			{vanDetail &&
				vanDetail.map(van => (
					<div
						className="host-van-detail-cont-top"
						key={van.id}
					>
						<div className="host-van-detail-card">
							<div className="top-card">
								<img
									src={van.imageUrl}
									alt="picture of camper van"
									height="160"
								></img>
								<div className="right">
									<button>{van.type}</button>
									<div>{van.name}</div>
									<div className="price-cont">
										<div>${van.price}</div>
										<p>/day</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
		</div>
	);
}

export default HostDetailLayout;
