import React, { Suspense } from 'react';
import { NavLink, Link, Outlet, useLoaderData, defer, Await } from 'react-router-dom';
import { getHostVans } from '../../api.js';
import { requireAuth } from '../../utils.js';
import arrow from '../../images/Arrow.png';

export async function loader({ request, params }) {
  await requireAuth(request);
  return defer({ getHostVans: getHostVans(params.id) });
}
function HostVanDetail() {
  const vanDetail = useLoaderData();

  if (!vanDetail) {
    return <h1 className='test'>Loading...</h1>;
  }

  return (
    <Suspense fallback={<h2 className='host-listed-vans-title'> Loading Vans...</h2>}>
      <Await resolve={vanDetail.getHostVans}>
        {vanDetail => {
          return (
            <>
              <div className='host-detail-layout-cont'>
                <Link
                  to='..'
                  relative='path'
                  className='back'>
                  <img
                    src={arrow}
                    alt='back arrow'></img>
                  <div className='back'>Back to your listed vans</div>
                </Link>

                <>
                  <div
                    key={vanDetail.id}
                    className='host-van-detail-cont-top'>
                    <div className='host-van-detail-card'>
                      <div className='top-card'>
                        <img
                          src={vanDetail.imageUrl}
                          alt='picture of camper van'
                          height='160'></img>
                        <div className='right'>
                          <button>{vanDetail.type}</button>
                          <div>{vanDetail.name}</div>
                          <div className='price-cont'>
                            <div>${vanDetail.price}</div>
                            <p>/day</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <nav className='host-details-nav'>
                      <NavLink
                        to='.'
                        end
                        className={({ isActive }) => (isActive ? 'my-link' : 'link')}>
                        Details
                      </NavLink>

                      <NavLink
                        to='pricing'
                        className={({ isActive }) => (isActive ? 'my-link' : 'link')}>
                        Pricing
                      </NavLink>
                      <NavLink
                        to='photos'
                        className={({ isActive }) => (isActive ? 'my-link' : 'link')}>
                        Photos
                      </NavLink>
                    </nav>
                    <Outlet context={{ vanDetail }} />
                  </div>
                </>
              </div>
            </>
          );
        }}
      </Await>
    </Suspense>
  );
}

export default HostVanDetail;
