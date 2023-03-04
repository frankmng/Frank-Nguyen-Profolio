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
          <a href="/" >
            <span>01</span>Home
          </a>
        </li>
        <li>     
          <a href="/about" >
            <span>02</span>About
          </a>
        </li>
        <li>     
          <a href="/portfolio" >
            <span>03</span>Portfolio
          </a>
        </li>
        <li>     
          <a href="/contact" >
            <span>04</span>Contact
          </a>
        </li>
      </ul>
    </div>
</nav> 
  );
}

export default Header;