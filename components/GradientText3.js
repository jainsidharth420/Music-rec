import React from 'react';

const GradientText = ({ text }) => {
  const gradientStyle = {
    background: 'linear-gradient(to right, #FF4E50, #F9D423, #F9D423)', // Red to orange to yellow gradient
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
