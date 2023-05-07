import React, { useEffect, useState } from 'react';
import { NavLink, Link, useParams } from 'react-router-dom';

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
				{vanDetail &&
					vanDetail.map(van => (
						<div
							className="host-van-detail-cont"
							key={van.id}
						>
							<div className="host-van-detail-card">
								<div className="bottom-card">
									<div className="info">
										<div className="label">Name:</div>
										<div className="text">{van.name}</div>
									</div>
									<div className="info">
										<div className="label">Category:</div>
										<div className="text">{van.type}</div>
									</div>
									<div className="info">
										<div className="label">Description:</div>
										<div className="text">{van.description}</div>
									</div>
									<div className="info">
										<div className="label">Visibilty:</div>
										<div className="text">Public</div>
									</div>
								</div>
							</div>
						</div>
					))}
			</>
		);
	}
}

export default HostVanDetail;
