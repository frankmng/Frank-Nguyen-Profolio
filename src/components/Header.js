import React from 'react';
import '../styles/Navbar.css';
import {  NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt } from '@fortawesome/free-solid-svg-icons'


const Header = () => {

  let activeLink = {
    textDecoration: "underline"
  }

  return (
    <nav className="header">
    <div className="header_inner">
      <h1 className="logo">
        <a href="/">Frank Nguyen <FontAwesomeIcon icon={faBolt} className="bolt-icon" /></a>
      </h1>
      <ul className="main-nav">
        <li>     
          <NavLink 
            to="/"
            style={({ isActive }) => isActive ? activeLink : undefined }>
              <span>01</span>Home 
          </NavLink>
        </li>
        <li>     
          <NavLink 
            to="/about"
            style={({ isActive }) => isActive ? activeLink : undefined }>
              <span>02</span>About
          </NavLink>
        </li>
        <li>     
          <NavLink 
            to="/portfolio"
            style={({ isActive }) => isActive ? activeLink : undefined }>
              <span>03</span>Portfolio
          </NavLink>
        </li>
                  <li>     
          <NavLink 
            to="/contact"
            style={({ isActive }) => isActive ? activeLink : undefined }>
              <span>04</span>Contact
          </NavLink>
        </li>
      </ul>
    </div>
</nav> 
  );
}

export default Header;