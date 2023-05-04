import React, { useState, useEffect } from 'react';
import '../../server.js';
import VanCard from './VanCard.jsx';
import '../index.css';
import '../meyer.css';

function Vans() {
	const [vanData, setVanData] = useState({});

	useEffect(() => {
		fetch('/api/vans')
			.then(res => res.json())
			.then(data => console.log(data));
	}, []);
	return (
		<div className="test vans">
			<div className="nav-cont-van">
				<h1 className="nav-title-van">Explore our van options</h1>
				<nav className="nav-van-options">
					<button>Simple</button>
					<button>luxury</button>
					<button>Rugged</button>
					<button>Clear Filters</button>
				</nav>
				<VanCard />
			</div>
		</div>
	);
}

export default Vans;
