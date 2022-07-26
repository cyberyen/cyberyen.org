import React from 'react';
import './css/footer.css';
import { Link } from 'react-router-dom';
import {
  FaEnvelope,
  FaDiscord,
  FaTwitter,
  FaGithub
} from 'react-icons/fa';

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
	      to={{ pathname: '/' }}
	      target='_blank'
	      aria-label='Discord'
	    >
	      <FaDiscord />
	    </Link>
	    <Link
	      className='social-icon-link'
	      to={{ pathname: '/' }}
	      target='_blank'
	      aria-label='Twitter'
	    >
	      <FaTwitter />
	    </Link>
	    <Link
	      className='social-icon-link'
	      to={{ pathname: 'https://github.com/cyberyen' }}
	      target='_blank'
	      aria-label='GitHub'
	    >
	      <FaGithub />
	    </Link>
	  </div>
	</div>
      </section>
    </div>
  );
}

export default Footer;
