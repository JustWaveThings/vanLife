import React from 'react';
import { useOutletContext } from 'react-router-dom';

function HostDetailInfo() {
	const [vanDetail, setVanDetail] = useOutletContext();
	const van = vanDetail.map(van => (
		<div
			key={van.id}
			className="host-van-detail-card"
		>
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
	));
	return <>{van}</>;
}

export default HostDetailInfo;
