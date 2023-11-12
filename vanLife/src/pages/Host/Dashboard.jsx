import React from 'react';
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <>
      <div className='Dashboard'>
        <h1 className='host-listed-vans-title'>Van Host Dashboard</h1>
        <h3 className='host-listed-vans-subtitle'>This is a placeholder page for an overview of a host's received reviews, financial performance, and rental fleet.</h3>
        <h4 className='host-listed-vans-subtitle'> Discover the Vans Tab! </h4>
      </div>
      <Outlet />
    </>
  );
}

export default Dashboard;
