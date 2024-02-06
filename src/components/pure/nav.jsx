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

    <nav className='nav flex-sm-column float-start pt-4 sticky-top'>
      <h1 className='nav-title'>
        <NavLink to='/'>*-*</NavLink>
      </h1>
      <ul>
        <li className='nav-separator'>
          <p><b>Roser Domingo</b></p>
        </li>
        {list.filter(({ category }) => category === SECTION.ROSER_WORKS)
          .sort((a, b) => b.id - a.id )
          .map(({ navTitle, pathNav }, index) => (
            <li className='nav-item'
              key={index}>
              <NavLink to={pathNav}
                className={({ isActive }) => linkStyle(isActive)}>
                {navTitle}
              </NavLink>
            </li>
          ))}
          <li className='nav-item'>
          <NavLink to='/cvroser'
            className={({ isActive }) => linkStyle(isActive)}>
            CV Roser
          </NavLink>
        </li>
        <li className='nav-separator mt-2'>
          <p><b>Jorge Dabaliña</b></p>
        </li>
        {list.filter(({ category }) => category === SECTION.JORGE_WORKS)
          .sort((a, b) => b.id - a.id )
          .map(({ navTitle, pathNav }, index) => (
            <li className='nav-item'
              key={index}>
              <NavLink to={pathNav}
                className={({ isActive }) => linkStyle(isActive)}>
                {navTitle}
              </NavLink>
            </li>
          ))}
           <li className='nav-item'>
          <NavLink to='/cvjorge'
            className={({ isActive }) => linkStyle(isActive)}>
            CV Jorge
          </NavLink>
        </li>
        <li className='nav-separator mt-2'>
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
