import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './pure/nav';
import NavMobile from './pure/navMobile';

const Root = ({ data }) => {

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener('change', e => setMatches(e.matches));
    console.log('matches', matches);
  });

  return (
    <div className='container-sm overflow-hidden text-lefty px-3'>
      { matches ? (
        <div className='row justify-content-sm-center'>
          <div className='col-sm-auto py-4 px-4 bg-body'>
            <Nav />
          </div>
          <div className='col-auto py-4 px-2 bg-body'>
            <h1>:</h1>
          </div>
          <div className='col-sm-7 py-4 px-4 bg-body'>
            <Outlet />
          </div>
        </div>
      ) : (
        <div className='row justify-content-sm-center'>
          <div className='col-sm-auto py-4 px-4 bg-body'>
            <NavMobile />
          </div>
          <div className='col-sm-7 py-0 px-4 bg-body'>
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
}

export default Root;