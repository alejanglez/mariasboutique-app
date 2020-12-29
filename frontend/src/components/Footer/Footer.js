import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src="https://res.cloudinary.com/dylut4r4t/image/upload/v1609279083/react-images/Untitled_design_ox1t8i.png" alt="3dLogo"/>
            </Link>
          </div>
          <small className='website-rights'>Maria's Boutique© 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='https://www.facebook.com/Marias-Boutique-1961138343971954'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;