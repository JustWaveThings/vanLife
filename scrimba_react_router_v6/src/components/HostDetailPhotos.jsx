import React from 'react';
import { useOutletContext } from 'react-router-dom';

function HostDetailPhotos() {
	const { vanDetail } = useOutletContext();
	return (
		<div
			key={vanDetail.id}
			className="host-van-detail-card"
		>
			<div className="bottom-card">
				<div className="info">
					<img
						className="detail-van-photo"
						src={vanDetail.imageUrl}
						height={80}
					></img>
				</div>
			</div>
		</div>
	);
}

export default HostDetailPhotos;
