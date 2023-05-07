import React from 'react';
import { useOutletContext } from 'react-router-dom';

function HostDetailPricing() {
	const [vanDetail, setVanDetail] = useOutletContext();
	const van = vanDetail.map(van => (
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
	));
	return <>{van}</>;
}

export default HostDetailPricing;
