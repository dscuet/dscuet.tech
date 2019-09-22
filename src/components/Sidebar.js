import React, { useState } from 'react';
import Nav from './Nav';
import { Link } from 'gatsby';
import pic17 from '../assets/images/pic17.png';
import "../assets/css/sidebar.css"


export default function SideBar({ fullMenu }) {
  const [headerOpen, toggleHeader] = useState(false);
  return (
    <>
      <header id="header" className={`${fullMenu ? '' : 'alt'}`}>
        <h1>
          <Link to="/"><img src={pic17} width="25%" alt=""/></Link>
        </h1>

        <nav style={{marginTop: '10px'}}>
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              toggleHeader(!headerOpen);
            }}
            className="menuToggle"
          >
            <span>Menu</span>
          </a>
        </nav>
      </header>
      <div className={`${headerOpen ? 'is-menu-visible' : ' '}`}>
        <Nav onMenuToggle={() => toggleHeader(!headerOpen)} />
      </div>
    </>
  );
}
