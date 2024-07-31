import React from 'react';

const GradientText_black = ({ text }) => {
    const gradientStyle = {
        background: 'linear-gradient(145deg, #FFFFFF, #444444, #FFFFFF)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: '1.2em',
        fontWeight: 'bold',
        textAlign: 'center',
        display: 'inline-block', // Ensure gradient text behaves properly
      };

  return <p style={gradientStyle}>{text}</p>;
};

export default GradientText_black;
