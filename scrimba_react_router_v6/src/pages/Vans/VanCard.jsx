import React from 'react';

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function VanCard(props) {
	return (
		<Link to={`${props.id}`}>
			<div className="card-cont-van">
				<img
					src={`${props.image}`}
					alt="test"
				/>
				<div className="card-bottom">
					<div className="top-cont">
						<div className="van-name">{props.vanName}</div>
						<div className="price">${props.price}</div>
					</div>
					<div className="bottom-cont">
						<button className={`card-button ${props.type}`}>{props.type}</button>
						<div className="per-day">/day</div>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default VanCard;
