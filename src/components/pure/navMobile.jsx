import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/nav.css';

import { navProjecSectionsList as projSections } from '../../data.js';
import { pagesData as list } from '../../data.js';
// import { SECTION } from '../../models/project.enum';
import IconLinks from './iconLinks.jsx';

function linkStyle(active) {
  return active ? 'link-active' : 'link';
}

function NavMobile( {title} ) {

  const [showMenu, setShowMenu] = useState(false);

  return (

    <div className='nav d-flex align-items-center justify-content-between'>
      <h2 className='nav-title'>
        <NavLink to='/'>{title}</NavLink>
      </h2>

      <button
        className="btn pe-0"
        type="button"
        data-bs-target="#offcanvasExample"
        data-bs-toggle="offcanvas"
        aria-controls="offcanvasExample"
        onClick={() => setShowMenu(true)}
      >
        <i className="bi bi-list" style={{ fontSize: "1.5rem"}}></i>
      </button>


      <div
        className={showMenu ? "offcanvas offcanvas-end py-2 show" : "offcanvas offcanvas-end py-2"}
        id="offcanvaExample"
        tabIndex="-1"
        aria-labelledby="offcanvasLabel"
      >
        <div className="offcanvas-header ">
          <div className="container d-flex align-items-center justify-content-between">
            <h2 className='nav-title'
              id="offcanvasLabel"
              onClick={() => setShowMenu(false)}>
              <NavLink to='/'>{title}</NavLink>
            </h2>
            <button
              className="btn pe-0"
              type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={() => setShowMenu(false)}
            >
              <i className="bi bi-x-lg" style={{ fontSize: "1.5rem"}}></i>
            </button>
          </div>
        </div>

        <div className="offcanvas-body">
          <div className='container mt-3'>
            <ul className="navbar-nav justify-content-start">
              {projSections.map(({ label, type }, index) => (
                <>
                  <li className={index == 0 ? 'nav-group-title':'nav-separator mt-2'}>
                    <p><b>{label}</b></p>
                  </li>
                  {
                    list.filter(({ category }) => category === type)
                    .sort((a, b) => b.id - a.id )
                    .map(({ navTitle, pathNav }, index) => (
                      <li className='nav-item'
                        key={index}>
                        <NavLink to={pathNav}
                          className={({ isActive }) => linkStyle(isActive)}
                          onClick={() => setShowMenu(false)}>
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
                  className={({ isActive }) => linkStyle(isActive)}
                  onClick={() => setShowMenu(false)}>
                  About
                </NavLink>
              </li>
              <li className='nav-item mt-2'>
                <IconLinks onMobile={true}/>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default NavMobile
