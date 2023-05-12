import React from 'react';
import { useOutletContext } from 'react-router-dom';

function HostDetailPhotos() {
	const [vanDetail] = useOutletContext();
	const van = vanDetail.map(van => (
		<div
			key={van.id}
			className="host-van-detail-card"
		>
			<div className="bottom-card">
				<div className="info">
					<img
						className="detail-van-photo"
						src={van.imageUrl}
						height={80}
					></img>
				</div>
			</div>
		</div>
	));
	return <>{van}</>;
}

export default HostDetailPhotos;
