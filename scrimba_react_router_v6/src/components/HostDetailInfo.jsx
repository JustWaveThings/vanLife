import React from 'react';
import { useOutletContext } from 'react-router-dom';

function HostDetailInfo() {
	const vanDetail = useOutletContext();
	console.log(vanDetail);
	return (
		<div
			key={vanDetail.id}
			className="host-van-detail-card"
		>
			<div className="bottom-card">
				<div className="info">
					<div className="label">Name:</div>
					<div className="text">{vanDetail.name}</div>
				</div>
				<div className="info">
					<div className="label">Category:</div>
					<div className="text">{vanDetail.type}</div>
				</div>
				<div className="info">
					<div className="label">Description:</div>
					<div className="text">{vanDetail.description}</div>
				</div>
				<div className="info">
					<div className="label">Visibilty:</div>
					<div className="text">Public</div>
				</div>
			</div>
		</div>
	);
}

export default HostDetailInfo;
