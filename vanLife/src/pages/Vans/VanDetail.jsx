import React, { Suspense } from 'react';
import { Link, useLocation, useLoaderData, defer, Await } from 'react-router-dom';
import { getVans } from '../../api.js';

export function loader({ params }) {
  return defer({ getVans: getVans(params.id) });
}

function VanDetail() {
  const displayVan = useLoaderData();
  const location = useLocation();

  return (
    <Suspense fallback={<h2> Loading Van Detail..</h2>}>
      <Await resolve={displayVan.getVans}>
        {vanData => {
          return (
            <div className='test van-detail'>
              <Link
                to={`..?${location.state.searchParams ? location.state.searchParams : ''}`}
                relative='path'
                className='back'>
                <div className='back'>{` Back to ${vanData.type.slice(0, 1).toUpperCase() + vanData.type.slice(1)} vans`}</div>
              </Link>
              <div className='van-detail-container'>
                {vanData ? (
                  <div className='van-detail-inner'>
                    <img src={vanData.imageUrl} />
                    <i className={`van-type ${vanData.type} selected`}>{vanData.type}</i>
                    <h2>{vanData.name}</h2>
                    <p className='van-price'>
                      <span>${vanData.price}</span>/day
                    </p>
                    <p>{vanData.description}</p>
                    <button className='link-button'>Rent this van</button>
                  </div>
                ) : (
                  <h2>No vans to display.. </h2>
                )}
              </div>
            </div>
          );
        }}
      </Await>
    </Suspense>
  );
}

export default VanDetail;
