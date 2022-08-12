import React, { useEffect, useState } from 'react';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkD } from 'react-router-dom'
import {FaBars, FaTimes } from 'react-icons/fa';
import './css/navbar.css';
import { IconContext } from 'react-icons/lib';
import WebFont from 'webfontloader';
import { FaBook, FaGithub } from 'react-icons/fa';

function Navbar() {
    const [click,setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    useEffect(() => {
	WebFont.load({
	  google: {
	    families: ['Raleway']
	  }
	});
       }, []);

    return (
	<>
	<IconContext.Provider value={{ color: '#fff' }}>
	    <div className="navbar" style={{fontFamily: 'Raleway'}} >
      <div className="navbar-container container">

		    <LinkS activeClass='active' to='home' smooth={true} offset={-200} duration={500} className="navbar-logo" onClick={closeMobileMenu}>

			<img src='images/cycoin.png' alt='logo' />cyberyen
      </LinkS>

		    <div className="menu-icon" onClick={handleClick}>
			{click ? <FaTimes /> : <FaBars />}
		    </div>
		    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
			<li className="nav-item">
			    <LinkS activeClass="active" to="home" smooth={true} offset={-200} duration={500} className="nav-links" onClick={closeMobileMenu}>
				HOME
			    </LinkS>
			</li>
			<li className="nav-item">
			    <LinkS activeClass="active" to="about" smooth={true} offset={-100} duration={500} className="nav-links" onClick={closeMobileMenu}>
				ABOUT
			    </LinkS>
			</li>
			<li className="nav-item">
			    <LinkS activeClass="active" to="wallet" smooth={true} offset={-100} duration={500} className="nav-links" onClick={closeMobileMenu}>
				WALLET
			    </LinkS>
			</li>
			<li className="nav-item">
			    <LinkD to={{ pathname: 'http://explorer.cyberyen.org' }} className="nav-links" target='_blank' onClick={closeMobileMenu}>
				EXPLORER
			    </LinkD>
			</li>

			<li className="nav-item">
      <LinkD
      className='nav-links'
      to={{ pathname: 'https://github.com/cyberyen' }}
      target='_blank'
      aria-label='GitHub'
      onClick={closeMobileMenu}>
      <FaGithub />
      </LinkD>
      </li>

      <li className="nav-item">
      <LinkD
      className='nav-links'
      to='/'
      target='_blank'
      aria-label='Documentation'
      onClick={closeMobileMenu}>
      <FaBook />
      </LinkD>
			</li>

		    </ul>
		</div>
	    </div>
	  </IconContext.Provider>
	</>
    )
}

export default Navbar
