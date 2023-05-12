import React from 'react';
import { NavLink, Link, useParams, Outlet, useLoaderData } from 'react-router-dom';
import { getHostVans } from '../../api.js';

export function loader() {
	return getHostVans();
}
function HostVanDetail() {
	const params = useParams();
	console.log(params);
	const preVanDetail = useLoaderData();
	console.log(preVanDetail);
	const vanDetail = preVanDetail[params.id];
	console.log(vanDetail);
	if (!vanDetail) {
		return <h1 className="test">Loading...</h1>;
	}

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

				<>
					<div
						key={vanDetail.id}
						className="host-van-detail-cont-top"
					>
						<div className="host-van-detail-card">
							<div className="top-card">
								<img
									src={vanDetail.imageUrl}
									alt="picture of camper van"
									height="160"
								></img>
								<div className="right">
									<button>{vanDetail.type}</button>
									<div>{vanDetail.name}</div>
									<div className="price-cont">
										<div>${vanDetail.price}</div>
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
						<Outlet context={[vanDetail]} />
					</div>
				</>
			</div>
		</>
	);
}

export default HostVanDetail;
