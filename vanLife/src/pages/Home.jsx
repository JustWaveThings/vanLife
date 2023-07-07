import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='test home'>
      <div className='cta'>
        <h1 className='title'>You got the travel plans, we got the travel vans.</h1>
        <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
      </div>
      <Link to='vans' className='cta-button'>
        Find your van
      </Link>
    </div>
  );
}

export default Home;
