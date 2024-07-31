import React from 'react';
import { useInView } from 'react-intersection-observer';
import GradientText from './GradientText4';
const Spotify = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust this value to control when the animation starts
  });

  return (
    <div
      style={{
        backgroundColor: '#000000', // Black background
        color: '#FFFFFF', // White text
        padding: '50px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      }}
    >
      <div
        style={{
          width: '22%',
          padding: '10px',
          fontSize: '1.5em',
          fontWeight: 'bold',
          color: "#1DB954"
        }}
      >
        Spotify connected Right In.
      </div>
      <div
        ref={ref}
        style={{
          width: '70%',
          height: '100%',
          padding: '10px',
          fontSize: '1.2em',
          lineHeight: '1.6',
          textAlign: 'left',
          paddingLeft:"40px",

          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 1s ease-out, transform 1s ease-out',
        }}
      >
                <GradientText

        text = "Login and connect with spotify. Play songs here, choose, decide and directly add Songs to your playlist, with one touch. OAUTH2.0 allows for no sharing of personal data. "
      />
        </div>
    </div>
  );
};

export default Spotify;
