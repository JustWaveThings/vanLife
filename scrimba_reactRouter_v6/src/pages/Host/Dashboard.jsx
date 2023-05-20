import React from 'react';
import { Outlet } from 'react-router-dom';

function Dashboard() {
	return (
		<>
			<div className="test Dashboard">Dashboard</div>
			<Outlet />
		</>
	);
}

export default Dashboard;
