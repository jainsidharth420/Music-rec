import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Function to check URL hash
    const checkLoginStatus = () => {
      const hash = window.location.hash;
      if (hash && hash.includes('access_token')) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    // Check login status on component mount and URL change
    checkLoginStatus();
    window.addEventListener('hashchange', checkLoginStatus);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('hashchange', checkLoginStatus);
  }, []);

  const handleSpotifyLogin = () => {
    const spotifyAuthURL = 'https://accounts.spotify.com/authorize?client_id=fa8a19adef7c413fba13a370966646c0&response_type=token&redirect_uri=http://localhost:3000/&scope=user-read-private%20user-read-email';
    window.location.href = spotifyAuthURL;
  };

  return (
    <nav style={navbarStyle}>
      <div style={containerStyle}>
        <Link href="/" style={linkStyle}>Search</Link>
        <Link href="/" style={linkStyle}>Home</Link>
        <Link href="/about" style={linkStyle}>About</Link>
        <Link href="/contact" style={linkStyle}>Contact</Link>
        {isLoggedIn ? (
          <span style={{welcomeStyle, color: "#1DB954"}}> Logged In  </span>
        ) : (
          <button onClick={handleSpotifyLogin} style={spotifyButtonStyle}>
            Login with Spotify
          </button>
        )}
      </div>
    </nav>
  );
};

const navbarStyle = {
  backgroundColor: '#333',
  padding: '10px 0',
  color: 'white',
  width: '100%',
  height: '58px',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1000, // Ensure it's on top of other elements
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
  width: '100%',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  padding: '0 20px',
  fontSize: '16px',
};

const spotifyButtonStyle = {
  color: '#1DB954',
  backgroundColor: 'white',
  border: 'none',
  borderRadius: '25px',
  padding: '10px 20px',
  fontSize: '16px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  margin: '0 10px',
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
};

const welcomeStyle = {
  color: 'white',
  padding: '0 20px',
  fontSize: '16px',
  fontWeight: 'bold',
};

export default Navbar;
