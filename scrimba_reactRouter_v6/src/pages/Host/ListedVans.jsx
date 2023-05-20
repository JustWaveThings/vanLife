import React, { Suspense } from 'react';
import { Link, useLoaderData, defer, Await } from 'react-router-dom';
import { getHostVans } from '../../api.js';
import { requireAuth } from '../../utils.js';

export async function loader({ request, params }) {
	requireAuth(request);
	return defer({ getHostVans: getHostVans(params.id) });
}

function ListedVans() {
	const vanDataPromise = useLoaderData();

	return (
		<Suspense fallback={<h2 className="host-listed-vans-title"> Loading Vans...</h2>}>
			<Await resolve={vanDataPromise.getHostVans}>
				{vanData => {
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
								<h2 className="host-listed-vans-none">You have no listed vans.</h2>
							)}
						</div>
					);
				}}
			</Await>
		</Suspense>
	);
}

export default ListedVans;
