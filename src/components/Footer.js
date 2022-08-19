import React from 'react';
import './css/footer.css';
import { Link } from 'react-router-dom';
import {
  FaEnvelope,
  FaGithub,
  FaBook
} from 'react-icons/fa';
import { SiMatrix } from 'react-icons/si';

function Footer() {
  return (
    <div className='footer-container'>

      <section className='social-media'>
	<div className='social-media-wrap'>

	  <small className='website-rights'>&copy; {new Date().getFullYear()} Cyberyen network</small>
	  <div className='social-icons'>

	    <Link
	      className='social-icon-link'
	      onClick={() => window.location = 'mailto:contact@cyberyen.org'}
	      target='_blank'
	      aria-label='Mail'
	    >
	      <FaEnvelope />
	    </Link>
	    <Link
	      className='social-icon-link'
	      to={{ pathname: 'https://matrix.to/#/cyberyen:matrix.org' }}
	      target='_blank'
	      aria-label='Matrix'
	    >
	      <SiMatrix />
	    </Link>
	    <Link
	      className='social-icon-link'
	      to={{ pathname: 'https://github.com/cyberyen' }}
	      target='_blank'
	      aria-label='GitHub'
	    >
	      <FaGithub />
	    </Link>
	    <Link
	      className='social-icon-link'
	      to={{ pathname: 'https://github.com/cyberyen/cyberyen/wiki'}}
	      target='_blank'
	      aria-label='Documentation'
	    >
	      <FaBook />
	    </Link>
	   </div>
	</div>
      </section>
    </div>
  );
}

export default Footer;
