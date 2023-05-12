import React from 'react';
import { useOutletContext } from 'react-router-dom';

function HostDetailPricing() {
	const { vanDetail } = useOutletContext();

	return (
		<div
			key={vanDetail.id}
			className="host-van-detail-card"
		>
			<div className="bottom-card">
				<div className="info">
					<div className="text">${vanDetail.price}/day</div>
				</div>
			</div>
		</div>
	);
}

export default HostDetailPricing;
