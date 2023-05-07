import React, { useEffect, useState } from 'react';
import { NavLink, Link, useParams, Outlet } from 'react-router-dom';

function HostVanDetail() {
	const params = useParams();
	const [vanDetail, setVanDetail] = useState(null);
	useEffect(() => {
		console.log('useEffect ran');
		fetch(`/api/host/vans/${params.id}`)
			.then(res => res.json())
			.then(data => setVanDetail(data.vans));
	}, [params.id]);
	console.log(params);
	console.log(vanDetail);
	if (!vanDetail) {
		return <h1>Loading...</h1>;
	} else {
		return (
			<>
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
							<>
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

								<div>
									<nav className="host-details-nav">
										<NavLink
											to="."
											end
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
									<Outlet context={[vanDetail, setVanDetail]} />
								</div>
							</>
						))}
				</div>
			</>
		);
	}
}

export default HostVanDetail;
