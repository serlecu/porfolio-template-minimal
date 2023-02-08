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

    <div className='nav d-flex align-items-center justify-content-between sticky-top'>
      <h2 className='nav-title'>
        <NavLink to='/'>SERGIO LECUONA</NavLink>
      </h2>

      <button
        className="btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvas"
        aria-controls="offcanvas"
      >
        Menu
        {/* <i 
        className="bi bi-list"
        role="button"
        data-bs-toggle="mobileNav"
        href="#mobileNav"
        //data-bs-target="#mobileNav"
        ></i> */}
      </button>

      <div
        className="offcanvas offcanvas-end"
        id="offcanvas"
        tabIndex="-1"
        aria-labelledby="offcanvasLabel"
      >
        <div className="offcanvas-header ">
          <div className="container d-flex justify-content-between">
            <h2 className='nav-title'
              id="offcanvasLabel">
              SERGIO LECUONA
            </h2>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-start ">

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
        </div>
      </div>

      {/* <ul>
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
      </ul> */}
    </div>
  )
}

export default Nav
