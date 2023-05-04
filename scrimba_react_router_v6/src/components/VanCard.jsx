import React from 'react';
import '../index.css';
import '../meyer.css';

function VanCard() {
	return (
		<div className="card-cont-van">
			<img
				src="#"
				alt="test"
			/>
			<div className="card-bottom">
				<div className="top-cont">
					<div className="van-name">Modest Explorer</div>
					<div className="price">$100</div>
				</div>
				<div className="bottom-cont">
					<button className="card-button simple">Simple</button>
					<div className="per-day">/day</div>
				</div>
			</div>
		</div>
	);
}

export default VanCard;
