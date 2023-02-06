import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/nav.css';

import { pagesData as list } from '../../data.js';
import { SECTION } from '../../models/project.enum';

function linkStyle(active) {
  return active ? 'link-active' : 'link';
}

function Nav() {

  return (

    <nav className='nav flex-sm-column float-start sticky-top'>
      <h1 className='nav-title'>
        <NavLink to='/'>SERGIO LECUONA</NavLink>
      </h1>
      <ul>
        {list.filter(({ category }) => category === SECTION.SOUND_WORKS)
          .map(({ navTitle, pathNav }, index) => (
            <li className='nav-item'
              key={index}>
              <NavLink to={pathNav}
                className={({ isActive }) => linkStyle(isActive)}>
                {navTitle}
              </NavLink>
            </li>
          ))}
        <li className='nav-separator'>
          <>- - -</>
        </li>
        {list.filter(({ category }) => category === SECTION.SILENT_WORKS)
          .map(({ navTitle, pathNav }, index) => (
            <li className='nav-item'
              key={index}>
              <NavLink to={pathNav}
                className={({ isActive }) => linkStyle(isActive)}>
                {navTitle}
              </NavLink>
            </li>
          ))}
        <li className='nav-separator'>
          <>- - -</>
        </li>
        <li className='nav-item'>
          <NavLink to='/about'
            className={({ isActive }) => linkStyle(isActive)}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
