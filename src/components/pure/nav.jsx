import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/nav.css';

import { navProjecSectionsList as projSections } from '../../data.js';
import { pagesData as list } from '../../data.js';
import IconLinks from './iconLinks.jsx';

function linkStyle(active) {
  return active ? 'link-active' : 'link';
}

function Nav( {title} ) {

  return (

    <nav className='nav flex-sm-column float-start pt-4 sticky-top'>
      <h1 className='nav-title'>
        <NavLink to='/'>{title}</NavLink>
      </h1>
      <ul>
        {projSections.map(({ label, type }, index) => (
          <>
            <li className={index == 0 ? 'nav-separator':'nav-separator mt-2'}>
              <p><b>{label}</b></p>
            </li>
            {
              list.filter(({ category }) => category === type)
              .sort((a, b) => b.id - a.id )
              .map(({ navTitle, pathNav }, index) => (
                <li className='nav-item'
                  key={index}>
                  <NavLink to={pathNav}
                    className={({ isActive }) => linkStyle(isActive)}>
                    {navTitle}
                  </NavLink>
                </li>
              ))
            }
          </>
        ))}
        <li className='nav-separator mt-2'>
          <>- - -</>
        </li>
        <li className='nav-item'>
          <NavLink to='/about'
            className={({ isActive }) => linkStyle(isActive)}>
            About
          </NavLink>
        </li>
        <li className='nav-item'>
          <IconLinks onMobile={false}/>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
