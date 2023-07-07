import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import './meyer.css';
import './index.css';
import '../server.js';

import Home from './pages/Home';
import About from './pages/About';
import Vans, { loader as vansLoader } from './pages/Vans/Vans';
import VanDetail, { loader as vanDetailLoader } from './pages/Vans/VanDetail';
import Layout from './components/Layout';
import Reviews from './pages/Host/Reviews';
import Income from './pages/Host/Income';
import HostLayout from './components/HostLayout';
import Dashboard from './pages/Host/Dashboard';
import HostVanDetail, { loader as loaderHostDetail } from './pages/Host/HostVanDetail';
import ListedVans, { loader as loaderListedVans } from './pages/Host/ListedVans';
import HostDetailPricing from './components/HostDetailPricing';
import HostDetailPhotos from './components/HostDetailPhotos';
import HostDetailInfo from './components/HostDetailInfo';
import NotFound from './pages/NotFound';
import Error from './components/Error';
import Login, { action } from './pages/Login';

import { requireAuth } from './utils.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='login' element={<Login />} action={action} />
      <Route path='vans' element={<Vans />} loader={vansLoader} errorElement={<Error />} />
      <Route path='vans/:id' element={<VanDetail />} loader={vanDetailLoader} errorElement={<Error />} />
      <Route path='host' element={<HostLayout />} loader={async ({ request }) => await requireAuth(request)}>
        <Route index element={<Dashboard />} loader={async ({ request }) => await requireAuth(request)} />
        <Route path='income' element={<Income />} loader={async ({ request }) => await requireAuth(request)} />
        <Route path='reviews' element={<Reviews />} loader={async ({ request }) => await requireAuth(request)} />
        <Route path='vans' element={<ListedVans />} loader={loaderListedVans} errorElement={<Error />} />
        <Route path='vans/:id' element={<HostVanDetail />} loader={loaderHostDetail} errorElement={<Error />}>
          <Route index element={<HostDetailInfo />} />
          <Route path='pricing' element={<HostDetailPricing />} />
          <Route path='photos' element={<HostDetailPhotos />} />
        </Route>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  ),
  {
    basename: '/vanLife',
  }
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
