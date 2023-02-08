import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/nav.css';

import { pagesData as list } from '../../data.js';
import { SECTION } from '../../models/project.enum';

function linkStyle(active) {
  return active ? 'link-active' : 'link';
}

function NavMobile() {

  const [showMenu, setShowMenu] = useState(false);

  return (

    <div className='nav d-flex align-items-center justify-content-between sticky-top'>
      <h2 className='nav-title'>
        <NavLink to='/'>SERGIO LECUONA</NavLink>
      </h2>

      <button
        className="btn"
        type="button"
        data-bs-target="#offcanvasExample"
        data-bs-toggle="offcanvas"
        aria-controls="offcanvasExample"
        onClick={() => setShowMenu(true)}
      >
        <i className="bi bi-list"></i>
      </button>


      <div
        className={showMenu ? "offcanvas offcanvas-end show" : "offcanvas offcanvas-end"}
        id="offcanvaExample"
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
              onClick={() => setShowMenu(false)}
            ></button>
          </div>
        </div>

        <div className="offcanvas-body">
          <div className='container mt-3'>
            <ul className="navbar-nav justify-content-start">
              {list.filter(({ category }) => category === SECTION.SOUND_WORKS)
                .map(({ navTitle, pathNav }, index) => (
                  <li className='nav-item'
                    key={index}>
                    <NavLink to={pathNav}
                      className={({ isActive }) => linkStyle(isActive)}
                      onClick={() => setShowMenu(false)}>
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

export default NavMobile
