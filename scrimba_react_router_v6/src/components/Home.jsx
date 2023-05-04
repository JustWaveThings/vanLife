import React from 'react';
import '../index.css';
import '../meyer.css';

function Home() {
	return (
		<div className="test home">
			<div className="cta">
				<h1 className="title">You got the travel plans, we got the travel vans.</h1>
				<p>
					Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road
					trip.
				</p>
			</div>
			<button>Find your van</button>
		</div>
	);
}

export default Home;
