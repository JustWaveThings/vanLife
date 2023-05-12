import React from 'react';
import { useOutletContext } from 'react-router-dom';

function HostDetailPricing() {
	const van = useOutletContext();
	return (
		<div
			key={van.id}
			className="host-van-detail-card"
		>
			<div className="bottom-card">
				<div className="info">
					<div className="text">${van.price}/day</div>
				</div>
			</div>
		</div>
	);
}

export default HostDetailPricing;
