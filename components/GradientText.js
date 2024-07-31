import React from 'react';

const GradientText = ({ text }) => {
  const gradientStyle = {
    background: 'linear-gradient(to right, #30CFD0, #FF69B4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '1.2em',
    fontWeight: 'bold',
    textAlign: 'center',
    display: 'inline-block', // Ensure gradient text behaves properly
  };

  return <p style={gradientStyle}>{text}</p>;
};

export default GradientText;
