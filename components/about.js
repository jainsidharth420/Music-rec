import React from 'react';
import { useInView } from 'react-intersection-observer';
import GradientText from './GradientText4';
import GradientText_black from './GradientText_black';
import GradientText_passage from './GradientText_passage';

const AboutUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust this value to control when the animation starts
  });

  return (
    <div
      style={{
        backgroundColor: '#000000', // Black background
        color: '#FFFFFF', // White text
        // padding: '50px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      }}
    >
      <div
        style={{
          width: '20%',
          fontSize: '1.5em',
          paddingLeft:"50px",
          fontWeight: 'bold',
          //center
        }}
      >
      <GradientText_black
        text = " WHY."
        />
      </div>
      <div
        ref={ref}
        style={{
          width: '70%',
          height: '100%',
          padding: '10px',
          fontSize: '1.0em',
          lineHeight: '1.6',
          textAlign: 'left',
          paddingLeft:"50px",
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 1s ease-out, transform 1s ease-out',
        }}
      >
        <GradientText_passage
        text = "I was frustrated with the limited recommendations from YouTube and Spotify. The suggestions felt repetitive and often missed my evolving taste in music. That's why I started this project: to create a tool that would offer a more personalized music discovery experience. By integrating various sources and using advanced algorithms, this tool aims to provide fresh, tailored song recommendations based on what you actually enjoy. Say goodbye to the same old suggestions and find new tracks that truly match your taste!"
        />
      </div>
    </div>
  );
};

export default AboutUs;
