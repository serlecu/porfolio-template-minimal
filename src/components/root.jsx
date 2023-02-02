import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './pure/nav';

const Root = ({ data }) => {
  return (
    <div className='container-sm overflow-hidden text-lefty'>
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
    </div>
  );
}

export default Root;