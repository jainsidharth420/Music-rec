import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import Font Awesome icons

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={socialsStyle}>
          <a href="https://facebook.com" style={socialLinkStyle} target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" style={socialLinkStyle} target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" style={socialLinkStyle} target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
          {/* Add more social links with icons as needed */}
        </div>
        <div style={copyrightStyle}>
          &copy; {new Date().getFullYear()} MUSIQA. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '10px 0',
  textAlign: 'center',
  position: 'relative',
  bottom: 0,
  width: '100%',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
};

const socialsStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginBottom: '10px',
};

const socialLinkStyle = {
  color: 'white',
  textDecoration: 'none',
};

const copyrightStyle = {
  fontSize: '14px',
};

export default Footer;
