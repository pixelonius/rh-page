import React from 'react';

const WaveBackground = () => {
  return (
    <div className="wave-container">
      <div className="wave"></div>
      <div 
        className="wave" 
        style={{ 
          animationDelay: '2s',
          opacity: 0.08 
        }}
      ></div>
      <div 
        className="wave" 
        style={{ 
          animationDelay: '4s',
          opacity: 0.06 
        }}
      ></div>
    </div>
  );
};

export default WaveBackground;