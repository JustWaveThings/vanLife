import React, { useEffect, useState } from 'react';
import { Outlet, NavLink, Link, useParams } from 'react-router-dom';

function HostDetailLayout() {
	const params = useParams();
	const [vanDetail, setVanDetail] = useState(null);
	useEffect(() => {
		console.log('useEffect ran');
		fetch(`/api/host/vans/${params.id}`)
			.then(res => res.json())
			.then(data => setVanDetail(data.vans));
	}, [params.id]);
	return (
		<>
			<Link
				to=".."
				relative="path"
				className="back"
			>
				<img
					src="/Arrow.png"
					alt="left arrow"
				></img>
				<div>Back to all vans</div>
			</Link>
			{vanDetail &&
				vanDetail.map(van => (
					<div
						className="host-van-detail-cont"
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

			<nav className="top-host">
				<NavLink
					to="details"
					className={({ isActive }) => (isActive ? 'my-link' : 'link')}
				>
					Details
				</NavLink>

				<NavLink
					to="pricing"
					className={({ isActive }) => (isActive ? 'my-link' : 'link')}
				>
					Pricing
				</NavLink>
				<NavLink
					to="photos"
					className={({ isActive }) => (isActive ? 'my-link' : 'link')}
				>
					Photos
				</NavLink>
			</nav>
			<Outlet />
		</>
	);
}

export default HostDetailLayout;
