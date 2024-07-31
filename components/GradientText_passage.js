import React from 'react';

const GradientText_passage = ({ text }) => {
  const gradientStyle = {
    background: 'linear-gradient(to right, #808080, #FF8C00)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '1.2em',
    fontWeight: 'bold',
    padding: '10px',
    textAlign: 'center',
    display: 'inline-block', // Ensure gradient text behaves properly
  };

  return <p style={gradientStyle}>{text}</p>;
};

export default GradientText_passage;
