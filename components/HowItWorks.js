import React from 'react';
import { useInView } from 'react-intersection-observer';
import GradientText from './GradientText4';
import GradientText5 from './GradientText5';
import GradientText_black from './GradientText_black';
import GradientText_passage from './GradientText_passage';

const How = () => {
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
          fontWeight: 'bold',
        }}
      >
        <GradientText_black

        text = "HOW IT WORKS."
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
        text = "MUSIQA takes your favorite song and analyzes it to extract 15 unique vector attributes. These attributes capture the essence of the song, including its melody, rhythm, and overall feel. By comparing these vectors with a vast database of songs, we can identify the 10 nearest tracks that share similar characteristics. This method ensures that the recommendations are not just based on genre or popularity, but on the specific qualities that make a song unique. Discover new music that truly resonates with your taste!"
        />
      </div>
    </div>
  );
};

export default How;
